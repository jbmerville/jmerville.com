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
}

const defaultProps = {
  horizontal: 'ZERO',
  vertical: 'ZERO',
};

const Margin = (props: MarginProps & typeof defaultProps) => {
  const [width] = useWindowSize();
  const { horizontal, vertical, children, left, right, top, bottom } = props;
  const margins = {
    top: adjustMarginFromScreenSize(width, MARGIN_VALUE[top ? top : vertical]).VERTICAL,
    bottom: adjustMarginFromScreenSize(width, MARGIN_VALUE[bottom ? bottom : vertical]).VERTICAL,
    left: adjustMarginFromScreenSize(width, MARGIN_VALUE[left ? left : horizontal]).HORIZONTAL,
    right: adjustMarginFromScreenSize(width, MARGIN_VALUE[right ? right : horizontal]).HORIZONTAL,
  };
  const style: Style = {
    margin: `${margins.top}px ${margins.right}px ${margins.bottom}px ${margins.left}px`,
    width: 'fit-content',
    height: 'fit-content',
    display: 'inline-block',
  };

  return <div style={style}>{children}</div>;
};

Margin.defaultProps = defaultProps;

export default Margin;
