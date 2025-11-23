import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHandsHelping, FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Our Work', 
      path: '/causes',
      submenu: [
        { name: 'All Causes', path: '/causes' },
        { name: 'Education', path: '/causes?category=Education' },
        { name: 'Health', path: '/causes?category=Health' },
        { name: 'Hunger', path: '/causes?category=Hunger' },
        { name: 'Environment', path: '/causes?category=Environment' },
      ]
    },
    { name: 'Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-0' : 'bg-white/95 py-0'} border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
              <FaHandsHelping className="h-9 w-9 text-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HopeForAll
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`px-4 py-2.5 rounded-lg text-[15px] font-medium transition-all duration-200 flex items-center ${
                    location.pathname === item.path
                      ? 'text-blue-600 font-semibold bg-blue-50/50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50/80'
                  }`}
                >
                  <span className="relative">
                    {item.name}
                    {location.pathname === item.path && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                    )}
                  </span>
                  {item.submenu && (
                    <FaChevronDown className="ml-1.5 text-[10px] opacity-70 group-hover:opacity-100 transition-opacity" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-56 rounded-xl shadow-xl bg-white border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 transform group-hover:translate-y-0 -translate-y-2">
                    <div className="py-1.5">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <div className="ml-2">
              <Link
                to="/donate"
                className="px-5 py-2.5 rounded-lg text-[15px] font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center"
              >
                Donate Now
                <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-5 w-5" />
              ) : (
                <FaBars className="block h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-white shadow-lg ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((item) => (
            <div key={item.name} className="border-b border-gray-100 last:border-0">
              <Link
                to={item.path}
                onClick={closeMobileMenu}
                className={`block px-4 py-3.5 rounded-lg text-[15px] font-medium ${
                  location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50/50 font-semibold'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50/80'
                }`}
              >
                <div className="flex items-center justify-between">
                  {item.name}
                  {item.submenu && (
                    <FaChevronDown className={`text-xs text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
                  )}
                </div>
              </Link>
              {item.submenu && isOpen && (
                <div className="pl-4 py-2 space-y-1 bg-gray-50/50">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      onClick={closeMobileMenu}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-colors duration-200"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              to="/donate"
              onClick={closeMobileMenu}
              className="block w-full text-center px-4 py-3 rounded-lg text-[15px] font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Donate Now</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
