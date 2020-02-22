import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from './../card';
import Button from './../Button.js';
import CardExtraPic from './CardExtraPic.js';
import Colors from './../values';

const CardExtra = props => {
  const { extra, card, howWasItMade, buttons } = props;
  const [isClicked, setIsClicked] = useState(false);

  const newCard = (<Card {...card.props} onClick={() => setIsClicked(!isClicked)}/>);
  const size = (extra.length + 1) * 270 ;
  const extraContainer = isClicked ? `${size}px`: '0px';
  let isLeft = extra.length % 2 === 0;
  
  const styles = {
    outerContainer: {
      display: 'grid',
      height: 'fit-content',
      marginTop: '30px',
    },
    extraContainer: {
      height: extraContainer,
      transition: 'height 0.5s cubic-bezier(0.215,0.61,0.355,1) 0s',
      overflow: 'hidden',
    },
    info: {
      position: 'relative',
      display: 'flex',
      flexDirection: isLeft? 'row-reverse': 'row',
      justifyContent: 'space-between',
      height: '270px',
      padding: '20px',
      background: isLeft? Colors.lightGray: Colors.background,
    },
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
      color: Colors.primary,
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

  const extraPics = [];
  isLeft = true;
  for (let i = 0; i < extra.length; i++) {
    extraPics.push(
      <CardExtraPic 
        key={i}
        isLeft={isLeft}
        {...extra[i]}
      />
    );
    isLeft = !isLeft;
  }

  const buttonsComponents = [];
  for (let i = 0; i < buttons.length; i++) {
    buttonsComponents.push(
      <Button
        isFirst={i == 0}
        key={i}
        {...buttons[i]}
      />
    );
  }

  return (
    <div style={styles.outerContainer}>
      {newCard}
      <div style={styles.extraContainer}> 
        {extraPics}
        <div style={styles.info}>
          <div style={styles.howWasItMadeContainer}>
            <div style={styles.howWasItMadeTitle}>
              How was it made?
            </div> 
            <div style={styles.howWasItMade}>
              {howWasItMade}
            </div>
          </div>
          <div style={styles.links}>
            {buttonsComponents}
          </div>
        </div>
      </div>
    </div>
  );
};

CardExtra.propTypes = {
  card: PropTypes.element.isRequired,
  isClicked: PropTypes.bool.isRequired,
  extra: PropTypes.array.isRequired,
  howWasItMade: PropTypes.string,
  buttons: PropTypes.array,
};

export default CardExtra;