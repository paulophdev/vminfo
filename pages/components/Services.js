import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Imagem01 from "../../img/icons/01.png";
import Imagem02 from "../../img/icons/02.png";
import Imagem03 from "../../img/icons/03.png";
import Imagem04 from "../../img/icons/04.png";

export default function Services() {
  return (
    <Container>
      <h1 className="title-section">Serviços</h1>
      <p className="text-section">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Row>
        <Col lg={3} sm={6}>
          <Image src={Imagem01} alt="Formatação" />
          <h4 className="subtitle-section">Formatação</h4>
          <p className="text-section">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </Col>
        <Col lg={3} sm={6}>
          <Image src={Imagem02} alt="Manutenção" />
          <h4 className="subtitle-section">Manutenção</h4>
          <p className="text-section">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </Col>
        <Col lg={3} sm={6}>
          <Image src={Imagem03} alt="Limpeza" />
          <h4 className="subtitle-section">Limpeza</h4>
          <p className="text-section">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </Col>
        <Col lg={3} sm={6}>
          <Image src={Imagem04} alt="Montagem" />
          <h4 className="subtitle-section">Montagem</h4>
          <p className="text-section">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </Col>
      </Row>
    </Container>
  );
}
