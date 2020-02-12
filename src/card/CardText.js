import React, { useRef } from 'react';
import Colors from './../values';
import PropTypes from 'prop-types';
import UseWindowSize from './../WindowSize.js';
import IsComponentVisible from './../ComponentVisibility.js';

const CardText = (props) => {

  const [width] = UseWindowSize();
  const ref = useRef();
  const isVisible = IsComponentVisible(ref, 0);

  const styles = {
    textContainer: {
      position: 'absolute',
    },
    title: {
      marginTop: '20px',
      fontWeight: '400',
      fontSize: '1.6em',
      color: Colors.primary,
    },
    separationBar: {
      marginTop: '25px',
      height: '5px',
      width: '120px',
      background: Colors.accent,
      transitionDelay: '.2s',
    },
    secondaryTitle: {
      marginTop: '25px',
      fontWeight: '200',
      fontSize: '1.2em',
      color: Colors.primary,
      transitionDelay: '.2s',
    },
    description: {
      marginTop: '25px',
      height: '100px',
      fontSize: '1.2em',
      width: '530px',
      color: Colors.primary,
      transitionDelay: '.4s',
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
      transitionDelay: '.2s',
    };
    styles.description = {
      marginTop: '25px',
      height: 'fit-content',
      fontSize: '1em',
      lineHeight: '1.5em',
      color: Colors.primary,
      transitionDelay: '.4s',
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
      transitionDelay: '.4s',
    };
  }

  return (
    <div ref={ref} style={styles.textContainer}>
      <div className={isVisible} style={styles.title}>{props.title}</div>
      <div className={isVisible} style={styles.separationBar}></div>
      <div className={isVisible} style={styles.secondaryTitle}>{props.secondaryTitle}</div>
      <div className={isVisible} style={styles.description}>{props.description}</div>
    </div>    
  );
};

CardText.propTypes = {
  title: PropTypes.string.isRequired,
  secondaryTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardText;
