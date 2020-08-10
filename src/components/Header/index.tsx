import './style.css';

import React from 'react';

import Button from 'components/Button';
import CSS from 'csstype';
import UseWindowSize from 'hooks/WindowSize';
import { Colors } from 'values';

import Hamburger from './Hamburger';
import { LINKS } from './header-config';

const style = require('./style.css');

interface Styles {
  container: CSS.Properties;
  innerContainer: CSS.Properties;
  link: CSS.Properties;
  button: CSS.Properties;
}

const Header = () => {
  const [width] = UseWindowSize();

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
    },
    innerContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    link: {
      margin: '0 25px',
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
      <nav style={styles.innerContainer}>
        {LINKS.map((link) => {
          return link.isButton ? (
            <div style={styles.button}>
              <Button
                link={{ ...link, label: 'View ' + link.label }}
                backgrounColor={Colors.PRIMARY}
                textColor={Colors.BACKGROUND}
                hoverColor={Colors.SECONDARY}
              ></Button>
            </div>
          ) : (
            <a className="linkHover" key={link.id} style={styles.link} href={link.url}>
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
