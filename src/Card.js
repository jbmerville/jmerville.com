import React from 'react';
import ImageCard from './ImageCard.js';
import CardText from './CardText';
import PropTypes from 'prop-types';

const Card = (props) => {

  const styles = {
    outerContainer: {
      marginTop: '100px',
      height: '300px',
      width: '100%',
    },
  };

  const {title, secondaryTitle, description, image, imageStyle, imageCaption, backgroundColor, link} = props;
  return (
    <div style={styles.outerContainer}>
      <CardText 
        title={title} 
        secondaryTitle={secondaryTitle} 
        description={description}
      />
      <ImageCard 
        image={image}
        imageStyle={imageStyle}
        imageCaption={imageCaption}
        link={link}
        backgroundColor={backgroundColor}
      />
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  secondaryTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageStyle: PropTypes.any,
  imageCaption: PropTypes.string,
  backgroundColor: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default Card;
