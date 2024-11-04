import axios from 'axios';
import { AppRoute, BackendUrl } from '~/constants/constants';
import { HTTPCode } from '~/constants/constants';

const axiosInstance = axios.create({
  baseURL: BackendUrl,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === HTTPCode.UNAUTHORIZED) {

      localStorage.removeItem('token');
      window.location.replace(AppRoute.LOGIN);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
