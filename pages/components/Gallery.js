import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Imagem01 from "../../img/gallery/01.jpg";
import Imagem02 from "../../img/gallery/02.jpg";
import Imagem03 from "../../img/gallery/03.jpg";
import Imagem04 from "../../img/gallery/04.jpg";
import Imagem05 from "../../img/gallery/05.jpg";
import { GallerySection, ItemGallery } from "../../styles/styles";

export default function Gallerye() {
  return (
    <GallerySection id="gallery">
      <Container className="pt-5 pb-5">
        <h1 className="title-section text-center mb-5">Galeria</h1>
        <Row>
          <Col sm={4} lg={3}>
            <ItemGallery>
              <Image
                src={Imagem01}
                alt="Imagem Galeria"
                width={300}
                height={300}
              />
            </ItemGallery>
          </Col>
          <Col sm={4} lg={3}>
            <ItemGallery>
              <Image
                src={Imagem02}
                alt="Imagem Galeria"
                width={300}
                height={300}
              />
            </ItemGallery>
          </Col>
          <Col sm={4} lg={3}>
            <ItemGallery>
              <Image
                src={Imagem03}
                alt="Imagem Galeria"
                width={300}
                height={300}
              />
            </ItemGallery>
          </Col>
          <Col sm={4} lg={3}>
            <ItemGallery>
              <Image
                src={Imagem04}
                alt="Imagem Galeria"
                width={300}
                height={300}
              />
            </ItemGallery>
          </Col>
          <Col sm={4} lg={3}>
            <ItemGallery>
              <Image
                src={Imagem05}
                alt="Imagem Galeria"
                width={300}
                height={300}
              />
            </ItemGallery>
          </Col>
          <Col sm={4} lg={3}>
            <ItemGallery>
              <Image
                src={Imagem01}
                alt="Imagem Galeria"
                width={300}
                height={300}
              />
            </ItemGallery>
          </Col>
          <Col sm={4} lg={3}>
            <ItemGallery>
              <Image
                src={Imagem02}
                alt="Imagem Galeria"
                width={300}
                height={300}
              />
            </ItemGallery>
          </Col>
          <Col sm={4} lg={3}>
            <ItemGallery>
              <Image
                src={Imagem03}
                alt="Imagem Galeria"
                width={300}
                height={300}
              />
            </ItemGallery>
          </Col>
        </Row>
      </Container>
    </GallerySection>
  );
}
