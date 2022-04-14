import Link from "next/link";
import { Container, Content } from "../styles/404";

export default function Custom404() {
  return (
    <Container>
      <Content>
        <p>
          <b>404.</b> Página não encontrada.
        </p>
        <p>
          <Link href="/">
            <a>Voltar para a página princial.</a>
          </Link>
        </p>
      </Content>
    </Container>
  );
}
