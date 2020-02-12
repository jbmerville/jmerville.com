import React from 'react';
import UseWindowSize from './WindowSize.js';
import Button from './Button.js';
import Colors from './values';

const Footer = () => {

  const [width] = UseWindowSize();
  
  let styles = {
    outerContainer: {
      position: 'relative',
      backgroundColor: Colors.background,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    },
    innerContainer: {
      overflow: 'auto',
      position: 'relative',
      height: '-webkit-fill-available',
      width: 'auto',
      padding: '150px',
      minHeight: '550px',
    },
    leftContainer: {
      float: 'left',
      width: '45%',
      height: '-webkit-fill-available',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      zIndex: '1',
    },
    rightContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      float: 'right',
      width: '55%',
      height: '-webkit-fill-available',
      posistion: 'relative',
    },
    handshake: {
      display: 'block',
      height: '90%',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-40%, -50%)'
    },
    title: {
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: '2.3em',
      color: Colors.primary,
    },
    description: {
      marginTop: '25px',
      height: 'fit-content',
      fontWeight: '200',
      fontSize: '1.2em',
      lineHeight: '1.5em',
      width: '500px',
      color: Colors.primary,
    },
    buttonContainer: {
      height: 'fit-content',
      width: '300px',
      position: 'relative',
    }
  };

  // Mobile style
  if (width < 600) {
    styles.innerContainer = {
      position: 'relative',
      backgroundColor: 'white',
      width: 'auto',
      padding: '20px',
      minHeight: '600px',
    };
    styles.handshake = {
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
      posistion: 'relative',
    };
    styles.leftContainer = {
      position: 'relative',
      width: '100%',
      height: 'fit-content',
      posistion: 'relative',
      zIndex: 1,
    };
    styles.title = {
      marginTop: '10px',
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: '1.5em',
      color: Colors.primary,
    };
    styles.description = {
      marginTop: '15px',
      height: 'fit-content',
      fontWeight: '200',
      fontSize: '1.2em',
      color: Colors.primary,
    };
  } else if (width < 1200) {
    styles.innerContainer = {
      overflow: 'auto',
      position: 'relative',
      height: '-webkit-fill-available',
      width: 'auto',
      padding: '100px',
      minHeight: '550px',
    };
    styles.rightContainer = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      float: 'right',
      width: '55%',
      height: '-webkit-fill-available',
      posistion: 'relative',
    };
  } else if (width > 1500) {
    styles.innerContainer = {
      overflow: 'auto',
      position: 'relative',
      height: '-webkit-fill-available',
      width: 'auto',
      padding: '250px',
      minHeight: '550px',
    };
  }

  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.leftContainer}>
          <div style={styles.title}>Get in touch with me</div>
          <div style={styles.description}>
            You can find me here :)
          </div>
          <div style={styles.buttonContainer}>
            <Button link='https://github.com/jbmerville' fontAwesomeIcon='fa fa-github' text='GitHub'/>
            <Button link='https://www.linkedin.com/in/jean-baptiste-merville-861800189/' fontAwesomeIcon='fa fa-linkedin' text='LinkedIn'/>
            <Button link='mailto:jbmer@my.yorku.ca' fontAwesomeIcon='fa fa-envelope' text='jbmer@my.yorku.ca' size='20px'/>
            <Button link='images/resume.pdf' target='_blank' fontAwesomeIcon='fa fa-file' text='Resumé' size='20px'/>
          </div>
        </div>
        <div style={styles.rightContainer}>
          <img style={styles.handshake} alt='If you see this follow me on github and linkedin :)' src='images/handshake.png'/>
        </div>
      </div>
    </div>
  );
  
};

export default Footer;
