import axios from 'axios';
import UserService, { HandleRefreshToken, handleExpire } from './user';
import { getAuthenticated } from 'src/common/localStorage';
import { RESPONSE_STATUS_AUTHOR } from 'src/constants/api';

// timeout in 3 minutes
const TIMEOUT_REQUEST_SERVER = 60 * 3000;
const TIMEOUT_REQUEST_MESSAGE = 'TIMEOUT_LIMITED';

const axiosClient = axios.create({
  headers: { 'content-type': 'application/json' },
  timeout: TIMEOUT_REQUEST_SERVER,
  timeoutErrorMessage: TIMEOUT_REQUEST_MESSAGE,
  withCredentials: false
});

axiosClient.interceptors.request.use(
  async (config: any) => {
    const authenticated = getAuthenticated();
    if (!!authenticated && !UserService.isTokenExpired()) {
      config.headers.Authorization = `Bearer ${authenticated.access_token}`;
      return config;
    }
    // compare RBM date => rf token
    if (!!authenticated && UserService.isTokenExpired()) {
      config.headers.Authorization = await HandleRefreshToken();
      return config;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response: any) => {
    if (response && response.data) {
      return response.data;
    }

    return Promise.resolve(response);
  },
  (error) => {
    if (error.message === TIMEOUT_REQUEST_MESSAGE || error.message === 'Network Error') {
      return error.message;
    }
    if (error && error.response) {
      switch (error.response.status) {
        case RESPONSE_STATUS_AUTHOR.UNAUTHORIZED:
          handleExpire();
          break;
        case RESPONSE_STATUS_AUTHOR.FORBIDDEN:
          // ...something
          break;
        default:
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
