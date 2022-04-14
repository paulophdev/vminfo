import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *,input, button, textarea {
    font-family: 'Roboto', Sans-Serif;
  }
`;

export default GlobalStyle;
