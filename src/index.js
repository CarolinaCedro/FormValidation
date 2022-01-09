import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <main>
      <App />
    </main>
  </BrowserRouter>,
  document.getElementById('root'),
);
