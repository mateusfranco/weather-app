import { useCallback, useEffect, useState } from 'react';
import { getWeather } from '../requests/getWeather';

export const useGetWeather = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const execute = useCallback(async (data) => {
    try {
      setLoading(true);
      const response = await getWeather(data);
      setData(response.data);
      setError(false);
      return response;
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
      console.log(loading);
    }
  }, [])

  useEffect(() => {
    execute()
  }, [])

  return { data, error, loading, execute }
};