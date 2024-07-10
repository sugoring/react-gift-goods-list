import axiosInstance from '@/api/axiosInstance';
import type { ThemeGoodsResponse } from '@/types';

export const fetchThemeGoods = async (themeKey: string): Promise<ThemeGoodsResponse> => {
  const response = await axiosInstance.get(`/api/v1/themes/${themeKey}/products`);
  return response.data;
};
