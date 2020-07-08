import React from 'react';

import CSS from 'csstype';
import { ICard } from 'types';

import UseWindowSize from '../hooks/WindowSize';
import { Colors } from '../values';

interface Styles {
  buttonContainer: CSS.Properties;
  iconContainer: CSS.Properties;
  icon: CSS.Properties;
  buttonText: CSS.Properties;
  link: CSS.Properties;
}

interface ButtonProps {
  button: ICard.Button;
  isFirst?: Boolean;
}

const Button = (props: ButtonProps) => {
  const { button, isFirst } = props;
  const { text, link, icon } = button;
  const { fontAwesomeIcon, size } = icon;
  const [width] = UseWindowSize();

  const styles: Styles = {
    buttonContainer: {
      marginTop: isFirst ? '' : '40px',
      cursor: 'pointer',
      height: 'fit-content',
      width: 'fit-content',
      borderRadius: '4px',
    },
    iconContainer: {
      position: 'relative',
      float: 'left',
      display: 'table',
      height: '45px',
      width: '45px',
      marginLeft: '5px',
      borderRadius: '25px',
      backgroundColor: Colors.PURPLE_LIGHT,
    },
    icon: {
      fontSize: size ? size : '25px',
      display: 'table-cell',
      textAlign: 'center',
      verticalAlign: 'middle',
      color: Colors.FACEBOOK,
    },
    buttonText: {
      display: 'inline-block',
      position: 'relative',
      fontSize: '1.3em',
      padding: '10px',
      paddingRight: '20px',
      width: 'fit-content',
      color: Colors.PRIMARY,
    },
    link: {
      position: 'relative',
      height: 'fit-content',
      width: 'fit-content',
      display: 'block',
    },
  };

  // Mobile style
  if (width < 600) {
    styles.buttonText = {
      display: 'inline-block',
      position: 'relative',
      fontSize: '1em',
      padding: '10px',
      paddingRight: '15px',
      width: 'fit-content',
      color: Colors.PRIMARY,
    };
    styles.buttonContainer = {
      marginTop: isFirst ? '' : '20px',
      cursor: 'pointer',
      height: 'fit-content',
      width: 'fit-content',
      borderRadius: '4px',
    };
  }
  return (
    <a style={styles.link} href={link}>
      <div className="button" style={styles.buttonContainer}>
        <div style={styles.iconContainer}>
          <i style={styles.icon} className={fontAwesomeIcon}></i>
        </div>
        <div className="buttonText" style={styles.buttonText}>
          {text}
        </div>
      </div>
    </a>
  );
};

export default Button;
