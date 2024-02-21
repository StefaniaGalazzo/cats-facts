import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="mt-5">
      <h1>404 - Pagina non trovata</h1>
      <p>
        La pagina che stai cercando potrebbe non esistere o essere stata
        spostata.
      </p>
    </Container>
  );
};

export default NotFound;
