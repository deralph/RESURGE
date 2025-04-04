import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold font-montserrat">
          <a href="#home" aria-label="Home">
            RESURGE
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium font-montserrat">
          <li>
            <a href="#home" className="hover:text-gray-900">
              Home
            </a>
          </li>
          <li>
            <a href="#shop" className="hover:text-gray-900">
              Shop
            </a>
          </li>
          <li>
            <a href="#collections" className="hover:text-gray-900">
              Collections
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-gray-900">
              Blog
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-900">
              About
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <li className="block px-4 py-2">
            <a href="#home" className="hover:text-gray-900">
              Home
            </a>
          </li>
          <li className="block px-4 py-2">
            <a href="#shop" className="hover:text-gray-900">
              Shop
            </a>
          </li>
          <li className="block px-4 py-2">
            <a href="#collections" className="hover:text-gray-900">
              Collections
            </a>
          </li>
          <li className="block px-4 py-2">
            <a href="#blog" className="hover:text-gray-900">
              Blog
            </a>
          </li>
          <li className="block px-4 py-2">
            <a href="#about" className="hover:text-gray-900">
              About
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
