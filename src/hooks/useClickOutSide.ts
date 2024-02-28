import { RefObject, useCallback } from 'react';

// hooks
import useEventListener from 'src/hooks/useEventListener';

type ClickOutsideCallback = (event: Event) => void;

/**
 * Attaches a click outside event listener to a list of DOM element references
 * and invokes a callback function when a click occurs outside of any of the referenced elements.
 *
 * @param refs - An array of React ref objects pointing to DOM elements
 * @param cb - The callback function to be invoked when a click occurs outside of the referenced elements
 */
const useClickOutside = (refs: RefObject<HTMLElement | null>[], cb: ClickOutsideCallback): void => {
  // Filter out any null ref objects
  const filteredRefs = refs.filter((ref) => ref);

  /**
   * Handles the click outside event by checking if the click is outside any of the referenced elements.
   * If the click is outside, the callback function is invoked.
   *
   * @param event - The click event
   */
  const handleClickOutside = useCallback(
    (event: Event) => {
      // Check if the click is outside any of the referenced elements
      for (const ref of filteredRefs) {
        if (ref.current === null || ref.current.contains(event.target as Node)) {
          return;
        }
      }
      // Invoke the callback function
      cb(event);
    },
    [refs, cb]
  );

  // Attach the click event listener to the document
  useEventListener('click', handleClickOutside, document);
};

export default useClickOutside;
