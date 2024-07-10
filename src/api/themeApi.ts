import axiosInstance from '@/api/axiosInstance';
import type { ThemeData,ThemeProductResponse  } from '@/types';

export const fetchThemeProduct = async (themeKey: string): Promise<ThemeProductResponse> => {
  const response = await axiosInstance.get(`/api/v1/themes/${themeKey}/products`);
  return response.data;
};

export const fetchThemes = async (): Promise<ThemeData[]> => {
  const response = await axiosInstance.get('/api/v1/themes');
  return response.data.themes;
};