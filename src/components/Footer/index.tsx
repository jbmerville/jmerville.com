import React from 'react';

import Button from 'components/ButtonOld';
import CSS from 'csstype';
import UseWindowSize from 'hooks/WindowSize';
import { Colors } from 'values';

import { BUTTONS } from './footer-config';

interface Styles {
  outerContainer: CSS.Properties;
  innerContainer: CSS.Properties;
  leftContainer: CSS.Properties;
  rightContainer: CSS.Properties;
  handshake: CSS.Properties;
  title: CSS.Properties;
  description: CSS.Properties;
  buttonContainer: CSS.Properties;
}

const Footer = () => {
  const [width] = UseWindowSize();

  const styles: Styles = {
    outerContainer: {
      position: 'relative',
      display: 'grid',
      backgroundColor: Colors.BACKGROUND,
      width: '100%',
      height: '100%',
      minHeight: 'fit-content',
      overflow: 'hidden',
    },
    innerContainer: {
      position: 'relative',
      height: '-webkit-fill-available',
      width: 'auto',
      padding: '150px',
      display: 'flex',
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
      float: 'right',
      width: '55%',
      height: 'auto',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: '550px',
      zIndex: 1,
    },
    handshake: {
      display: 'block',
      height: '90%',
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
    description: {
      marginTop: '25px',
      height: 'fit-content',
      fontWeight: 'lighter',
      fontSize: '1.2em',
      lineHeight: '1.5em',
      width: '500px',
      color: Colors.PRIMARY,
    },
    buttonContainer: {
      height: 'fit-content',
      width: '300px',
      position: 'relative',
    },
  };

  // Mobile style
  if (width < 600) {
    styles.innerContainer = {
      position: 'relative',
      backgroundColor: 'white',
      width: 'auto',
      padding: '20px',
    };
    styles.handshake = {
      height: '30%',
      position: 'absolute',
      right: '0',
    };
    styles.rightContainer = {
      top: '0',
      left: '0',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      position: 'relative',
    };
    styles.leftContainer = {
      width: '100%',
      height: 'fit-content',
      position: 'relative',
      zIndex: 1,
    };
    styles.title = {
      marginTop: '40px',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1.5em',
      color: Colors.PRIMARY,
    };
    styles.description = {
      marginTop: '15px',
      height: 'fit-content',
      fontWeight: 'lighter',
      fontSize: '1.2em',
      color: Colors.PRIMARY,
    };
  } else if (width < 1200) {
    styles.innerContainer = {
      overflow: 'hidden',
      display: 'flex',
      position: 'relative',
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
      minHeight: '550px',
    };
  } else if (width > 1500) {
    styles.innerContainer = {
      overflow: 'auto',
      position: 'relative',
      height: '-webkit-fill-available',
      width: 'auto',
      padding: '250px',
    };
  }

  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.leftContainer}>
          <div style={styles.title}>Get in touch with me</div>
          <div style={styles.description}>You can find me here :)</div>
          <div style={styles.buttonContainer}>
            {BUTTONS.map((button) => (
              <Button button={button} />
            ))}
          </div>
        </div>
        <div style={styles.rightContainer}>
          <img
            style={styles.handshake}
            alt="If you see this follow me on github and linkedin :)"
            src="images/handshake.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
