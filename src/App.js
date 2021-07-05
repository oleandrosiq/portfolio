import { Layout } from './components/Layout';
import { ThemeContextProvider } from './contexts/MyThemeContext';

export function App() {
  return ( 
    <ThemeContextProvider>
      <Layout />
    </ThemeContextProvider>
  );
}