import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logoblack.svg';
import logoWhite from '../assets/logo white.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Services', path: '/services' },
    { name: 'Abouts', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-indigo-900 text-white py-2 text-center text-sm">
        <span className="text-yellow-300 font-medium">Big news</span> — a better HR experience is on the way with our upcoming HRMA launch.
      </div>
      
      <header className="fixed top-12 left-0 right-0 z-50">
      <div className="container-custom mx-auto">
        <div className="rounded-full px-6 py-1 flex items-center justify-between bg-white shadow-lg">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="Lamstacks" 
              className="h-14 md:h-16 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  link.name === 'Home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm"
            >
              Let's Talk
            </Link>
            
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 text-sm font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span>EN</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-blue-600 font-medium px-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-4">
                <Link 
                  to="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  Let's Talk
                </Link>
                <button className="flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-900 font-medium">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>EN</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;
