import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-yellow-500">
          ClientWords
        </Link>
        <nav className="ml-8">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/features"
                className="text-gray-600 hover:text-gray-900"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/how-it-works"
                className="text-gray-600 hover:text-gray-900"
              >
                How it works
              </Link>
            </li>
            <li>
              <Link
                href="/use-cases"
                className="text-gray-600 hover:text-gray-900"
              >
                Use Cases
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/signin" className="text-gray-600 hover:text-gray-900">
          Sign In
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
