import React from 'react';

import {
  Margin,
  StyledText
} from 'components';
import Button from 'components/Button';
import { useWindowSize } from 'hooks';
import { Styles } from 'types';
import {
  Colors,
  MaxWidth,
  Paddings
} from 'values';

import { BUTTONS } from './footer-config';

const Footer = () => {
  const [width] = useWindowSize();

  const styles: Styles = {
    outerContainer: {
      overflow: 'hidden',
      position: 'relative',

      height: '400px',
    },
    innerContainer: {
      position: 'relative',
      maxWidth: MaxWidth,
      height: '100%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    card: {
      background: Colors.GRAY,
      borderRadius: '15px',
      position: 'relative',
      height: 'fit-content',
      maxWidth: MaxWidth,
      zIndex: 3,
    },
    buttonContainer: {
      height: 'fit-content',
      width: '-webkit-fill-available',
      position: 'relative',
      display: 'block',
    },
    button: {
      marginRight: '20px',
      display: 'inline-block',
    },
  };

  // Mobile style
  if (width < 600) {
    styles.button.padding = '20px 0';
    styles.title = {
      marginTop: '40px',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '1.5em',
      color: Colors.PRIMARY,
    };
    styles.description = {
      marginTop: '15px',
      height: 'fit-content',
      fontWeight: 'lighter',
      fontSize: '1.2em',
      color: Colors.PRIMARY,
    };
  } else if (width < 1200) {
    styles.innerContainer = {
      overflow: 'hidden',
      display: 'flex',
      position: 'relative',
      height: 'auto',
      width: 'auto',
      padding: Paddings.TABLET.ALL,
    };
  }

  return (
    <div style={styles.outerContainer}>
      <div style={styles.innerContainer}>
        <div style={styles.card}>
          <Margin horizontal="REGULAR" vertical="REGULAR">
            <Margin bottom="SMALL">
              <StyledText color={Colors.PRIMARY} style="TITLE">
                Find me here!
              </StyledText>
            </Margin>
            <div style={styles.buttonContainer}>
              {BUTTONS.map((button) => (
                <div style={styles.button}>
                  <Button
                    text={{ link: button.link, color: Colors.BACKGROUND }}
                    background={{ onHoverColor: Colors.SECONDARY, offHoverColor: Colors.GRAY_DARK }}
                    icon={button.icon}
                  />
                </div>
              ))}
            </div>
          </Margin>
        </div>
      </div>
    </div>
  );
};

export default Footer;
