import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBarCustom() {
  return (
    <Navbar expand="lg" className="bg-black text-white">
      <Container>
        <Navbar.Brand>
          <Link to={"/cats-facts"} className="fw-bold text-white me-4">
            Cat Facts
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ borderColor: "#BD632F" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/cats-facts"}>Home</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
