import React, { useEffect, useState } from 'react';
import { PaginationBar } from '../../components/paginationBar';

import './Books.scss';

export const Books = ({ books, requestBooks, total }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    requestBooks(page);
  }, [requestBooks, page]);

  const handlePaginationBar = () => {
    setPage(page + 1);
  };
  return (
    <>
      <div className="book-list">
        {books.map((book) => (
          <section className="book-card" key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.category}</p>
            <p>{book.description}</p>
            <img className="book-img" src={book.img} alt="/" />
          </section>
        ))}
      </div>
      {total > books.length && <PaginationBar handlePaginationBar={handlePaginationBar} />}
    </>
  );
};
