import { useEffect } from 'react';

const useScrollTo = (x: number, y: number) => {
  useEffect(() => {
    window.scrollTo({
      left: x,
      top: y,
      behavior: 'smooth',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useScrollTo;
