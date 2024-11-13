import axios from 'axios';
import { BackendUrl } from '~/constants/constants';

const axiosInstance = axios.create({
  baseURL: BackendUrl,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    let token: string | null = null;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token');
    }
    if (token) {
      
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
