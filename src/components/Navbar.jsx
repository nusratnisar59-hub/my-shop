import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700"
        >
          MyShop
        </Link>

        {/* Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Products
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 font-medium hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;