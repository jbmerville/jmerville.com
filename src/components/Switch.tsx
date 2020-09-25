import React from 'react';

import { useTheme } from 'hooks';
import { Styles } from 'types';
import { adjustColor } from 'utils';
import { Colors } from 'values';

interface SwitchProps {
  on: {
    text: string;
    color: Colors;
  };
  off: {
    text: string;
    color: Colors;
  };
  isDefaultOn: boolean;
}

const Switch = (props: SwitchProps) => {
  const { on, off, isDefaultOn } = props;
  const { toggle, isLight } = useTheme();
  const styles: Styles = {
    outerContainer: {
      width: '160px',
      height: '50px',
      background: adjustColor(isLight ? off.color : on.color, isLight ? 10 : -10),
      borderRadius: '5px',
    },
    toggle: {
      height: '-webkit-fill-available',
      width: '50%',
      borderRadius: '5px',
      background: isLight ? off.color : on.color,
      zIndex: 2,
      transition: '0.2s ease-in',
      marginLeft: isLight ? '50%' : '0px',
    },
    textContainer: {
      userSelect: 'none',
      display: 'flex',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      position: 'relative',
      top: '-50px',
      justifyContent: 'space-around',
      color: isLight ? Colors.BACKGROUND : Colors.TEXT,
      zIndex: 3,
      cursor: 'pointer',
    },
    leftContainer: {
      padding: '15px',
    },
    rightContainer: {
      padding: '10px',
    },
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.toggle}></div>
      <div style={styles.textContainer} onClick={toggle}>
        <div style={styles.leftContainer}>{on.text}</div>
        <div style={styles.rightContainer}>{off.text}</div>
      </div>
    </div>
  );
};

export default Switch;
