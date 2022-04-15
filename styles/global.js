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

    .subtitle-section {
        color: ${(props) => props.theme.colors.primary};
        text-transform: uppercase;
    }

    .text-section {
        color: ${(props) => props.theme.colors.grey};
        text-transform: uppercase;
    }

    .title-section {
        text-transform: uppercase;
    }
`;

export default GlobalStyle;
