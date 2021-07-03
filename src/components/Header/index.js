import Switch from 'react-switch';
import { shade } from 'polished';

import { Link } from 'react-router-dom';
import { Container, Nav, NavMobile, MenuMobile } from './styles';

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export function Header({ home, about, portfolio, toggleTheme }) {
  const { title, colors } = useContext(ThemeContext);

  return (
    <Container>
      <a href="/">Leandrosiq1</a>

      <Nav>
        <ul>
          <li>
            { 
              home ? <Link to="/" className="active" >Início</Link> : <Link to="/">Início</Link>
            }
          </li>
          <li>
            { 
              about ? <Link to="/about" className="active" >Sobre</Link> : <Link to="/about">Sobre</Link>
            }
          </li>
          <li>
            { 
              portfolio ? <Link to="/portfolio" className="active">Portfólio</Link> : <Link to="/portfolio">Portfólio</Link>
            }
          </li>
          <Switch 
            onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            width={40}
            height={15}
            handleDiameter={20}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.shape}
          />
        </ul>
      </Nav>
    </Container>
  );
}