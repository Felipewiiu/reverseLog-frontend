import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.scss';
import Routes from './routes';
import { ThemeProvider } from 'context/themeContext';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>
);

