import Link from "next/link";

type Props = {
  title: string;
  className?: string;
};

const Header = ({ title, className }: Props): JSX.Element => {
  return (
    <header className={`${className} w-full py-4 bg-steel-800 shadow`}>
      <nav className="w-full container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
          <Link href="/">
            <a className="px-4 text-xl">{title}</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
