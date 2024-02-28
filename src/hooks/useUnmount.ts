import { useRef } from 'react';

// hooks
import useEffectOnce from 'src/hooks/useEffectOnce';

/**
 * Executes a callback function when the component is unmounted.
 *
 * @param {() => any} fn - The callback function to be executed.
 * @return {void} This function does not return anything.
 */
const useUnmount = (fn: () => any): void => {
  const fnRef = useRef(fn);

  // update the ref each render so if it change the newest callback will be invoked
  fnRef.current = fn;

  useEffectOnce(() => () => fnRef.current());
};

export default useUnmount;
