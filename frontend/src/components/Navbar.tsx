// src/components/Navbar.tsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Dentists', path: '/dentists' },
    { name: 'Book Appointment', path: '/book-appointment' },
    { name: 'Patient Dashboard', path: '/patient-dashboard' },
    { name: 'Admin Dashboard', path: '/doctor-admin' },
  ];

  const linkStyle = (path: string) =>
    location.pathname === path
      ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
      : 'text-gray-700 hover:text-blue-600 hover:border-b-2 hover:border-blue-400';

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">DC</span>
            </div>
            <span className="ml-3 text-xl font-bold text-blue-800">DentalCare</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition duration-300 pb-1 ${linkStyle(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-inner"
        >
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md text-base font-medium transition duration-200 ${
                  location.pathname === link.path
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
