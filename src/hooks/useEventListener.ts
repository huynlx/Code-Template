import { useEffect, useRef } from 'react';

// hooks
import useIsomorphicLayoutEffect from 'src/hooks/useIsomorphicLayoutEffect ';

type Handler = (event: Event) => void;

/**
 * Attaches an event listener to the specified target element. The event listener will be triggered when the specified event occurs.
 *
 * @param {string} event - The name of the event to listen for.
 * @param {Handler} handler - The callback function to be executed when the event occurs.
 * @param {HTMLElement | Window | Document} [targetEl=window] - The target element to attach the event listener to. Defaults to the global window object.
 * @return {void}
 */
const useEventListener = (
  event: string,
  handler: Handler,
  targetEl: HTMLElement | Window | Document = window
) => {
  const savedHandler = useRef<Handler>();

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: Event) => {
      if (savedHandler.current) {
        savedHandler.current(event);
      }
    };

    targetEl.addEventListener(event, eventListener);
    return () => {
      targetEl.removeEventListener(event, eventListener);
    };
  }, [event, targetEl]);
};

export default useEventListener;
