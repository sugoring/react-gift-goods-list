import { Navigate, useParams } from 'react-router-dom';

import { HeroSection } from '@/components/features/Theme/HeroSection';
import { ProductSection } from '@/components/features/Theme/ProductSection';
import { RouterPath } from '@/routes/path';
import { ThemeMockList } from '@/types/mock';

export const ThemePage = () => {
  const { themeKey = '' } = useParams<{ themeKey: string }>();
  const currentTheme = getCurrentTheme(themeKey, ThemeMockList);

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
