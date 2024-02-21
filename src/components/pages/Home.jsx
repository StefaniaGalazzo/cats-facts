/* eslint-disable react/prop-types */
import { Col, Container, Row } from "react-bootstrap";
import CardCustom from "../elements/CardCustom";
import Pagination from "../elements/Pagination";

export default function Home({
  facts,
  imagesArray,
  currentPage,
  lastPage,
  handlePageChange,
}) {
  return (
    <Container className="mt-2 mb-3">
      <Row>
        <Col xs={12} sm={10} className="my-5">
          <h2 className="display-4">Mind-Blowing Facts about Cats!</h2>
          <h4 className="display-6">Click on a card and discover the fact.</h4>
        </Col>

        <Col xs={12} className="mx-auto mb-5">
          <Row className="justify-content-start">
            {facts.map((fact, indx) => (
              <CardCustom
                key={indx}
                indx={indx}
                data={fact}
                src={imagesArray[indx]}
              />
            ))}
          </Row>
        </Col>
      </Row>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        handlePageChange={handlePageChange}
      />
    </Container>
  );
}
