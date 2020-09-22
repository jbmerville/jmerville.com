import React, { useState } from 'react';

import {
  Icon,
  Link,
  Styles
} from 'types';
import { Colors } from 'values';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledText from './StyledText';

interface ButtonProps {
  background?: {
    offHoverColor: Colors;
    onHoverColor: Colors;
  };
  text: {
    link: Link;
    color: Colors;
  };
  icon?: Icon;
  showShadow?: boolean;
  showShadowHover?: boolean;
  onClick?: Function;
}

const defaultProps = {
  background: {
    offHoverColor: Colors.PRIMARY,
    onHoverColor: Colors.SECONDARY,
  },
  showShadow: false,
  showShadowHover: true,
};

const Button = (props: ButtonProps & typeof defaultProps) => {
  const { icon, text, background, showShadow, showShadowHover, onClick } = props;
  const { offHoverColor, onHoverColor } = background;
  const { link, color } = text;

  const [isHover, setIsHover] = useState(false);
  let styles: Styles = {
    button: {
      verticalAlign: 'middle',
      textAlign: 'center',
      padding: '10px 14px',
      fontSize: '1em',
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: color,
      background: isHover ? onHoverColor : offHoverColor,
      letterSpacing: '.025em',
      borderRadius: '4px',
      width: '110px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
    icon: {
      marginRight: '10px',
      display: 'inline-block',
      fontSize: icon && icon.size ? icon.size : '20px',
      textAlign: 'center',
      verticalAlign: 'middle',
      color: color,
    },
  };
  return (
    <a
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      href={link.url}
      style={styles.button}
      onClick={() => onClick}
    >
      {icon && (
        <div style={styles.icon}>
          <FontAwesomeIcon icon={icon.fontAwesomeIcon} size="lg" />
        </div>
      )}
      <StyledText color={color} style="BUTTON">
        {link.label.toUpperCase()}
      </StyledText>
    </a>
  );
};

Button.defaultProps = defaultProps;

export default Button;
