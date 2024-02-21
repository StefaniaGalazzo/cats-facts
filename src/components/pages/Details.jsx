/* eslint-disable react/prop-types */
import { Col, Container, Row } from "react-bootstrap";
import { useSpring, animated } from "@react-spring/web";
import { Link, useParams } from "react-router-dom";
import meow from "../../assets/media/meow.mp3";
import { useState } from "react";
import OverMe from "../molecules/OverMe";

export default function Dettaglio({ facts, imagesArray }) {
  const { id } = useParams();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // meow audio effect on mouse enter/leave
  let audio;
  const playMiagolio = () => {
    audio = new Audio(meow);
    audio.volume = 0.15;
    audio.play();
  };
  const stopMiagolio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };
  //animation on mouse over
  const handleMouseMove = (e) => {
    playMiagolio();
    const { clientX, clientY } = e;
    const rect = e.target.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;

    // da quale parte arriva cursore
    const newX =
      offsetX < rect.width / 2 ? cursorPosition.x + 10 : cursorPosition.x - 10;
    const newY =
      offsetY < rect.height / 2 ? cursorPosition.y + 10 : cursorPosition.y - 10;

    setCursorPosition({ x: newX, y: newY });
  };

  const handleMouseLeave = () => {
    stopMiagolio();
    setCursorPosition({ x: 0, y: 0 });
  };

  const meowSpring = useSpring({
    transform: `translate(${-cursorPosition.x}px, ${-cursorPosition.y}px)`,
    config: { tension: 250, friction: 8 },
  });

  return (
    <Container className="mt-5 rounded p-3 py-5 glassmorph ">
      {facts && facts[id] ? (
        <Row className="justify-content-center align-items-end">
          <Col xs={10} lg={4}>
            <animated.div
              onMouseEnter={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="customBGdetail rounded-circle position-relative"
              style={{
                backgroundImage: `url(${imagesArray[id]})`,
                transform: meowSpring.transform,
              }}
            >
              <OverMe />
            </animated.div>
          </Col>
          <Col xs={10} lg={4} className="mt-sm-5">
            <h3>The fact:</h3>
            <p>{facts[id].fact}</p>
          </Col>
        </Row>
      ) : (
        <span>
          There are no Cats Facts here!
          <Link to={"/cat-fatcs"}> Back home.</Link>
        </span>
      )}
    </Container>
  );
}
