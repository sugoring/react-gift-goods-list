import { Navigate, useParams } from 'react-router-dom';

import { getCurrentTheme, ThemeHeroSection } from '@/components/features/Theme/ThemeHeroSection';
import { ThemeProductSection } from '@/components/features/Theme/ThemeProductSection';
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
      <ThemeHeroSection themeKey={themeKey} />
      <ThemeProductSection themeKey={themeKey} />
    </>
  );
};
