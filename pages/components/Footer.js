import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Facebook from "../../img/icons/facebook.png";
import Instagram from "../../img/icons/instagram.png";
import Whatsapp from "../../img/icons/whatsapp.png";
import Mark from "../../img/icons/mark.png";
import Mail from "../../img/icons/mail.png";
import Phone from "../../img/icons/phone.png";
import { Foot } from "../../styles/styles";
import Link from "next/link";

export default function Footer() {
  return (
    <Foot>
      <Container className="pt-5 pb-5">
        <Row>
          <Col lg={4} sm={4}>
            <h1 className="title-section">
              <label>
                <span>VM</span>INFO<small>Assistência Técnica</small>
              </label>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem
              ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className="footer-midias">
              <Link href="#">
                <a>
                  <Image src={Facebook} alt="Facebook" />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <Image src={Instagram} alt="Instagram" />
                </a>
              </Link>
              <Link href="#">
                <a>
                  <Image src={Whatsapp} alt="Whatsapp" />
                </a>
              </Link>
            </div>
          </Col>
          <Col lg={4} sm={4}>
            <h2 className="title-section mb-3">Menu</h2>
            <nav className="footer-nav">
              <Link href="#home">
                <a>Home</a>
              </Link>
              <Link href="#services">
                <a>Serviços</a>
              </Link>
              <Link href="#gallery">
                <a>Galeria</a>
              </Link>
              <Link href="#contact">
                <a>Contato</a>
              </Link>
            </nav>
          </Col>
          <Col lg={4} sm={4}>
            <h2 className="title-section mb-3">Informação</h2>
            <div className="footer-nav">
              <div>
                <Image src={Mark} alt="Marcação" width={40} height={40} />
                <Link href="https://www.google.com.br/maps/place/Ribeira+do+Pombal+-+BA,+48400-000/@-10.7614938,-38.6459331,11z/data=!3m1!4b1!4m5!3m4!1s0x711fb4274e241a1:0x824a1b27cffabaea!8m2!3d-10.783171!4d-38.5270305?hl=pt-BR&authuser=0">
                  <a target="_Blank">
                    Rua Abelardo Gama, 58, Ribeira do Pombal, BA, 48400-000
                  </a>
                </Link>
              </div>

              <div>
                <Image src={Phone} alt="Phone" width={30} height={30} />
                <a>(75) 99999-9999</a>
              </div>

              <div>
                <Image src={Mail} alt="E-mail" width={30} height={30} />
                <Link href="mailto: vminfo@gmail.com">
                  <a>vminfo@gmail.com</a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <p className="m-0 text-center">
        Desenvolvido por{" "}
        <Link href="mailto: paulophdev@gmail.com">
          <a>Paulo Henrique</a>
        </Link>
      </p>
      <div
        className="return-top"
        title="Retornar ao Topo"
        onClick={() => window.scrollTo(0, 0)}
      >
        &uarr;
      </div>
    </Foot>
  );
}
