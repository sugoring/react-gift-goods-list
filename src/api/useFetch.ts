
import axios from 'axios';
import { useEffect, useState } from 'react';

import axiosInstance from '@/api/axiosInstance';

type FetchState<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

const getErrorMessage = (status: number): string => {
  switch (status) {
    case 200:
      return '200 - OK';
    case 201:
      return '201 - Created';
    case 302:
      return '302 - Found';
    case 304:
      return '304 - Not Modified';
    case 401:
      return '401 - Unauthorized';
    case 404:
      return '404 - Not Found';
    case 500:
      return '500 - Internal Server Error';
    case 503:
      return '503 - Service Unavailable';
    default:
      return 'Unknown error';
  }
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
        if (axios.isAxiosError(err) && err.response) {
          setError(getErrorMessage(err.response.status));
        } else {
          setError('데이터를 가져오는 중 오류가 발생했습니다.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, params]);

  return { data, isLoading, error };
};
