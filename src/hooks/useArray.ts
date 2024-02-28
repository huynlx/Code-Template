import { Dispatch, SetStateAction, useState } from 'react';

/**
 * An object containing an array and several array manipulation functions.
 *
 * @template T - The type of elements in the array
 */
interface ArrayFunctions<T> {
  array: T[];
  set: Dispatch<SetStateAction<T[]>>;
  push: (element: T) => void;
  filter: (callback: Function) => void;
  update: (index: number, newElement: T) => void;
  remove: (index: number) => void;
  clear: () => void;
}

/**
 * Returns an object containing an array and several array manipulation functions.
 *
 * @template T - The type of elements in the array
 * @param {T[]} defaultValue - The default value for the array
 * @returns {ArrayFunctions<T>} - An object with the array and array manipulation functions
 */
const useArray = <T>(defaultValue: T[]): ArrayFunctions<T> => {
  const [array, setArray] = useState(defaultValue);

  /**
   * Adds an element to the end of the array.
   *
   * @param {T} element - The element to be added
   */
  const push = (element: T) => {
    setArray((a) => [...a, element]);
  };

  /**
   * Filters the array using the provided callback function.
   *
   * @param {Function} callback - The callback function used to filter the array
   */
  const filter = (callback: any) => {
    setArray((a) => a.filter(callback));
  };

  /**
   * Updates the element at the specified index in the array.
   *
   * @param {number} index - The index of the element to be updated
   * @param {T} newElement - The new element to replace the existing element
   */
  const update = (index: number, newElement: T) => {
    setArray((a) => [...a.slice(0, index), newElement, ...a.slice(index + 1, a.length)]);
  };

  /**
   * Removes the element at the specified index from the array.
   *
   * @param {number} index - The index of the element to be removed
   */
  const remove = (index: number) => {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  };

  /**
   * Clears the array by setting it to an empty array.
   */
  const clear = () => {
    setArray([]);
  };

  return { array, set: setArray, push, filter, update, remove, clear };
};

export default useArray;
