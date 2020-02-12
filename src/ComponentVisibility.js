import { useState, useEffect } from 'react';

const IsComponentVisible = (ref, offset) => {
  const [visible, setVisible] = useState(0);
  console.log(visible);
  useEffect(() => {
    const isVisible = () => {
      const positionY = window.scrollY + window.innerHeight - offset;
      const top = ref.current.getBoundingClientRect().top + window.scrollY;
      // console.log(positionY, top);
      if (visible === 0 && positionY >= top ) {
        setVisible(1);
      } else if(visible === 1) {
        setVisible(2);
      }
    };
    if (ref.current) {
      // initial visible check
      window.addEventListener('scroll', isVisible);
    }
    return () => window.removeEventListener('scroll', isVisible);
  }, []);

  return visible > 0? 'animate-scroll': 'animate';
};

export default IsComponentVisible;
