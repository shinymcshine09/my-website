import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';

import JamesChat from './components/JamesChat';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: monospace;
    color:rgb(239, 239, 239);
    /* -webkit-scrollbar-width: thin; */
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /><JamesChat /><GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
