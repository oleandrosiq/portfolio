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
  }

  :root {
    --color-background: #121214;
    --color-green: #04d361;
    --color-red: #ce4a4a;
    --color-orange: #ff7a29;
    --color-yellow: #FFCD1E;
    --color-secondary: #e1e1e6;
    --color-shape: #202024;
    --color-shape-hover: #29292e;
    --color-icons: #41414d;
    --color-borders: #323238;
    --color-black: #09090a;
    --color-white: #fff;
    --color-purple: #8257e6;
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