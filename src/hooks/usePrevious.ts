import { useEffect, useRef } from 'react';

/**
 * Returns the previous value of the provided value.
 *
 * @template T - The type of the value
 * @param {T} value - The value to track
 * @returns {T | undefined} - The previous value
 */
const usePrevious = <T>(value: T): T | undefined => {
  // Create a reference to store the previous value
  const ref = useRef<T>();

  // Update the reference whenever the value changes
  useEffect(() => {
    ref.current = value;
  });

  // Return the previous value
  return ref.current;
};

export default usePrevious;
