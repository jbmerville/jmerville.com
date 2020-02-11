import React from 'react';
import Colors from './../values';
import PropTypes from 'prop-types';
import useWindowSize from './../WindowSize.js';

const CardImage = (props) => {

  const { image, imageCaption, imageStyle, link } = props;
  const [width] = useWindowSize();

  let styles = {
    outerContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
      top: '200px',
      color: Colors.background,
    }
  };

  if (width < 600) {
    styles.outerContainer = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      top: '40px',
      transition: 'transform .2s',
      cursor: 'pointer',
      height: '230px',
      width: '100%',
      background: props.backgroundColor ? props.backgroundColor: Colors.lightGray,
      overflow: 'hidden',
    };
  } else if (width < 1200) {
    styles.outerContainer = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      top: '40px',
      transition: 'transform .2s',
      cursor: 'pointer',
      height: '230px',
      width: '100%',
      background: props.backgroundColor ? props.backgroundColor: Colors.lightGray,
      overflow: 'hidden',
    };
  }

  const imageCard = imageCaption ? (
    <a href={link}
      className='card'
      style={styles.outerContainer} 
    >
      <img style={{ ...styles.image, ...imageStyle }} alt='If you see this follow me on github and linkedin :)' src={`images/${image}`} />
      <div 
        style={styles.outerCaption}
        className='caption'
      > <div style={styles.innerCaption}>
          {imageCaption}
        </div>
      </div>
    </a>
  ) : (
    <a href={link} 
      className='card'
      style={styles.outerContainer} 
    >
      <img style={{ ...styles.image, ...imageStyle }} alt='If you see this follow me on github and linkedin :)' src={`images/${image}`} />
    </a>
  );

  return (
    imageCard
  ); 
};

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
  imageStyle: PropTypes.any,
  imageCaption: PropTypes.string,
  backgroundColor: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export default CardImage;
