import { useState } from 'react';

// hooks
import useEventListener from 'src/hooks/useEventListener';

/**
 * Returns the size of the window.
 *
 * @return {Object} An object containing the windowWidth and windowHeight properties.
 */
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight
  });

  const handleWindowResize = () => {
    const newSize = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
    setWindowSize(newSize);
  };

  useEventListener('resize', handleWindowResize);

  return windowSize;
};

export default useWindowSize;
