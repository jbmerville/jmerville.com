import React, { useState, useEffect } from 'react';
import UseWindowSize from './WindowSize.js';
import Colors from './values';

const Header = () => {

  const [width] = UseWindowSize();

  const [animationClasses, setAnimationClasses] = useState('animate');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationClasses('animate animate-scroll');
    }, 100);
    return () => clearInterval(timeout);
  }, []);

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
    balloon: {
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
    secondaryTitle: {
      marginTop: '20px',
      fontWeight: '400',
      fontSize: '1.9em',
      color: Colors.primary,
      transitionDelay: '.2s',
    },
    separationBar: {
      marginTop: '25px',
      height: '7px',
      width: '120px',
      transitionDelay: '.2s',
      background: Colors.accent,
    },
    description: {
      marginTop: '25px',
      height: 'fit-content',
      fontWeight: '400',
      fontSize: '1.2em',
      lineHeight: '1.5em',
      width: '500px',
      transitionDelay: '.4s',
      color: Colors.primary,
    }
  }; 

  // Mobile style
  if (width < 600) {
    styles.innerContainer = {
      position: 'relative',
      width: 'auto',
      padding: '20px',
      height: '700px',
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
      zIndex: 1,
    };
    styles.description = {
      marginTop: '25px',
      height: 'fit-content',
      fontWeight: '400',
      fontSize: '1em',
      lineHeight: '1.8em',
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
          <div className={animationClasses} style={styles.title}>Jean Baptiste Merville</div>
          <div className={animationClasses} style={styles.secondaryTitle}>Developer & Student</div>
          <div className={animationClasses} style={styles.separationBar}></div>
          <div className={animationClasses} style={styles.description}>
                Hey, my name is Jean, a Full-Stack Developer from Paris, France. I also attend York University in Toronto, where I am majoring in Computer Science! I am currently a teacher assistant at York University and working with amazing people at Srvice. Soon to be an Amazonian during the summer!
          </div>
        </div>
        <div style={styles.rightContainer}>
          <img style={styles.balloon} alt='If you see this follow me on github and linkedin :)' src='images/balloon.png'/>
        </div>
      </div>
    </div>
  );

};

export default Header;
