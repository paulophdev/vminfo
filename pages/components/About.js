import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Imagem01 from "../../img/slide/1.jpg";

export default function About() {
  return (
    <Container>
      <h1 className="title-section">Sobre Mim</h1>
      <Row>
        <Col>
          <Image src={Imagem01} alt="Perfil" />
        </Col>
        <Col>
          <h4 className="subtitle-section">Formatação</h4>
          <p className="text-section">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
