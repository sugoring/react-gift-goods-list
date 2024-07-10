
import type { ThemeProductsResponse } from '@/types';

import axiosInstance from './axiosInstance';

export const fetchThemeProducts = async (themeKey: string): Promise<ThemeProductsResponse> => {
  const response = await axiosInstance.get(`/api/v1/themes/${themeKey}/products`);
  return response.data;
};
