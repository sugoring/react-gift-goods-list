import axiosInstance from '@/api/axiosInstance';
import type { ProductData,RankingFilterOption } from '@/types';

export const fetchRankingProducts = async (filterOption: RankingFilterOption): Promise<ProductData[]> => {
  const response = await axiosInstance.get('/api/v1/ranking/products', {
    params: {
      targetType: filterOption.targetType,
      rankType: filterOption.rankType,
    },
  });
  return response.data.products;
};
