import React, { ReactNode } from 'react';

import { useWindowSize } from 'hooks';
import { Style } from 'types';
import { adjustMarginFromScreenSize } from 'utils';
import {
  MARGIN_VALUE,
  MarginType
} from 'values';

interface MarginProps {
  horizontal?: MarginType;
  vertical?: MarginType;
  left?: MarginType;
  right?: MarginType;
  top?: MarginType;
  bottom?: MarginType;
  children: ReactNode;
  size?: 'fit-content' | '100%';
  display?: 'block' | 'inline-block';
}

const defaultProps = {
  horizontal: 'ZERO',
  vertical: 'ZERO',
  size: 'fit-content',
  display: 'block',
};

const Margin = (props: MarginProps & typeof defaultProps) => {
  const [width] = useWindowSize();
  const { horizontal, vertical, children, left, right, top, bottom, size, display } = props;
  const margins = {
    // Override veritcal and horizontal values if top/bottom/left/right are specified.
    top: adjustMarginFromScreenSize(width, MARGIN_VALUE[top ? top : vertical]).VERTICAL,
    bottom: adjustMarginFromScreenSize(width, MARGIN_VALUE[bottom ? bottom : vertical]).VERTICAL,
    left: adjustMarginFromScreenSize(width, MARGIN_VALUE[left ? left : horizontal]).HORIZONTAL,
    right: adjustMarginFromScreenSize(width, MARGIN_VALUE[right ? right : horizontal]).HORIZONTAL,
  };
  const style: Style = {
    margin: `${margins.top}px ${margins.right}px ${margins.bottom}px ${margins.left}px`,
    width: size,
    height: size,
    display,
  };

  return <div style={style}>{children}</div>;
};

Margin.defaultProps = defaultProps;

export default Margin;
