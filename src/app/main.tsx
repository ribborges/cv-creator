import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import '../i18n';

import '../styles/global.css';
import Print from '../components/cv/RenderPDF/Print';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Print id="print-area" />
  </React.StrictMode>,
);