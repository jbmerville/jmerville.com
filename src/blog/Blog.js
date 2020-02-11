import React from 'react';
import Colors from './../values';
import useWindowSize from './../WindowSize.js';
import Column from './Column.js';

const Blog = () => {

  const [width] = useWindowSize();
  const leftColumn = [
    [Colors.facebook, '🤖', 'Gatsby tutorial', false],
    [Colors.lightBlue, '👽', 'Placeholder', true],
  ];
  const rightColumn = [
    [Colors.lightBlue, '👽', 'Placeholder', true],
    [Colors.facebook, '🤖', 'Gatsby tutorial', false],
  ];

  let styles = {
    outerContainer: {
      overflow: 'hidden',
      position: 'relative',
      height: '400px',
      paddingLeft: '150px',
      paddingRight: '150px',
      background: Colors.lightGray,
    }, 
    leftContainer: {
      float: 'left',
      width: '70%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      position: 'relative',
      zIndex: '1',
    },
    rightContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'right',
      float: 'right',
      width: '30%',
      height: '100%',
      posistion: 'relative',
    },
    textContainer: {

    },
    title: {
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: '1.8em',
      color: Colors.primary,
      marginTop: '-30px',
    },
    secondaryTitle: {
      marginTop: '20px',
      fontWeight: '400',
      fontSize: '1.2em',
      color: Colors.primary,
    },
  };

  // Mobile style
  if (width < 600) {
    styles.outerContainer = {
      overflow: 'hidden',
      position: 'relative',
      height: '400px',
      paddingLeft: '20px',
      paddingRight: '20px',
      background: Colors.lightGray,
    };
    styles.leftContainer = {
      float: 'left',
      width: '50%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'relative',
      zIndex: '1',
    };
    styles.rightContainer = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'right',
      float: 'right',
      width: '50%',
      height: '100%',
      posistion: 'relative',
    };
    styles.textContainer = {
      position: 'relative',
      paddingLeft: '20px',
    };
  } else if (width < 1200) {
    styles.outerContainer = {
      overflow: 'hidden',
      position: 'relative',
      height: '400px',
      paddingLeft: '100px',
      paddingRight: '100px',
      background: Colors.lightGray,
    };
  } else if (width > 1500) {
    styles.outerContainer = {
      overflow: 'hidden',
      position: 'relative',
      height: '400px',
      paddingLeft: '250px',
      paddingRight: '250px',
      background: Colors.lightGray,
    };
  }

  const columns = width < 600? (
    <div style={styles.leftContainer}>
      <Column cards={[...leftColumn, ...rightColumn]} offset='0px'/>
    </div>
  ) : (<div style={styles.leftContainer}>
    <Column cards={leftColumn} offset='0px'/>
    <Column cards={rightColumn} offset='-100px'/>
  </div>);

  return (
    <div style={styles.outerContainer}>
      {columns}
      <div style={styles.rightContainer}>
        <div style={styles.textContainer}>
          <div style={styles.title}>Articles & Blog Posts </div>
          <div style={styles.secondaryTitle}>I enjoy documenting my developer journey on Medium. I also like to share short documentation on new techonologies!</div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
