import { Button, Col, Container, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <Container>
      <h1 className="title-section">Contato</h1>
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
          <textarea placeholder="Mensagem"></textarea>
          <Button>Enviar Contato</Button>
        </Col>
      </Row>
    </Container>
  );
}
