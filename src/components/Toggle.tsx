import React from 'react';

import { useTheme } from 'hooks';
import { Styles } from 'types';
import { Colors } from 'values';

interface ToggleProps {
  onText: string;
  offText: string;
}

const Toggle = (props: ToggleProps) => {
  const { onText, offText } = props;
  const { toggle, isLight, theme } = useTheme();
  const styles: Styles = {
    outerContainer: {
      width: '160px',
      height: '50px',
      background: theme.highlight,
      borderRadius: '5px',
    },
    toggle: {
      height: '-webkit-fill-available',
      width: '50%',
      borderRadius: '5px',
      background: theme.card,
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
      color: Colors.WHITE,
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
        <div style={styles.leftContainer}>{onText}</div>
        <div style={styles.rightContainer}>{offText}</div>
      </div>
    </div>
  );
};

export default Toggle;
