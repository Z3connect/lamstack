import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  const services = [
    {
      title: 'Tech Hiring',
      description: 'Specialized recruitment for engineering, product, and technical roles.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop',
    },
    {
      title: 'Executive Search',
      description: 'C-suite and senior leadership placement with discrete, targeted approach.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    },
    {
      title: 'Contract Staffing',
      description: 'Flexible talent solutions for project-based and temporary requirements.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop',
    },
    {
      title: 'Employer Branding',
      description: 'Build a compelling employer brand that attracts top talent naturally.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop',
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
      <section className="relative min-h-screen flex items-center justify-center bg-base-bg overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-start/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-accent-purple/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-accent-cyan/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-2 bg-white/5 backdrop-blur-md rounded-full shadow-lg border border-white/10 animate-fadeInDown hover:bg-white/10 transition-colors duration-300">
              <span className="w-2 h-2 bg-accent-teal rounded-full animate-pulse mr-3 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></span>
              <span className="text-sm md:text-base font-medium text-gray-300 tracking-wide">Connecting Talent with Opportunity Since 2009</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold leading-tight animate-fadeInUp animate-delay-100 tracking-tight">
              Expert{' '}
              <span className="bg-gradient-to-r from-primary-start via-accent-cyan to-accent-blue bg-clip-text text-transparent animate-gradient drop-shadow-lg">
                Recruitment
              </span>
              <br className="hidden md:block" />
              {' '}&{' '}
              <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-primary-start bg-clip-text text-transparent animate-gradient drop-shadow-lg">
                Cloud Infrastructure
              </span>
              {' '}Solutions
            </h1>

            <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animate-delay-200 font-light">
              Struggling to find the right talent or clients? We connect businesses with top professionals and help job seekers discover their perfect opportunities.
            </p>

            {/* Value Proposition Pills */}
            <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fadeInUp animate-delay-250">
              <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-base font-medium text-gray-300 hover:border-primary-start/50 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                🎯 Talent Acquisition
              </span>
              <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-base font-medium text-gray-300 hover:border-accent-purple/50 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(167,139,250,0.2)]">
                ☁️ Cloud Solutions
              </span>
              <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-base font-medium text-gray-300 hover:border-accent-cyan/50 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                🤝 Client Matching
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-10 animate-fadeInUp animate-delay-300">
              <Link to="/contact">
                <Button variant="primary" size="lg" className="group relative overflow-hidden text-lg px-12 py-5 min-w-[200px]">
                  <span className="relative z-10">Find Talent</span>
                  <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              <Link to="/jobs">
                <Button variant="glass" size="lg" className="group text-lg px-12 py-5 min-w-[200px]">
                  <span>Browse Jobs</span>
                  <svg className="w-6 h-6 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 md:pt-20 max-w-5xl mx-auto">
              {[
                { value: '500+', label: 'Clients Served' },
                { value: '98%', label: 'Satisfaction Rate' },
                { value: '24/7', label: 'Support Available' },
                { value: '15+', label: 'Years Experience' },
              ].map((stat, i) => (
                <div key={i} className={`bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-primary-start/50 transition-all hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] animate-scaleIn animate-delay-${(i + 4) * 100}`}>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-start to-accent-cyan bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-400 mt-2 font-medium">{stat.label}</div>
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

      {/* Services Overview - Premium Design */}
      <section className="relative section-padding bg-base-bg overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-3 shadow-lg shadow-white/50"></span>
              <span className="text-white">OUR SERVICES</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Comprehensive{' '}
              <span className="relative inline-block">
                <span className="text-white">
                  IT Solutions
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white rounded-full"></div>
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              End-to-end services tailored to accelerate your digital journey and drive business growth
            </p>
          </div>

          {/* Services Grid with Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Container */}
                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 border border-white/10 hover:border-primary-start/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:-translate-y-3 overflow-hidden group-hover:bg-white/10">

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-start/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Image Container */}
                    <div className="mb-8 transform group-hover:scale-105 transition-all duration-500">
                      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-base-bg/80 to-transparent z-10"></div>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-primary-start transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center text-primary-start font-bold tracking-wide uppercase text-sm opacity-90 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <span>Explore Service</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link
              to="/employers"
              className="inline-flex items-center px-12 py-6 bg-white text-base-bg text-xl font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-500 group overflow-hidden relative"
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent"></div>

              <span className="relative z-10">View All Services</span>
              <svg className="relative z-10 w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Premium Dark Design */}
      <section className="relative section-padding bg-base-bg overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-bold mb-6 shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-3 shadow-lg shadow-white/50"></span>
              <span className="text-white">CLIENT TESTIMONIALS</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              What Our{' '}
              <span className="relative inline-block">
                <span className="text-white">
                  Clients Say
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-white rounded-full"></div>
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Trusted by industry leaders worldwide for exceptional results
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card Container */}
                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-[2rem] p-10 border border-white/10 hover:border-accent-purple/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)] hover:-translate-y-3 overflow-hidden">

                  {/* Quote Icon */}
                  <div className="relative mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-accent-purple/50 transition-all duration-500">
                      <svg className="w-8 h-8 text-accent-purple" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* Quote Text */}
                  <p className="relative text-gray-300 text-xl leading-relaxed mb-8 italic font-light">
                    "{testimonial.quote}"
                  </p>

                  {/* Author Info */}
                  <div className="relative flex items-center space-x-4 pt-6 border-t border-white/10">
                    <div className="w-14 h-14 bg-gradient-to-br from-accent-purple to-accent-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg flex-shrink-0">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white text-lg truncate group-hover:text-accent-purple transition-colors">{testimonial.author}</div>
                      <div className="text-sm text-gray-400 truncate">{testimonial.position}</div>
                      <div className="text-sm font-semibold text-primary-start mt-1">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section - Black & White Grid */}
      <section className="relative section-padding bg-base-bg overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-bold mb-6">
              <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
              <span className="text-gray-300">OUR CLIENTS</span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              Trusted by{' '}
              <span className="relative inline-block">
                <span className="text-white">Industry Leaders</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-start to-accent-purple rounded-full"></div>
              </span>
            </h2>

            <p className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Partnering with innovative companies to build exceptional teams
            </p>
          </div>

          {/* Clients Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
            {[
              { name: 'TechCorp', logo: 'TC' },
              { name: 'GrowthTech', logo: 'GT' },
              { name: 'FinancePlus', logo: 'F+' },
              { name: 'CloudSystems', logo: 'CS' },
              { name: 'DataDrive', logo: 'DD' },
              { name: 'InnovateLabs', logo: 'IL' },
              { name: 'NextGen', logo: 'NG' },
              { name: 'SmartWorks', logo: 'SW' },
              { name: 'TechSolutions', logo: 'TS' },
              { name: 'FutureScale', logo: 'FS' },
              { name: 'DevHub', logo: 'DH' },
              { name: 'CodeFactory', logo: 'CF' },
            ].map((client, index) => (
              <div
                key={index}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-primary-start/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)] hover:-translate-y-2 overflow-hidden aspect-square flex items-center justify-center">
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Logo */}
                  <div className="relative text-center">
                    <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300 group-hover:text-primary-start">
                      {client.logo}
                    </div>
                    <div className="text-xs text-gray-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {client.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
            {[
              { value: '500+', label: 'Clients Worldwide' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '10K+', label: 'Successful Placements' },
              { value: '15+', label: 'Years of Excellence' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300 group-hover:text-primary-start">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="section-padding bg-gradient-to-r from-primary-start via-accent-blue to-accent-purple text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Struggling to Find the Right IT Solutions?
          </h2>
          <p className="text-2xl md:text-3xl mb-12 text-white/90 max-w-4xl mx-auto font-light">
            We'll help you find the perfect solutions for your business needs — from recruitment to digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link to="/contact">
              <Button variant="secondary" size="lg" className="group text-lg px-12 py-5 min-w-[220px] shadow-2xl">
                <span>Schedule a Consultation</span>
                <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Button>
            </Link>
            <Link to="/jobs">
              <Button variant="glass" size="lg" className="group text-lg px-12 py-5 min-w-[220px]">
                <span>View Job Openings</span>
                <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
