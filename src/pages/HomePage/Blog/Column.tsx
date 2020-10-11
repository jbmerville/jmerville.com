import React from 'react';

import { useWindowSize } from 'hooks';
import { Styles } from 'types';

import CardBlog from './CardBlog';

interface ColumnProps {
  cards: any[];
  offset: string;
}

const BAR_WIDTH = [
  [50, 30, 60],
  [30, 50, 40],
  [60, 20, 40],
];

const Column = (props: ColumnProps) => {
  const [width] = useWindowSize();
  const { cards, offset } = props;
  const styles: Styles = {
    column: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '5000px',
      width: 'fit-content',
      paddingRight: '20px',
      marginTop: offset,
    },
  };

  // Mobile style
  if (width < 600) {
    styles.column = {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '5000px',
      width: 'fit-content',
      marginTop: offset,
    };
  }

  let cardsComponent = [];
  for (let i = 0; i < 20; i++) {
    const index = i % cards.length;
    const [color, emoji, title, isColorLight] = cards[index];
    const widths = BAR_WIDTH[index % BAR_WIDTH.length].map((barWidth) => `${barWidth}px`);
    cardsComponent.push(<CardBlog key={i} color={color} emoji={emoji} title={title} isColorLight={isColorLight} widths={widths} />);
  }

  return (
    <div className="column" style={styles.column}>
      {cardsComponent}
    </div>
  );
};

export default Column;
