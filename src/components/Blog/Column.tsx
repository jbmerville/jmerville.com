import React from 'react';

import CSS from 'csstype';
import UseWindowSize from 'hooks/WindowSize';

import CardBlog from './CardBlog';

interface Styles {
  column: CSS.Properties;
}

interface ColumnProps {
  cards: any[];
  offset: string;
}

const Column = (props: ColumnProps) => {
  const [width] = UseWindowSize();
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
  for (let i = 0; i < 40; i++) {
    const index = i % cards.length;
    const [color, emoji, title, isColorLight] = cards[index];
    let widths = [];
    for (let i = 0; i < 3; i++) {
      const barWidth = Math.floor(Math.random() * 100) + 20;
      widths.push(`${barWidth}px`);
    }
    cardsComponent.push(
      <CardBlog
        key={i}
        color={color}
        emoji={emoji}
        title={title}
        isColorLight={isColorLight}
        widths={widths}
      />
    );
  }

  return (
    <div className="column" style={styles.column}>
      {cardsComponent}
    </div>
  );
};

export default Column;
