import { Link } from 'react-router-dom';
import logo from '../assets/logoblack.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Jobs', path: '/jobs' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
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
    { name: 'Term Of Service', path: '/terms' },
    { name: 'Policy Service', path: '/privacy-policy' },
    { name: 'Cookie Policy', path: '/cookies' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <footer style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #ecfdf5 100%)' }}>
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={logo} alt="Lamstacks" className="h-10 w-auto" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              We provide exceptional IT services with expertise in DevOps, IT Consulting, Mobile App Development, and Digital Transformation. Building the future, one solution at a time.
            </p>
            
            {/* Social Links */}
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-900">Social Media</p>
              <div className="flex space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href="https://threads.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Threads"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.33-3.022.88-.73 2.108-1.15 3.456-1.182 1.019-.025 1.97.145 2.795.446-.034-.723-.2-1.29-.496-1.69-.369-.498-1.003-.754-1.883-.762-1.29-.012-2.197.377-2.69 1.151l-1.916-1.03c.803-1.258 2.283-2.065 4.266-2.065h.09c1.454.013 2.66.504 3.482 1.417.773.858 1.18 2.05 1.21 3.544l.007.135c.902.421 1.677.988 2.3 1.698.933 1.064 1.455 2.418 1.508 3.916.063 1.76-.453 3.39-1.49 4.716-1.122 1.432-2.787 2.399-4.947 2.876-.65.143-1.353.217-2.09.225zm-1.14-6.437c-.112 0-.225.003-.34.01-1.269.068-2.149.603-2.097 1.55.033.602.519 1.322 1.89 1.322.076 0 .154-.002.233-.007 1.445-.078 2.202-.814 2.378-2.31-.626-.355-1.323-.551-2.064-.565z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Twitter X"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-900 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-5 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-5 text-gray-900">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-5 text-gray-900">Contact</h3>
            <ul className="space-y-4">
              <li>
                <span className="text-gray-600 text-sm">+234 (9013 - 4173 - 48)</span>
              </li>
              <li>
                <a href="mailto:info@lamstacks.com" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Info@Lamstacks.Com
                </a>
              </li>
              <li className="pt-2">
                <div className="text-gray-600 text-sm">
                  <div className="font-semibold text-gray-900 text-xs uppercase tracking-wide mb-2">DHWARCO BUSINESS CENTER</div>
                  <div>21-B, 5th Cross St, South Phase</div>
                  <div>Thiru Vi Ka Industrial Estate</div>
                  <div>Guindy, Chennai – 600032</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Lamstacks. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              {legalLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
