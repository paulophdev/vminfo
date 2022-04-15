import { Col, Container, Row } from "react-bootstrap";
import { Content, ButtonForm } from "../../styles/styles";

export default function Contact() {
  return (
    <Container id="contact" className="pt-5 pb-5">
      <h1 className="title-section text-center mb-5">Contato</h1>
      <Content>
        <Row>
          <Col sm={6} lg={6}>
            <input placeholder="Nome" />
          </Col>
          <Col sm={6} lg={6}>
            <input placeholder="E-mail" />
          </Col>
          <Col sm={6} lg={6}>
            <input placeholder="Phone" />
          </Col>
          <Col sm={6} lg={6}>
            <input list="subject" placeholder="Assunto" />
            <datalist id="subject">
              <option value="Manutenção"></option>
              <option value="Formatação"></option>
              <option value="Limpeza"></option>
              <option value="Montagem"></option>
            </datalist>
          </Col>
          <Col sm={12} lg={12}>
            <textarea placeholder="Mensagem" rows={5} cols={20}></textarea>
            <p className="text-center m-0">
              <ButtonForm>Enviar Contato</ButtonForm>
            </p>
          </Col>
        </Row>
      </Content>
    </Container>
  );
}
