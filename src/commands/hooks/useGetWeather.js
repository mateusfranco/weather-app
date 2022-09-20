import { useCallback, useEffect, useState } from 'react';
import { getWeather } from '../requests/getWeather';

const MAX_REFETCH = 3;

export const useGetWeather = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countRefetch, setCountRefetch] = useState(0);

  const execute = useCallback(async (data) => {
    try {
      setLoading(true);
      const response = await getWeather(data);
      setData(response.data);
      setError(false);
      return response;
    } catch (error) {
      if (countRefetch < MAX_REFETCH) {
        setLoading(false);
        setError(false);
        setData(undefined);
        setCountRefetch(countRefetch + 1);
      } else {
        setError(true);
      }
    } finally {
      setLoading(false);
      console.log(loading);
    }
  }, []);

  useEffect(() => {
    execute();
  }, []);

  useEffect(() => {
    execute();
  }, [countRefetch]);

  return { data, error, loading, execute }
};