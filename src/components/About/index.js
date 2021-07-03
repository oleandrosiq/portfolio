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
            <img src="https://github.com/leandrosiq1.png" alt="Github Leandrosiq1" />
            <nav>
              <ul>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://github.com/leandrosiq1">
                    <img src={githubImg} alt="Github" />
                  </a>
                </li>

                <li>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/leandrosiq1/">
                    <img src={linkedinImg} alt="Linkedin" />
                  </a>
                </li>

                <li>
                  <a target="_blank" rel="noreferrer" href="mailto:le_kts12@hotmail.com">
                    <img src={gmail} alt="Gmail" />
                  </a>
                </li>

                <li>
                  <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5519999669175">
                    <img src={whatsappImg} alt="Whatsapp" />
                  </a>
                </li>
              </ul>
            </nav>
          </BoxImage>

          <Content>
            <p>
              Desenvolvedor front-end Jr, atualmente venho estudando muito e me aprimorando a cada dia afim de me tornar um profissional competente e completo.
              <br />
              <br />
              Começei na área faz um pouco mais de 1 ano, nesse tempo eu estive estudando e focando somente nisso para trabalhar com o que eu amo que é Tecnologia, atualmente estou 
              focado em aprimorar e evoluir na ferramenta React JS, no momento estou fazendo o Ignite da Rocketseat.
              <br />
              Estou em busca da minha primeira oportunidade na área.
            </p>

            <Languages>
              <ul>
                <li>
                  <img src={htmlImg} alt="Ferramenta Html" />
                </li>
                <li>
                  <img src={cssImg} alt="Ferramenta Css" />
                </li>
                <li>
                  <img src={scssImg} alt="Ferramenta Sass" />
                </li>
                <li>
                  <img src={javascriptImg} alt="Ferramenta Javascript" />
                </li>
                <li>
                  <img src={reactImg} alt="Ferramenta React Js" />
                </li>
                <li>
                  <img src={mongoImg} alt="Ferramenta Mongo.db" />
                </li>
                <li>
                  <img src={sqlImg} alt="Ferramenta Sql" />
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