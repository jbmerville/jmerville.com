import React from 'react';
import useWindowSize from './WindowSize.js';
import Button from './Button.js';
import Colors from './values/Colors.js';

const Footer = () => {

  const [width] = useWindowSize();
  const styles = {
    outerContainer: {
      position: 'relative',
      backgroundColor: Colors.lightGray,
      width: '100%',
      height: width,
    },
    innerContainer: {
      position: 'relative',
      backgroundColor: 'white',
      width: 'auto',
      padding: '150px',
      paddingTop: '100px',
      paddingBottom: '0px',
      height: '700px',
    },
    leftContainer: {
      float: 'left',
      width: '45%',
      height: 'fit-content',
      posistion: 'relative',
      // backgroundColor: 'blue',
    },
    rightContainer: {
      display: 'flex',
      alignItems: 'right',
      justifyContent: 'flex-end',
      float: 'right',
      width: '55%',
      height: 'inherit',
      posistion: 'relative',
    },
    ballon: {
      height: '500px',
      left: '100px',
    },
    text: {
      position: 'relative',
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
  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.leftContainer}>
          <div style={styles.text}>
            <div style={styles.title}>Get in touch with me</div>
            <div style={styles.description}>
                you can find me here :)
            </div>
            <div style={styles.buttonContainer}>
              <Button link='https://github.com/jbmerville' fontAwesomeIcon='fa fa-github' text='GitHub'/>
              <Button link='https://www.linkedin.com/in/jean-baptiste-merville-861800189/' fontAwesomeIcon='fa fa-linkedin' text='LinkeIn'/>
              <Button link='mailto:jbmer@my.yorku.ca' fontAwesomeIcon='fa fa-envelope' text='jbmer@my.yorku.ca' size='20px'/>
              <Button link='' fontAwesomeIcon='fa fa-file' text='my resume :)' size='20px'/>
            </div>
          </div>
        </div>
        <div style={styles.rightContainer}>
          <img style={styles.ballon} src='images/bird.png'/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
