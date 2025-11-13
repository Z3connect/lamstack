import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Button from '../../components/Button';

const ITConsulting = () => {
  const services = [
    {
      title: 'Digital Transformation',
      description: 'Guide your organization through digital evolution with strategic planning and execution.',
      icon: '🚀',
    },
    {
      title: 'Enterprise Solutions',
      description: 'Scalable enterprise-grade solutions tailored to your business needs.',
      icon: '🏢',
    },
    {
      title: 'IT Strategy',
      description: 'Develop comprehensive IT strategies aligned with business objectives.',
      icon: '📋',
    },
    {
      title: 'Technology Assessment',
      description: 'Evaluate current infrastructure and recommend optimizations.',
      icon: '🔍',
    },
  ];

  const expertise = [
    'IT Infrastructure Modernization',
    'Cloud Migration Strategy',
    'Security & Compliance',
    'Business Process Optimization',
    'Technology Roadmap Development',
    'Vendor Management',
  ];

  return (
    <>
      <SEO
        title="IT Consulting Services"
        description="Expert IT consulting for digital transformation, enterprise solutions, and strategic IT planning."
        keywords="it consulting, digital transformation, enterprise solutions, it strategy"
        url="/services/consulting"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container-custom relative z-10 py-20 text-center">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-cyan-100 text-cyan-700 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 animate-fadeInDown">
            IT CONSULTING
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent animate-fadeInUp animate-delay-100 animate-gradient">
            Strategic IT Consulting
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 animate-fadeInUp animate-delay-200">
            Expert guidance to modernize your IT infrastructure and drive business growth
          </p>
          <Link to="/contact">
            <Button size="lg" className="group">
              <span>Schedule Consultation</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT consulting to help 50+ companies modernize
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-gradient-to-br from-white to-cyan-50 rounded-2xl md:rounded-3xl p-4 md:p-8 border-2 border-cyan-100 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover-lift animate-fadeInUp animate-delay-${index * 100}`}
              >
                <div className="text-4xl md:text-6xl mb-3 md:mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-3 text-gray-800 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs md:text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Our Areas of Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your IT Infrastructure
          </h2>
          <p className="text-xl mb-8 text-cyan-50 max-w-2xl mx-auto">
            Partner with us to modernize your technology and achieve your business goals
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ITConsulting;
