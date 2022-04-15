import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Content, ButtonForm } from "../../styles/styles";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  function handleSubmit() {
    if (!name) {
      window.alert("O Campo Nome é Obrigatório.");
      return false;
    }
    if (!email) {
      window.alert("O Campo E-mail é Obrigatório.");
      return false;
    }
    if (!phone) {
      window.alert("O Campo Phone é Obrigatório.");
      return false;
    }
    if (!subject) {
      window.alert("O Campo Assunto é Obrigatório.");
      return false;
    }
    if (!msg) {
      window.alert("O Campo Mensagem é Obrigatório.");
      return false;
    }

    let data = {
      name,
      email,
      phone,
      subject,
      msg,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        window.alert("Envio concluído com sucesso!");
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMsg("");
      } else if (res.status === 400) {
        window.alert("Falha no envio.");
      }
    });
  }
  return (
    <Container id="contact" className="pt-5 pb-5">
      <h1 className="title-section text-center mb-5">Contato</h1>
      <Content>
        <Row>
          <Col sm={6} lg={6}>
            <input
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col sm={6} lg={6}>
            <input
              placeholder="E-mail"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
          <Col sm={6} lg={6}>
            <input
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Col>
          <Col sm={6} lg={6}>
            <input
              list="subject"
              placeholder="Assunto"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <datalist id="subject">
              <option value="Manutenção"></option>
              <option value="Formatação"></option>
              <option value="Limpeza"></option>
              <option value="Montagem"></option>
            </datalist>
          </Col>
          <Col sm={12} lg={12}>
            <textarea
              placeholder="Mensagem"
              rows={5}
              cols={20}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
            <p className="text-center m-0">
              <ButtonForm onClick={() => handleSubmit()}>
                Enviar Contato
              </ButtonForm>
            </p>
          </Col>
        </Row>
      </Content>
    </Container>
  );
}
