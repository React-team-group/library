import React, { useEffect } from 'react';
import './Books.scss';

export const Books = ({ books, requestBooks }) => {
  useEffect(() => {
    requestBooks();
  }, [requestBooks]);

  return (
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
  );
};
