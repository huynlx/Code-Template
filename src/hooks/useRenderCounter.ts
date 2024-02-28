import { useRef } from 'react';

/**
 * A custom hook that tracks the number of times a component has rendered.
 *
 * @param {string} label - The label to identify the component.
 * @return {Object} An object with the current counter value and a reset function.
 */
const useRenderCounter = (label: string) => {
  const counter = useRef(0);
  counter.current++;
  console.log(`${label} rendered ${counter.current} times`);

  /**
   * Reset counter
   */
  const reset = () => {
    counter.current = 0;
  };

  return { counter: counter.current, reset };
};

export default useRenderCounter;
