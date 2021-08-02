import { createContext, ReactNode } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

import { usePersistedTheme } from '../utils/usePersistedTheme';

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const MyThemeContext = createContext({});

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = usePersistedTheme('theme:portfolio', dark);

  function toggleTheme() {
    setTheme(theme.title === "dark" ? light : dark);
  }

  return (
    <MyThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </MyThemeContext.Provider>
  );
}