import React from 'react';

import { useTheme } from 'hooks';
import ReactGA from 'react-ga';
import { Styles } from 'types';
import { Colors } from 'values';

import {
  faCircle,
  faMoon
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ToggleProps {
  onText: string;
  offText: string;
}

const Toggle = (props: ToggleProps) => {
  const { toggle, isLight, theme } = useTheme();
  const borderRadius = '50px';

  const styles: Styles = {
    outerContainer: {
      width: '100px',
      height: '40px',
      background: theme.highlight,
      borderRadius,
    },
    toggle: {
      height: '-webkit-fill-available',
      width: '50%',
      borderRadius,
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
      top: '-40px',
      justifyContent: 'space-around',
      color: Colors.WHITE,
      zIndex: 3,
      cursor: 'pointer',
    },
    leftContainer: {
      padding: '10px',
      color: isLight ? Colors.WHITE : Colors.ORANGE,
    },
    rightContainer: {
      padding: '10px',
      color: isLight ? Colors.YELLOW : Colors.WHITE,
    },
  };

  const onToggleClick = () => {
    toggle();
    ReactGA.event({
      category: 'Button',
      action: 'Toggle',
      label: 'ToggleTheme',
    });
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.toggle}></div>
      <div style={styles.textContainer} onClick={onToggleClick}>
        <div style={styles.leftContainer}>
          <FontAwesomeIcon icon={faCircle} size="lg" />
        </div>
        <div style={styles.rightContainer}>
          <FontAwesomeIcon icon={faMoon} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default Toggle;
