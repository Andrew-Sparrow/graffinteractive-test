import axios from 'axios';

const BACKEND_URL = 'https://api.spacexdata.com/v4/';

const REQUEST_TIMEOUT = 5000;


export const getAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = () => {};

  axiosInstance.interceptors.response.use(onSuccess, onFail);

  return axiosInstance;
};
