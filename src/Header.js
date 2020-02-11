import React from 'react';
import useWindowSize from './WindowSize.js';
import Colors from './values';

const Header = () => {

  const [width] = useWindowSize();
  console.log(width);
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
      height: '100%',
      position: 'relative',
      zIndex: '1',
    },
    rightContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      float: 'right',
      width: '55%',
      height: '100%',
      posistion: 'relative',
    },
    balloon: {
      height: '110%'
    },
    title: {
      marginTop: '150px',
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
      fontWeight: '400',
      fontSize: '1.2em',
      lineHeight: '1.5em',
      width: '500px',
      color: Colors.primary,
    }
  }; 

  // Mobile style
  if (width < 600) {
    styles.innerContainer = {
      position: 'relative',
      backgroundColor: 'white',
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
      position: 'relative',
      backgroundColor: 'white',
      width: 'auto',
      padding: '100px',
      height: '550px',
    };
    styles.rightContainer = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'right',
      float: 'right',
      width: '55%',
      height: '100%',
      posistion: 'relative',
    };
  } else if (width > 1500) {
    styles.innerContainer = {
      position: 'relative',
      backgroundColor: 'white',
      width: 'auto',
      padding: '250px',
      height: '550px',
    };
  }
  
  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.leftContainer}>
          <div style={styles.title}>Jean Baptiste Merville</div>
          <div style={styles.secondaryTitle}>Developer & Student</div>
          <div style={styles.separationBar}></div>
          <div style={styles.description}>
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
