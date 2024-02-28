import { useEffect } from 'react';

/**
 * Sets the page title to the specified title.
 *
 * @param {string} title - The title to set for the page.
 */
const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default usePageTitle;
