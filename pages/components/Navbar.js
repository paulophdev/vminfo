import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <label>
            <span>VM</span>INFO<small>Assistência Técnica</small>
          </label>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">Sobre</Nav.Link>
            <Nav.Link href="#services">Serviços</Nav.Link>
            <Nav.Link href="#gallery">Galeria</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
