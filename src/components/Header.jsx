import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/logo white.svg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBlackSection, setIsBlackSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Detect if we're in a black section (services or testimonials)
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 80; // Offset for navbar height (reduced nav)
      
      let inBlackSection = false;
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        // Check if section has black background
        const bgColor = window.getComputedStyle(section).backgroundColor;
        if ((bgColor === 'rgb(0, 0, 0)' || section.classList.contains('bg-black')) 
            && scrollPosition >= sectionTop 
            && scrollPosition <= sectionBottom) {
          inBlackSection = true;
        }
      });
      
      setIsBlackSection(inBlackSection);
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
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isBlackSection
        ? 'bg-black border-b border-white/20 shadow-2xl' 
        : scrolled 
        ? 'bg-gradient-to-r from-sky-900 via-cyan-900 to-blue-900 shadow-2xl border-b border-cyan-700/50' 
        : 'bg-gradient-to-br from-sky-900 via-cyan-900 to-blue-900 border-b border-cyan-700/30'
    }`}>
      {/* Animated background glow effect - only show when not in black section */}
      {!isBlackSection && (
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      )}

      {/* White grid pattern for black section */}
      {isBlackSection && (
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      )}

      <div className="container-custom relative z-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo with glow effect */}
          <Link to="/" className="flex items-center group relative">
            <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full"></div>
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
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/50 rounded-xl transition-all duration-300"></span>
                
                {/* Text */}
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{link.name}</span>
                  <span className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </span>
                
                {/* Bottom glow line */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500 rounded-full blur-sm"></span>
              </Link>
            ))}
            
            {/* Services Dropdown with Enhanced Styling */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="relative px-3.5 py-1.5 text-cyan-100 hover:text-white font-semibold transition-all duration-300 rounded-xl overflow-hidden flex items-center space-x-2 text-sm">
                {/* Hover background effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/50 rounded-xl transition-all duration-300"></span>
                
                <span className="relative z-10">Services</span>
                <svg className={`relative z-10 w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                
                {/* Bottom glow line */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500 rounded-full blur-sm"></span>
              </button>
              
              {/* Premium Dropdown Menu */}
              <div 
                className={`absolute top-full right-0 mt-4 w-96 transition-all duration-500 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {/* Dropdown arrow */}
                <div className="absolute -top-2 right-8 w-4 h-4 bg-gradient-to-br from-sky-800 to-cyan-900 rotate-45 border-t-2 border-l-2 border-cyan-500/30"></div>
                
                <div className="relative bg-gradient-to-br from-sky-900 via-cyan-900 to-blue-900 rounded-2xl shadow-2xl border-2 border-cyan-500/30 overflow-hidden backdrop-blur-xl">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-50"></div>
                  
                  <div className="relative z-10 p-2">
                    {services.map((service, index) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        onClick={() => setIsServicesOpen(false)}
                        className={`group relative block px-6 py-4 rounded-xl transition-all duration-300 overflow-hidden ${
                          service.highlight 
                            ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-cyan-500/50 hover:scale-105' 
                            : 'text-cyan-100 hover:text-white hover:bg-white/10'
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
              className="group relative px-5 py-2.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold rounded-xl transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 overflow-hidden text-sm md:text-base"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
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
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="relative bg-gradient-to-br from-sky-950 via-cyan-950 to-blue-950 border-t-2 border-cyan-500/30 shadow-2xl backdrop-blur-xl">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>
          
          <nav className="container-custom py-8 space-y-2 relative z-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="group relative block py-4 px-6 text-cyan-100 hover:text-white rounded-xl transition-all duration-300 overflow-hidden font-semibold"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/50 rounded-xl transition-all duration-300"></span>
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
                className="group relative w-full flex items-center justify-between py-4 px-6 text-cyan-100 hover:text-white rounded-xl transition-all duration-300 overflow-hidden font-semibold"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                <span className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-400/50 rounded-xl transition-all duration-300"></span>
                <span className="relative z-10">Services</span>
                <svg className={`relative z-10 w-5 h-5 transition-transform duration-500 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`transition-all duration-500 overflow-hidden ${
                isServicesOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}>
                <div className="ml-4 space-y-2 border-l-4 border-gradient-to-b from-cyan-400 to-blue-600 pl-4">
                  {services.map((service, index) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`group relative block py-3.5 px-5 rounded-xl transition-all duration-300 overflow-hidden ${
                        service.highlight 
                          ? 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold shadow-lg shadow-cyan-500/30' 
                          : 'bg-white/5 text-cyan-100 hover:bg-white/10 hover:text-white'
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
              <div className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold rounded-xl text-center shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:scale-105 overflow-hidden">
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
