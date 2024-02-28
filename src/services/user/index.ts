import moment from 'moment';
import { clearAccessToken, setAuthenticated } from 'src/common/localStorage';
import { AXIOS_REQUEST_METHOD, RESPONSE_STATUS_CODE_PASSED } from 'src/constants/api';
import axiosClient from 'src/services';

/**
 * Asynchronous function to retrieve the authenticator.
 *
 * @return {Promise} the response from the axios client
 */
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
    if (RESPONSE_STATUS_CODE_PASSED.includes(res.status)) {
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

/**
 * Function to handle expiration by clearing access token and redirecting to sign-in page.
 *
 * @param {} - No parameters
 * @return {} - No return value
 */
export const handleExpire = () => {
  clearAccessToken();
  window.location.href = '/sign-in';
};

/**
 * Checks if the token is expired.
 *
 * @return {boolean} True if the token is expired, false otherwise.
 */
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
