import { RefObject, useEffect } from 'react';

// hooks
import useBoolean from 'src/hooks/useBoolean';

/**
 * Returns a boolean indicating whether the specified element or the window is being hovered.
 *
 * @param {RefObject<T extends HTMLElement>} elementRef - The reference to the element being checked for hover.
 * @return {boolean} A boolean indicating whether the element or the window is being hovered.
 */
const useHover = <T extends HTMLElement = HTMLElement>(elementRef: RefObject<T>): boolean => {
  const { value, setTrue, setFalse } = useBoolean(false);

  const handleMouseEnter = () => setTrue();
  const handleMouseLeave = () => setFalse();

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = elementRef?.current ?? window;

    if (!(targetElement && targetElement.addEventListener)) return;

    // Create event listener that calls handler function
    targetElement.addEventListener('mouseenter', handleMouseEnter);
    targetElement.addEventListener('mouseleave', handleMouseLeave);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener('mouseenter', handleMouseEnter);
      targetElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [elementRef]);

  return value;
};

export default useHover;
