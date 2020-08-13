import React, { useState } from 'react';

import {
  Link,
  Styles
} from 'types';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ButtonProps {
  link: Link;
  backgrounColor: string;
  textColor: string;
  hoverColor: string;
  showShadow?: boolean;
  showShadowHover?: boolean;
  capitalize?: boolean;
  icon?: {
    fontAwesomeIcon: IconDefinition;
    size?: string;
  };
  size?: '0.8em' | '1em' | '1.2em';
  width?: string;
  onClick?: Function;
}

const Button = (props: ButtonProps) => {
  const { icon, size, link, backgrounColor, textColor, capitalize, hoverColor, showShadow, showShadowHover, width, onClick } = props;
  const [isHover, setIsHover] = useState(false);
  let styles: Styles = {
    button: {
      verticalAlign: 'middle',
      textAlign: 'center',
      padding: '13px 14px',
      fontSize: size ? size : '1em',
      textDecoration: 'none',
      textTransform: capitalize ? 'uppercase' : undefined,
      color: textColor,
      background: isHover ? hoverColor : backgrounColor,
      letterSpacing: '.025em',
      borderRadius: '4px',
      width: width ? width : 'fit-content',
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
      color: textColor,
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
      {link.label}
    </a>
  );
};

export default Button;
