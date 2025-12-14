import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import LogoCarousel from '../components/LogoCarousel';
import bgHeroSection from '../assets/bgherosection.png';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Hero service cards data
  const heroServices = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Recruitment',
      description: 'Pre-vetted tech talent matched to your requirements',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'DevOps',
      description: 'Faster delivery with automated DevOps solutions',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud Migration',
      description: 'High quality native and cross-platform apps',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'AI Services',
      description: 'Smart solutions to modernize your workflow and technology',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
    },
  ];

  // Services data
  const services = [
    {
      icon: (
        <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 3v5a2 2 0 002 2h5" />
        </svg>
      ),
      title: 'Tech Hiring',
      description: 'Specialized recruitment for engineering, product, and technical roles. Access pre-vetted candidates who match your culture, tech stack, and project requirements perfectly.',
      link: '/employers',
      bgColor: 'bg-teal-50',
      iconBg: 'bg-transparent',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 3v5a2 2 0 002 2h5" />
        </svg>
      ),
      title: 'Executive Search',
      description: 'C-suite and senior leadership placement with a discreet, targeted approach. We connect you with transformational leaders who drive strategic vision and organizational excellence.',
      link: '/employers',
      bgColor: 'bg-teal-50',
      iconBg: 'bg-transparent',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 3v5a2 2 0 002 2h5" />
        </svg>
      ),
      title: 'Contract Staffing',
      description: 'Flexible talent solutions for project-based and temporary requirements. Scale your team dynamically with skilled professionals ready to deliver immediate impact.',
      link: '/employers',
      bgColor: 'bg-teal-50',
      iconBg: 'bg-transparent',
    },
    {
      icon: (
        <svg className="w-10 h-10 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 3v5a2 2 0 002 2h5" />
        </svg>
      ),
      title: 'Employer Branding',
      description: 'Build a compelling employer brand that attracts top talent naturally. Strategic positioning that showcases your culture, values, and career opportunities authentically.',
      link: '/employers',
      bgColor: 'bg-teal-50',
      iconBg: 'bg-transparent',
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "Partnering with organization was one of the best decisions we've made for our business. Their website template is sleek, easy to customize, and optimizes performance on all devices. Our customers have been praising the new design, and we've noticed improved engagement metrics across the board.",
      author: 'MICHAEL TURNER',
      position: 'Product Manager at ConsultPro',
      company: 'CONSULTRA',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    },
    {
      quote: "The recruitment team exceeded our expectations. They understood our technical requirements perfectly and delivered exceptional candidates within days. Their deep understanding of startup culture made all the difference.",
      author: 'SARAH JOHNSON',
      position: 'VP Engineering at TechCorp',
      company: 'TECHCORP',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    },
    {
      quote: "Outstanding service from start to finish. The DevOps solutions they implemented transformed our deployment pipeline. We've seen a 60% reduction in deployment time and significantly fewer production issues.",
      author: 'PRIYA SHARMA',
      position: 'CTO at GrowthTech',
      company: 'GROWTHTECH',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop',
    },
  ];

  // Client logos
  const clientLogos = [
    { src: new URL('../assets/IMG-20251125-WA0028.jpg', import.meta.url).href, alt: 'Client 1' },
    { src: new URL('../assets/IMG-20251125-WA0029.jpg', import.meta.url).href, alt: 'Client 2' },
    { src: new URL('../assets/IMG-20251125-WA0030.jpg', import.meta.url).href, alt: 'Client 3' },
    { src: new URL('../assets/IMG-20251125-WA0031.jpg', import.meta.url).href, alt: 'Client 4' },
    { src: new URL('../assets/IMG-20251125-WA0032.jpg', import.meta.url).href, alt: 'Client 5' },
    { src: new URL('../assets/IMG-20251125-WA0033.jpg', import.meta.url).href, alt: 'Client 6' },
    { src: new URL('../assets/IMG-20251125-WA0034.jpg', import.meta.url).href, alt: 'Client 7' },
    { src: new URL('../assets/IMG-20251126-WA0011.jpg', import.meta.url).href, alt: 'Client 8' },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Lamstacks',
    description: 'Transform your business with expert tech solutions. From finding world-class talent to building scalable cloud infrastructure.',
    url: 'https://lamstacks.com',
    logo: 'https://lamstacks.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+234-9013-4173-481',
      contactType: 'Customer Service',
    },
  };

  return (
    <>
      <SEO
        title="Home"
        description="Transform your business with expert tech solutions. Premium recruitment services, DevOps, cloud migration, and AI services."
        keywords="recruitment, hiring, tech recruitment, DevOps, cloud migration, AI services, IT consulting"
        url="/"
        schema={schema}
      />

      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${bgHeroSection})`,
          backgroundSize: '100% 100%',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative z-10 pt-28 md:pt-32">
          <div className="container-hero pb-6 md:pb-12 lg:pb-24 min-h-[540px] md:min-h-[640px] lg:min-h-[720px]">
          <div className="grid lg:grid-cols-2 gap-2 lg:gap-2 items-center">
            {/* Left Content */}
            <div className="space-y-2 mr-auto">
              {/* New Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-sm backdrop-blur-sm">
                <span className="text-yellow-400">✨</span>
                <span className="text-white/90 font-medium">New: Our HRMA Product Launch Soon</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="whitespace-nowrap">Transform Your Business with</span>
                <span className="block">Expert Tech Solutions</span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                From finding world-class talent to building scalable cloud infrastructure, we're your end-to-end technology partner for growth and innovation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/candidates">
                  <button className="px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40">
                    Find Talent or Jobs
                  </button>
                </Link>
                <Link to="/jobs">
                  <button className="px-7 py-3.5 bg-transparent border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300">
                    Browse Opportunities
                  </button>
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="pt-10">
                <p className="text-sm text-gray-400 mb-4">
                  Trusted by <span className="font-semibold text-white">75,000+</span> businesses worldwide
                </p>
                <div className="bg-white rounded-xl p-4 inline-block w-full max-w-xl shadow-xl">
                  <LogoCarousel logos={clientLogos} />
                </div>
              </div>
            </div>

            {/* Right - Service Cards */}
            <div className="relative">
              <div className="space-y-4 max-w-md ml-auto">
                {heroServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-lg/50 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white ring-8 ring-indigo-50 flex items-center justify-center">
                      {/* Larger icon, unified color */}
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {/* Use a generic icon shape; matches existing semantics */}
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 text-lg">{service.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Video/Feature Section */}
      <section className="relative z-20 -mt-24 md:-mt-28 lg:-mt-32 pb-12 lg:pb-16">
        <div className="container-custom">
          <div className="relative mx-auto max-w-6xl rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Image - City Buildings with greenery */}
            <div 
              className="relative min-h-[280px] md:min-h-[320px] lg:min-h-[350px]"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=600&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center bottom'
              }}
            >
              {/* Dark gradient overlay from left */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/30"></div>
              
              {/* Content */}
              <div className="relative z-10 p-6 md:p-8 lg:p-10 flex items-center min-h-[280px] md:min-h-[320px] lg:min-h-[350px]">
                <div className="grid lg:grid-cols-2 gap-6 items-center w-full">
                  {/* Left - Text Content */}
                  <div className="space-y-3">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                      Empowering Businesses Through Technology
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-md">
                      Discover how we've helped hundreds of companies transform their operations, scale their teams, and accelerate growth through innovative tech solutions.
                    </p>
                  </div>
                  
                  {/* Right - Play Button */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative group cursor-pointer">
                      {/* Outer ring - behind the button, centered */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full z-0 ring-8 ring-indigo-400/25"></div>
                      <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, #ecfdf5 0%, #d1fae5 100%)' }}>
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-700 mb-6 shadow-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2.5"></span>
              OUR SERVICES
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Tech Solutions for
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 mb-6">
              Modern Businesses
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end services tailored to accelerate your digital journey and drive business growth
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-teal-400 via-teal-300 to-transparent rounded-full"></div>
                
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700"
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {/* View All Services */}
          <div className="text-center mt-12">
            <Link
              to="/employers"
              className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-blue-600 transition-colors"
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
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full text-sm font-medium text-amber-800 mb-6">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
              TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real experiences from companies that have transformed their teams and technology with LamStacks
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              {/* Image */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].author}
                    className="w-full h-[300px] lg:h-[400px] object-cover rounded-2xl shadow-lg"
                  />
                  {/* Play button overlay */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-white transition-colors">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="lg:col-span-3 space-y-6">
                {/* Quote marks */}
                <svg className="w-12 h-12 text-blue-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                <div className="pt-4">
                  <div className="font-bold text-gray-900">{testimonials[currentTestimonial].author}</div>
                  <div className="text-gray-600 text-sm">{testimonials[currentTestimonial].position}</div>
                  <div className="mt-3">
                    <span className="text-xs font-bold text-gray-400 tracking-widest">{testimonials[currentTestimonial].company}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #ecfdf5 0%, #d1fae5 50%, #f0fdf4 100%)' }}>
        <div className="container-custom py-16 lg:py-20 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Built in India, trusted worldwide
            </h2>
            <p className="text-lg md:text-xl font-semibold mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-purple-500">we're here 24/7 support.</span>
            </p>
            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
              The core values and principles that drive us to deliver excellence across continents
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {[
              { value: '500 +', label: 'Clients Worldwide', color: 'text-emerald-600' },
              { value: '500 +', label: 'Satisfaction Rate', color: 'text-indigo-900' },
              { value: '500 +', label: 'Successful Placements', color: 'text-indigo-900' },
              { value: '15+', label: 'Years of Excellence', color: 'text-indigo-900' },
            ].map((stat, index) => (
              <div key={index} className="text-center px-4 py-2" style={{ borderRight: index < 3 ? '1px solid #e5e7eb' : 'none' }}>
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-gray-500 text-xs md:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16" style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, #ecfdf5 100%)' }}>
        <div className="container-custom px-4 md:px-8">
          <div className="relative">
            {/* Floating shadow effect */}
            <div className="absolute -bottom-4 left-8 right-8 h-16 rounded-3xl bg-gradient-to-b from-teal-900/40 to-transparent blur-xl"></div>
            
            <div className="rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 relative overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #134e4a 0%, #0f766e 50%, #115e59 100%)' }}>
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-1/3 w-64 h-64 bg-teal-400 rounded-full filter blur-3xl"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    Struggling To Find The Right IT Solutions?
                  </h2>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-md">
                    We'll Help You Connect With The Right Talent And Technology Partners For Your Business Needs.
                  </p>
                </div>

                {/* Right CTA Buttons */}
                <div className="flex flex-col gap-3 lg:items-end">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors text-sm md:text-base"
                  >
                    Schedule a Consultation
                  </Link>
                  <Link
                    to="/jobs"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white bg-transparent text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm md:text-base"
                  >
                    Browse Opportunities
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
