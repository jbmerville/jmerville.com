import React, { ReactNode } from 'react';

import {
  ThemeContext,
  useEffectDarkMode
} from 'hooks';
import { Theme } from 'types';
import {
  darkTheme,
  lightTheme
} from 'values';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeState, setThemeState] = useEffectDarkMode();
  if (!themeState.hasThemeLoaded) {
    /*
      If the theme is not yet loaded we don't want to render
      this is just a workaround to avoid having the app rendering
      in light mode by default and then switch to dark mode while
      getting the theme state from localStorage
    */
    return <div />;
  }

  const getTheme = (isLight: boolean): Theme => {
    if (isLight) {
      return lightTheme;
    }
    return darkTheme;
  };

  const toggle = () => {
    // toogle function goes here
    const dark = !themeState.dark;
    localStorage.setItem('dark', JSON.stringify(dark));
    setThemeState({ ...themeState, dark });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: getTheme(!themeState.dark),
        toggle,
        isLight: themeState.dark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
