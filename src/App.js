import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import { usePersistedTheme } from './utils/usePersistedTheme';

export function App() {
  const [theme, setTheme] = usePersistedTheme('theme:portfolio', dark);

  function toggleTheme() {
    setTheme(theme.title === "dark" ? light : dark);
  }

  return ( 
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home toggleTheme={toggleTheme} />
          </Route>
          <Route path="/about">
            <About toggleTheme={toggleTheme} />
          </Route>
          <Route path="/portfolio">
            <Portfolio toggleTheme={toggleTheme} />
          </Route>
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}