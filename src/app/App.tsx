import { useState } from 'react';
import { Translate } from 'react-bootstrap-icons';

import CvForm from '../components/forms/CvForm';
import Footer from '../components/Footer';
import { Input } from '../components/input/Input';
import { displayText, en_us, pt_br } from '../types/lang';
import { NavBar, NavItemContainer } from '../components/Navbar';


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
    <div className="text-zinc-950 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-950 app">
      <NavBar>
        <NavItemContainer>
          <img src="/favicon.svg" height="50px" width="50px" />
          <h1 className="text-xl">{lang.title}</h1>
        </NavItemContainer>
        <NavItemContainer>
          <Input icon={<Translate />} type="option" onChange={handleLanguageChange}>
            <option value="en_us">English</option>
            <option value="pt_br">Português</option>
          </Input>
        </NavItemContainer>
      </NavBar>

      <section className="
        flex flex-col
        p-20 m-20 mt-40
        rounded-xl border border-solid
        border-zinc-300 bg-zinc-200
        dark:border-zinc-800 dark:bg-zinc-900"
      >
        <CvForm lang={lang} />
      </section>

      <Footer />
    </div>
  );
}