import { Link } from 'react-router-dom';
import { Container, Message, Nav } from './styles';

export function Header() {
  return (
    <Container>
      <a href="/">Leandrosiq1</a>

      <Nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfólio</Link>
          </li>
        </ul>
      </Nav>
    </Container>
  );
}