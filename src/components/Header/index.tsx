import React, { useEffect, useState } from 'react';

import CSS from 'csstype';
import UseWindowSize from 'hooks/WindowSize';
import { Colors } from 'values';

import { CONTENT } from './header-config';

interface Styles {
  outerContainer: CSS.Properties;
  innerContainer: CSS.Properties;
  leftContainer: CSS.Properties;
  rightContainer: CSS.Properties;
  mountain: CSS.Properties;
  title: CSS.Properties;
  secondaryTitle: CSS.Properties;
  separationBar: CSS.Properties;
  description: CSS.Properties;
}

const Header = () => {
  const [width] = UseWindowSize();
  const [animationClasses, setAnimationClasses] = useState('animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationClasses('animate animate-scroll');
    }, 100);
    return () => clearInterval(timeout);
  }, []);

  let styles: Styles = {
    outerContainer: {
      position: 'relative',
      display: 'grid',
      backgroundColor: Colors.BACKGROUND,
      width: '100%',
      height: 'auto',
      minHeight: 'fit-content',
      overflow: 'hidden',
    },
    innerContainer: {
      position: 'relative',
      height: 'auto',
      width: 'auto',
      display: 'flex',
      padding: '150px',
    },
    leftContainer: {
      float: 'left',
      width: '45%',
      height: 'auto',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      zIndex: 1,
    },
    rightContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      float: 'right',
      width: '55%',
      height: 'auto',
    },
    mountain: {
      display: 'block',
      height: '110%',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-40%, -50%)',
    },
    title: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '2.3em',
      color: Colors.PRIMARY,
    },
    secondaryTitle: {
      marginTop: '20px',
      fontWeight: 'normal',
      fontSize: '1.9em',
      color: Colors.PRIMARY,
      transitionDelay: '.1s',
    },
    separationBar: {
      marginTop: '25px',
      height: '5px',
      width: '120px',
      transitionDelay: '.1s',
      background: Colors.ACCENT,
    },
    description: {
      marginTop: '25px',
      height: 'fit-content',
      fontWeight: 'normal',
      fontSize: '1.2em',
      lineHeight: '1.5em',
      width: '500px',
      transitionDelay: '.2s',
      color: Colors.PRIMARY,
    },
  };

  // Mobile style
  if (width < 600) {
    styles.outerContainer = {
      position: 'relative',
      display: 'table',
      backgroundColor: Colors.BACKGROUND,
      width: '100%',
      height: '100%',
      minHeight: 'fit-content',
      overflow: 'hidden',
    };
    styles.innerContainer = {
      position: 'relative',
      width: 'auto',
      padding: '20px',
      height: '100%',
      minHeight: 'fit-content',
    };
    styles.mountain = {
      height: '30%',
      position: 'absolute',
      right: '0',
    };
    styles.rightContainer = {
      position: 'absolute',
      top: '0',
      left: '0',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    };
    styles.leftContainer = {
      position: 'relative',
      width: '100%',
      height: 'fit-content',
      zIndex: 1,
      marginTop: '20%',
      marginBottom: '50%',
    };
    styles.description = {
      marginTop: '25px',
      height: 'fit-content',
      fontWeight: 'normal',
      fontSize: '1em',
      lineHeight: '1.8em',
      color: Colors.PRIMARY,
    };
  } else if (width < 1200) {
    styles.innerContainer = {
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      height: 'auto',
      width: 'auto',
      padding: '100px',
    };
    styles.rightContainer = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      float: 'right',
      width: '55%',
      height: 'auto',
    };
  } else if (width > 1500) {
    styles.innerContainer = {
      position: 'relative',
      height: 'auto',
      width: 'auto',
      display: 'flex',
      padding: '250px',
    };
  }

  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.leftContainer}>
          <div className={animationClasses} style={styles.title}>
            {CONTENT.title.primary}
          </div>
          <div className={animationClasses} style={styles.secondaryTitle}>
            {CONTENT.title.secondary}
          </div>
          <div className={animationClasses} style={styles.separationBar}></div>
          <div className={animationClasses} style={styles.description}>
            {CONTENT.description}
          </div>
        </div>
        <div style={styles.rightContainer}>
          <img
            style={styles.mountain}
            alt="If you see this follow me on github and linkedin :)"
            src="images/mountain.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
