import { Link } from 'react-router-dom';
import { Container, Nav } from './styles';

export function Header({ home, about, portfolio }) {
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
        </ul>
      </Nav>
    </Container>
  );
}