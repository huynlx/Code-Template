import { useRef } from 'react';

/**
 * Returns a boolean value indicating whether the current render is the first render.
 *
 * @return {boolean} A boolean value indicating whether the current render is the first render.
 */
const useIsFirstRender = (): boolean => {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }

  return isFirst.current;
};

export default useIsFirstRender;
