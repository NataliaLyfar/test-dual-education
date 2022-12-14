import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { App } from 'App';
import { GlobalStyle } from 'styleConfig/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styleConfig/theme';
import 'react-toastify/dist/ReactToastify.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/test-dual-education/">
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <ToastContainer autoClose={3000} />
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);