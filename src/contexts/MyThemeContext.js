import { createContext } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

import { usePersistedTheme } from '../utils/usePersistedTheme';

export const MyThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
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