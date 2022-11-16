import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
}

body {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
  font-family: "Inter";
  transition: all 0.2s ease-in-out;
}
`;

export default GlobalStyle;
