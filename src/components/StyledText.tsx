import React, { ReactNode } from 'react';

import { Style } from 'types';
import {
  Colors,
  FontSize
} from 'values';

interface StyledTextProps {
  color: Colors;
  styleType: TextStyle;
  children: ReactNode;
  isLoading?: boolean;
  bold?: boolean;
  isError?: boolean;
}
const defaultProps = {
  bold: false,
};

export type TextStyle = 'PARAGRAPH' | 'TITLE' | 'SUBTITLE' | 'BUTTON' | 'UNDERTEXT' | 'DESCRIPTION';

const getCSSFromStyle = (styleType: TextStyle): Style => {
  switch (styleType) {
    case 'PARAGRAPH':
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
      };
    case 'BUTTON':
      return {
        fontSize: FontSize.M,
        lineHeight: FontSize.XL,
        fontWeight: 'normal',
      };
    case 'UNDERTEXT':
      return {
        fontSize: FontSize.S,
        fontStyle: 'italic',
      };
    case 'DESCRIPTION':
      return {
        fontSize: FontSize.M,
        lineHeight: FontSize.L,
      };
    default:
      throw Error;
  }
};

const getStyle = (styleType: TextStyle, color: Colors, isBold: boolean): Style => {
  const textStyle = getCSSFromStyle(styleType);
  return { ...textStyle, color, fontWeight: isBold ? 'bold' : 'normal', textAlign: 'match-parent' };
};

const StyledText = (props: StyledTextProps & typeof defaultProps): JSX.Element => {
  const { color, styleType, children, isError, isLoading, bold } = props;
  if (isLoading) {
    return <div style={getStyle(styleType, Colors.ORANGE, bold)}>Loading...</div>;
  }
  if (isError) {
    return <div style={getStyle(styleType, Colors.RED, bold)}>Error loading data.</div>;
  }
  return <div style={getStyle(styleType, color, bold)}>{children}</div>;
};

StyledText.defaultProps = defaultProps;

export default StyledText;
