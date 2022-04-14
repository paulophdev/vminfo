import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background: ${(props) => props.theme.colors.light};
    }

    body, input,textarea, button, a {
        color: ${(props) => props.theme.colors.dark};
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyle;
