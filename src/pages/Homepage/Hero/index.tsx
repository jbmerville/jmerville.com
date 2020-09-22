import React, {
  useEffect,
  useState
} from 'react';

import {
  Button,
  Margin,
  SeparationBar,
  StyledText
} from 'components';
import { useWindowSize } from 'hooks';
import { Styles } from 'types';
import { getPaddingsFromWidth } from 'utils';
import {
  Colors,
  MaxWidth,
  Paddings,
  ScreenSize
} from 'values';

import { CONTENT } from './hero-config';

const Hero = () => {
  const [width] = useWindowSize();
  const [animationClasses, setAnimationClasses] = useState('animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationClasses('animate animate-scroll');
    }, 100);
    return () => clearInterval(timeout);
  }, []);

  const styles: Styles = {
    outerContainer: {
      position: 'relative',
      display: 'grid',
      backgroundColor: Colors.BACKGROUND,
      width: '100%',
      height: '100%',
      minHeight: 'fit-content',
      overflow: 'hidden',
      maxHeight: '800px',
    },
    innerContainer: {
      position: 'relative',
      height: 'auto',
      width: 'auto',
      display: 'flex',
      padding: getPaddingsFromWidth(width).ALL,
    },
    textContainer: {
      float: 'left',
      width: '45%',
      height: 'auto',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      zIndex: 1,
    },
    imageContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      float: 'right',
      width: '55%',
      height: 'auto',
    },
    image: {
      display: 'block',
      height: '120%',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-40%, -40%)',
    },
    callForAction: {
      position: 'relative',
      transitionDelay: '.7s',
      transitionDuration: '1.5s',
      width: 'fit-content',
      marginTop: '30px',
      zIndex: 100,
    },
  };

  // Mobile style
  if (width < ScreenSize.PHONE) {
    styles.outerContainer = {
      position: 'relative',
      backgroundColor: Colors.BACKGROUND,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
    };
    styles.innerContainer = {
      position: 'relative',
      display: 'flex',
      flexFlow: 'column',
      width: 'auto',
      padding: Paddings.PHONE.ALL,
      height: '100%',
    };
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
    styles.textContainer = {
      position: 'relative',
      width: '100%',
      height: 'fit-content',
      zIndex: 1,
      marginTop: '20%',
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
  } else {
    styles.innerContainer = {
      position: 'relative',
      width: MaxWidth,
      minHeight: 'fit-content',
      margin: 'auto',
    };
    styles.imageContainer = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '400px',
    };
  }

  const renderTextSection = (): JSX.Element => {
    return (
      <div style={styles.textContainer}>
        <div className={animationClasses}>
          <StyledText color={Colors.PRIMARY} style="TITLE">
            {CONTENT.title.primary}
          </StyledText>
        </div>
        <div className={animationClasses}>
          <Margin vertical="SMALL">
            <StyledText color={Colors.TEXT} style="SUBTITLE">
              {CONTENT.title.secondary}
            </StyledText>
          </Margin>
        </div>
        <Margin bottom="SMALL">
          <div className={animationClasses}>
            <SeparationBar />
          </div>
        </Margin>
        <div className={animationClasses} style={styles.description}>
          <StyledText color={Colors.TEXT} style="DESCRIPTION">
            {CONTENT.description}
          </StyledText>
        </div>
        {width > 600 && (
          <div className={animationClasses} style={styles.callForAction}>
            <Button
              text={{ link: { id: 'callForAction', label: 'Projects', url: '' }, color: Colors.PRIMARY }}
              background={{ offHoverColor: Colors.GRAY, onHoverColor: Colors.GRAY_LIGHT }}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <section style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        {renderTextSection()}
        <div style={styles.imageContainer}>
          <img style={styles.image} alt="If you see this follow me on github and linkedin :)" src="images/eastwood-come-back-later.png" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
