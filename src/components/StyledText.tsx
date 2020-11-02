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
  textAlign?: 'left' | 'right' | 'justify' | 'match-parent';
}
const defaultProps = {
  bold: false,
  textAlign: 'match-parent',
};

export type TextStyle = 'PARAGRAPH' | 'TITLE' | 'SUBTITLE' | 'BUTTON' | 'UNDERTEXT' | 'DESCRIPTION';

const StyledText = (props: StyledTextProps & typeof defaultProps): JSX.Element => {
  const { color, styleType, children, textAlign, isError, isLoading, bold } = props;

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

  const getStyle = (color: Colors): Style => {
    const textStyle = getCSSFromStyle(styleType);
    return { ...textStyle, color, fontWeight: bold ? 'bold' : 'normal', textAlign };
  };

  if (isLoading) {
    return <div style={getStyle(Colors.ORANGE)}>Loading...</div>;
  }
  if (isError) {
    return <div style={getStyle(Colors.RED)}>Error loading data.</div>;
  }
  return <div style={getStyle(color)}>{children}</div>;
};

StyledText.defaultProps = defaultProps;

export default StyledText;
