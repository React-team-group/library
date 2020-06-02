import React, { useEffect, useState } from 'react';
import { Redirect, useHistory, useRouteMatch } from 'react-router-dom';

import { PaginationBar } from '../../components/paginationBar';

import './Books.scss';

export const Books = ({ books, requestBooks, total, isLogged, bookByID }) => {
  const [page, setPage] = useState(1);

  const history = useHistory();
  const { url } = useRouteMatch();
  useEffect(() => {
    requestBooks(page);
  }, [requestBooks, page]);

  const handlePaginationBar = () => {
    setPage(page + 1);
  };

  // const handleToSingleBook = (id) => {
  //   history.push(`${url}/${id}`);
  // };

  return (
    <>
      {isLogged ? (
        <>
          <div className="book-list">
            {books.map((book) => (
              <section className="book-card" key={book.id} onClick={() => history.push(`${url}/${book.id}`)}>
                <h2>{book.title}</h2>
                <p>{book.category}</p>
                <p>{book.description}</p>
                <img className="book-img" src={book.img} alt="/" />
              </section>
            ))}
          </div>
          {total > books.length && <PaginationBar handlePaginationBar={handlePaginationBar} />}
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
};
