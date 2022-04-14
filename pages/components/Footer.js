import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Facebook from "../../img/icons/facebook.png";
import Instagram from "../../img/icons/instagram.png";
import Whatsapp from "../../img/icons/whatsapp.png";
import Mark from "../../img/icons/mark.png";
import Mail from "../../img/icons/mail.png";
import Phone from "../../img/icons/phone.png";

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={4} sm={4}>
            <h1 className="title-section">
              <label>
                <span>VM</span>INFO<small>Assistência Técnica</small>
              </label>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <div>
              <a>
                <Image src={Facebook} alt="Facebook" />
              </a>
              <a>
                <Image src={Instagram} alt="Instagram" />
              </a>
              <a>
                <Image src={Whatsapp} alt="Whatsapp" />
              </a>
            </div>
          </Col>
          <Col lg={4} sm={4}>
            <h1 className="title-section">Menu</h1>
            <div>
              <a>Home</a>
              <a>Sobre</a>
              <a>Serviços</a>
              <a>Galeria</a>
              <a>Contato</a>
            </div>
          </Col>
          <Col lg={4} sm={4}>
            <h1 className="title-section">Informação</h1>
            <div>
              <a>
                <Image src={Mark} alt="Marcação" /> Rua Abelardo Gama, 58,
                Ribeira do Pombal, BA, 48400-000
              </a>
              <a>
                <Image src={Phone} alt="Phone" /> (75) 99999-9999
              </a>
              <a>
                <Image src={Mail} alt="E-mail" /> vminfo@gmail.com
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <p>
        Desenvolvido por <a>Paulo Henrique</a>
      </p>
    </footer>
  );
}
