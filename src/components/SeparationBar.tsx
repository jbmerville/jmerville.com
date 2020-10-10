import React from 'react';

import { useTheme } from 'hooks';
import { Style } from 'types';

const SeparationBar = () => {
  const { theme } = useTheme();
  const style: Style = {
    height: '3px',
    width: '120px',
    transitionDelay: '.1s',
    background: theme.accent,
  };

  return <div style={style}></div>;
};

export default SeparationBar;
