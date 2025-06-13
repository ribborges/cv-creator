import React from 'react';
import ReactDOM from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';

import Print from '@/components/cv/RenderPDF/Print';
import ModalProvider from '@/providers/ModalProvider';
import '@/i18n';

import App from './App';

import '@/styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
      <Print id="print-area" />
    </ModalProvider>
    <Analytics />
  </React.StrictMode>,
);