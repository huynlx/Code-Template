import { useEffect, useLayoutEffect } from 'react';

/**
 * Custom hook that provides an isomorphic layout effect.
 * This hook uses the `useLayoutEffect` hook if the code is running in a browser environment,
 * otherwise it falls back to using the `useEffect` hook.
 */
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
