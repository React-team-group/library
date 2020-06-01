import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import { AppRouter } from './routes/AppRouter.jsx';

import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import './App.scss';
import { Layout } from './components/layout';

export const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
