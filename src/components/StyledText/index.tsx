import React from 'react';

import { Style } from 'types';
import {
  Colors,
  FontSize
} from 'values';

interface StyledTextProps {
  color: Colors;
  style: TextStyle;
  children: string;
}

export enum TextStyle {
  DESCRIPTION,
  TITLE,
  SUBTITLE,
  BUTTON,
}

const getCSSFromStyle = (style: TextStyle): Style => {
  switch (style) {
    case TextStyle.DESCRIPTION:
      return {
        fontSize: FontSize.M,
        lineHeight: FontSize.XL,
      };
    case TextStyle.TITLE:
      return {
        fontSize: FontSize.XXXL,
        lineHeight: FontSize.S,
        textTransform: 'uppercase',
        fontWeight: 'bold',
      };
    case TextStyle.SUBTITLE:
      return {
        fontSize: FontSize.XXL,
        lineHeight: FontSize.XL,
        fontWeight: 'bold',
      };
    case TextStyle.BUTTON:
      return {
        fontSize: FontSize.M,
        lineHeight: FontSize.XL,
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
