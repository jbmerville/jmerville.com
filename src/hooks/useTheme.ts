import {
  createContext,
  useContext
} from 'react';

import { lightTheme } from 'values';

const defaultContextData = {
  theme: lightTheme,
  toggle: () => {},
  isDark: true,
};

export const ThemeContext = createContext(defaultContextData);
const useTheme = () => useContext(ThemeContext);

export default useTheme;
