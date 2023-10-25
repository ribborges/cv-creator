import { useState } from 'react';
import { Translate } from 'react-bootstrap-icons';

import CvForm from './components/forms/CvForm';
import './_app.scss';
import Footer from './components/footer/Footer';
import { Input } from './components/input/Input';
import { displayText, en_us, pt_br } from './types/lang';


export default function App() {
  const [lang, setLang] = useState<displayText>(en_us);

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.target.value;

    switch (lang) {
      case "en_us":
        setLang(en_us);
        break;
      case "pt_br":
        setLang(pt_br);
        break;
    }
  };

  return (
    <div className="app">
      <section className="section flex-container">
        <img src="/favicon.svg" height="50px" width="50px" />
        <h1 className="flex-5">{lang.title}</h1>
        <Input icon={<Translate />} type="option" onChange={handleLanguageChange}>
          <option value="en_us">English</option>
          <option value="pt_br">Português</option>
        </Input>
      </section>

      <section className="section">
        <CvForm lang={lang} />
      </section>

      <Footer />
    </div>
  );
}