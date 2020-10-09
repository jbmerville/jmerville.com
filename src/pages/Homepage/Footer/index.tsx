import React from 'react';

import {
  Margin,
  Section,
  StyledText
} from 'components';
import Button from 'components/Button';
import {
  useTheme,
  useWindowSize
} from 'hooks';
import { Styles } from 'types';
import { Colors } from 'values';

import { BUTTONS } from './footer-config';

const Footer = () => {
  const [width] = useWindowSize();
  const { theme } = useTheme();

  const styles: Styles = {
    card: {
      background: theme.card,
      borderRadius: '15px',
      position: 'relative',
      height: 'fit-content',
      maxWidth: '800px',
      zIndex: 3,
    },
    buttonContainer: {
      height: 'fit-content',
      width: '-webkit-fill-available',
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
    },
    button: {
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
  }

  return (
    <Section section={{ id: 'footer', title: '' }} justifyContent="flex-end">
      <div style={styles.card}>
        <Margin horizontal="REGULAR" vertical="REGULAR">
          <Margin bottom="SMALL">
            <StyledText color={theme.primary} style="TITLE">
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
    </Section>
  );
};

export default Footer;
