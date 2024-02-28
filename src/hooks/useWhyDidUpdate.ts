import { useEffect, useRef } from 'react';

/**
 * Creates a custom React hook that tracks changes in props and invokes a callback function when changes are detected.
 *
 * @param {Function} callback - The callback function to invoke when changes in props are detected.
 * @param {any} props - The current props object.
 */
const useWhyDidUpdate = (callback: (value: any) => void, props: any) => {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  const previousProps = useRef<any>();

  useEffect(() => {
    if (previousProps.current) {
      // get all keys from previous and current props
      const allKeys = Object.keys({ ...previousProps.current, ...props });

      // Use this object to keep track of changed props
      const changesObj: any = {};
      // iterate through keys
      allKeys.forEach((key) => {
        // if previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // add to changesObj
          changesObj[key] = {
            prev: previousProps.current[key],
            next: props[key]
          };
        }
      });

      // if changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        callback(changesObj);
      }
    }

    // finally update previousProps with current props for next hook call
    previousProps.current = props;
  });
};

export default useWhyDidUpdate;
