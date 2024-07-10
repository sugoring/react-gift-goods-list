import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { fetchThemeProduct } from '@/api/themeApi';
import { getCurrentTheme, HeroSection } from '@/components/features/Theme/HeroSection';
import { ProductSection } from '@/components/features/Theme/ProductSection';
import { RouterPath } from '@/routes/path';
import type { ThemeData } from '@/types';

export const ThemePage = () => {
  const { themeKey = '' } = useParams<{ themeKey: string }>();
  const [currentTheme, setCurrentTheme] = useState<ThemeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const theme = await fetchThemeProduct(themeKey);
        setCurrentTheme(theme);
      } catch (error) {
        setCurrentTheme(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTheme();
  }, [themeKey]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentTheme) {
    return <Navigate to={RouterPath.notFound} />;
  }

  return (
    <>
      <HeroSection themeKey={themeKey} />
      <ProductSection themeKey={themeKey} />
    </>
  );
};
