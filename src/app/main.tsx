import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import { Analytics } from '@vercel/analytics/react';

import Print from '@/components/cv/RenderPDF/Print';
import AnimBackground from "@/components/AnimBackground";
import ModalProvider from '@/providers/ModalProvider';
import '@/i18n';

import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Creator from './pages/creator/root';
import Info from './pages/creator/Info';
import Education from './pages/creator/Education';
import Experience from './pages/creator/Experience';
import Certifications from './pages/creator/Certifications';
import Languages from './pages/creator/Languages';
import SkillList from './pages/creator/Skills';
import Projects from './pages/creator/Projects';
import NotFound from './pages/NotFound';

import '@/styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AnimBackground />
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="creator" element={<Creator />}>
              <Route path="" element={<Info />} />
              <Route path="education" element={<Education />} />
              <Route path="experience" element={<Experience />} />
              <Route path="certifications" element={<Certifications />} />
              <Route path="languages" element={<Languages />} />
              <Route path="skills" element={<SkillList />} />
              <Route path="projects" element={<Projects />} />
            </Route>
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Print id="print-area" />
    </ModalProvider>
    <Analytics />
  </React.StrictMode>,
);