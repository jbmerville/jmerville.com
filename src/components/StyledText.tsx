import React from 'react';

import { Style } from 'types';
import {
  Colors,
  FontSize
} from 'values';

interface StyledTextProps {
  color: Colors;
  style: TextStyle;
  children: string | JSX.Element | Array<string | JSX.Element>;
}

export type TextStyle = 'DESCRIPTION' | 'TITLE' | 'SUBTITLE' | 'BUTTON';

const getCSSFromStyle = (style: TextStyle): Style => {
  switch (style) {
    case 'DESCRIPTION':
      return {
        fontSize: FontSize.M,
        lineHeight: FontSize.XL,
      };
    case 'TITLE':
      return {
        fontSize: FontSize.XXXL,
        lineHeight: FontSize.S,
        textTransform: 'uppercase',
        fontWeight: 'bold',
      };
    case 'SUBTITLE':
      return {
        fontSize: FontSize.XL,
        lineHeight: FontSize.XL,
      };
    case 'BUTTON':
      return {
        fontSize: FontSize.M,
        lineHeight: FontSize.XL,
        fontWeight: 'normal',
      };
    default:
      throw Error;
  }
};

const getStyle = (style: TextStyle, color: Colors): Style => {
  const textStyle = getCSSFromStyle(style);
  return { ...textStyle, color };
};

const StyledText = (props: StyledTextProps): JSX.Element => {
  const { color, style, children } = props;
  return <div style={getStyle(style, color)}>{children}</div>;
};

export default StyledText;
