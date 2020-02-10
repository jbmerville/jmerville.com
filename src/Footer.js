import React from 'react';
import useWindowSize from './WindowSize.js';
import Button from './Button.js';
import Colors from './values/Colors.js';

const Footer = () => {

  const [width] = useWindowSize();
  
  let styles = {
    outerContainer: {
      position: 'relative',
      backgroundColor: Colors.lightGray,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    },
    innerContainer: {
      position: 'relative',
      backgroundColor: 'white',
      width: 'auto',
      padding: '150px',
      height: '550px',
    },
    leftContainer: {
      float: 'left',
      width: '45%',
      height: 'fit-content',
      posistion: 'relative',
      zIndex: '1',
    },
    rightContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'right',
      float: 'right',
      width: '55%',
      height: '100%',
      posistion: 'relative',
    },
    balloon: {
      height: '110%',
    },
    title: {
      marginTop: '0px',
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: '2.3em',
      color: Colors.primary,
    },
    secondaryTitle: {
      marginTop: '20px',
      fontWeight: '400',
      fontSize: '1.9em',
      color: Colors.primary,
    },
    separationBar: {
      marginTop: '25px',
      height: '7px',
      width: '120px',
      background: Colors.accent,
    },
    description: {
      marginTop: '25px',
      height: '100px',
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
    styles.balloon = {
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
      height: '100px',
      fontWeight: '200',
      fontSize: '1.2em',
      lineHeight: '1.5em',
      width: '500px',
      color: Colors.primary,
    };
  } else if (width < 1200) {
    styles.rightContainer = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'right',
      float: 'right',
      width: '55%',
      height: '100%',
      posistion: 'relative',
    };
  } else {
    styles.rightContainer = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      float: 'right',
      width: '55%',
      height: '100%',
      posistion: 'relative',
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
            <Button link='https://www.linkedin.com/in/jean-baptiste-merville-861800189/' fontAwesomeIcon='fa fa-linkedin' text='LinkeIn'/>
            <Button link='mailto:jbmer@my.yorku.ca' fontAwesomeIcon='fa fa-envelope' text='jbmer@my.yorku.ca' size='20px'/>
            <Button link='/images/resume.pdf' target='_blank' fontAwesomeIcon='fa fa-file' text='Resumé' size='20px'/>
          </div>
        </div>
        <div style={styles.rightContainer}>
          <img style={styles.balloon} src='images/bird.png'/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
