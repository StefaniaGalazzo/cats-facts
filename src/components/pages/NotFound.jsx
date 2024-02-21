import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="mt-5">
      <h1>404 - Pagina non trovata</h1>
      <p>
        La pagina che stai cercando potrebbe non esistere o essere stata
        spostata.
      </p>
      <Row className="mt-5">
        <Button style={{ margin: "0 auto", width: "fit-content" }}>
          <Link to={"/cats-facts"}>Back</Link>
        </Button>
      </Row>
    </Container>
  );
};

export default NotFound;
