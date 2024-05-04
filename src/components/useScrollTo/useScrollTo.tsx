import { useEffect } from 'react';

const useScrollTo = (x: number, y: number) => {
  useEffect(() => {
    window.scrollTo(x, y);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useScrollTo;
