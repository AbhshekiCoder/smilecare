// src/components/Navbar.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiMenu, HiX, HiPhone, HiCalendar } from 'react-icons/hi';
import { FaTooth, FaUserMd, FaChartLine, FaBell, FaCog } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/', icon: FaTooth },
    { name: 'About', path: '/about', icon: FaUserMd },
    { name: 'Services', path: '/services', icon: FaChartLine },
    { name: 'Dentists', path: '/dentists', icon: FaUserMd },
    { name: 'Book Now', path: '/book-appointment', icon: HiCalendar },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkStyle = (path: string) =>
    location.pathname === path
      ? 'text-blue-600 bg-blue-50 border-blue-600'
      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50';

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <HiPhone className="mr-1" />
                (555) 123-4567
              </span>
              <span className="hidden sm:inline">• Emergency Dental Care 24/7</span>
            </div>
            <span>Mon-Sat: 8AM-8PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white shadow-sm py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-blue-600 w-10 h-10 rounded-xl flex items-center justify-center">
                <FaTooth className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">DentalCare</h1>
                <p className="text-xs text-gray-500 hidden sm:block">Professional Dental Clinic</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${linkStyle(link.path)}`}
                  >
                    <IconComponent className="text-lg" />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Dashboard Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-3 border-l border-gray-200 pl-4 ml-4">
              <Link
                to="/patient-dashboard"
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all"
              >
                <FaChartLine />
                <span>Patient Portal</span>
              </Link>
              <Link
                to="/doctor-admin"
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all"
              >
                <FaCog />
                <span>Doctor Admin</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => navigate('/book-appointment')}
                className="bg-blue-600 text-white px-3 py-2 rounded-lg flex items-center space-x-2"
              >
                <HiCalendar />
                <span>Book</span>
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {navLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all ${
                        location.pathname === link.path
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <IconComponent />
                      <span className="font-medium">{link.name}</span>
                    </Link>
                  );
                })}
                
                {/* Mobile Dashboard Links */}
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <Link
                    to="/patient-dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 px-3 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                  >
                    <FaChartLine />
                    <span className="font-medium">Patient Dashboard</span>
                  </Link>
                  <Link
                    to="/doctor-admin"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 px-3 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                  >
                    <FaCog />
                    <span className="font-medium">Doctor Admin</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;