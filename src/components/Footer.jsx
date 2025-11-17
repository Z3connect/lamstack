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
    <footer className="relative bg-gradient-to-br from-sky-900 via-cyan-900 to-blue-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <div className="flex items-center space-x-3">
              <img src={logoWhite} alt="Lamstacks" className="h-14 md:h-16 lg:h-20 w-auto filter drop-shadow-lg" />
            </div>
            <p className="text-cyan-100 text-sm md:text-base leading-relaxed max-w-md">
              We provide exceptional IT services with expertise in DevOps, IT Consulting, Mobile App Development, and Digital Transformation. Building the future, one solution at a time.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 md:space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-cyan-300">Quick Links</h3>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cyan-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 group text-sm md:text-base"
                  >
                    <span className="flex items-center">
                      <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-cyan-300">Services</h3>
            <ul className="space-y-2 md:space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-cyan-100 hover:text-white hover:translate-x-2 inline-block transition-all duration-200 group text-sm md:text-base"
                  >
                    <span className="flex items-center">
                      <svg className="w-3 h-3 md:w-4 md:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-cyan-300">Contact Us</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@lamstacks.com" className="text-cyan-100 hover:text-white transition-colors text-sm md:text-base break-all">
                  info@lamstacks.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-cyan-100 text-xs md:text-sm leading-relaxed">
                  <div className="font-semibold text-white mb-1 text-sm md:text-base">DHWARCO BUSINESS CENTER</div>
                  <div>21-B, 5th Cross St, South Phase</div>
                  <div>Thiru Vi Ka Industrial Estate</div>
                  <div>Guindy, Chennai – 600032</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 md:mt-10 lg:mt-12 mb-6 md:mb-8 border-t border-white/20"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-cyan-100 text-xs md:text-sm">
            © {currentYear} Lamstacks. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-xs md:text-sm">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-cyan-100 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
