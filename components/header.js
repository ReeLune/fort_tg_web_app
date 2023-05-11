import Link from 'next/link';

const Header = () => {
  return (
    <header class="flex items-center justify-between bg-gray-800 text-white p-4">
      <Link href="/" class="font-bold text-xl">
        Logo
      </Link>
      <nav>
        <ul class="flex space-x-4 items-center">
          <li>
            <Link href="/" class="hover:text-gray-300">
              Achievements
            </Link>
          </li>
          <li>
            <Link href="/shop" class="hover:text-gray-300">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/modes" class="hover:text-gray-300">
              Modes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
