import _isEqual from 'lodash/isEqual';
import { DependencyList, useCallback, useEffect, useLayoutEffect, useMemo, useRef } from 'react';

/**
 * Compares two values deeply and returns true if they are equal.
 *
 * @param {T} a - The first value to compare.
 * @param {T} b - The second value to compare.
 * @return {boolean} - True if the values are equal, false otherwise.
 */
const deepCompareEquals = <T>(a: T, b: T) => {
  return _isEqual(a, b);
};

type MaybeCleanUpFn = void | (() => void) | any;
type EqualityFn = (a: DependencyList, b: DependencyList) => boolean;

export const useDeepCompareEffect = (
  cb: () => MaybeCleanUpFn,
  deps: DependencyList,
  equal: EqualityFn = deepCompareEquals
) => {
  const ref = useRef<DependencyList>(deps);

  if (!equal(deps, ref.current)) {
    ref.current = deps;
  }

  useEffect(cb, [ref.current]);
};

export const useDeepCompareLayoutEffect = (
  cb: () => MaybeCleanUpFn,
  deps: DependencyList,
  equal: EqualityFn = deepCompareEquals
) => {
  const ref = useRef<DependencyList>(deps);

  if (!equal(deps, ref.current)) {
    ref.current = deps;
  }

  useLayoutEffect(cb, [ref.current]);
};

export const useDeepCompareMemo = (
  cb: () => MaybeCleanUpFn,
  deps: DependencyList,
  equal: EqualityFn = deepCompareEquals
) => {
  const ref = useRef<DependencyList>(deps);

  if (!equal(deps, ref.current)) {
    ref.current = deps;
  }

  return useMemo(cb, [ref.current]);
};

export const useDeepCompareCallback = (
  cb: () => MaybeCleanUpFn,
  deps: DependencyList,
  equal: EqualityFn = deepCompareEquals
) => {
  const ref = useRef<DependencyList>(deps);

  if (!equal(deps, ref.current)) {
    ref.current = deps;
  }

  return useCallback(cb, [ref.current]);
};
