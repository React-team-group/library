import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import  {AppRouter } from "./routes/AppRouter";

import  {BrowserRouter} from 'react-router-dom';

import './normalize.scss';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.scss';
import { Layout } from './routes/layout';

export const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
