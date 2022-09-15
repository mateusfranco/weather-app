import { useGetWeather } from '../../commands/hooks/useGetWeather';
import { useLocation } from '../../hooks/useLocation';
import { useEffect, useState } from 'react';

export const useScreen = () => {
  const weatherRequest = useGetWeather();
  const locationRequest = useLocation();
  const [globalLoading, setGlobalLoading] = useState(true);

  useEffect(() => {
    locationRequest.execute();
  }, []);

  useEffect(() => {
    if (!locationRequest.loading && !locationRequest.error && locationRequest.data) {
      console.log({ latitude: locationRequest.data.coords.latitude, longitude: locationRequest.data.coords.longitude });
      weatherRequest.execute({ latitude: locationRequest.data.coords.latitude, longitude: locationRequest.data.coords.longitude });
    }
  }, [locationRequest.data, locationRequest.loading, locationRequest.error]);

  useEffect(() => {
    if ([
      weatherRequest.error,
      weatherRequest.loading,
      locationRequest.loading,
      locationRequest.error,
    ].includes(true)) {
      setGlobalLoading(true);
    }
    console.log(locationRequest.data, weatherRequest.data);
    if (locationRequest.data && weatherRequest.data) {
      setGlobalLoading(false);
    } else {
      setGlobalLoading(true);
    }
  }, [locationRequest.data,
  locationRequest.loading,
  locationRequest.error,
  weatherRequest.data,
  weatherRequest.error,
  weatherRequest.loading,
  ])

  return {
    weatherRequest,
    locationRequest,
    globalLoading
  }
}