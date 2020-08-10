import React, { useState } from 'react';

import CSS from 'csstype';
import {
  Colors,
  Paddings
} from 'values';

import { LINKS } from './header-config';

interface Styles {
  button: CSS.Properties;
  menu: CSS.Properties;
  cross: CSS.Properties;
  linkContainer: CSS.Properties;
  link: CSS.Properties;
}

const Hamburger = () => {
  const [isClicked, setIsClicked] = useState(false);

  let styles: Styles = {
    button: {
      position: 'absolute',
      top: '30px',
      right: '30px',
      zIndex: 100,
      color: Colors.PRIMARY,
      fontSize: '1.5em',
    },
    menu: {
      position: 'absolute',
      width: '-webkit-fill-available',
      height: 'fit-content',
      borderRadius: '4px',
      background: Colors.BACKGROUND,
      zIndex: isClicked ? 101 : -1,
      boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgb(50 50 93 / 51%) -1px 0px 100px -20px',
      margin: Paddings.PHONE.ALL,
      transformOrigin: '100% 0',
      transitionProperty: 'transform,opacity,-webkit-transform',
      transform: isClicked ? 'scale(1)' : 'scale(.95)',
      transition: '250ms',
      opacity: isClicked ? 1 : 0,
    },
    cross: {
      position: 'absolute',
      top: '0px',
      right: '0px',
      fontSize: '1.3em',
      zIndex: 200,
      padding: '20px',
      color: Colors.GRAY_DARK,
    },
    linkContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      justifyContent: 'center',
    },
    link: {
      textTransform: 'uppercase',
      textAlign: 'center',
      textDecoration: 'none',
      color: Colors.SECONDARY,
      letterSpacing: '.025em',
      verticalAlign: 'middle',
      fontSize: '18px',
      transition: 'all .15s ease',
      padding: '10px 0',
      borderRadius: '4px',
    },
  };

  return (
    <>
      <div onClick={() => setIsClicked(true)} style={styles.button}>
        <i className="fa fa-bars" />
      </div>

      <div style={styles.menu}>
        <i onClick={() => setIsClicked(false)} className="fa fa-times" style={styles.cross} />
        <div style={styles.linkContainer}>
          {LINKS.map((link) => {
            return (
              <a
                key={link.id}
                style={{ background: link.isButton ? Colors.GRAY_LIGHT : '', ...styles.link }}
                href={link.url}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hamburger;
