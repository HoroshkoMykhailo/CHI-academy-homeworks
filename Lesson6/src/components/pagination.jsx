import React from 'react';
import Button from "./button";

const Pagination = ({ page, handleNext, handlePrev, hasNext, hasPrev }) => {
    return (
      <div className="controllers">
        <Button onClick={handlePrev} disabled={!hasPrev}>Previous</Button>
        <p className="page">
          Page: {page}
        </p>
        <Button onClick={handleNext} disabled={!hasNext}>Next</Button>
      </div>
    );
};

export default Pagination;