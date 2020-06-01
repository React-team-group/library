import React from 'react';

import { LoginPage } from './LoginPage';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from './layout';
import { Cart } from './cart/Cart';

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/books" component={Layout} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
};
