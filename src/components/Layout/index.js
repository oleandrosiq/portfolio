import { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../Home';
import { About } from '../About';
import { Portfolio } from '../Portfolio';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../../styles/global';

import { MyThemeContext } from '../../contexts/MyThemeContext';

export function Layout() {
  const { theme } = useContext(MyThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}