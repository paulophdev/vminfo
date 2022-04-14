import { Carousel } from "react-bootstrap";
import Image from "next/image";
import Imagem01 from "../../img/slide/1.jpg";
import Imagem02 from "../../img/slide/2.jpg";
import Imagem03 from "../../img/slide/3.jpg";

export default function Slide() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image className="d-block w-100" src={Imagem01} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100" src={Imagem02} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Image className="d-block w-100" src={Imagem03} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
