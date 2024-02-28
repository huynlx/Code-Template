import { useCallback, useState } from 'react';

/**
 * Super hook | Trigger re-render component
 * @return {function(): void} the returned function
 */
const useForceRerender = (): Function => {
  const [, updateState] = useState<object>();
  const forceRerender = useCallback(() => updateState({}), []);
  return forceRerender;
};

export default useForceRerender;
