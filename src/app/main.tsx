import React from 'react';
import ReactDOM from 'react-dom/client';

import Print from '@/components/cv/RenderPDF/Print';
import '@/i18n';

import App from './App';

import '@/styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Print id="print-area" />
  </React.StrictMode>,
);