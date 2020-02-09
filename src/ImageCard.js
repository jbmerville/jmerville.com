import React from 'react';
import Colors from './values/Colors';
import PropTypes from 'prop-types';

const ImageCard = (props) => {
  const styles = {
    outerContainer: {
      position: 'relative',
      top: '40px',
      transition: 'transform .2s',
      cursor: 'pointer',
      height: '230px',
      width: '350px',
      float: 'right',
      background: Colors.lightGray,
      overflow: 'hidden',
    },
    image: {
      height: '100%',
      transition: 'transform .2s',
      position: 'absolute',
    },
  };

  return (
    <div 
      className='card'
      style={styles.outerContainer} 
    >
      <img style={{...styles.image, ...props.imageStyle}} src={`images/${props.image}`} />
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageHeight: PropTypes.string.isRequired,
  imageStyle: PropTypes.any,
};

export default ImageCard;
