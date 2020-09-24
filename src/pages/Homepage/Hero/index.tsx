import React, {
  useEffect,
  useState
} from 'react';

import {
  Animate,
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true));
  });
  const styles: Styles = {
    outerContainer: {
      position: 'relative',
      display: 'grid',
      backgroundColor: Colors.BACKGROUND,
      width: '100%',
      height: '90%',
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
      background: Colors.GRAY_LIGHT,
      borderRadius: '15px',
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
      transform: 'translate(-40%, -30%)',
    },
    callForAction: {
      position: 'relative',
      transitionDuration: '1s',
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
        <Margin horizontal={'SMALL'} vertical="SMALL">
          <Animate direction={'BOTTOM'} isVisible={isVisible} speed="0.5x">
            <StyledText color={Colors.PRIMARY} style="TITLE">
              {CONTENT.title.primary}
            </StyledText>
          </Animate>
          <Animate direction={'BOTTOM'} isVisible={isVisible}>
            <Margin vertical="SMALL">
              <StyledText color={Colors.TEXT} style="SUBTITLE">
                {CONTENT.title.secondary}
              </StyledText>
            </Margin>
          </Animate>
          <Margin bottom="SMALL">
            <Animate direction={'BOTTOM'} isVisible={isVisible}>
              <SeparationBar />
            </Animate>
          </Margin>
          <Animate direction={'BOTTOM'} isVisible={isVisible}>
            <StyledText color={Colors.TEXT} style="DESCRIPTION">
              {CONTENT.description}
            </StyledText>
          </Animate>
          {width > 600 && (
            <Animate direction={'BOTTOM'} isVisible={isVisible} speed="1.5x">
              <Margin top="SMALL">
                <Margin right="SMALL">
                  <Button
                    text={{ link: { id: 'projects', label: 'Projects', url: '' }, color: Colors.BACKGROUND }}
                    background={{ offHoverColor: Colors.GRAY_DARK, onHoverColor: Colors.SECONDARY }}
                  />
                </Margin>
                <Button
                  text={{ link: { id: 'experience', label: 'Experience', url: '' }, color: Colors.BACKGROUND }}
                  background={{ offHoverColor: Colors.GRAY_DARK, onHoverColor: Colors.SECONDARY }}
                />
              </Margin>
            </Animate>
          )}
        </Margin>
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
