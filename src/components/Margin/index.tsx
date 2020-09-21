import React from 'react';

import UseWindowSize from 'hooks/WindowSize';
import { Style } from 'types';
import { adjustMarginFromScreenSize } from 'utils';
import {
  MARGIN_VALUE,
  MarginType
} from 'values';

interface MarginProps {
  horizontal: MarginType;
  vertical: MarginType;
  children: string | JSX.Element | Array<JSX.Element | string>;
}

const Margin = (props: MarginProps) => {
  const [width] = UseWindowSize();
  const { horizontal, vertical, children } = props;
  const marginHorizontal = adjustMarginFromScreenSize(width, MARGIN_VALUE[horizontal]);
  const marginVeritcal = adjustMarginFromScreenSize(width, MARGIN_VALUE[vertical]);
  const style: Style = {
    margin: `${marginVeritcal.VERTICAL} ${marginHorizontal.HORIZONTAL}`,
  };

  return <div style={style}>{children}</div>;
};

export default Margin;
