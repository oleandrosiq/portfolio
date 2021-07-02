import { Header } from '../../components/Header';
import { Message } from '../../components/Message';
import { 
  Container, 
  BoxAbout, 
  BoxImage, 
  Content, 
  Languages,
} from './styles';

import htmlImg from '../../assets/images/html.svg';
import cssImg from '../../assets/images/css.svg';
import scssImg from '../../assets/images/scss.svg';
import javascriptImg from '../../assets/images/javascript.svg';
import reactImg from '../../assets/images/react.svg';
import mongoImg from '../../assets/images/mongo.svg';
import sqlImg from '../../assets/images/sql.svg';

import githubImg from '../../assets/images/github.svg';
import linkedinImg from '../../assets/images/linkedin.svg';
import gmail from '../../assets/images/gmail.svg';
import whatsappImg from '../../assets/images/whatsapp.svg';

export function About({ toggleTheme }) {
  return (
      <Container>
        <Header about toggleTheme={toggleTheme} />
        <Message text="😇 Um pouco sobre mim" />

        <BoxAbout>
          <BoxImage>
            <img src="https://github.com/leandrosiq1.png" />
            <nav>
              <ul>
                <li>
                  <a target="_blank" href="https://github.com/leandrosiq1">
                    <img src={githubImg} />
                  </a>
                </li>

                <li>
                  <a target="_blank" href="https://www.linkedin.com/in/leandrosiq1/">
                    <img src={linkedinImg} />
                  </a>
                </li>

                <li>
                  <a target="_blank" href="mailto:le_kts12@hotmail.com">
                    <img src={gmail} />
                  </a>
                </li>

                <li>
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=5519999669175">
                    <img src={whatsappImg} />
                  </a>
                </li>
              </ul>
            </nav>
          </BoxImage>

          <Content>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
              <br />
              <br />
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
            </p>

            <Languages>
              <ul>
                <li>
                  <img src={htmlImg} />
                </li>
                <li>
                  <img src={cssImg} />
                </li>
                <li>
                  <img src={scssImg} />
                </li>
                <li>
                  <img src={javascriptImg} />
                </li>
                <li>
                  <img src={reactImg} />
                </li>
                <li>
                  <img src={mongoImg} />
                </li>
                <li>
                  <img src={sqlImg} />
                </li>
              </ul>
            </Languages>
            <span>
              "🚀 quando seu superior passa uma tarefa para você... veja isso como uma oportunidade de fazer a diferença!"
            </span>
          </Content>
        </BoxAbout>
      </Container>
  );
}