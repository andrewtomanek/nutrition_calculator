import { createGlobalStyle } from "styled-components";
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
  scroll-behavior: smooth;
}

body {
  background: var(--yellow);
  margin: 0;
  padding: 0;
  font-family: 'Alegreya Sans SC',monospace;
}

button {
font-family: 'Alegreya Sans',monospace;}

.item-enter {
  opacity: 0;
}
.item-enter-active {
  opacity: 1;
  transform: scale(1) translateY(0rem);
  transition: all 300ms ease-in-out;
}
.item-exit {
  transform: scale(1) translateY(0);
}
.item-exit-active {
  transition: all 300ms ease-in-out;
  transform: scale(0.97) translateY(-100vh);
}

.item-exit-done {
  transition: opacity 300ms ease-in-out;
  opacity: 0;
}

.login__input {
  font-size: 2rem;
  font-weight: 600;
  padding: 0.2rem;
  color: hsla(80, 100%, 30%, 1);
  border: 0.3rem solid var(--green);
}

.error__input {
  font-size: 2rem;
  font-weight: 600;
  padding: 0.2rem;
  color: red;
  border: 0.3rem solid red;
  background-color: #ffc9aa;
}

.alert-enter {
  opacity: 0;
  transform: scale(0.9);
}
.alert-enter-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 300ms, transform 300ms;
}
.alert-exit {
  opacity: 1;
}
.alert-exit-active {
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 300ms, transform 300ms;
}

.anim-left-enter {
  opacity: 0;
  transform: translateX(-100vw);
}
.anim-left-enter-active {
  opacity: 1;
  transform: translateX(0rem);
  transition: all 500ms ease-in-out;
}

.anim-right-enter {
  opacity: 0;
  transform: translateX(100vw);
}
.anim-right-enter-active {
  opacity: 1;
  transform: translateX(0rem);
  transition: all 500ms ease-in-out;
}

@keyframes floating-text {
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.2);
    text-shadow: 0 0 0.5em rgba(255, 255, 255, 0.4),
      0 0 0.2em rgba(0, 0, 0, 0.3), 0 0.5em 0.5em rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}

`;
export default GlobalStyle;
