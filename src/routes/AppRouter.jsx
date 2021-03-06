import React from 'react';

import { LoginPage } from './LoginPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BooksLayout } from './Books';
import { Cart } from './cart/Cart';
import { BookDetails } from './BookDetails';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/books" component={BooksLayout} />
      <Route exact path="/books/:id" component={BookDetails} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
};
