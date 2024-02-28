import _get from 'lodash/get';

export const INITIAL_BLANK_REQUEST = { errors: undefined, loading: false };
export const INITIAL_PLAIN_DATA_REQUEST = {
  data: undefined,
  ...INITIAL_BLANK_REQUEST
};

/**
 * @function
 * @param {*} response
 */
export const buildResponseError = (response: any) => {
  return {
    ...response,
    error: {
      key: _get(response, 'error', null),
      items: _get(response, 'data', {})
    }
  };
};

/**
 * @function
 * @param {*} response
 */
export const buildResponseSuccess = (response: any) => {
  return {
    ...response,
    successfulData: _get(response, 'data', {})
  };
};
