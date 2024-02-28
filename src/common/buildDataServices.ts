// constants
import { RESPONSE_STATUS_CODE_PASSED } from 'src/constants/api';

// common
import { getValueInObject } from 'src/common';

/**
 * Build success response, insert the successfulData
 * @function
 * @param {Object} response axios success response
 */
export const buildResponseSuccess = (response: any) => ({
  ...response,
  successfulData: getValueInObject(response, 'data', {})
});

/**
 * Build error response, insert the error data
 * @function
 * @param {Object} response axios error response
 */
export const buildResponseError = (response: any) => ({
  ...response,
  error: {
    key: getValueInObject(response, 'title', null),
    items: getValueInObject(response, 'errors', {})
  }
});

export const isResponseSuccess = (status: number) => RESPONSE_STATUS_CODE_PASSED.includes(status);
