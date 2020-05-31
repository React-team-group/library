import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.scss';
import { Layout } from './layout';

function App() {
  return (
    <>
      <CssBaseline />
      <Layout>
        <div className="App">
          <div className="App-header">
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
