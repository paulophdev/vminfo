import GlobalStyle from "../styles/global";
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultTheme from "../styles/themes/default";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
