import React, {
  useEffect,
  useState
} from 'react';

import Button from 'components/Button';
import CSS from 'csstype';
import UseWindowSize from 'hooks/WindowSize';
import { getPaddingsFromWidth } from 'utils';
import {
  Colors,
  Paddings
} from 'values';
import { ScreenWidth } from 'values/ScreenSizes';

import { CONTENT } from './hero-config';

interface Styles {
  outerContainer: CSS.Properties;
  innerContainer: CSS.Properties;
  textContainer: CSS.Properties;
  imageContainer: CSS.Properties;
  image: CSS.Properties;
  title: CSS.Properties;
  secondaryTitle: CSS.Properties;
  separationBar: CSS.Properties;
  description: CSS.Properties;
  callForAction: CSS.Properties;
}

const Hero = () => {
  const [width] = UseWindowSize();
  const [animationClasses, setAnimationClasses] = useState('animate');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationClasses('animate animate-scroll');
    }, 100);
    return () => clearInterval(timeout);
  }, []);

  let styles: Styles = {
    outerContainer: {
      position: 'relative',
      display: 'grid',
      backgroundColor: Colors.BACKGROUND,
      width: '100%',
      height: '100%',
      minHeight: 'fit-content',
      overflow: 'hidden',
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
      fontSize: '3.5em',
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
      position: 'absolute',
      transitionDelay: '.7s',
      transitionDuration: '1.5s',
      width: 'fit-content',
      marginTop: '20px',
      zIndex: 100,
      bottom: '-10px',
    },
  };

  // Mobile style
  if (width < ScreenWidth.PHONE) {
    styles.outerContainer = {
      position: 'relative',
      display: 'table',
      backgroundColor: Colors.BACKGROUND,
      width: '100%',
      height: '100%',
      minHeight: 'fit-content',
      overflow: 'hidden',
    };
    styles.innerContainer = {
      position: 'relative',
      width: 'auto',
      padding: Paddings.PHONE.ALL,
      height: '100%',
      minHeight: 'fit-content',
    };
    styles.image = {
      height: '35%',
      position: 'absolute',
      right: '0',
    };
    styles.imageContainer = {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: 'fit-content',
      zIndex: 1,
    };
    styles.textContainer = {
      position: 'relative',
      width: '100%',
      height: 'fit-content',
      zIndex: 1,
      marginTop: '20%',
      marginBottom: '50%',
    };
    styles.description = {
      marginTop: '25px',
      height: 'fit-content',
      fontWeight: 'normal',
      fontSize: '1em',
      lineHeight: '1.8em',
      color: Colors.TEXT,
    };
  } else if (width < ScreenWidth.TABLET) {
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
    <section style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.textContainer}>
          <div className={animationClasses} style={styles.title}>
            {CONTENT.title.primary}
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
                link={{ id: 'callForAction', label: 'View Projects', url: '' }}
                backgrounColor={Colors.GRAY}
                textColor={Colors.PRIMARY}
                hoverColor={Colors.GRAY_LIGHT}
              />
            </div>
          )}
        </div>
        <div style={styles.imageContainer}>
          <img
            style={styles.image}
            alt="If you see this follow me on github and linkedin :)"
            src="images/eastwood-come-back-later.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
