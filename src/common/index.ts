import _get from 'lodash/get';

/**
 * Get value with key in object
 * @param {object} data other object
 * @param {string} key key of param in object data
 * @param {*} defaultValue value default
 * @returns {*}
 */
export const getValueInObject = (data: any, key: string, defaultValue: any = {}) => {
  return _get(data, key, defaultValue);
};
