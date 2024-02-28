import { useCallback, useState } from 'react';

/**
 * Custom hook that allows copying text to the clipboard.
 *
 * @returns {Array} An array containing the current value and the copyToClipboard function.
 */
const useCopy = () => {
  const [value, setValue] = useState<any>({
    error: null,
    text: null
  });

  /**
   * Copies the provided text to the clipboard.
   *
   * @param {string} value - The text to be copied.
   */
  const copyToClipboard = useCallback(async (value: any) => {
    if (!navigator?.clipboard) {
      return setValue({
        error: new Error('Clipboard not supported'),
        text: null
      });
    }

    const handleSuccess = () => {
      setValue({
        error: null,
        text: value
      });
    };

    const handleFailure = (e: any) => {
      setValue({
        error: e,
        text: null
      });
    };

    navigator.clipboard.writeText(value).then(handleSuccess, handleFailure);
  }, []);

  return [value, copyToClipboard];
};

export default useCopy;
