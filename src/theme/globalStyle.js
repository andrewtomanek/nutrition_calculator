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

.item__list {
  display: grid;
  grid-gap: 2rem 0.5rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(auto-fill, minmax(50vh, 1fr));
  align-items: center;
  align-content: space-between;
  justify-content: space-between;
  background-color: var(--orange);
  padding: 1rem;
  max-width: 90vw;
}

.item__container {
    display: grid;
    grid: 2fr 1fr / 1fr;
    align-items: center;
    align-content: space-between;
    justify-content: space-between;
    background-color: var(--green);
    box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.15);
    border-radius: 0.3rem;
    height: 100%;
    width: 100%;
  }

  .item__controls {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-content: end;
  justify-content: center;
  grid-area: 2 / 1 / 3 / 1;
  z-index: 4;
  height: 100%;
  width: 100%;
  font-size: 1rem;
  font-weight: 900;
  color: #fff;
}

.item__button {
  padding: 0.3rem 1rem;
  font-size: 1rem;
  font-weight: 900;
  background-color: var(--green);
  color: #fff;
  z-index: 4;
  transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

.item__button:hover {
  color: var(--green);
  background-color: white;
}

.item__button-green {
  padding: 0.3rem 0.1rem;
  font-size: 2rem;
  font-weight: 900;
  background-color: var(--green);
color: hsla(24, 70%, 50%, 1);
  z-index: 4;
  transition: all 200ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

.item__button-green:hover {
  color: var(--green);
  background-color: hsla(24, 70%, 50%, 1);
}

.item__button-red {
  padding: 0.3rem 0.1rem;
  font-size: 2rem;
  font-weight: 900;
  background-color: var(--green);
  color: red;
  z-index: 4;
  transition: all 400ms cubic-bezier(0.215, 0.61, 0.355, 1);
}

.item__button-red:hover {
  background-color: red;
  color: var(--green);
}

.item__input {
  width: 80%;
  margin: 0;
  padding: 0.1rem 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  background-color: var(--green);
  color: #fff;
}

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

.bar__panel {
  margin: 0;
  padding: 0.2rem 0rem;
  width: 95%;
  background-color: hsla(54, 60%, 70%, 1);
  border-radius: 0rem 0rem 0.3rem 0.3rem;
}

.bar__item {
  display: grid;
  align-content: center;
  justify-content: center;
  grid: 1fr / 1fr;
  height: 4vh;
  width: 100%;
  z-index: 2;
  border-bottom: 0.2rem solid white;
  overflow: hidden;
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