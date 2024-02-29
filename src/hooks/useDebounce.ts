import { debounce } from 'lodash';
import { useLayoutEffect, useMemo, useRef } from 'react';

/**
 * A custom hook that debounces the given callback function.
 *
 * @param {(...args: any[]) => void} callback - The callback function to be debounced
 * @param {number} delay - The delay in milliseconds for the debounce
 * @return {T} The debounced callback function
 */
const useDebounce = <T extends (...args: any[]) => void>(callback: T, delay: number) => {
  const callbackRef = useRef(callback);

  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  return useMemo(() => debounce((...args) => callbackRef.current(...args), delay), [delay]);
};

export default useDebounce;
