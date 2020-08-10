import React, { useState } from 'react';

import CSS from 'csstype';
import UseWindowSize from 'hooks/WindowSize';
import { Colors } from 'values';

interface PopUpProps {}

interface Styles {
  outerContainer: CSS.Properties;
  innerContainer: CSS.Properties;
  shadow: CSS.Properties;
  text: CSS.Properties;
  button: CSS.Properties;
}

const PopUp = (props: PopUpProps) => {
  const [isClicked, setClicked] = useState(false);
  const [isHover, setHover] = useState(false);
  const [width] = UseWindowSize();

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
      boxShadow: '0 13px 27px -5px rgba(50,50,93,0.25),0 8px 16px -8px rgba(0,0,0,0.3)',
      background: Colors.BACKGROUND,
      gridTemplateColumns: 'auto 1fr',
    },
    shadow: {
      background: 'linear-gradient(0deg,rgba(10,37,64,.2) 0,rgba(10,37,64,0))',
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
          <i
            onClick={() => setClicked(true)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="fa fa-times-circle"
            style={styles.button}
          />
          <div style={styles.text}>This website uses cookies to enhance the user experience</div>
        </div>
      </div>
      <div style={styles.shadow}></div>
    </>
  );
};

export default PopUp;
