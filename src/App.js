import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';

import { GlobalStyle } from './styles/global';

export function App() {
  return ( 
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}