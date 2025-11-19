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
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo-link">
          <img 
            src={logoWhite} 
            alt="Lamstacks" 
            className="logo-img"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Services Dropdown */}
          <div className="dropdown">
            <button className="nav-link" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
              Services
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div className="dropdown-content">
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="dropdown-link"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/contact" className="btn btn-talk" style={{ padding: '10px 24px', fontSize: '14px' }}>
            Let's Talk
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className="nav-link"
          >
            {link.name}
          </Link>
        ))}
        <div style={{ borderTop: '1px solid #eee', paddingTop: '10px' }}>
          <div style={{ padding: '0 16px 8px', fontSize: '12px', color: '#999', fontWeight: 'bold', textTransform: 'uppercase' }}>Services</div>
          {services.map((service) => (
            <Link
              key={service.path}
              to={service.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="nav-link"
              style={{ paddingLeft: '24px' }}
            >
              {service.name}
            </Link>
          ))}
        </div>
        <div style={{ padding: '16px' }}>
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn btn-talk"
            style={{ width: '100%', textAlign: 'center' }}
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </header>
  );
};


export default Header;
