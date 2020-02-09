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
      background: props.backgroundColor ? props.backgroundColor: Colors.lightGray,
      overflow: 'hidden',
    },
    image: {
      height: '100%',
      transition: 'transform .2s',
      position: 'absolute',
    },
    outerCaption: {      
      height: '110%',
      width: '110%',
      top:' -5%',
      left: '-5%',
      transition: 'transform .2s',
      position: 'absolute',
    },
    innerCaption: {
      fontWeight: '400',
      fontSize: '1.2em',
      position: 'relative',
      textAlign: 'center',
      top: '190px',
      color: Colors.background,
    }
  };

  const { image, imageCaption, imageStyle, link } = props;
  const imageCard = imageCaption ? (
    <div
      className='card'
      style={styles.outerContainer} 
    >
      <img style={{...styles.image, ...imageStyle}} src={`images/${image}`} />
      <div 
        style={styles.outerCaption}
        className='caption'
      > <div style={styles.innerCaption}>
          {imageCaption}
        </div>
      </div>
    </div>
  ) : (
    <div 
      className='card'
      style={styles.outerContainer} 
    >
      <img style={{...styles.image, ...imageStyle}} src={`images/${image}`} />
    </div>
  );

  return (
    <a href={link}>
      {imageCard}
    </a>
  ); 
};

ImageCard.propTypes = {
  image: PropTypes.string.isRequired,
  imageStyle: PropTypes.any,
  imageCaption: PropTypes.string,
  backgroundColor: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default ImageCard;
