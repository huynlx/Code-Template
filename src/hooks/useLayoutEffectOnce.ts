import { EffectCallback, useLayoutEffect } from 'react';

/**
 * Executes the provided effect function once during the layout phase of a component.
 *
 * @param {EffectCallback} effect - The effect function to be executed.
 * @return {void}
 */
const useLayoutEffectOnce = (effect: EffectCallback) => {
  useLayoutEffect(effect, []);
};

export default useLayoutEffectOnce;
