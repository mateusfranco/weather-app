import { useCallback, useEffect, useState } from 'react';
import { getWeather } from '../requests/getWeather';

export const useGetWeather = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const execute = useCallback(async (data) => {
    try {
      setLoading(true);
      const response = await getWeather(data);
      setError(false);
      setData(response);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    execute()
  }, [])

  return { data, error, loading, execute }
};