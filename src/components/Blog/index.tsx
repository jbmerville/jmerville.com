import React, { useRef } from 'react';

import CSS from 'csstype';

import IsComponentVisible from '../../hooks/ComponentVisibility';
import UseWindowSize from '../../hooks/WindowSize';
import { Colors } from '../../values';
import Column from './Column';

interface Styles {
  outerContainer: CSS.Properties;
  leftContainer: CSS.Properties;
  rightContainer: CSS.Properties;
  textContainer: CSS.Properties;
  title: CSS.Properties;
  secondaryTitle: CSS.Properties;
}

const Blog = () => {
  const [width] = UseWindowSize();
  const ref = useRef(null);
  const isVisible = IsComponentVisible(ref, 300);

  const leftColumn = [
    [Colors.FACEBOOK, '🤖', 'Gatsby tutorial', false],
    [Colors.BLUE_LIGHT, '👽', 'Placeholder', true],
    [Colors.PURPLE, '🤞', 'Placeholder', false],
  ];
  const rightColumn = [
    [Colors.PURPLE, '🤞', 'Placeholder', false],
    [Colors.FACEBOOK, '🤖', 'Gatsby tutorial', false],
    [Colors.BLUE_LIGHT, '👽', 'Placeholder', true],
  ];

  const styles: Styles = {
    outerContainer: {
      overflow: 'hidden',
      position: 'relative',
      height: '400px',
      paddingLeft: '150px',
      paddingRight: '150px',
      background: Colors.GRAY_LIGHT,
    },
    leftContainer: {
      float: 'left',
      width: '70%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      position: 'relative',
      zIndex: 1,
    },
    rightContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'right',
      float: 'right',
      width: '30%',
      height: '100%',
      position: 'relative',
    },
    textContainer: {},
    title: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1.8em',
      color: Colors.PRIMARY,
      marginTop: '-30px',
    },
    secondaryTitle: {
      marginTop: '20px',
      fontWeight: 'normal',
      fontSize: '1.2em',
      color: Colors.PRIMARY,
      transitionDelay: '.1s',
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
      background: Colors.GRAY_LIGHT,
    };
    styles.leftContainer = {
      float: 'left',
      width: '50%',
      height: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 1,
    };
    styles.rightContainer = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'right',
      float: 'right',
      width: '50%',
      height: '100%',
      position: 'relative',
    };
    styles.textContainer = {
      position: 'relative',
      paddingLeft: '20px',
    };
    styles.title = {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1.2em',
      color: Colors.PRIMARY,
      marginTop: '-30px',
    };
    styles.secondaryTitle = {
      marginTop: '20px',
      fontWeight: 'normal',
      fontSize: '1em',
      color: Colors.PRIMARY,
      transitionDelay: '.1s',
    };
  } else if (width < 1200) {
    styles.outerContainer = {
      overflow: 'hidden',
      position: 'relative',
      height: '400px',
      paddingLeft: '100px',
      paddingRight: '100px',
      background: Colors.GRAY_LIGHT,
    };
  } else if (width > 1500) {
    styles.outerContainer = {
      overflow: 'hidden',
      position: 'relative',
      height: '400px',
      paddingLeft: '250px',
      paddingRight: '250px',
      background: Colors.GRAY_LIGHT,
    };
  }

  const columns =
    width < 600 ? (
      <div style={styles.leftContainer}>
        <Column cards={[...leftColumn, ...rightColumn]} offset="0px" />
      </div>
    ) : (
      <div style={styles.leftContainer}>
        <Column cards={leftColumn} offset="0px" />
        <Column cards={rightColumn} offset="-100px" />
      </div>
    );

  return (
    <div ref={ref} style={styles.outerContainer}>
      {columns}
      <div style={styles.rightContainer}>
        <div style={styles.textContainer}>
          <div className={isVisible} style={styles.title}>
            Articles & Blog Posts{' '}
          </div>
          <div className={isVisible} style={styles.secondaryTitle}>
            I enjoy documenting my developer journey on Medium. I also like to share short documentation on
            new techonologies!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
