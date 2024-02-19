import './_style.scss';

export default function Header() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Developed by: <a href='https://www.linkedin.com/in/ribborges/' target={'_blank'}>Richard de Carvalho Borges</a> with <a href='https://reactjs.org/' target={'_blank'}>React.js</a>, <a href="https://www.typescriptlang.org/" target={'_blank'}>TypeScript</a>, <a href='https://vitejs.dev/' target={'_blank'}>Vite</a> and <a href='https://sass-lang.com/' target={'_blank'}>SCSS</a> | {currentYear}</p>
    </footer>
  )
}