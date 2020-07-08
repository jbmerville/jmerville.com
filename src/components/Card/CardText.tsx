import React, { useRef } from 'react';

import CSS from 'csstype';
import IsComponentVisible from 'hooks/ComponentVisibility';
import UseWindowSize from 'hooks/WindowSize';
import { ICard } from 'types';
import { Colors } from 'values';

interface Styles {
  separationBar: CSS.Properties;
  description: CSS.Properties;
  textContainer: CSS.Properties;
  title: CSS.Properties;
  secondaryTitle: CSS.Properties;
}

interface CardTextProps {
  title: ICard.Title;
  description: string;
}

const CardText = (props: CardTextProps) => {
  const [width] = UseWindowSize();
  const ref = useRef(null);
  const isVisible = IsComponentVisible(ref, 0);

  const styles: Styles = {
    textContainer: {
      position: 'absolute',
    },
    title: {
      marginTop: '20px',
      fontWeight: 'normal',
      fontSize: '1.6em',
      color: Colors.PRIMARY,
    },
    separationBar: {
      marginTop: '25px',
      height: '5px',
      width: '120px',
      background: Colors.ACCENT,
      transitionDelay: '.1s',
    },
    secondaryTitle: {
      marginTop: '25px',
      fontWeight: 'lighter',
      fontSize: '1.2em',
      color: Colors.PRIMARY,
      transitionDelay: '.1s',
    },
    description: {
      marginTop: '25px',
      height: '100px',
      fontSize: '1.2em',
      width: '530px',
      color: Colors.PRIMARY,
      transitionDelay: '.2s',
    },
  };

  // Mobile style
  if (width < 600) {
    styles.textContainer = {
      position: 'relative',
    };
    styles.title = {
      marginTop: '20px',
      fontWeight: 'normal',
      fontSize: '1.2em',
      color: Colors.PRIMARY,
    };
    styles.secondaryTitle = {
      marginTop: '25px',
      fontWeight: 'normal',
      fontSize: '1em',
      color: Colors.PRIMARY,
      transitionDelay: '.1s',
    };
    styles.description = {
      marginTop: '25px',
      height: 'fit-content',
      fontSize: '1em',
      lineHeight: '1.5em',
      color: Colors.PRIMARY,
      transitionDelay: '.2s',
    };
  } else if (width < 1200) {
    styles.textContainer = {
      position: 'relative',
      height: 'fit-content',
    };
    styles.description = {
      marginTop: '25px',
      height: 'fit-content',
      fontSize: '1.2em',
      textAlign: 'justify',
      color: Colors.PRIMARY,
      transitionDelay: '.2s',
    };
  }

  return (
    <div ref={ref} style={styles.textContainer}>
      <div className={isVisible} style={styles.title}>
        {props.title.primary}
      </div>
      <div className={isVisible} style={styles.separationBar}></div>
      <div className={isVisible} style={styles.secondaryTitle}>
        {props.title.secondary}
      </div>
      <div className={isVisible} style={styles.description}>
        {props.description}
      </div>
    </div>
  );
};

export default CardText;
