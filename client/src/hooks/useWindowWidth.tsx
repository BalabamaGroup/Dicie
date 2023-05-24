import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

const useWindowWidth = (delay: number = 250) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = () => setWindowWidth(window.innerWidth);
  const debouncedHandleResize = debounce(handleResize, delay);

  useEffect(() => {
    window.addEventListener('resize', debouncedHandleResize);
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, [delay]);

  return windowWidth;
};

export default useWindowWidth;
