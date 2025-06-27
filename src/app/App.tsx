import { useTranslation } from 'react-i18next';

import CvForm from '@/components/forms/CvForm';
import Footer from '@/components/Footer';
import { NavBar, NavItemContainer } from '@/components/Navbar';
import Dropdown from '@/components/Dropdown';

export default function App() {
  const { i18n } = useTranslation();

  return (
    <main id="no-print" className="flex flex-col">
      <NavBar>
        <NavItemContainer>
          <Dropdown align={'right'} items={[
            {
              type: 'button',
              icon: <img src='https://img.icons8.com/color/48/brazil-circular.png' />,
              label: 'Português',
              onClick: () => i18n.changeLanguage('pt-BR'),
            }, {
              type: 'button',
              icon: <img src='https://img.icons8.com/color/48/great-britain-circular.png' />,
              label: 'English',
              onClick: () => i18n.changeLanguage('en-US'),
            }
          ]}>
            {
              i18n.language === 'pt-BR' ? (
                <img src='https://img.icons8.com/color/48/brazil-circular.png' />
              ) : (
                <img src='https://img.icons8.com/color/48/great-britain-circular.png' />
              )
            }
          </Dropdown>
        </NavItemContainer>
      </NavBar>

      <section className="
        flex flex-col
        p-4 m-2 mt-32 lg:p-20 lg:m-20 lg:mt-40
        border border-solid rounded-4xl
        border-zinc-200 bg-zinc-100
        dark:border-zinc-900 dark:bg-zinc-950"
      >
        <CvForm />
      </section>

      <Footer />
    </main>
  );
}