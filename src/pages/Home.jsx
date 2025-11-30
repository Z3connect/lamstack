import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Card from '../components/Card';
import LogoCarousel from '../components/LogoCarousel';
import ServiceIcon from '../components/ServiceIcon';

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

  // Client logos from assets (provided by user)
  const clientLogos = [
    { src: new URL('../assets/IMG-20251125-WA0028.jpg', import.meta.url).href, alt: 'Client 1' },
    { src: new URL('../assets/IMG-20251125-WA0029.jpg', import.meta.url).href, alt: 'Client 2' },
    { src: new URL('../assets/IMG-20251125-WA0030.jpg', import.meta.url).href, alt: 'Client 3' },
    { src: new URL('../assets/IMG-20251125-WA0031.jpg', import.meta.url).href, alt: 'Client 4' },
    { src: new URL('../assets/IMG-20251125-WA0032.jpg', import.meta.url).href, alt: 'Client 5' },
    { src: new URL('../assets/IMG-20251125-WA0033.jpg', import.meta.url).href, alt: 'Client 6' },
    { src: new URL('../assets/IMG-20251125-WA0034.jpg', import.meta.url).href, alt: 'Client 7' },
    // Removed WA0035 per request
    { src: new URL('../assets/IMG-20251126-WA0011.jpg', import.meta.url).href, alt: 'Client 9' },
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
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-cyan-200 animate-fadeInDown">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-sm font-medium text-gray-700">Connecting Talent with Opportunity Since 2009</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fadeInUp animate-delay-100">
              Expert{' '}
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Recruitment
              </span>
              {' '}&{' '}
              <span className="bg-gradient-to-r from-gray-900 via-slate-700 to-gray-900 bg-clip-text text-transparent">
                Cloud Infrastructure
              </span>
              {' '}Solutions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animate-delay-200">
              Struggling to find the right talent or clients? We connect businesses with top professionals and help job seekers discover their perfect opportunities.
            </p>

            {/* Value Proposition Icons (match homepage style) */}
            <div className="flex flex-wrap justify-center gap-3 pt-2 animate-fadeInUp animate-delay-250">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-gray-800">
                <ServiceIcon name="DevOps" className="h-5 w-5 text-gray-700" />
                DevOps
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-gray-800">
                <ServiceIcon name="IT Consulting" className="h-5 w-5 text-gray-700" />
                IT Consulting
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-gray-800">
                <ServiceIcon name="Mobile App" className="h-5 w-5 text-gray-700" />
                Mobile App
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-semibold text-gray-800">
                <ServiceIcon name="Digital Transformation" className="h-5 w-5 text-gray-700" />
                Digital Transformation
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
                  <div className="text-2xl md:text-3xl font-bold text-gray-900">
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 mb-6">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
              OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Comprehensive IT Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end services tailored to accelerate your digital journey and drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6 rounded-2xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-2xl"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center text-sm font-semibold text-cyan-700">
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/employers"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-gray-900 border border-gray-900 rounded-2xl hover:bg-gray-900 hover:text-white transition-colors"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-5 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm font-semibold text-gray-700 mb-6">
              <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
              CLIENT TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">What Our Clients Say</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by industry leaders worldwide for exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 h-full border border-gray-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                  <div className="text-sm font-semibold text-gray-600 mt-1">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section - Logo Carousel */}
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

          {/* Clients Logo Carousel */}
          <div className="mb-16">
            <LogoCarousel logos={clientLogos} />
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
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Struggling to Find the Right IT Solutions?
          </h2>
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
            We'll help you connect with the right talent and technology partners for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-2xl hover:bg-slate-100 transition-colors"
            >
              Schedule a Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/jobs"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/40 text-white font-semibold rounded-2xl hover:bg-white/10 transition-colors"
            >
              View Job Openings
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
