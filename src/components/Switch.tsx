import React, { useState } from 'react';

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
  const [isOn, setIsOn] = useState(isDefaultOn);
  const { toggle, isLight } = useTheme();
  const styles: Styles = {
    outerContainer: {
      width: '160px',
      height: '50px',
      background: adjustColor(isOn ? off.color : on.color, isOn ? 10 : -10),
      borderRadius: '5px',
    },
    toggle: {
      height: '-webkit-fill-available',
      width: '50%',
      borderRadius: '5px',
      background: isOn ? off.color : on.color,
      zIndex: 2,
      transition: '0.2s ease-in',
      marginLeft: isOn ? '50%' : '0px',
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
      color: isOn ? Colors.BACKGROUND : Colors.TEXT,
      zIndex: 3,
    },
    leftContainer: {
      padding: '15px',
      cursor: 'pointer',
    },
    rightContainer: {
      padding: '10px',

      cursor: 'pointer',
    },
  };

  const onToggle = (isOn: boolean) => {
    // if clicked on the toggle that is currently set => do nothing
    if ((isOn && isLight) || (!isOn && !isLight)) {
      return;
    }
    toggle();
    setIsOn(isOn);
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.toggle}></div>
      <div style={styles.textContainer}>
        <div style={styles.leftContainer} onClick={() => onToggle(false)}>
          {on.text}
        </div>
        <div style={styles.rightContainer} onClick={() => onToggle(true)}>
          {off.text}
        </div>
      </div>
    </div>
  );
};

export default Switch;
