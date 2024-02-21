/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";

export default function Pagination({
  currentPage,
  lastPage,
  handlePageChange,
}) {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    let startPage, endPage;
    if (lastPage <= 3) {
      startPage = 1;
      endPage = lastPage;
    } else {
      startPage = Math.max(currentPage - 1, 1);
      endPage = Math.min(startPage + 2, lastPage);
    }
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Button
          key={i}
          variant={currentPage === i ? "primary" : "secondary"}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <Button
        variant={"secondary"}
        disabled={currentPage <= 1 ? true : false}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </Button>

      {renderPageNumbers()}

      <Button
        variant="secondary"
        disabled={currentPage >= lastPage ? true : false}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  );
}
