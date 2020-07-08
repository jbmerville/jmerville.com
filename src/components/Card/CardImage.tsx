import React, { useRef } from 'react';

import CSS from 'csstype';
import IsComponentVisible from 'hooks/ComponentVisibility';
import UseWindowSize from 'hooks/WindowSize';
import { ICard } from 'types';
import { Colors } from 'values';

interface Styles {
  outerContainer: CSS.Properties;
  image: CSS.Properties;
  outerCaption: CSS.Properties;
  innerCaption: CSS.Properties;
  iconContainer: CSS.Properties;
  icon: CSS.Properties;
}

interface CardImageProps {
  link?: string;
  image: ICard.Image;
  showClickIcon: boolean;
}

const CardImage = (props: CardImageProps) => {
  const { link, image, showClickIcon } = props;
  const { backgroundColor, caption, url, style } = image;
  const [width] = UseWindowSize();
  const ref = useRef(null);
  const isVisible = IsComponentVisible(ref, 0);

  const styles: Styles = {
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
      background: backgroundColor ? backgroundColor : Colors.GRAY_LIGHT,
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
      top: ' -5%',
      left: '-5%',
      transition: 'transform .2s',
      position: 'absolute',
    },
    innerCaption: {
      fontWeight: 'normal',
      fontSize: '1.2em',
      position: 'relative',
      textAlign: 'center',
      top: '200px',
      color: caption?.color ? caption?.color : Colors.BACKGROUND,
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
      backgroundColor: Colors.PURPLE_LIGHT,
    },
    icon: {
      position: 'relative',
      fontSize: '22px',
      left: '3px',
      color: Colors.FACEBOOK,
      display: 'table-cell',
      textAlign: 'center',
      verticalAlign: 'middle',
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
      background: backgroundColor ? backgroundColor : Colors.GRAY_LIGHT,
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
      background: backgroundColor ? backgroundColor : Colors.GRAY_LIGHT,
      overflow: 'hidden',
    };
  }

  const clickIcon = showClickIcon ? (
    <div style={styles.iconContainer}>
      <i style={styles.icon} className="fa fa-mouse-pointer"></i>
    </div>
  ) : (
    ''
  );

  const imageCard = caption ? (
    <a href={link} ref={ref} className={`card ${isVisible}-image`} style={styles.outerContainer}>
      {clickIcon}
      <img
        style={{ ...styles.image, ...style }}
        alt="If you see this follow me on github and linkedin :)"
        src={`images/${url}`}
      />
      <div style={styles.outerCaption} className="caption">
        <div style={styles.innerCaption}>{caption.text}</div>
      </div>
    </a>
  ) : (
    <a href={link} ref={ref} className={`card ${isVisible}-image`} style={styles.outerContainer}>
      {clickIcon}
      <img
        style={{ ...styles.image, ...style }}
        alt="If you see this follow me on github and linkedin :)"
        src={`images/${url}`}
      />
    </a>
  );

  return imageCard;
};

export default CardImage;
