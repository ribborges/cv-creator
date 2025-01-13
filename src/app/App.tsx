import { Translate } from 'react-bootstrap-icons';

import CvForm from '../components/forms/CvForm';
import Footer from '../components/Footer';
import { Input } from '../components/input/Input';
import { NavBar, NavItemContainer } from '../components/Navbar';
import { useTranslation } from 'react-i18next';
import Translator from '../components/Translator';


export default function App() {
  const { i18n } = useTranslation();

  function handleChangeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  }

  return (
    <div className="text-zinc-950 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-950 app">
      <NavBar>
        <NavItemContainer>
          <img src="/favicon.svg" height="50px" width="50px" />
          <h1 className="text-xl"><Translator path="home.title"/></h1>
        </NavItemContainer>
        <NavItemContainer>
          <Input icon={<Translate />} type="option" onChange={handleChangeLanguage}>
            <option value="en-US">English</option>
            <option value="pt-BR">Português</option>
          </Input>
        </NavItemContainer>
      </NavBar>

      <section className="
        flex flex-col
        p-4 m-2 mt-32 lg:p-20 lg:m-20 lg:mt-40
        rounded-xl border border-solid
        border-zinc-300 bg-zinc-200
        dark:border-zinc-800 dark:bg-zinc-900"
      >
        <CvForm />
      </section>

      <Footer />
    </div>
  );
}