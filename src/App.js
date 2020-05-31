import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import { BooksLayout } from './components/Books/index';
import { LoginPage } from './components/LoginPage';

import './normalize.scss';
import './App.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <LoginPage />
      <BooksLayout />
    </Provider>
  );
};
