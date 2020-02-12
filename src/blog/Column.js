import React from 'react';
import PropTypes from 'prop-types';
import UseWindowSize from './../WindowSize.js';
import CardBlog from './CardBlog.js';

const Column = (props) => {
    
  const [width] = UseWindowSize();
  const { cards, offset } = props;
  const styles = {
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
  for (let i = 0; i < 40; i++){
    const index = i % cards.length;
    const [color, emoji, title, isColorLight] = cards[index];
    let widths = [];
    for (let i = 0; i < 3; i++){
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
    <div className='column' style={styles.column}>
      {cardsComponent}
    </div>
  );

};

Column.propTypes = {
  cards: PropTypes.any.isRequired,
  offset: PropTypes.string.isRequired,
};

export default Column;
