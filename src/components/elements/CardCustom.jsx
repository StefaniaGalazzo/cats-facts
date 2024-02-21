/* eslint-disable react/prop-types */
import { FaCat } from "react-icons/fa";
import meowCursor from "../../assets/media/cat-cursor-45px.png";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CardCustom({ data, indx, src }) {
  return (
    <Card
      className="m-2 p-0"
      style={{
        width: "15rem",
        maxWidth: "25rem",
        flexGrow: "2",
        backgroundColor: "transparent",
        borderRadius: "8px",
        border: "none",
      }}
      data-label="cat-card"
    >
      <Link
        to={`/cats-facts/detail/${indx}`}
        style={{
          cursor: `url(${meowCursor}), auto`,
        }}
      >
        <Card.Img variant="top" src={src} />
        <Card.Body className="px-4 glassmorph">
          <Card.Title>
            <h3 title={data.fact} className="display-lg-6 ellipsis-1">
              {data.fact}
            </h3>
          </Card.Title>
          <Card.Text className="d-flex align-items-center mt-4">
            <FaCat size={30} className="me-3" />
            Length: {data.length} characters
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}
