import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import { BooksLayout } from './components/Books/index';
import { LoginPage } from './components/LoginPage';

import './normalize.scss';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.scss';
import { Layout } from './layout';

export const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Layout>
        <LoginPage />
        <BooksLayout />
      </Layout>
    </Provider>
  );
};
