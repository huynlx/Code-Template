interface CustomWindow extends Window {
  token?: string; // Define the token property
}

// Cast window to the custom interface
const customWindow = window as CustomWindow;

export const KEYS = {
  AUTHENTICATED: 'token'
};

/**
 * Get storage
 *
 * @param {String} key
 * @returns {*}
 */
export const _get = (key: string) => {
  if (typeof window === 'undefined') {
    return;
  }

  const value: any = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
};

/**
 * Set storage
 * @param {String} key
 * @param {*} value
 */
const _set = (key: string, value: any) => {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

/**
 * Remove storage
 *
 * @param {String} key
 */
const _remove = (key: string) => {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.removeItem(key);
};

/**
 * Remove multi storage
 *
 * @param {Array} list
 */
const _removeMultiple = (list: any) => {
  list.forEach((key: string) => {
    _remove(key);
  });
};

export default {
  set(key: string, value: any) {
    _set(key, value);
  },

  get(key: string) {
    return _get(key);
  },

  /**
   * Get token
   * @returns {String}
   */
  getToken() {
    let token = _get(KEYS.AUTHENTICATED);
    if (token) {
      token = token.replaceAll(KEYS.AUTHENTICATED, '');
    }

    return token || '';
  },

  /**
   * Set token to storage
   * @param {*} value
   */
  setToken(value: any) {
    customWindow.token = value;
    _set(KEYS.AUTHENTICATED, KEYS.AUTHENTICATED + value + KEYS.AUTHENTICATED);
  },

  remove(key: string) {
    _remove(key);
  },

  /**
   * Remove all
   */
  destroy() {
    console.info('============= Clear all storage =============');
    _removeMultiple([KEYS.AUTHENTICATED]);
  }
};

export const setStorageByName = (key: string, value: any) => {
  _set(key, value);
};

export const getAuthenticated = () => {
  return _get(KEYS.AUTHENTICATED);
};

export const setAuthenticated = (value: any) => {
  _set(KEYS.AUTHENTICATED, value);
};

export const clearAccessToken = () => {
  _remove(KEYS.AUTHENTICATED);
};
