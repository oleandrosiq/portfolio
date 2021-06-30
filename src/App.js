import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { GlobalStyle } from './styles/global';

export function App() {
  return ( 
    <BrowserRouter>
      <Route path="/" component={Home} />
      <GlobalStyle />
    </BrowserRouter>
  );
}