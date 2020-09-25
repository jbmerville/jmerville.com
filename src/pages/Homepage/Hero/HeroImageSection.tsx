import React from 'react';

import { Animate } from 'components';
import {
  useTheme,
  useWindowSize
} from 'hooks';
import { Styles } from 'types';
import { ScreenSize } from 'values';

interface HeroImageSectionProps {}

const HeroImageSection = (props: HeroImageSectionProps) => {
  const [width] = useWindowSize();
  const { isLight } = useTheme();
  console.log(isLight);
  const styles: Styles = {
    imageContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      float: 'right',
      width: '55%',
      height: 'auto',
    },
    imageInnerContainer: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: '100%',
      width: '100%',
    },
    image: {
      width: '100%',
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
          <img
            style={{ ...styles.image, top: '50px' }}
            alt="If you see this follow me on github and linkedin :)"
            src="images/eastwood-come-back-later.png"
          />
        </Animate>
      </div>
      <div style={styles.imageInnerContainer}>
        <Animate direction="RIGHT" isVisible={!isLight} center={true}>
          <img
            style={{ ...styles.image, width: '70%' }}
            alt="If you see this follow me on github and linkedin :)"
            src="images/eastwood-school-bag.png"
          />
        </Animate>
      </div>
    </div>
  );
};

export default HeroImageSection;
