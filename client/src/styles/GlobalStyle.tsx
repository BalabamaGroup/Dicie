import 'typeface-nunito';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html,
body {
    padding: 0;
    margin: 0;
}

body {
  font-family: "Nunito", sans-serif; 
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
  /* user-select: none; */
  -webkit-tap-highlight-color: transparent;
}
`;

export default GlobalStyle;