
import { ACCESS_TOKEN } from '@/constants/Storage';
import storage from '@/utils/storage';
import axios from 'axios';

const { getItem, location, removeAll } = storage();
const axiosClient = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (param: unknown) => JSON.stringify(param),
});
axiosClient.interceptors.request.use(
  function (config) {
    const accessToken = getItem(ACCESS_TOKEN);
    config.headers = { Authorization: `Bearer ${accessToken}` };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async function (error) {
    const originalConfig = error.config;
    if (originalConfig.url !== '/login' && error.response) {
      if (error.response.status === 401) {
        if (originalConfig.retry) {
          removeAll();
          return location('/login');
        }
        // const refreshToken = getItem(REFRESH_TOKEN);
        // if (!refreshToken) {
        //   removeAll();
        //   return location('/login');
        // }
        // try {
        //   originalConfig.retry = true;
        //   // eslint-disable-next-line
        //   const res: any = await axiosClient.post(`auth/refresh-tokens`, {
        //     refreshToken: getItem(REFRESH_TOKEN),
        //   });
        //   setItem(ACCESS_TOKEN, res.tokens.access.token);
        //   setItem(REFRESH_TOKEN, res.tokens.refresh.token);
        //   setItem(USER, JSON.stringify(res.user));
        //   return axiosClient(originalConfig);
        // } catch (_error) {
        //   return Promise.reject(_error);
        // }
      }
    }

    if (error.message === 'Network Error' && error.response) {
      alert('Please check your internet connection and try again');
    }
    return Promise.reject(error);
  }
);

export default axiosClient;