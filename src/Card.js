import React from 'react';
import CardImage from './CardImage.js';
import CardText from './CardText';
import PropTypes from 'prop-types';
import useWindowSize from './WindowSize.js';

const Card = (props) => {

  const [width] = useWindowSize();
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
      marginTop: '100px',
      paddingBottom: '50px',
      height: 'fit-content',
      width: '100%',
    };
  }

  const {title, secondaryTitle, description, image, imageStyle, imageCaption, backgroundColor, link} = props;
  return (
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
