import { useQuery } from 'react-query';
import { Navigate, useParams } from 'react-router-dom';

import axiosInstance from '@/api/axiosInstance';
import { Loading } from '@/api/Loading';
import { HeroSection } from '@/components/features/Theme/HeroSection';
import { ProductSection } from '@/components/features/Theme/ProductSection';
import { RouterPath } from '@/routes/path';
import type { ThemeData } from '@/types';

const fetchThemes = async () => {
  const response = await axiosInstance.get('/api/v1/themes');
  return response.data.themes;
};

export const ThemePage = () => {
  const { themeKey = '' } = useParams<{ themeKey: string }>();

  const { data: themes, isLoading, error } = useQuery<ThemeData[]>('themes', fetchThemes);

  if (isLoading) {
    return <Loading />;
  }

  if (error || !themes) {
    return <Navigate to={RouterPath.home} />;
  }

  const currentTheme = themes.find((theme) => theme.key === themeKey);

  if (!currentTheme) {
    return <Navigate to={RouterPath.home} />;
  }

  return (
    <>
      <HeroSection themeKey={themeKey} />
      <ProductSection themeKey={themeKey} />
    </>
  );
};
