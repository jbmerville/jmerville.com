import React from 'react';

import {
  Margin,
  Toggle
} from 'components';
import Button from 'components/Button';
import {
  useTheme,
  useWindowSize
} from 'hooks';
import { Styles } from 'types';
import { Colors } from 'values';

import { RESUME } from './config';
import Hamburger from './Hamburger';

const Header = () => {
  const [width] = useWindowSize();
  const { theme } = useTheme();
  const { label, url } = RESUME;
  const styles: Styles = {
    container: {
      left: '0',
      top: '20px',
      right: '0',
      position: 'absolute',
      height: '50px',
      width: '100%',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    innerContainer: {
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    link: {
      textDecoration: 'none',
      color: Colors.PRIMARY,
      letterSpacing: '.025em',
      fontSize: '18px',
      transition: 'all .15s ease',
    },
    button: {
      margin: '0 25px',
    },
  };

  return width < 600 ? (
    <Hamburger />
  ) : (
    <header style={styles.container}>
      <Toggle onText="Light" offText="Dark" />
      <Margin horizontal="SMALL">
        <nav style={styles.innerContainer}>
          <Button text={label} url={url} background={{ offHoverColor: theme.highlight, onHoverColor: theme.secondary }} showShadow={true} />
        </nav>
      </Margin>
    </header>
  );
};

export default Header;
