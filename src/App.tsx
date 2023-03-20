import CvForm from './components/forms/CvForm';

import './_app.scss';
import Footer from './components/footer/Footer';
import { Input } from './components/input/Input';
import { useState } from 'react';

export interface displayText {
  title: string,
  language: string,
  personalInfo: string,
  eduHistory: string,
  workExp: string,
  export: string,
  import: string,
  view: string,
  viewTitle: string,
  name: string,
  phone: string,
  address: string,
  summary: string,
  schoolName: string,
  schoolDegree: string,
  schoolFieldStudy: string,
  workCompanyName: string,
  workJobTitle: string,
  location: string,
  details: string,
  resetForm: string,
  today: string;
}

export default function App() {
  const [lang, setLang] = useState<displayText>({
    title: "Curriculum Vitae Creator",
    language: "Language",
    personalInfo: "Personal information",
    eduHistory: "Education history",
    workExp: "Work experience",
    export: "Export",
    import: "Import",
    view: "View",
    viewTitle: "PDF view",
    name: "Name",
    phone: "Phone",
    address: "Address",
    summary: "Summary",
    schoolName: "School name",
    schoolDegree: "Degree",
    schoolFieldStudy: "Field of study",
    workCompanyName: "Company name",
    workJobTitle: "Job title",
    location: "Location",
    details: "Details",
    resetForm: "Reset form",
    today: "Today"
  });

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;

    switch (lang) {
      case "en":
        setLang({
          title: "Curriculum Vitae Creator",
          language: "Language",
          personalInfo: "Personal information",
          eduHistory: "Education history",
          workExp: "Work experience",
          export: "Export",
          import: "Import",
          view: "View",
          viewTitle: "PDF view",
          name: "Name",
          phone: "Phone",
          address: "Address",
          summary: "Summary",
          schoolName: "School name",
          schoolDegree: "Degree",
          schoolFieldStudy: "Field of study",
          workCompanyName: "Company name",
          workJobTitle: "Job title",
          location: "Location",
          details: "Details",
          resetForm: "Reset form",
          today: "Today"
        })
        break;
      case "pt":
        setLang({
          title: "Criador de Curriculum Vitae",
          language: "Linguagem",
          personalInfo: "Informações pessoais",
          eduHistory: "Histórico acadêmico",
          workExp: "Experiência de trabalho",
          export: "Exportar",
          import: "Importar",
          view: "Vizualizar",
          viewTitle: "Vizualizador de PDF",
          name: "Nome",
          phone: "Telefone",
          address: "Endereço",
          summary: "Sumário",
          schoolName: "Nome da instituição",
          schoolDegree: "Gráu",
          schoolFieldStudy: "Curso",
          workCompanyName: "Nome da empresa",
          workJobTitle: "Cargo",
          location: "Localização",
          details: "Detalhes",
          resetForm: "Resetar formulário",
          today: "Hoje"
        })
        break;
    }
  };

  return (
    <div className="app">
      <section className="section flex-container">
        <h1 className="flex-5">{lang.title}</h1>
        <Input icon="bi bi-translate" type="option" onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="pt">Português</option>
        </Input>
      </section>

      <section className="section">
        <CvForm onChange={handleLanguageChange} lang={lang} />
      </section>

      <Footer />
    </div>
  );
}