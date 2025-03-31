import { Translate } from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import CvForm from '../components/forms/CvForm';
import Footer from '../components/Footer';
import { Input } from '../components/input/Input';
import { NavBar, NavItemContainer } from '../components/Navbar';

export default function App() {
  const { i18n } = useTranslation();

  function handleChangeLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    const lang = event.target.value;
    i18n.changeLanguage(lang);
  }

  return (
    <main id="no-print" className="flex flex-col text-zinc-950 dark:text-zinc-100 bg-white dark:bg-black app">
      <NavBar>
        <NavItemContainer>
          <Input icon={<Translate />} type="option" onChange={handleChangeLanguage} value={i18n.language}>
            <option value="en-US">English</option>
            <option value="pt-BR">Português</option>
          </Input>
        </NavItemContainer>
      </NavBar>

      <section className="
        flex flex-col
        p-4 m-2 mt-32 lg:p-20 lg:m-20 lg:mt-40
        rounded-xl border border-solid
        border-zinc-200 bg-zinc-100
        dark:border-zinc-900 dark:bg-zinc-950"
      >
        <CvForm />
      </section>

      <Footer />
    </main>
  );
}