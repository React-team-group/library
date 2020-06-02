import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

export const BookDetails = ({ book, bookByID }) => {
  const { id } = useParams();
  const { goBack } = useHistory();

  const { title, price, img, category, description } = book;

  useEffect(() => {
    bookByID(id);
  }, []);

  return (
    <>
      <button onClick={goBack}>BACK</button>
      <div className="title">{title}</div>
      <div className="category">{category}</div>
      <div className="price">{price}</div>
      <div className="description">{description}</div>
      <img src={img} className="img" alt="img " />
    </>
  );
};
