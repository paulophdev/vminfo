import { Carousel } from "react-bootstrap";
import Image from "next/image";
import Imagem01 from "../../img/slide/1.jpg";
import Imagem02 from "../../img/slide/2.jpg";
import Imagem03 from "../../img/slide/3.jpg";
import { Section } from "../../styles/styles";

export default function Slide() {
  return (
    <Section>
      <Carousel>
        <Carousel.Item>
          <Image src={Imagem01} alt="First slide" layout="fill" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Imagem02} alt="Second slide" layout="fill" />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={Imagem03} alt="Third slide" layout="fill" />
        </Carousel.Item>
        <div className="container-flut">
          <div className="content-flut">
            <p>Seja Bem Vindo(a)</p>
            <h1>Deixe seu PC nas mãos de quem sabe o que faz</h1>
            <a href="#contato">Fale Comigo</a>
          </div>
        </div>
      </Carousel>
    </Section>
  );
}
