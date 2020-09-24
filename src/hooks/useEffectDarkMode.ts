import {
  useEffect,
  useState
} from 'react';

const defaultContextData = {
  isLight: false,
  toggle: () => {},
};

interface ThemeState {
  dark: boolean;
  hasThemeLoaded: boolean;
}

const useStateDarkMode = () => {
  const [themeState, setThemeState] = useState<ThemeState>({
    dark: false,
    hasThemeLoaded: false,
  });
  useEffect(() => {
    const lsDark = localStorage.getItem('dark') === 'true';
    setThemeState({ ...themeState, dark: lsDark, hasThemeLoaded: true });
  }, []);

  return [themeState, setThemeState] as const;
};

export default useStateDarkMode;
