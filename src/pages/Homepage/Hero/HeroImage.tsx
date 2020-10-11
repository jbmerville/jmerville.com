import React from 'react';

import { useWindowSize } from 'hooks';
import { Styles } from 'types';
import { ScreenSize } from 'values';

const HeroImage = () => {
  const [width] = useWindowSize();
  const styles: Styles = {
    imageContainer: {
      position: 'relative',
      width: '-webkit-fill-available',
      maxWidth: '900px',
      height: '100%',
      maxHeight: '600px',
    },
    imageInnerContainer: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
    },
    image: {
      height: '100%',
      objectFit: 'contain',
      position: 'relative',
      left: '50px',
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
      height: '400px',
      alignItems: 'flex-end',
    };
  }

  return (
    <div style={styles.imageContainer}>
      <div style={styles.imageInnerContainer}>
        <img style={{ ...styles.image }} alt="If you see this follow me on github and linkedin :)" src="images/heropic.png" />
      </div>
    </div>
  );
};

export default HeroImage;
