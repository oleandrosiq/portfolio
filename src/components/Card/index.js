import { useState } from 'react';
import { Container, Banner, Description, Title, Footer } from './styles';

import externalImg from '../../assets/images/external.svg';
import githubImg from '../../assets/images/github.svg';
import codeImg from '../../assets/images/code.svg';

export function Card({ image, title, description, urlProject, urlGithub, languages }) {
  const [isLanguages, setIsLanguages] = useState(false);

  function handleMouseOver() {
    setIsLanguages(!isLanguages);
  }

  return (
    <Container>
      <div className={`languages ${ isLanguages && 'active'}`}>
        <span>{languages}</span>
        <div className="box" />
      </div>

      <Banner>
        <img src={image} alt="Projeto" />
      </Banner>

      <Description>
        <Title>{title}</Title>
        <p>
          {description}
        </p>  

        <Footer>
          <ul>
            <li title="Visitar Projeto">
              <a target="_blank" rel="noreferrer" href={urlProject}>
                <img src={externalImg} alt="Link Externo" />
              </a>
            </li>
            <li title="Visualizar código do Projeto">
              <a target="_blank" rel="noreferrer" href={`${urlGithub}`}>
                <img src={githubImg} alt="Github" />
              </a>
            </li>
            <li onClick={() => handleMouseOver()} title="Visualizar Linguagens utilizadas no Projeto">
              <button href="">
                <img src={codeImg} alt="Código" />
              </button>
            </li>
          </ul>
        </Footer>
      </Description>
    </Container>
  );  
}