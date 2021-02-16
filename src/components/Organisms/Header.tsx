import Link from "next/link";

type IProps = {
  title: string;
};

const Header = ({ title }: IProps): JSX.Element => {
  return (
    <nav className="w-full py-4 bg-steel-800 shadow">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
          <Link href="/">
            <a className="px-4 text-xl">{title}</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
