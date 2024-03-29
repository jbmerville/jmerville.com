import React, { useEffect, useState } from 'react';

import { useTheme } from 'hooks';
import { Icon, Styles } from 'types';
import { Colors } from 'values';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledText from './StyledText';

interface ButtonProps {
  background?: {
    offHoverColor: Colors;
    onHoverColor: Colors;
  };
  text: string;
  url?: string;
  icon?: Icon;
  showShadow?: boolean;
  showShadowHover?: boolean;
  onClick?: Function;
  popUp?: string;
}

const defaultProps = {
  showShadow: false,
  showShadowHover: true,
};

const Button = (props: ButtonProps & typeof defaultProps) => {
  const { icon, text, background, showShadow, showShadowHover, onClick, url, popUp } = props;

  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (isPopUpVisible) {
      setTimeout(() => {
        setIsPopUpVisible(false);
      }, 3000);
    }
  }, [isPopUpVisible]);

  const offHoverColor = background ? background.offHoverColor : theme.highlight;
  const onHoverColor = background ? background.onHoverColor : theme.secondary;

  const styles: Styles = {
    button: {
      height: '50px',
      verticalAlign: 'middle',
      textAlign: 'center',
      cursor: 'pointer',
      fontSize: '1em',
      textDecoration: 'none',
      textTransform: 'uppercase',
      background: isHover ? onHoverColor : offHoverColor,
      letterSpacing: '.025em',
      borderRadius: '4px',
      width: '130px',
      display: 'inline-block',
      boxShadow: isHover
        ? showShadowHover || showShadowHover === undefined
          ? '0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)'
          : ''
        : showShadow || showShadow === undefined
        ? '0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)'
        : '',
      transition: 'all .15s ease',
      transform: isHover ? 'translateY(-1px)' : '',
    },
    innerContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    icon: {
      marginRight: '10px',
      display: 'inline-block',
      fontSize: icon && icon.size ? icon.size : '15px',
    },
    popUp: {
      position: 'absolute',
      background: theme.card,
      color: theme.text,
      padding: '10px 15px',
      borderRadius: '4px',
      zIndex: 100,
      top: '60px',
    },
    popUpArrow: {
      position: 'absolute',
      width: 0,
      height: 0,
      borderLeft: `8px solid transparent`,
      borderRight: `8px solid transparent`,
      borderBottom: `8px solid ${theme.card}`,
      top: '-7px',
      right: '60px',
    },
  };

  const ButtonContent = (
    <div style={styles.innerContainer}>
      {icon && (
        <div style={styles.icon}>
          <FontAwesomeIcon color={Colors.WHITE} icon={icon.fontAwesomeIcon} size="lg" />
        </div>
      )}
      <StyledText color={Colors.WHITE} styleType="BUTTON">
        {text.toUpperCase()}
      </StyledText>
    </div>
  );

  if (onClick) {
    return (
      <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} style={styles.button} onClick={() => onClick()}>
        {ButtonContent}
      </div>
    );
  }

  if (popUp) {
    return (
      <>
        <div
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          style={styles.button}
          onClick={() => setIsPopUpVisible(true)}
        >
          {ButtonContent}
        </div>
        {isPopUpVisible && (
          <div style={styles.popUp}>
            <div style={styles.popUpArrow}></div>
            {popUp}
          </div>
        )}
      </>
    );
  }
  return (
    <a onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} style={styles.button} href={url}>
      {ButtonContent}
    </a>
  );
};

Button.defaultProps = defaultProps;

export default Button;
