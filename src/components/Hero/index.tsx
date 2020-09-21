import React, {
  useEffect,
  useState
} from 'react';

import Button from 'components/Button';
import Margin from 'components/Margin';
import StyledText, { TextStyle } from 'components/StyledText';
import UseWindowSize from 'hooks/WindowSize';
import { Styles } from 'types';
import { getPaddingsFromWidth } from 'utils';
import {
  Colors,
  FontSize,
  MarginType,
  MaxWidth,
  Paddings,
  ScreenSize
} from 'values';

import { CONTENT } from './hero-config';

const Hero = () => {
  const [width] = UseWindowSize();
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
    title: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: FontSize.XXXL,
      color: Colors.PRIMARY,
    },
    secondaryTitle: {
      marginTop: '20px',
      fontWeight: 'normal',
      fontSize: '1.9em',
      color: Colors.TEXT,
      transitionDelay: '.1s',
    },
    separationBar: {
      marginTop: '25px',
      height: '3px',
      width: '120px',
      transitionDelay: '.1s',
      background: Colors.SECONDARY,
    },
    description: {
      marginTop: '25px',
      height: 'fit-content',
      fontWeight: 'normal',
      fontSize: '1em',
      lineHeight: '1.5em',
      width: '500px',
      transitionDelay: '.3s',
      color: Colors.TEXT,
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
    styles.description = {
      marginTop: '25px',
      height: 'fit-content',
      fontWeight: 'normal',
      fontSize: '1em',
      lineHeight: '1.8em',
      color: Colors.TEXT,
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

  return (
    <section style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.textContainer}>
          <div className={animationClasses}>
            <Margin horizontal={MarginType.ZERO} vertical={MarginType.ZERO}>
              <StyledText color={Colors.PRIMARY} style={TextStyle.TITLE}>
                {CONTENT.title.primary}
              </StyledText>
            </Margin>
          </div>
          <div className={animationClasses} style={styles.secondaryTitle}>
            {CONTENT.title.secondary}
          </div>
          <div className={animationClasses} style={styles.separationBar}></div>
          <div className={animationClasses} style={styles.description}>
            {CONTENT.description}
          </div>
          {width > 600 && (
            <div className={animationClasses} style={styles.callForAction}>
              <Button
                link={{ id: 'callForAction', label: 'Projects', url: '' }}
                backgrounColor={Colors.GRAY}
                textColor={Colors.PRIMARY}
                hoverColor={Colors.GRAY_LIGHT}
              />
            </div>
          )}
        </div>
        <div style={styles.imageContainer}>
          <img style={styles.image} alt="If you see this follow me on github and linkedin :)" src="images/eastwood-come-back-later.png" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
