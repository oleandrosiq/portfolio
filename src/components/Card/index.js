import { 
  Container, 
  BoxImage, 
  Content, 
  Links,
  Languages,
  Description,
} from './styles';

import externalImg from '../../assets/images/external.svg';
import githubImg from '../../assets/images/github.svg';

export function Card({ image, title, description, urlProject, urlGithub, languages }) {
  return (
    <Container>
      <BoxImage>
        <img src={image} alt={title} />
      </BoxImage>

      <Content>
        <h1>{title}</h1>
               
        <Description>
          <p>
            {description}
          </p>
        </Description>

        <Links>     
          <p>LINKS</p>
          <ul>
            <li>
              <a target="_blank" rel="noreferrer" href={urlProject} title="Visitar Projeto">
                <img src={externalImg} alt="Visitar Projeto" />
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href={urlGithub} title="Visitar Github do projeto">
                <img src={githubImg} alt="Visitar Github do projeto" />
              </a>
            </li>
          </ul>
          <Languages>
            {languages}
          </Languages>
        </Links>

      </Content>
    </Container>
  );  
}