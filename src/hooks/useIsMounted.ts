import { useCallback, useRef } from 'react';

// hooks
import useEffectOnce from 'src/hooks/useEffectOnce';
import useUnmount from 'src/hooks/useUnmount';

/**
 * Returns a function that determines whether the component is currently mounted or not.
 *
 * @return {function} A function that returns a boolean indicating whether the component is mounted.
 */
const useIsMounted = () => {
  const isMounted = useRef(false);

  useEffectOnce(() => {
    isMounted.current = true;
  });

  useUnmount(() => {
    isMounted.current = false;
  });

  return useCallback(() => isMounted.current, []);
};

export default useIsMounted;
