import { Trans, useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from "react-router";

import Footer from '@/components/Footer';
import { NavBar, NavItemContainer } from '@/components/Navbar';
import Dropdown from '@/components/Dropdown';
import { MenuButton, MenuLink } from '@/components/Input';
import Translator from "@/components/Translator";

export default function App() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const navTranslations = {
    home: Translator({ path: "nav.home" }),
    about: Translator({ path: "nav.about" }),
    source: Translator({ path: "nav.source" }),
  }

  return (
    <main id="no-print" className="flex flex-col h-screen">
      <NavBar>
        <NavItemContainer>
          <MenuButton
            label={navTranslations.home}
            onClick={() => navigate('/')}
          />
          <MenuButton
            label={navTranslations.about}
            onClick={() => navigate('/about')}
          />
          <MenuLink
            label={navTranslations.source}
            href='https://github.com/ribborges/cv-creator'
            target='_blank'
          />
        </NavItemContainer>
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
        min-h-full
        flex flex-1 flex-col
        overflow-hidden
      ">
        <Outlet />
      </section>

      <Footer />
    </main>
  );
}