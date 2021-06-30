import { Container, Message, Main, Content, Image, Buttons } from './styles';
import { Header } from '../Header';

export function Home() {
  return (
    <Container>
      <Header />
      <Message>
        👋 Bem-vindo(a) ao meu Portfólio
      </Message>
      <Main>
        <Content>
          <h1>Leandro Henrique</h1>
          <h2>Desenvolvedor Front-End Jr.</h2>

          <p>
            👨‍💻 Um Desenvolvedor apaixonado por tecnologia, que pretende mudar a vida de milhares de pessoas através dela.
          </p>

          <Buttons>
            <a href="">Curriculo</a>

            <a href="">Github</a>
          </Buttons>
        </Content>
      
        <Image />
      </Main>
    </Container>
  );
}