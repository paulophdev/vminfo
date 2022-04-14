import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Imagem01 from "../../img/gallery/01.jpg";
import Imagem02 from "../../img/gallery/02.jpg";
import Imagem03 from "../../img/gallery/03.jpg";
import Imagem04 from "../../img/gallery/04.jpg";
import Imagem05 from "../../img/gallery/05.jpg";

export default function Gallery() {
  return (
    <Container>
      <h1 className="title-section">Galeria</h1>
      <Row>
        <Col lg={3} sm={6}>
          <figure>
            <Image src={Imagem01} alt="Imagem01" />
            <figcaption>Texto</figcaption>
          </figure>
        </Col>
        <Col lg={3} sm={6}>
          <figure>
            <Image src={Imagem02} alt="Imagem02" />
            <figcaption>Texto</figcaption>
          </figure>
        </Col>
        <Col lg={3} sm={6}>
          <figure>
            <Image src={Imagem03} alt="Imagem03" />
            <figcaption>Texto</figcaption>
          </figure>
        </Col>
        <Col lg={3} sm={6}>
          <figure>
            <Image src={Imagem04} alt="Imagem04" />
            <figcaption>Texto</figcaption>
          </figure>
        </Col>
        <Col lg={3} sm={6}>
          <figure>
            <Image src={Imagem05} alt="Imagem05" />
            <figcaption>Texto</figcaption>
          </figure>
        </Col>
      </Row>
    </Container>
  );
}
