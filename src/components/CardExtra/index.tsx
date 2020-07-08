import React, { useState } from 'react';

import CSS from 'csstype';
import { ICard } from 'types';

import UseWindowSize from '../../hooks/WindowSize';
import { Colors } from '../../values';
import Button from '../Button';
import Card from '../Card';
import CardExtraPic from './CardExtraPic';

interface Styles {
  outerContainer: CSS.Properties;
  extraContainer: CSS.Properties;
  info: CSS.Properties;
  howWasItMadeContainer: CSS.Properties;
  howWasItMadeTitle: CSS.Properties;
  howWasItMade: CSS.Properties;
  links: CSS.Properties;
  textContainer: CSS.Properties;
}

const CardExtra = (props: { item: ICard.CardExtra }) => {
  const { extra, ...item } = props.item;
  const { sections, buttons, howWasItMade } = extra;
  const [isClicked, setIsClicked] = useState(false);
  const [width] = UseWindowSize();

  const newCard = <Card item={item} onClick={() => setIsClicked(!isClicked)} />;
  const size = width < 600 ? (sections.length + 1) * 490 : (sections.length + 1) * 270;
  const extraContainer = isClicked ? `${size}px` : '0px';
  let isLeft = sections.length % 2 === 0;

  const styles: Styles = {
    outerContainer: {
      display: 'grid',
      height: 'fit-content',
      marginTop: '30px',
    },
    extraContainer: {
      height: extraContainer,
      transition: 'height 0.5s  ease-in-out 0s',
      overflow: 'hidden',
    },
    info: {
      position: 'relative',
      display: 'flex',
      flexDirection: isLeft ? 'row-reverse' : 'row',
      justifyContent: 'space-between',
      height: '270px',
      padding: '20px',
      background: isLeft ? Colors.GRAY_LIGHT : Colors.BACKGROUND,
    },
    textContainer: {},
    howWasItMadeContainer: {
      height: '170px',
      width: '40%',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      padding: '40px',
    },
    howWasItMadeTitle: {
      fontWeight: 'bold',
      fontSize: '1.2em',
      color: Colors.PRIMARY,
    },
    howWasItMade: {
      marginTop: '10px',
      fontSize: '1em',
    },
    links: {
      height: '170px',
      width: 'fit-content',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      padding: '40px',
      alignContent: 'flex-end',
    },
  };

  // Mobile style
  if (width < 600) {
    styles.info = {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 'fit-content',
      padding: '20px',
      background: isLeft ? Colors.GRAY_LIGHT : Colors.BACKGROUND,
    };
    styles.textContainer = {
      width: '260px',
      padding: '40px',
      alignSelf: 'center',
      color: Colors.PRIMARY,
    };
    styles.howWasItMadeContainer = {
      height: '170px',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      padding: '40px',
    };
  }

  return (
    <div style={styles.outerContainer}>
      {newCard}
      <div style={styles.extraContainer}>
        {sections.map((section, index) => (
          <CardExtraPic key={index} isLeft={index % 2 === 0} section={section} />
        ))}
        <div style={styles.info}>
          <div style={styles.howWasItMadeContainer}>
            <div style={styles.howWasItMadeTitle}>How was it made?</div>
            <div style={styles.howWasItMade}>{howWasItMade}</div>
          </div>
          <div style={styles.links}>
            {buttons.map((button, index) => (
              <Button isFirst={index === 0} key={index} button={button} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExtra;
