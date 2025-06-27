import Anchor from "@/components/Anchor";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        text-xs
        flex items-center justify-center
        bg-zinc-200/50 dark:bg-zinc-900/50
        border-t border-solid
        border-zinc-300/50 dark:border-zinc-800/50
        p-6 md:p-8 lg:p-10
      "
    >
      <p>
        {`Developed by: `}
        <Anchor href='https://www.linkedin.com/in/ribborges/' target={'_blank'}>Richard de Carvalho Borges</Anchor>
        {` with `}
        <Anchor href='https://vite.dev/' target={'_blank'}>Vite</Anchor>
        {`, `}
        <Anchor href="https://www.typescriptlang.org/" target={'_blank'}>TypeScript</Anchor>
        {` and `}
        <Anchor href='https://tailwindcss.com/' target={'_blank'}>TailwindCSS</Anchor>
        {` | `}
        {currentYear}
      </p>
    </footer>
  );
}