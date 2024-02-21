/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import cat from "../../assets/media/cat-gr.svg";

const generateRandomPosition = () => ({
  x: `${Math.random() * 100}vw`,
  y: `${Math.random() * 100}vh`,
});

const AnimatedCat = styled(animated.img)`
  position: absolute;
  width: 130px;
  z-index: 0;
  @media (max-width: 768px) {
    width: 80px;
  }
`;

const AnimatedBackground = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const catArray = Array.from({ length: 10 }, (_, index) => ({
      id: index,
      position: generateRandomPosition(),
    }));

    setCats(catArray);
  }, []);

  const Cat = ({ id }) => {
    const randomColor = () => {
      const colors = ["red", "blue", "green", "yellow"];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    const spring = useSpring({
      from: {
        fill: randomColor(),
        transform: `translate(${generateRandomPosition().x}, ${
          generateRandomPosition().y
        })`,
      },
      to: [
        {
          fill: randomColor(),
          transform: `translate(${generateRandomPosition().x}, ${
            generateRandomPosition().y
          })`,
        },
        {
          fill: randomColor(),
          transform: `translate(${generateRandomPosition().x}, ${
            generateRandomPosition().y
          })`,
        },
      ],
      config: { tension: 5, friction: 2 },
      loop: true,
    });

    return (
      <AnimatedCat
        key={id}
        style={spring}
        src={cat}
        alt={`floating cat ${id}`}
      />
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
      }}
    >
      {cats.map((cat) => (
        <Cat key={cat.id} id={cat.id} position={cat.position} />
      ))}
    </div>
  );
};

export default AnimatedBackground;
