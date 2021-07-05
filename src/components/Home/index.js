
import { Container, Main, Content, Image, Buttons, Wrapper } from './styles';

import { Header } from '../Header';
import { Message } from '../Message';

export function Home() {
 
  return (
    <Container>
      <Header home />
      <Message text="👋 Bem-vindo(a) ao meu Portfólio" />
      
      <Wrapper>
        <Main>
          <Content>
            <h1>Leandro Henrique</h1>
            <h2>Desenvolvedor Front-End Jr.</h2>

            <p>
              👨‍💻 Um Desenvolvedor apaixonado por tecnologia, que pretende impactar a vida de milhares de pessoas através dela.
            </p>

            <Buttons>
              <a target="_blank" rel="noreferrer" href="https://cdn.discordapp.com/attachments/766834970131169291/860141330415616060/curriculo-leandro.pdf">
                Curriculo
              </a>

              <a target="_blank" rel="noreferrer" href="https://github.com/leandrosiq1">
                Github
              </a>
            </Buttons>
          </Content>
          
          <Image />
        </Main>
      </Wrapper>
    </Container>
  );
}