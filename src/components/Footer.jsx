import { Link } from 'react-router-dom';
import logoWhite from '../assets/logo white.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    { name: 'Recruitment', path: '/employers' },
    { name: 'DevOps', path: '/services/devops' },
    { name: 'IT Consulting', path: '/services/consulting' },
    { name: 'Mobile Development', path: '/services/mobile' },
    { name: 'Digital Transformation', path: '/services/transformation' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' },
  ];

  return (
    <footer style={{ backgroundColor: 'var(--white)', color: 'var(--neutral-dark)', padding: '80px 0 40px', borderTop: '1px solid var(--neutral-mid)' }}>
      <div className="container">
        <div className="grid-12">
          {/* Column 1: Brand */}
          <div style={{ gridColumn: 'span 4' }}>
            <div style={{ marginBottom: '24px' }}>
              {/* Invert logo color for white background */}
              <img src={logoWhite} alt="Lamstacks" style={{ height: '32px', filter: 'invert(1) brightness(0)' }} />
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666', marginBottom: '24px', maxWidth: '300px' }}>
              We provide exceptional IT services with expertise in DevOps, IT Consulting, Mobile App Development, and Digital Transformation.
            </p>
            <div style={{ fontSize: '14px', color: '#999' }}>
              &copy; {currentYear} Lamstacks. All rights reserved.
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div style={{ gridColumn: 'span 2' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--primary-blue)', letterSpacing: '1px' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} style={{ fontSize: '14px', color: '#666', fontWeight: '500' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-green)'} onMouseLeave={(e) => e.target.style.color = '#666'}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div style={{ gridColumn: 'span 3' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--primary-blue)', letterSpacing: '1px' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {services.map(link => (
                <li key={link.path}>
                  <Link to={link.path} style={{ fontSize: '14px', color: '#666', fontWeight: '500' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-green)'} onMouseLeave={(e) => e.target.style.color = '#666'}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Social */}
          <div style={{ gridColumn: 'span 3' }}>
            <h4 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '24px', color: 'var(--primary-blue)', letterSpacing: '1px' }}>Legal</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {legalLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} style={{ fontSize: '14px', color: '#666', fontWeight: '500' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-green)'} onMouseLeave={(e) => e.target.style.color = '#666'}>{link.name}</Link>
                </li>
              ))}
            </ul>
            
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#" style={{ color: 'var(--primary-blue)' }}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="#" style={{ color: 'var(--primary-blue)' }}>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
