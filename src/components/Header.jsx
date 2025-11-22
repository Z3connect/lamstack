import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/logo white.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-base-bg/80 backdrop-blur-md border-b border-white/10 shadow-lg'
        : 'bg-transparent border-b border-transparent'
      }`}>
      {/* Animated background glow effect */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-start rounded-full filter blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-purple rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with glow effect */}
          <Link to="/" className="flex items-center group relative">
            <div className="absolute inset-0 bg-primary-start blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
            <img
              src={logoWhite}
              alt="Lamstacks"
              className="h-12 md:h-16 lg:h-20 w-auto relative z-10 group-hover:scale-110 transition-transform duration-500 filter drop-shadow-2xl"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-3.5 py-1.5 text-cyan-100 hover:text-white font-semibold transition-all duration-300 rounded-xl group overflow-hidden text-sm"
              >
                {/* Hover background effect */}
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-primary-start/50 rounded-xl transition-all duration-300"></span>

                {/* Text */}
                <span className="relative z-10 flex items-center space-x-2">
                  <span className="text-gray-300 group-hover:text-white transition-colors">{link.name}</span>
                  <span className="w-0 h-0.5 bg-gradient-to-r from-primary-start to-accent-cyan group-hover:w-full transition-all duration-300 rounded-full"></span>
                </span>

                {/* Bottom glow line */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-start via-accent-cyan to-primary-start group-hover:w-full transition-all duration-500 rounded-full blur-sm"></span>
              </Link>
            ))}

            {/* Services Dropdown with Enhanced Styling */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="relative px-3.5 py-1.5 text-gray-300 hover:text-white font-semibold transition-all duration-300 rounded-xl overflow-hidden flex items-center space-x-2 text-sm">
                {/* Hover background effect */}
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-primary-start/50 rounded-xl transition-all duration-300"></span>

                <span className="relative z-10">Services</span>
                <svg className={`relative z-10 w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>

                {/* Bottom glow line */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary-start via-accent-cyan to-primary-start group-hover:w-full transition-all duration-500 rounded-full blur-sm"></span>
              </button>

              {/* Premium Dropdown Menu */}
              <div
                className={`absolute top-full right-0 mt-4 w-96 transition-all duration-500 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                  }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {/* Dropdown arrow */}
                <div className="absolute -top-2 right-8 w-4 h-4 bg-base-card rotate-45 border-t border-l border-white/10"></div>

                <div className="relative bg-base-card rounded-2xl shadow-2xl border border-white/10 overflow-hidden backdrop-blur-xl">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-start/5 to-accent-purple/5 opacity-50"></div>

                  <div className="relative z-10 p-2">
                    {services.map((service, index) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setIsServicesOpen(false)}
                        className={`group relative block px-6 py-4 rounded-xl transition-all duration-300 overflow-hidden ${service.highlight
                            ? 'bg-gradient-to-r from-primary-start via-accent-blue to-accent-purple text-white font-bold shadow-lg hover:shadow-primary-start/50 hover:scale-105'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                          } ${index !== services.length - 1 ? 'mb-1' : ''}`}
                      >
                        {service.highlight && (
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
                        )}

                        <div className="relative z-10 flex items-center justify-between">
                          <span className="flex items-center space-x-3">
                            {service.highlight && (
                              <span className="flex-shrink-0 w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-lg shadow-white/50"></span>
                            )}
                            <span className="text-sm lg:text-base">{service.name}</span>
                          </span>
                          <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>

                        {service.highlight && (
                          <div className="mt-1 text-xs text-cyan-100 opacity-90">⚡ Most Popular Service</div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Premium CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/contact"
              className="group relative px-5 py-2.5 bg-gradient-to-r from-primary-start via-accent-blue to-accent-purple text-white font-bold rounded-xl transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary-start/50 hover:scale-105 overflow-hidden text-sm md:text-base"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-purple via-accent-blue to-primary-start opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

              <span className="relative z-10 flex items-center space-x-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Let's Talk</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button with Modern Design */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative p-2.5 text-cyan-100 hover:text-white rounded-xl transition-all duration-300 group overflow-hidden"
            aria-label="Toggle menu"
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></span>
            <svg
              className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
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

      {/* Premium Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="relative bg-base-card border-t border-white/10 shadow-2xl backdrop-blur-xl">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-start/5 to-accent-purple/5"></div>

          <nav className="container-custom py-8 space-y-2 relative z-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative block py-4 px-6 text-gray-300 hover:text-white rounded-xl transition-all duration-300 overflow-hidden font-semibold"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-primary-start/50 rounded-xl transition-all duration-300"></span>
                <span className="relative z-10 flex items-center justify-between">
                  <span>{link.name}</span>
                  <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}

            {/* Mobile Services Section */}
            <div className="pt-2">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="group relative w-full flex items-center justify-between py-4 px-6 text-gray-300 hover:text-white rounded-xl transition-all duration-300 overflow-hidden font-semibold"
              >
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-primary-start/50 rounded-xl transition-all duration-300"></span>
                <span className="relative z-10">Services</span>
                <svg className={`relative z-10 w-5 h-5 transition-transform duration-500 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`transition-all duration-500 overflow-hidden ${isServicesOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}>
                <div className="ml-4 space-y-2 border-l-4 border-primary-start pl-4">
                  {services.map((service, index) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`group relative block py-3.5 px-5 rounded-xl transition-all duration-300 overflow-hidden ${service.highlight
                          ? 'bg-gradient-to-r from-primary-start via-accent-blue to-accent-purple text-white font-bold shadow-lg shadow-primary-start/30'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                        }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {service.highlight && (
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
                      )}

                      <span className="relative z-10 flex items-center space-x-3">
                        {service.highlight && (
                          <span className="flex-shrink-0 w-2 h-2 bg-white rounded-full animate-pulse shadow-lg shadow-white/50"></span>
                        )}
                        <span className="text-sm">{service.name}</span>
                      </span>

                      {service.highlight && (
                        <div className="mt-1 text-xs text-cyan-100 opacity-90 relative z-10">⚡ Most Popular</div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mt-6 group relative"
            >
              <div className="relative px-8 py-4 bg-gradient-to-r from-primary-start via-accent-blue to-accent-purple text-white font-bold rounded-xl text-center shadow-2xl shadow-primary-start/30 transition-all duration-300 hover:scale-105 overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Let's Talk</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
