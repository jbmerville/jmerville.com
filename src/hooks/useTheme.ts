import {
  createContext,
  useContext
} from 'react';

import { themeLight } from 'values';

const defaultContextData = {
  theme: themeLight,
  toggle: () => {},
  isLight: true,
};

export const ThemeContext = createContext(defaultContextData);
const useTheme = () => useContext(ThemeContext);

export default useTheme;
