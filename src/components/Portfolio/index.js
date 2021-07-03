import { Header } from '../Header';
import { Message } from '../Message';
import { Card } from '../Card';

import { Container, Cards } from './styles';

export function Portfolio({ toggleTheme }) {
  const projects = [
    {
      title: "Página Slick",
      description: "landing page desenvolvida para praticar a construção de um layout, Aprendi bastante sobre Flex-box.",
      image: "https://media.discordapp.net/attachments/803759044463558727/860491868072706058/unknown.png?width=1407&height=630",
      urlProject: "https://slick1.netlify.app/",
      urlGithub: "https://github.com/leandrosiq1/slick",
      languages: "html, scss",
    },
    {
      title: "Página Carfix",
      description: "landing page desenvolvida para praticar a construção de um layout e um carrosel, aprendi a fazer um carrosel com javascript puro.",
      image: "https://media.discordapp.net/attachments/803759044463558727/860495191965433856/unknown.png?width=1226&height=630",
      urlProject: "https://carfixx.netlify.app/",
      urlGithub: "https://github.com/leandrosiq1/carfix",
      languages: "html, css, javascript",
    },
    {
      title: "Página merca.finance",
      description: "Projeto desenvolvido para pratica de Javascript, eu peguei como base o dev.finance da rocketseat e adicionei novas funções, projeto que eu mais aprendi sobre javascript!.",
      image: "https://media.discordapp.net/attachments/803759044463558727/860496300646858752/unknown.png?width=1239&height=630",
      urlProject: "https://mercafinance.netlify.app/",
      urlGithub: "https://github.com/leandroSiq1/omni",
      languages: "html, scss, javascript",
    },
    {
      title: "Página Stack.it",
      description: "Projeto desenvolvido para pratica de html e css",
      image: "https://media.discordapp.net/attachments/803759044463558727/860506006240886804/unknown.png?width=1267&height=630",
      urlProject: "https://staack-it.netlify.app/",
      urlGithub: "https://github.com/leandroSiq1/stack.it",
      languages: "html, css",
    },
    {
      title: "Twitter Clone",
      description: "Projeto desenvolvido com auxilio do video da rocketseat, Aprendi muito sobre styled-components, responsividade e contrução de layout utilizando essa ferramenta.",
      image: "https://media.discordapp.net/attachments/803759044463558727/860507463051509780/unknown.png?width=1248&height=630",
      urlProject: "https://siqclone-twitter.netlify.app/",
      urlGithub: "https://github.com/leandroSiq1/twitter-clone",
      languages: "React js",
    },
    {
      title: "Letmeask",
      description: "Projeto desenvolvido na NLW da rocketseat, aprendi sobre Context API, autenticação com o firebase e oque eu mais adorei foi aprender a criar meus propios hooks quando eu percebo que vou utilizar a mesma funcionaliade diversas vezes na minha aplicação. ",
      image: "https://media.discordapp.net/attachments/803759044463558727/860516752163995678/unknown.png?width=1244&height=630",
      urlProject: "https://letmeask-5851f.web.app/",
      urlGithub: "https://github.com/leandroSiq1/letmeask",
      languages: "Typescript, javascript, scss, html, css",
    },
  ];

  return (
    <Container>
      <Header portfolio toggleTheme={toggleTheme} />
      <Message text="🥰 Espero que goste de" subText="meus projetos!" />
      <Cards>
        { projects.map(project => {
          return (
            <Card 
              title={project.title}
              description={project.description}
              image={project.image}
              urlProject={project.urlProject}
              urlGithub={project.urlGithub}
              languages={project.languages}
            />
          )
        }) }
      </Cards>
    </Container>
  );
}