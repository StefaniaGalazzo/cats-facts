import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import NavBarCustom from "./components/elements/NavBarCustom";
import { useEffect, useState } from "react";
import AnimatedBackground from "./components/elements/AnimatedBackground";
import styled from "styled-components";

const Index1 = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  const [facts, setFacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [imagesArray, setImagesArray] = useState([]);

  useEffect(() => {
    fetch(`https://catfact.ninja/facts?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setFacts(data.data);
        setLastPage(data.last_page);
        const startIndex = (currentPage - 1) * data.data.length;
        const pageImages = Array.from(
          { length: data.data.length },
          (_, index) =>
            `https://placekitten.com/200/200?image=${
              ((startIndex + index) % 16) + 1
            }`
        );
        setImagesArray(pageImages);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Index1>
        <NavBarCustom />
        <Routes>
          <Route
            path="/cats-facts"
            element={
              <Home
                facts={facts}
                imagesArray={imagesArray}
                currentPage={currentPage}
                lastPage={lastPage}
                handlePageChange={handlePageChange}
              />
            }
          />
          <Route
            path="/cats-facts/detail/:id"
            element={<Details facts={facts} imagesArray={imagesArray} />}
          />
        </Routes>
      </Index1>
      <AnimatedBackground />
    </>
  );
}

export default App;
