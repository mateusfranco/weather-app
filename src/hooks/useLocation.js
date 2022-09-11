import { useCallback, useEffect, useState } from 'react';
import * as Location from 'expo-location';

export const useLocation = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const execute = useCallback(async () => {
    try {
      setLoading(true);
      const permission = await Location.requestForegroundPermissionsAsync();
      const location = await Location.getCurrentPositionAsync({});
      setError(false);
      setData(location);
      return location;
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    execute()
  }, [])

  return { data, error, loading, execute }
};