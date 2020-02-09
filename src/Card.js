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

  return (
    <div style={styles.outerContainer}>
      <CardText 
        title={props.title} 
        secondaryTitle={props.secondaryTitle} 
        description={props.description}
      />
      <ImageCard 
        image={props.image}
        imageStyle={props.imageStyle}
      />
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  imageStyle: PropTypes.any,
  title: PropTypes.string.isRequired,
  secondaryTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
