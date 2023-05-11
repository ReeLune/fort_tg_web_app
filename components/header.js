import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-gray-800 text-white p-4">
      <Link href="/" className="font-bold text-xl">
        Logo
      </Link>
      <nav>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Achievements
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-gray-300">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/modes" className="hover:text-gray-300">
              Modes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
