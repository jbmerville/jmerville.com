import React from 'react';
import Colors from './values/Colors';
import PropTypes from 'prop-types';

const Section = (props) => {
  const styles = {
    outerContainer: {
      position: 'relative',
      // temporary
      height: 'fit-content',
      width: '-webkit-fill-available',
      padding: '150px',
      background: Colors.background,
    }, 
    title: {
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: '2.3em',
      color: Colors.primary,
      marginTop: '-30px',
    },
    titleBar: {
      marginTop: '7px',
      height: '1px',
      width: 'auto',
      background: Colors.primary,
    }
  };
  
  return (
    <div style={styles.outerContainer}>
      <div style={styles.title}>{props.title}</div>
      <div style={styles.titleBar}></div>
      {props.cards}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.any,
};

export default Section;