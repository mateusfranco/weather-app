import { axiosInstance } from './base';

export const getWeather = async ({ latitude, longitude }) => await axiosInstance.get('/weather', {
  params: {
    lat: latitude,
    lon: longitude,
  }
});