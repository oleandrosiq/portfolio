import { Link } from 'react-router-dom';
import { Container, Message, Main, Content, Image, Buttons, Wrapper } from './styles';
import { Header } from '../Header';

import whatsappImg from '../../assets/images/whatsapp.svg';

export function Home() {
  return (
    <Container>
      <Header home />
      <Message>
        👋 Bem-vindo(a) ao meu Portfólio
      </Message>

      <Wrapper>
        <Main>
          <Content>
            <h1>Leandro Henrique</h1>
            <h2>Desenvolvedor Front-End Jr.</h2>

            <p>
              👨‍💻 Um Desenvolvedor apaixonado por tecnologia, que pretende mudar a vida de milhares de pessoas através dela.
            </p>

            <Buttons>
              <Link target="_blank" to="https://cdn.discordapp.com/attachments/766834970131169291/859910428938469446/curriculo-leandro.pdf">
                Curriculo
              </Link>

              <Link target="_blank" href="https://github.com/leandrosiq1">
                Github
              </Link>
            </Buttons>
          </Content>
        
          <Image />
        </Main>
      </Wrapper>
    </Container>
  );
}