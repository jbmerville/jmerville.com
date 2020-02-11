import React from 'react';
import Colors from './../values';
import PropTypes from 'prop-types';
import useWindowSize from './../WindowSize.js';

const CardText = (props) => {

  const [width] = useWindowSize();
  
  const styles = {
    separationBar: {
      marginTop: '25px',
      height: '5px',
      width: '120px',
      background: Colors.accent,
    },
    textContainer: {
      position: 'absolute',
    },
    title: {
      marginTop: '20px',
      fontWeight: '400',
      fontSize: '1.6em',
      color: Colors.primary,
    },
    secondaryTitle: {
      marginTop: '25px',
      fontWeight: '200',
      fontSize: '1.2em',
      color: Colors.primary,
    },
    description: {
      marginTop: '25px',
      height: '100px',
      fontSize: '1.2em',
      width: '530px',
      color: Colors.primary,
    }
  };

  // Mobile style
  if (width < 600) {
    styles.textContainer = {
      position: 'relative',
    };
    styles.title = {
      marginTop: '20px',
      fontWeight: '400',
      fontSize: '1.2em',
      color: Colors.primary,
    };
    styles.secondaryTitle = {
      marginTop: '25px',
      fontWeight: '200',
      fontSize: '1em',
      color: Colors.primary,
    };
    styles.description = {
      marginTop: '25px',
      height: 'fit-content',
      fontSize: '1em',
      lineHeight: '1.8em',
      color: Colors.primary,
    };
  } else if (width < 1200) {
    styles.textContainer = {
      position: 'relative',
      height: 'fit-content'
    };
    styles.description = {
      marginTop: '25px',
      height: 'fit-content',
      fontSize: '1.2em',
      textAlign: 'justify',
      color: Colors.primary,
    };
  }

  return (
    <div style={styles.textContainer}>
      <div style={styles.title}>{props.title}</div>
      <div style={styles.separationBar}></div>
      <div style={styles.secondaryTitle}>{props.secondaryTitle}</div>
      <div style={styles.description}>{props.description}</div>
    </div>    
  );
};

CardText.propTypes = {
  title: PropTypes.string.isRequired,
  secondaryTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardText;
