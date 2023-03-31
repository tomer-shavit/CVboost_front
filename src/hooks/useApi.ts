import { useState, useEffect } from 'react';
import { GptApiResponse } from '@/types/api_calls';

type ApiError = {
  message: string;
};

type UseApiResult = {
  data: GptApiResponse | null;
  isLoading: boolean;
  error: ApiError | null;
};

type UseApiHook = (url: string, file?: File, fileName?:string) => UseApiResult;

const useApi: UseApiHook = (url, file, fileName) => {
  const [data, setData] = useState<GptApiResponse | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ApiError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const formData = new FormData();
        if (file) {
          formData.append(fileName ? fileName : "default_name", file);
        }
        const response = await fetch(url, {
          method: 'POST',
          body: formData,
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error as ApiError);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, file, fileName]);

  return { data, isLoading, error };
};

export default useApi;
