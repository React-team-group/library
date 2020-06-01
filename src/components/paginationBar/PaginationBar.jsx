import React from 'react';
import './style.css';

export const PaginationBar = ({ handlePaginationBar }) => {
  return (
    <div className="pagContainer">
      <button className="paginationBtn" onClick={handlePaginationBar}>
        Show more
      </button>
    </div>
  );
};
