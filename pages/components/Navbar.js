import { Container, Nav, Navbar } from "react-bootstrap";
import { Header } from "../../styles/styles";

export default function Navigation() {
  return (
    <Header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <label>
              <span>VM</span>INFO<small>Assistência Técnica</small>
            </label>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home" className="active">
                Home
              </Nav.Link>
              <Nav.Link href="#about">Sobre</Nav.Link>
              <Nav.Link href="#services">Serviços</Nav.Link>
              <Nav.Link href="#gallery">Galeria</Nav.Link>
              <Nav.Link href="#contact">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Header>
  );
}
