import React from 'react';

import CSS from 'csstype';
import { ICard } from 'types';

import UseWindowSize from '../../hooks/WindowSize';
import CardImage from './CardImage';
import CardText from './CardText';

interface Styles {
  outerContainer: CSS.Properties;
}

interface CardProps {
  item: ICard.Card;
  onClick?: () => void;
}

const Card = (props: CardProps) => {
  const [width] = UseWindowSize();
  let styles: Styles = {
    outerContainer: {
      marginTop: '100px',
      height: '300px',
      width: '100%',
    },
  };

  // Mobile style
  if (width < 600) {
    styles.outerContainer = {
      marginTop: '50px',
      paddingBottom: '100px',
      height: 'fit-content',
      width: '100%',
    };
  } else if (width < 1200) {
    styles.outerContainer = {
      marginTop: '100px',
      paddingBottom: '50px',
      height: 'fit-content',
      width: '100%',
    };
  }

  const { title, description, image, link, type } = props.item;
  return (
    <div style={styles.outerContainer}>
      <CardText title={title} description={description} />
      <CardImage image={image} link={link} showClickIcon={type === ICard.CardTypes.EXTENDED} />
    </div>
  );
};

export default Card;
