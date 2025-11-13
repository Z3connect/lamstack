import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import Button from '../../components/Button';

const DevOps = () => {
  const services = [
    {
      title: 'CI/CD Pipeline Setup',
      description: 'Automated build, test, and deployment pipelines for faster releases.',
      icon: '🔄',
    },
    {
      title: 'Cloud Infrastructure',
      description: 'AWS, Azure, GCP infrastructure design and management.',
      icon: '☁️',
    },
    {
      title: 'Container Orchestration',
      description: 'Kubernetes, Docker, and container management solutions.',
      icon: '📦',
    },
    {
      title: 'Monitoring & Logging',
      description: 'Real-time monitoring and centralized logging systems.',
      icon: '📊',
    },
  ];

  const benefits = [
    'Faster time to market',
    'Improved deployment frequency',
    'Lower failure rate of new releases',
    'Reduced recovery time',
    'Better collaboration',
    'Cost optimization',
  ];

  return (
    <>
      <SEO
        title="DevOps Services"
        description="Expert DevOps services including CI/CD, cloud infrastructure, container orchestration, and more."
        keywords="devops, ci/cd, kubernetes, docker, cloud infrastructure, automation"
        url="/services/devops"
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container-custom relative z-10 py-20 text-center">
          <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-cyan-100 text-cyan-700 rounded-full text-xs md:text-sm font-semibold mb-4 md:mb-6 animate-fadeInDown">
            DEVOPS SERVICES
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent animate-fadeInUp animate-delay-100 animate-gradient">
            DevOps Excellence
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-6 md:mb-8 animate-fadeInUp animate-delay-200">
            Streamline your development lifecycle with expert DevOps practices and automation
          </p>
          <Link to="/contact">
            <Button size="lg" className="group animate-scaleIn animate-delay-300 hover-lift">
              <span>Get Started</span>
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
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our DevOps Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive DevOps solutions to accelerate your development
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

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose Our DevOps Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold text-gray-800">{benefit}</span>
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
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl mb-8 text-cyan-50 max-w-2xl mx-auto">
            Let's discuss how our DevOps expertise can accelerate your development
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default DevOps;
