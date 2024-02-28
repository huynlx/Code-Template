import { EffectCallback, useEffect } from 'react';

/**
 * Executes an effect hook only once when the component mounts.
 *
 * @param {EffectCallback} effect - The effect function to be executed.
 * @return {void}
 */
const useEffectOnce = (effect: EffectCallback) => {
  useEffect(effect, []);
};

export default useEffectOnce;
