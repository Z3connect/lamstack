import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Card from '../components/Card';

const Services = () => {
  const services = [
    {
      title: 'DevOps Solutions',
      description: 'Streamline your development and operations with our expert DevOps services. CI/CD pipelines, automation, and cloud infrastructure.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      link: '/services/devops',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'IT Consulting',
      description: 'Strategic technology consulting to help your business grow. Digital strategy, system architecture, and technology roadmaps.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      link: '/services/consulting',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Mobile Development',
      description: 'Build powerful mobile applications for iOS and Android. Native and cross-platform solutions tailored to your needs.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      link: '/services/mobile',
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Digital Transformation',
      description: 'Transform your business with cutting-edge digital solutions. Modernize legacy systems and embrace new technologies.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: '/services/transformation',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <>
      <SEO
        title="Our Services"
        description="Explore our comprehensive range of technology services including DevOps, IT Consulting, Mobile Development, and Digital Transformation."
        keywords="services, devops, consulting, mobile development, digital transformation"
        url="/services"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-2 bg-white text-cyan-700 rounded-full text-sm font-semibold mb-2 border border-cyan-200">
              WHAT WE OFFER
            </span>
            <h1 className="leading-tight">
              Our <span className="text-cyan-700">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Comprehensive technology solutions to drive your business forward
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link to={service.link} key={index}>
                <Card className="h-full p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-cyan-600 font-semibold">
                    Learn More
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Let's discuss how we can help transform your business with our technology solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
