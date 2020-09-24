import React from 'react';

import {
  Margin,
  Switch
} from 'components';
import Button from 'components/Button';
import {
  useTheme,
  useWindowSize
} from 'hooks';
import { Styles } from 'types';
import { Colors } from 'values';

import Hamburger from './Hamburger';
import { LINKS } from './header-config';

const Header = () => {
  const [width] = useWindowSize();
  const { isLight } = useTheme();
  const styles: Styles = {
    container: {
      left: '0',
      top: '20px',
      right: '0',
      perspective: '2000px',
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
      <Switch on={{ color: Colors.GRAY_LIGHT, text: 'Light' }} off={{ color: Colors.PRIMARY, text: 'Dark' }} isDefaultOn={isLight} />

      <Margin horizontal="SMALL">
        <nav style={styles.innerContainer}>
          {LINKS.map((item) => {
            const { link, isButton } = item;
            return isButton ? (
              <Button text={{ link, color: Colors.BACKGROUND }} showShadow={true} />
            ) : (
              <Margin right="REGULAR">
                <a className="linkHover" key={link.id} style={styles.link} href={link.url}>
                  {link.label}
                </a>
              </Margin>
            );
          })}
        </nav>
      </Margin>
    </header>
  );
};

export default Header;
