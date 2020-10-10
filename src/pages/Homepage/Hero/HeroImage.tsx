import React from 'react';

import { Animate } from 'components';
import {
  useTheme,
  useWindowSize
} from 'hooks';
import { Styles } from 'types';
import { ScreenSize } from 'values';

interface HeroImageProps {}

const HeroImage = (props: HeroImageProps) => {
  const [width] = useWindowSize();
  const { isLight } = useTheme();
  const styles: Styles = {
    imageContainer: {
      position: 'relative',
      margin: '50px',
      width: '-webkit-fill-available',
      maxWidth: '900px',
      height: '100%',
      maxHeight: '600px',
    },
    imageInnerContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '100%',
    },
    image: {
      height: '100%',
      objectFit: 'contain',
      position: 'relative',
    },
  };
  if (width < ScreenSize.PHONE) {
    styles.image = {
      width: '100%',
      position: 'relative',
    };
    styles.imageContainer = {
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '-webkit-fill-available',
      alignItems: 'flex-end',
      zIndex: 1,
    };
  } else if (width < ScreenSize.TABLET) {
    styles.imageContainer = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      float: 'right',
      width: '55%',
      height: 'auto',
    };
  }

  return (
    <div style={styles.imageContainer}>
      <div style={styles.imageInnerContainer}>
        <Animate direction="LEFT" isVisible={isLight} center={true}>
          <img style={{ ...styles.image }} alt="If you see this follow me on github and linkedin :)" src="images/3236267.jpg" />
        </Animate>
      </div>
      <div style={styles.imageInnerContainer}>
        <Animate direction="RIGHT" isVisible={!isLight} center={true}>
          <img style={{ ...styles.image }} alt="If you see this follow me on github and linkedin :)" src="images/3236267.jpg" />
        </Animate>
      </div>
    </div>
  );
};

export default HeroImage;
