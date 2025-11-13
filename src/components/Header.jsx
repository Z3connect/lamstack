import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoBlack from '../assets/logoblack.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: '🎯 Recruitment (Main)', path: '/employers', highlight: true },
    { name: '☁️ DevOps', path: '/services/devops' },
    { name: '💼 IT Consulting', path: '/services/consulting' },
    { name: '📱 Mobile App Development', path: '/services/mobile' },
    { name: '🚀 Digital Transformation', path: '/services/transformation' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'Candidates', path: '/candidates' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-xl border-b border-cyan-200 shadow-lg">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src={logoBlack} alt="Lamstacks" className="h-20 md:h-32 lg:h-36 w-auto group-hover:scale-110 transition-transform duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-4 py-2 text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 rounded-lg hover:bg-cyan-50 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="px-4 py-2 text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 rounded-lg hover:bg-cyan-50 flex items-center space-x-1 group">
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:w-full transition-all duration-300"></span>
              </button>
              
              {/* Dropdown Menu - stays open when hovering over it */}
              <div 
                className={`absolute top-full left-0 mt-2 w-80 transition-all duration-300 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-cyan-100 overflow-hidden">
                  {services.map((service, index) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsServicesOpen(false)}
                      className={`group block px-6 py-4 transition-all duration-300 ${
                        service.highlight 
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold' 
                          : 'text-gray-700 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 hover:text-cyan-700'
                      } ${index !== services.length - 1 ? 'border-b border-cyan-100' : ''}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center space-x-2">
                          {service.highlight && (
                            <span className="flex-shrink-0 w-2 h-2 bg-white rounded-full animate-pulse"></span>
                          )}
                          <span>{service.name}</span>
                        </span>
                        <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2"
            >
              <span>Let's Talk</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-base-text hover:bg-base-bg rounded-lg transition-colors"
            aria-label="Toggle menu"
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
        <div className="md:hidden bg-gradient-to-br from-sky-900 via-cyan-900 to-blue-900 border-t border-cyan-700 shadow-2xl">
          <nav className="container-custom py-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-cyan-100 hover:text-white hover:bg-white/10 rounded-xl transition-all font-medium"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Services */}
            <div className="pt-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between py-3 px-4 text-cyan-100 hover:text-white hover:bg-white/10 rounded-xl transition-all font-medium"
              >
                <span>Services</span>
                <svg className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="ml-2 mt-2 space-y-1 border-l-2 border-cyan-400 pl-4">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2.5 px-4 rounded-lg transition-all ${
                        service.highlight 
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg' 
                          : 'text-cyan-100 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-6"
            >
              <div className="px-6 py-3 bg-white text-cyan-700 font-bold rounded-xl hover:bg-cyan-50 transition-all text-center shadow-xl">
                Let's Talk →
              </div>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
