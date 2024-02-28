import { useState, useCallback } from 'react';

// hooks
import useWhyDidUpdate from 'src/hooks/useWhyDidUpdate';

// common
import {
  isResponseSuccess,
  buildResponseSuccess,
  buildResponseError
} from 'src/common/buildDataServices';

const isValidService = (s: any) => {
  return typeof s === 'number' || typeof s === 'string';
};

type Options = {
  onSuccess?: (...response: any) => any;
  onError?: (...error: any) => any;
};

/**
 * Super hook - Asynchronous handling
 * @author Lê Tiên Đế
 * @param {} service
 * @param {*} options
 * @param {*} deps
 */
const useAsync = <T = any>(
  service: (...arg: any) => Promise<T>,
  options: Options = {},
  deps?: any
) => {
  if (typeof service === 'undefined') {
    throw new Error('service is required.');
  }

  if (isValidService(service)) {
    throw new Error('service is promise.');
  }

  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const reset = useCallback(() => {
    setTimeout(setLoading, 1000, false);
    return setData(undefined);
  }, []);

  useWhyDidUpdate(
    () => {
      options ? (options.onSuccess ? options?.onSuccess(data) : null) : null;
    },
    {
      deps
    }
  );

  const runService = useCallback(
    async (...arg: any) => {
      setLoading(true);

      try {
        const response: any = await service(...arg);

        if (isResponseSuccess(response.status) || response.done) {
          // build success
          const rsSuccess = buildResponseSuccess(response);
          setData(rsSuccess);

          if (options.onSuccess) {
            options.onSuccess(rsSuccess, ...arg);
          }
          setLoading(false);
          return response;
        }

        if (options.onError) {
          // build error
          const errors = buildResponseError(response);

          options.onError({ errors });
          return reset();
        }

        return reset();
      } catch (error: any) {
        if (options.onError) {
          if (typeof error.response !== 'undefined' && typeof error.response === 'object') {
            const { data, ...rest } = error.response;

            options.onError({
              status: data.status,
              errors: data.errors,
              msg: data.title,
              ...data,
              ...rest
            });

            return reset();
          }

          options.onError(error);
          return reset();
        }
      }
    },
    [service, setData, setLoading, reset, options]
  );

  return {
    run: runService,
    data,
    loading,
    reset
  };
};

export default useAsync;
