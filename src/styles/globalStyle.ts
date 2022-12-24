import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  
  a, button {
    color: inherit;
    text-decoration: none;
    outline: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
  }
  
  body {
    background-color: ${({ theme }: { theme: Theme }) => theme.background};
    transition: background-color 0.25s linear;
    width: 100%;

    div#__next {
      width: 100%;
      min-height: 100vh - 75px;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow-x: hidden;
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }: { theme: Theme }) => theme.altSecondaryColor};
    transition: background 0.25s linear;
  }
`;

export default GlobalStyle;