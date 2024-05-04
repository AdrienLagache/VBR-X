import { useEffect } from 'react';

const useScrollTo = (x: number, y: number) => {
  useEffect(() => {
    window.scrollTo(x, y);
  });
};

export default useScrollTo;
