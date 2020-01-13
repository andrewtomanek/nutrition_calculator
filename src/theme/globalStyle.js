import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
:root {
  --green: hsla(80, 60%, 60%, 1);
  --orange: hsla(24, 90%, 80%, 1);
  --yellow: hsla(54, 90%, 80%, 1);
  font-size: calc(1vw + 1vh + 0.5vmin);
}

html {
  margin: 0;
  padding: 0;
}

body {
  background: var(--yellow);
  margin: 0;
  padding: 0;
  font-family: 'Alegreya Sans SC',monospace;
}

button {
font-family: 'Alegreya Sans',monospace;}
`;
export default GlobalStyle;