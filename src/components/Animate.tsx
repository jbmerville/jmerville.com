import React, { ReactNode } from 'react';

import { Style } from 'types';

type Direction = 'LEFT' | 'RIGHT' | 'TOP' | 'BOTTOM';
type Speed = '0.5x' | '1x' | '1.5x';
interface AnimateProps {
  direction: Direction;
  speed?: Speed;
  isVisible: boolean;
  children?: ReactNode;
  center?: boolean;
}

const getTransformFromAnimation = (direction: Direction | 'DEFAULT'): string => {
  switch (direction) {
    case 'TOP':
      return 'translateX(-100px)';
    case 'BOTTOM':
      return 'translateY(100px)';
    case 'LEFT':
      return 'translateX(-100px)';
    case 'RIGHT':
      return 'translateX(100px)';
    default:
      return 'translateY(0px)';
  }
};

const getTranstitionFromSpeed = (speed: Speed | 'DEFAULT'): string => {
  let transitionTime = '0.5s';
  switch (speed) {
    case '0.5x':
      transitionTime = '0.25s';
      break;
    case '1x':
      transitionTime = '0.5s';
      break;
    case '1.5x':
      transitionTime = '1s';
      break;
    default:
      transitionTime = '0.5s';
      break;
  }
  return `opacity ${transitionTime} cubic-bezier(0.215, 0.61, 0.355, 1) 0s, transform ${transitionTime} cubic-bezier(0.215, 0.61, 0.355, 1)`;
};

const Animate = (props: AnimateProps) => {
  const { direction, speed, isVisible, children, center } = props;
  const directionOrDefault = isVisible ? 'DEFAULT' : direction;
  const speedOrDefault = speed || 'DEFAULT';

  const style: Style = {
    opacity: isVisible ? 1 : 0,
    position: 'relative',
    transform: getTransformFromAnimation(directionOrDefault),
    transition: isVisible ? getTranstitionFromSpeed(speedOrDefault) : '',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: center ? 'center' : 'flex-start',
    flexFlow: 'column',
  };

  return <div style={style}>{children}</div>;
};

export default Animate;
