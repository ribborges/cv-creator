import { Outlet, useNavigate } from "react-router";

import Footer from '@/components/Footer';
import { NavBar } from '@/components/Navbar';
import { MenuButton, MenuLink } from '@/components/Input';
import Translator from "@/components/Translator";

export default function App() {
  const navigate = useNavigate();

  const navTranslations = {
    home: Translator({ path: "nav.home" }),
    about: Translator({ path: "nav.about" }),
    source: Translator({ path: "nav.source" }),
  }

  return (
    <main id="no-print" className="flex flex-col h-screen">
      <NavBar>
        <MenuButton
          className="text-sm"
          label={navTranslations.home}
          onClick={() => navigate('/')}
        />
        <MenuButton
          className="text-sm"
          label={navTranslations.about}
          onClick={() => navigate('/about')}
        />
        <MenuLink
          className="text-sm"
          label={navTranslations.source}
          href='https://github.com/ribborges/cv-creator'
          target='_blank'
        />
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