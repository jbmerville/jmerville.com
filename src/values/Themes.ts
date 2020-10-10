import { Theme } from 'types';

import Colors from './Colors';

export const lightTheme: Theme = {
  background: Colors.WHITE,
  primary: Colors.PRIMARY,
  secondary: Colors.SECONDARY,
  text: Colors.TEXT,
  card: Colors.GRAY_LIGHT,
  highlight: Colors.GRAY_DARK,
  accent: Colors.ORANGE,
};
export const darkTheme: Theme = {
  background: Colors.NIGHT,
  primary: Colors.WHITE,
  secondary: Colors.SECONDARY,
  text: Colors.GRAY_LIGHT,
  card: Colors.BLUE_DARK,
  highlight: Colors.GRAY_DARK,
  accent: Colors.YELLOW,
};
