import React from 'react';

import CSS from 'csstype';
import { ICard } from 'types';

import UseWindowSize from '../../hooks/WindowSize';
import { Colors } from '../../values';

interface Styles {
  outerContainer: CSS.Properties;
  picture: CSS.Properties;
  textContainer: CSS.Properties;
  title: CSS.Properties;
  caption: CSS.Properties;
}

interface CardExtraPicProps {
  isLeft: boolean;
  section: ICard.Section;
}

const CardExtraPic = (props: CardExtraPicProps) => {
  const [width] = UseWindowSize();
  const { isLeft, section } = props;
  const { image, imageWidth, title, caption } = section;

  const styles: Styles = {
    outerContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: isLeft ? 'row' : 'row-reverse',
      justifyContent: 'space-between',
      height: 'fit-content',
      padding: '20px',
      background: isLeft ? Colors.GRAY_LIGHT : Colors.BACKGROUND,
    },
    picture: {
      height: '230px',
      width: imageWidth ? imageWidth : '350px',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center right',
    },
    textContainer: {
      width: '260px',
      padding: '40px',
      alignSelf: 'center',
      marginTop: '25px',
      color: Colors.PRIMARY,
    },
    title: {
      fontWeight: 'bold',
      fontSize: '1.2em',
    },
    caption: {
      marginTop: '10px',
      fontSize: '1em',
    },
  };

  // Mobile style
  if (width < 600) {
    styles.outerContainer = {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'space-between',
      height: 'fit-content',
      padding: '20px',
      background: isLeft ? Colors.GRAY_LIGHT : Colors.BACKGROUND,
    };
    styles.picture = {
      height: '230px',
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center right',
      marginBottom: '50px',
    };
    styles.textContainer = {
      width: '260px',
      padding: '40px',
      alignSelf: 'center',
      color: Colors.PRIMARY,
    };
  }

  return (
    <div style={styles.outerContainer}>
      <div style={styles.picture}></div>
      <div style={styles.textContainer}>
        <div style={styles.title}>{title}</div>
        <div style={styles.caption}>{caption}</div>
      </div>
    </div>
  );
};

export default CardExtraPic;
