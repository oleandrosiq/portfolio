import { Header } from '../Header';
import { Message } from '../Message';
import { Container, Cards } from './styles';

export function Portfolio() {
  return (
    <Container>
      <Header portfolio />
      <Message text="🥰 Espero que goste de" subText="meus projetos!" />
      <Cards>

      </Cards>
    </Container>
  );
}