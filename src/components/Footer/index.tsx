export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="
      flex items-center justify-center
      bg-zinc-400 bg-opacity-50 dark:bg-zinc-800 dark:bg-opacity-50
      border border-solid border-zinc-500 border-opacity-50 dark:border-zinc-700 dark:border-opacity-50
      rounded-lg
      p-10 m-5
      hover:scale-95
      transition duration-500
    ">
      <p>Developed by: <a href='https://www.linkedin.com/in/ribborges/' target={'_blank'}>Richard de Carvalho Borges</a> with <a href='https://vite.dev/' target={'_blank'}>Vite</a>, <a href="https://www.typescriptlang.org/" target={'_blank'}>TypeScript</a> and <a href='https://tailwindcss.com/' target={'_blank'}>TailwindCSS</a> | {currentYear}</p>
    </footer>
  );
}