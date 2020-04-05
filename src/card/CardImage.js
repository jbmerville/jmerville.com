import React, { useRef } from 'react';
import Colors from './../values';
import PropTypes from 'prop-types';
import UseWindowSize from './../WindowSize.js';
import IsComponentVisible from './../ComponentVisibility.js';

const CardImage = (props) => {

  const { image, imageCaption, imageStyle, link, backgroundColor, showClickIcon, imageCaptionColor } = props;
  const [width] = UseWindowSize();
  const ref = useRef();
  const isVisible = IsComponentVisible(ref, 0);
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
      background: backgroundColor ? backgroundColor: Colors.lightGray,
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
      color: imageCaptionColor? imageCaptionColor: Colors.background,
      userSelect: 'none',
    },
    iconContainer: {
      position: 'absolute',
      bottom: '10px',
      right: '10px',
      display: 'table',
      height: '45px',
      width: '45px',
      borderRadius: '25px',
      zIndex: 1,
      backgroundColor: Colors.lightPurple,
    },
    icon: {
      position: 'relative',
      fontSize: '22px',
      left: '3px',
      color: Colors.facebook,
      display: 'table-cell',
      textAlign: 'center',
      verticalAlign: 'middle'
    },
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
      background: backgroundColor ? backgroundColor: Colors.lightGray,
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
      background: backgroundColor ? backgroundColor: Colors.lightGray,
      overflow: 'hidden',
    };
  }

  const clickIcon = showClickIcon ? (
    <div style={styles.iconContainer}>
      <i style={styles.icon} className="fa fa-mouse-pointer"></i>
    </div> 
  ) : '';
  
  const imageCard = imageCaption ? (
    <a href={link}
      ref={ref}
      className={`card ${isVisible}-image`}
      style={styles.outerContainer} 
    >
      {clickIcon}
      <img style={{ ...styles.image, ...imageStyle }} alt='If you see this follow me on github and linkedin :)' src={`images/${image}`} />
      <div 
        style={styles.outerCaption}
        className='caption'
      > 
        <div style={styles.innerCaption}>
          {imageCaption}
        </div>
      </div>
    </a>
  ) : (
    <a href={link} 
      ref={ref}
      className={`card ${isVisible}-image`}
      style={styles.outerContainer} 
    >
      {clickIcon}
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
  imageCaptionColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  link: PropTypes.string,
  showClickIcon: PropTypes.bool,
};

export default CardImage;
