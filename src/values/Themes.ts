import { Theme } from 'types';

import Colors from './Colors';

export const themeLight: Theme = {
  background: Colors.BACKGROUND,
  primary: Colors.PRIMARY,
  secondary: Colors.SECONDARY,
  text: Colors.TEXT,
  card: Colors.GRAY_LIGHT,
  highlight: Colors.GRAY_DARK,
};
export const themeDark: Theme = {
  background: Colors.NIGHT,
  primary: Colors.BACKGROUND,
  secondary: Colors.SECONDARY,
  text: Colors.GRAY_LIGHT,
  card: Colors.PRIMARY,
  highlight: Colors.NIGHT,
};
