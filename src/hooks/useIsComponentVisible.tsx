import { useEffect, useState } from 'react';

const useIsComponentVisible = (ref: React.RefObject<any>, offset: number) => {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    const isVisible = () => {
      const positionY = window.scrollY + window.innerHeight - offset;
      const top = ref.current.getBoundingClientRect().top + window.scrollY;
      if (visible === 0 && positionY >= top) {
        setVisible(1);
      } else if (visible === 1) {
        setVisible(2);
      }
    };
    if (ref && ref.current) {
      // initial visible check
      window.addEventListener('scroll', isVisible);
    }
    return () => window.removeEventListener('scroll', isVisible);
  });

  return visible > 0;
};

export default useIsComponentVisible;
