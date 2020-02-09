import React from 'react';
import useWindowSize from './WindowSize.js';
import Colors from './values/Colors.js';

const Header = () => {
  const [width] = useWindowSize();
    
  const getHeight = (width) => {
    if (width > 1000) {
      return '100%';
    } else {
      return '500px';
    }
  };
  const styles = {
    outerContainer: {
      position: 'relative',
      backgroundColor: Colors.lightGray,
      width: '100%',
      height: getHeight(width),
    },
    innerContainer: {
      position: 'relative',
      backgroundColor: 'white',
      width: 'auto',
      padding: '40px',
      height: '700px',
    },
    leftContainer: {
      float: 'left',
      width: '45%',
      height: '100%',
      posistion: 'relative',
      // backgroundColor: 'blue',
    },
    rightContainer: {
      float: 'right',
      width: '55%',
      height: '100%',
      posistion: 'relative',
      overflow: 'hidden',
      // backgroundColor: 'yellow',
    },
    ballon: {
      height: '90%'
    },
    text: {
      position: 'absolute',
      marginLeft: '10%',
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
      fontWeight: '200',
      fontSize: '1.2em',
      lineHeight: '1.5em',
      width: '500px',
      color: Colors.primary,
    }
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.leftContainer}>
          <div style={styles.text}>
            <div style={styles.title}>Jean Baptiste Merville</div>
            <div style={styles.secondaryTitle}>Developer & Student</div>
            <div style={styles.separationBar}></div>
            <div style={styles.description}>
                Hey, my name is Jean, a Full-Stack Developer from Paris, France. I also attend York University In Toronto, where I am majoring in Computer Science! I am currently a teacher assistant at York University and working with amazing people at Srvice. Soon to be an Amazonian during the summer!
            </div>
          </div>
        </div>
        <div style={styles.rightContainer}>
          <img style={styles.ballon} src='images/balloon.png'/>
        </div>
      </div>
    </div>
  );
};

export default Header;
