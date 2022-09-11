import axios from 'axios';
import { API_KEY } from "@env"

export const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    appid: API_KEY,
    units: 'metric'
  }
});

'Content-Type: application/json; charset=utf-8'