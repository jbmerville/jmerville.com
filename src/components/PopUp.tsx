import React, { useState } from 'react';

import {
  useTheme,
  useWindowSize
} from 'hooks';
import { Styles } from 'types';
import { Colors } from 'values';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PopUp = () => {
  const [isClicked, setClicked] = useState(false);
  const [isHover, setHover] = useState(false);
  const [width] = useWindowSize();
  const { theme, isLight } = useTheme();

  let styles: Styles = {
    outerContainer: {
      padding: '20px',
      position: 'fixed',
      width: '280px',
      bottom: '0px',
      right: isClicked ? '-300px' : '0px',
      transition: '0.2s ease-in-out',
      zIndex: 100,
    },
    innerContainer: {
      height: '80px',
      borderRadius: '4px',
      display: 'grid',
      alignItems: 'center',
      boxShadow: !isLight
        ? '0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3)'
        : '#18181840 0px 13px 27px -5px, rgb(0 0 0 / 0.8) 0px 8px 16px -8px',
      background: theme.background,
      gridTemplateColumns: 'auto 1fr',
    },
    shadow: {
      background: isLight
        ? 'linear-gradient(0deg,rgba(10,37,64,.2) 0,rgba(10,37,64,0))'
        : 'linear-gradient(0deg, rgb(43 70 96 / 20%) 0px, rgba(10, 37, 64, 0))',
      transformOrigin: 'bottom center',
      WebkitMaskImage: 'linear-gradient(90deg,transparent 0,#000 50%,#000)',
      transform: 'scaleY(1)',
      position: 'fixed',
      width: '450px',
      height: '450px',
      bottom: 0,
      right: 0,
      zIndex: 2,
      opacity: isClicked ? '0' : '1',
      transitionDelay: '0.2s',
      transition: '0.5s ease-in-out',
    },
    text: {
      padding: '16px 24px 16px 0',
      fontSize: '0.9em',
      lineHeight: '1.5em',
      color: theme.text,
    },
    button: {
      padding: '16px',
      cursor: 'pointer',
      fontSize: '1.5em',
      color: isHover ? Colors.GRAY_DARK : Colors.GRAY,
    },
  };

  if (width < 600) {
    styles.outerContainer.width = '-webkit-fill-available';
    styles.outerContainer.right = isClicked ? '-135%' : '0px';
  }

  return (
    <>
      <div style={styles.outerContainer}>
        <div style={styles.innerContainer}>
          <div style={styles.button}>
            <FontAwesomeIcon
              onClick={() => setClicked(true)}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              icon={faTimesCircle}
              size="sm"
            />
          </div>
          <div style={styles.text}>This website uses cookies to enhance the user experience</div>
        </div>
      </div>
      <div style={styles.shadow}></div>
    </>
  );
};

export default PopUp;
