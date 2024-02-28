import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface UseBooleanOutput {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

/**
 * Generates a boolean state and utility functions for managing the state.
 *
 * @param {boolean} [defaultValue] - The default value for the boolean state.
 * @return {UseBooleanOutput} An object containing the boolean state and utility functions.
 */
const useBoolean = (defaultValue?: boolean): UseBooleanOutput => {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return { value, setValue, setTrue, setFalse, toggle };
};

export default useBoolean;
