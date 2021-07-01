import { Link } from 'react-router-dom';
import { Container, Nav } from './styles';

export function Header({ home, about, potfolio }) {
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
            <Link to="/portfolio">Portfólio</Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
}