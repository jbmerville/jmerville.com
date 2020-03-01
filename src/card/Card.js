import React from 'react';
import CardImage from './CardImage.js';
import CardText from './CardText';
import PropTypes from 'prop-types';
import UseWindowSize from './../WindowSize.js';

const Card = (props) => {

  const [width] = UseWindowSize();
  let styles = {
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

  const { title, secondaryTitle, description, image, imageStyle, imageCaption, backgroundColor, link, onClick, showClickIcon } = props;

  const card = onClick? (
    <div onClick={onClick} style={styles.outerContainer}>
      <CardText 
        title={title} 
        secondaryTitle={secondaryTitle} 
        description={description}
      />
      <CardImage 
        image={image}
        imageStyle={imageStyle}
        imageCaption={imageCaption}
        link={link}
        backgroundColor={backgroundColor}
        showClickIcon={showClickIcon}
      />
    </div> 
  ) : (
    <div style={styles.outerContainer}>
      <CardText 
        title={title} 
        secondaryTitle={secondaryTitle} 
        description={description}
      />
      <CardImage 
        image={image}
        imageStyle={imageStyle}
        imageCaption={imageCaption}
        link={link}
        backgroundColor={backgroundColor}
        showClickIcon={showClickIcon}
      />
    </div>);
  return card;
};

Card.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  secondaryTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageStyle: PropTypes.any,
  imageCaption: PropTypes.string,
  backgroundColor: PropTypes.string,
  link: PropTypes.string.isRequired,
  showClickIcon: PropTypes.bool,
};

export default Card;
