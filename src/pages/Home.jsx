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
              <span className="text-sm font-medium text-gray-700">Connecting Talent with Opportunity Since 2009</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fadeInUp animate-delay-100">
              Expert{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 bg-clip-text text-transparent animate-gradient">
                Recruitment
              </span>
              {' '}&{' '}
              <span className="bg-gradient-to-r from-sky-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                Cloud Infrastructure
              </span>
              {' '}Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animate-delay-200">
              Struggling to find the right talent or clients? We connect businesses with top professionals and help job seekers discover their perfect opportunities.
            </p>

            {/* Value Proposition Pills */}
            <div className="flex flex-wrap justify-center gap-3 pt-2 animate-fadeInUp animate-delay-250">
              <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-300 rounded-full text-sm font-semibold text-gray-700">
                🎯 Talent Acquisition
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-sky-500/10 to-purple-500/10 border border-sky-300 rounded-full text-sm font-semibold text-gray-700">
                ☁️ Cloud Solutions
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-300 rounded-full text-sm font-semibold text-gray-700">
                🤝 Client Matching
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fadeInUp animate-delay-300">
              <Link to="/contact">
                <Button size="lg" className="group relative overflow-hidden hover-lift">
                  <span className="relative z-10">Find Talent or Jobs</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              <Link to="/jobs">
                <Button variant="secondary" size="lg" className="group">
                  <span>Browse Opportunities</span>
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

      {/* Services Overview - Premium Design */}
      <section className="relative section-padding bg-black overflow-hidden">
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
                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 hover:border-white/60 transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-3 overflow-hidden">
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-white opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Image Container */}
                    <div className="mb-8 transform group-hover:scale-105 transition-all duration-500">
                      <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                        {/* Glow effect behind image */}
                        <div className="absolute inset-0 bg-white rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-110"></div>
                        {/* Image */}
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="relative w-full h-full object-cover rounded-2xl border-2 border-white/30 group-hover:border-white/60 transition-all duration-500"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <div className="flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-sm md:text-base">Learn More</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-white/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Link 
              to="/employers" 
              className="inline-flex items-center px-10 py-5 bg-white text-black text-lg font-bold rounded-2xl hover:shadow-2xl hover:shadow-white/50 hover:scale-110 transition-all duration-500 group overflow-hidden relative"
            >
              {/* Animated shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
              
              <span className="relative z-10">View All Services</span>
              <svg className="relative z-10 w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Premium Dark Design */}
      <section className="relative section-padding bg-black overflow-hidden">
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
                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 hover:border-white/60 transition-all duration-500 hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-3 overflow-hidden">
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Quote Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 group-hover:border-white/60 transition-all duration-500">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Quote Text */}
                  <p className="relative text-gray-300 text-lg leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="relative flex items-center space-x-4 pt-6 border-t border-white/20">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-white/30 flex-shrink-0">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white text-lg truncate">{testimonial.author}</div>
                      <div className="text-sm text-gray-300 truncate">{testimonial.position}</div>
                      <div className="text-sm font-semibold text-gray-400 mt-1">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section - Black & White Grid */}
      <section className="relative section-padding bg-white overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-black/5 backdrop-blur-sm border border-black/10 rounded-full text-sm font-bold mb-6">
              <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
              <span className="text-gray-900">OUR CLIENTS</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
              Trusted by{' '}
              <span className="relative inline-block">
                <span className="text-black">Industry Leaders</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-black rounded-full"></div>
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
                <div className="relative bg-white border-2 border-black/10 rounded-2xl p-8 hover:border-black/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden aspect-square flex items-center justify-center">
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Logo */}
                  <div className="relative text-center">
                    <div className="text-4xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                      {client.logo}
                    </div>
                    <div className="text-xs text-gray-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {client.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t-2 border-black/10">
            {[
              { value: '500+', label: 'Clients Worldwide' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '10K+', label: 'Successful Placements' },
              { value: '15+', label: 'Years of Excellence' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-5xl md:text-6xl font-bold text-black mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
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
            Struggling to Find the Right IT Solutions?
          </h2>
          <p className="text-2xl mb-10 text-cyan-50 max-w-3xl mx-auto">
            We'll help you find the perfect solutions for your business needs — from recruitment to digital transformation
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
