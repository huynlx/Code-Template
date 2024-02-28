import { useRef, useCallback } from 'react';

/**
 * Creates a debounced version of the given callback function.
 *
 * @param {T} func - The original callback function.
 * @param {number} wait - The amount of time to wait before invoking the callback.
 * @returns {(...args: Parameters<T>) => void} - The debounced callback function.
 */
const useDebouncedCallback = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  const timeout = useRef<ReturnType<typeof setInterval> | null>(null);

  return useCallback(
    (...args: Parameters<T>) => {
      const later = () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        func(...args);
      };

      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(later, wait);
    },
    [func, wait]
  );
};

export default useDebouncedCallback;
