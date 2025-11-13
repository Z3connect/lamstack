import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  const [counters, setCounters] = useState({ hours: 0, acceptance: 0, retention: 0 });

  useEffect(() => {
    // Animate counters
    const targets = { hours: 72, acceptance: 89, retention: 93 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        hours: Math.floor(targets.hours * progress),
        acceptance: Math.floor(targets.acceptance * progress),
        retention: Math.floor(targets.retention * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: 'Tech Hiring',
      description: 'Specialized recruitment for engineering, product, and technical roles.',
      icon: '💻',
    },
    {
      title: 'Executive Search',
      description: 'C-suite and senior leadership placement with discrete, targeted approach.',
      icon: '👔',
    },
    {
      title: 'Contract Staffing',
      description: 'Flexible talent solutions for project-based and temporary requirements.',
      icon: '📊',
    },
    {
      title: 'Employer Branding',
      description: 'Build a compelling employer brand that attracts top talent naturally.',
      icon: '🎯',
    },
  ];

  const process = [
    { step: '01', title: 'Intake', description: 'Deep-dive into your requirements and culture' },
    { step: '02', title: 'Shortlist', description: 'Curated candidates delivered in 72 hours' },
    { step: '03', title: 'Interviews', description: 'Coordinated scheduling and feedback loop' },
    { step: '04', title: 'Hire', description: 'Offer support and onboarding assistance' },
  ];

  const testimonials = [
    {
      quote: 'They delivered a shortlist of perfect candidates in just 3 days. Unmatched speed and quality.',
      author: 'Sarah Johnson',
      position: 'VP Engineering, TechCorp',
      company: 'TechCorp',
    },
    {
      quote: 'Best recruitment partner we\'ve worked with. They understand startup culture and move fast.',
      author: 'Priya Sharma',
      position: 'Co-founder, GrowthTech',
      company: 'GrowthTech',
    },
    {
      quote: 'Their executive search expertise helped us build a world-class leadership team.',
      author: 'Michael Chen',
      position: 'CEO, FinancePlus',
      company: 'FinancePlus',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Recruit',
    description: 'We help businesses hire right — faster, smarter, globally.',
    url: 'https://recruit.com',
    logo: 'https://recruit.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'Customer Service',
    },
  };

  return (
    <>
      <SEO
        title="Home"
        description="We help businesses hire right — faster, smarter, globally. Premium recruitment services for tech, executive, and contract staffing."
        keywords="recruitment, hiring, tech recruitment, executive search, staffing"
        url="/"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-cyan-200 animate-fadeInDown">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-medium text-gray-700">Trusted by 500+ Companies Worldwide</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fadeInUp animate-delay-100">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 bg-clip-text text-transparent animate-gradient">
                Expert IT Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animate-delay-200">
              From recruitment to digital transformation — we help businesses hire right, build faster, and scale smarter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fadeInUp animate-delay-300">
              <Link to="/contact">
                <Button size="lg" className="group relative overflow-hidden hover-lift">
                  <span className="relative z-10">Get Started Now</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              <Link to="/jobs">
                <Button variant="secondary" size="lg" className="group">
                  <span>Explore Opportunities</span>
                  <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 pt-8 md:pt-12 max-w-4xl mx-auto">
              {[
                { value: '500+', label: 'Clients Served' },
                { value: '98%', label: 'Satisfaction Rate' },
                { value: '24/7', label: 'Support Available' },
                { value: '15+', label: 'Years Experience' },
              ].map((stat, i) => (
                <div key={i} className={`bg-white/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-cyan-200 hover:shadow-xl transition-all hover:-translate-y-1 hover-glow animate-scaleIn animate-delay-${(i + 4) * 100}`}>
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end services tailored to accelerate your digital journey
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-white to-cyan-50 rounded-2xl md:rounded-3xl p-4 md:p-8 border-2 border-cyan-100 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover-lift animate-fadeInUp animate-delay-${index * 100}`}
              >
                {/* Icon Background */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl md:rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                
                <div className="text-4xl md:text-6xl mb-3 md:mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-3 text-gray-800 group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs md:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Hover Arrow */}
                <div className="mt-3 md:mt-6 flex items-center text-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs md:text-sm font-semibold">Learn More</span>
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Snapshot */}
      <section className="section-padding bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white text-cyan-700 rounded-full text-sm font-semibold mb-4">
              HOW WE WORK
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Our Simple Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four streamlined steps to deliver exceptional results
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 opacity-20"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative animate-fadeInUp" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-cyan-100 hover-lift">
                    {/* Step Number */}
                    <div className="relative inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 mb-3 md:mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl md:rounded-2xl transform rotate-6"></div>
                      <div className="relative bg-white rounded-xl md:rounded-2xl w-full h-full flex items-center justify-center text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                        {item.step}
                      </div>
                    </div>
                    
                    <h3 className="text-base md:text-2xl font-bold mb-2 md:mb-3 text-gray-800">{item.title}</h3>
                    <p className="text-xs md:text-base text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
              PROVEN RESULTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Numbers That Speak
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our track record of excellence and client satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="group relative bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl md:rounded-3xl p-6 md:p-10 text-white overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scaleIn hover-lift">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full -translate-y-10 translate-x-10 md:-translate-y-16 md:translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full translate-y-10 -translate-x-10 md:translate-y-16 md:-translate-x-16"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 drop-shadow-lg">
                  {counters.hours}
                </div>
                <div className="text-lg md:text-2xl font-semibold mb-1 md:mb-2">Hours</div>
                <p className="text-xs md:text-base text-cyan-100">Average Shortlist Time</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl md:rounded-3xl p-6 md:p-10 text-white overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scaleIn animate-delay-200 hover-lift">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full -translate-y-10 translate-x-10 md:-translate-y-16 md:translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full translate-y-10 -translate-x-10 md:translate-y-16 md:-translate-x-16"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 drop-shadow-lg">
                  {counters.acceptance}%
                </div>
                <div className="text-lg md:text-2xl font-semibold mb-1 md:mb-2">Acceptance Rate</div>
                <p className="text-xs md:text-base text-blue-100">Industry Leading</p>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl md:rounded-3xl p-6 md:p-10 text-white overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 col-span-2 md:col-span-1 animate-scaleIn animate-delay-400 hover-lift">
              <div className="absolute top-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full -translate-y-10 translate-x-10 md:-translate-y-16 md:translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 md:w-32 md:h-32 bg-white/10 rounded-full translate-y-10 -translate-x-10 md:translate-y-16 md:-translate-x-16"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4 drop-shadow-lg">
                  {counters.retention}%
                </div>
                <div className="text-lg md:text-2xl font-semibold mb-1 md:mb-2">Retention @ 6M</div>
                <p className="text-xs md:text-base text-sky-100">Quality Placements</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section-padding bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-white text-cyan-700 rounded-full text-sm font-semibold mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by industry leaders worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-cyan-100 hover-lift animate-fadeInUp animate-delay-${index * 200}`}
              >
                {/* Quote Icon */}
                <div className="mb-3 md:mb-6 w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl md:rounded-2xl flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-gray-700 mb-3 md:mb-6 leading-relaxed text-xs md:text-lg italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="border-t-2 border-cyan-100 pt-3 md:pt-6">
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-xl flex-shrink-0">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-gray-800 text-xs md:text-base truncate">{testimonial.author}</div>
                      <div className="text-xs md:text-sm text-gray-600 truncate">{testimonial.position}</div>
                      <div className="text-xs md:text-sm font-semibold text-cyan-600 mt-0.5 md:mt-1">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="section-padding bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-2xl mb-10 text-cyan-50 max-w-3xl mx-auto">
            Get a curated shortlist of pre-vetted candidates delivered in 72 hours, or explore our full range of IT services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="group bg-white text-cyan-600 hover:bg-cyan-50">
                <span>Schedule a Consultation</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Button>
            </Link>
            <Link to="/jobs">
              <Button size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white text-white">
                View Job Openings
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
