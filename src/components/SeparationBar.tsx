import React from 'react';

import { Style } from 'types';
import { Colors } from 'values';

interface SeparationBarProps {
  color?: Colors;
}

const SeparationBar = (props: SeparationBarProps) => {
  const { color } = props;

  const style: Style = {
    height: '3px',
    width: '120px',
    transitionDelay: '.1s',
    background: color ? color : Colors.SECONDARY,
  };

  return <div style={style}></div>;
};

export default SeparationBar;
