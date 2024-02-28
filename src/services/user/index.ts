import moment from 'moment';
import { clearAccessToken, setAuthenticated } from 'src/common/localStorage';
import { AXIOS_REQUEST_METHOD } from 'src/constants/api';
import axiosClient, { ResponseStatusCode } from 'src/services';

const getAuthenticator = async () => {
  const response = await axiosClient({
    method: AXIOS_REQUEST_METHOD.POST,
    url: ``
  });
  return response;
};

/**
 * Handle refresh token
 * @param {string}
 * @returns {string} return token when functions call success
 */
export const HandleRefreshToken = async () => {
  try {
    const res = await UserService.getAuthenticator();
    if (res.status === ResponseStatusCode.HTTP_OK) {
      setAuthenticated(res);
      return `Bearer ${res.data.access_token}`;
    } else {
      console.log('handle exprire');
      handleExpire();
    }
  } catch (error) {
    handleExpire();
  }
};

export const handleExpire = () => {
  clearAccessToken();
  window.location.href = '/sign-in';
};

const isTokenExpired = () => {
  // TODO:
  const expiredTimeToken = '';
  if (expiredTimeToken) {
    return moment(expiredTimeToken).diff(moment(), 'seconds') < 0;
  }
  return true;
};

const UserService = {
  getAuthenticator,
  HandleRefreshToken,
  isTokenExpired
};

export default UserService;
