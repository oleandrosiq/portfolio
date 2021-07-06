import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html {
    max-width: 100v2;
    max-height: 100vh;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,;
  }

  body {
    background: var(--color-background);
    color: var(--color-white);
    transition: background-color 1s ease-in-out;
  }

  :root {
    --color-background: ${props => props.theme.colors.background};
    --color-green: #04d361;
    --color-shape: #202024;
    --color-shape-hover: #29292e;
    --color-black: #09090a;
    --color-white: #fff;
    --color-scrollbar: #4d4d57;
    --color-scrollbar-background: transparent;
  }

  body::-webkit-scrollbar {
    width: 8px;
    background: var(--color-scrollbar-background);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: var(--color-scrollbar);
    outline: 1px solid var(--color-scrollbar);
  }
`;