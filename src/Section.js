import React from 'react';
import Colors from './values/Colors';
import Card from './Card.js';

const Section = (props) => {
  const styles = {
    outerContainer: {
      position: 'relative',
      // temporary
      height: '1000px',
      width: '-webkit-fill-available',
      padding: '150px',
      background: Colors.background,
    }, 
    title: {
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: '2.3em',
      color: Colors.primary,
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
      <Card image={'amazon.png'}/>
    </div>
  );
};

export default Section;