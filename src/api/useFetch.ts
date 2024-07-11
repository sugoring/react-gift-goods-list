import { useEffect,useState } from 'react';

import axiosInstance from '@/api/axiosInstance';

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

export const useFetch = <T>(url: string, params?: object): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(url, { params });
        setData(response.data);
      } catch (err) {
        setError('데이터를 가져오는 중 오류가 발생했습니다.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, params]);

  return { data, isLoading, error };
};
