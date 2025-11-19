import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Card from '../components/Card';

const Home = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

  const solutions = [
    { title: 'Strategic Staffing', description: 'Aligning talent with your business goals.' },
    { title: 'Cloud Architecture', description: 'Building robust and scalable infrastructure.' },
    { title: 'Digital Consulting', description: 'Navigating the complex digital landscape.' },
  ];

  const values = [
    { title: 'Industry Expertise', description: 'Deep understanding of tech and recruitment.' },
    { title: 'Rapid Delivery', description: 'Speed without compromising quality.' },
    { title: 'Global Network', description: 'Access to talent pools worldwide.' },
    { title: 'Client Focus', description: 'Tailored solutions for your specific needs.' },
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

      {/* 1. HERO SECTION */}
      <section className="section-lg" style={{ 
        paddingTop: '180px', 
        paddingBottom: '120px', 
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="grid-12" style={{ alignItems: 'center' }}>
            <div style={{ gridColumn: 'span 7', position: 'relative', zIndex: 2 }}>
              <h1 className="animate-fadeInUp" style={{ marginBottom: '24px', fontSize: '58px', lineHeight: '1.05' }}>
                <span style={{ color: 'var(--primary-green)' }}>Expert Recruitment</span> &<br /> Cloud Infrastructure Solutions
              </h1>
              <p className="animate-fadeInUp" style={{ 
                fontSize: '20px', 
                color: '#444', 
                marginBottom: '32px', 
                maxWidth: '640px',
                animationDelay: '0.15s'
              }}>
                Struggling to find the right talent or clients? We connect businesses with top professionals and help job seekers discover their perfect opportunities.
              </p>
              <div className="animate-fadeInUp" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '40px', animationDelay: '0.3s' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--white)', padding: '12px 18px', borderRadius: '50px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid var(--neutral-mid)' }}>
                  <span style={{ fontSize: '22px' }}>🎯</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>Talent Acquisition</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--white)', padding: '12px 18px', borderRadius: '50px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid var(--neutral-mid)' }}>
                  <span style={{ fontSize: '22px' }}>☁️</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>Cloud Solutions</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--white)', padding: '12px 18px', borderRadius: '50px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid var(--neutral-mid)' }}>
                  <span style={{ fontSize: '22px' }}>🤝</span>
                  <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>Client Matching</span>
                </div>
              </div>
              <div className="animate-fadeInUp" style={{ display: 'flex', gap: '16px', animationDelay: '0.45s' }}>
                <Link to="/contact" className="btn btn-primary">Start Hiring</Link>
                <Link to="/jobs" className="btn btn-outline">Find Jobs</Link>
              </div>
            </div>
            <div style={{ gridColumn: 'span 5', position: 'relative' }}>
              <div className="animate-fadeInRight" style={{ 
                position: 'relative',
                zIndex: 1
              }}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team collaboration" 
                  style={{ 
                    borderRadius: '20px', 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    width: '100%'
                  }} 
                />
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  background: 'var(--white)',
                  padding: '24px',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  maxWidth: '200px'
                }}>
                  <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'var(--primary-green)' }}>500+</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>Successful Placements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="section-lg">
        <div className="container">
          <div className="section-title animate-on-scroll">Our Expertise</div>
          <div className="grid-12">
            {services.map((service, index) => (
              <div key={index} className="animate-on-scroll" style={{ 
                gridColumn: 'span 3', 
                background: 'var(--white)',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid var(--neutral-mid)',
                transition: 'all 0.3s ease',
                animationDelay: `${index * 0.1}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'var(--primary-green)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--neutral-mid)';
              }}
              >
                <div style={{ 
                  height: '60px', 
                  width: '60px', 
                  background: 'var(--light-green)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '24px',
                  fontSize: '24px'
                }}>
                  {index === 0 ? '🚀' : index === 1 ? '👔' : index === 2 ? '⚡' : '🌟'}
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--primary-blue)' }}>{service.title}</h3>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className="section-lg" style={{ background: 'var(--neutral-light)' }}>
        <div className="container">
          <div className="grid-12" style={{ alignItems: 'center' }}>
            <div style={{ gridColumn: 'span 5' }}>
              <h2 style={{ marginBottom: '24px' }}>Our Hiring Process</h2>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px' }}>
                We've refined our recruitment process to deliver speed without compromising on quality.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {process.map((step, index) => (
                  <div key={index} className="animate-on-scroll" style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    gap: '20px',
                    animationDelay: `${index * 0.1}s`
                  }}>
                    <div style={{ 
                      fontSize: '24px', 
                      fontWeight: 'bold', 
                      color: 'var(--primary-green)',
                      minWidth: '40px'
                    }}>{step.step}</div>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{step.title}</h4>
                      <p style={{ color: '#666', fontSize: '14px' }}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ gridColumn: 'span 7', position: 'relative' }}>
               <div className="animate-fadeInLeft" style={{
                 background: 'var(--white)',
                 padding: '40px',
                 borderRadius: '20px',
                 boxShadow: '0 20px 60px rgba(0,0,0,0.05)'
               }}>
                 <img 
                   src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                   alt="Process" 
                   style={{ borderRadius: '12px', width: '100%' }}
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="section-lg">
        <div className="container">
          <div className="section-title">Client Success Stories</div>
          <div className="grid-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-on-scroll" style={{ 
                gridColumn: 'span 4',
                background: 'var(--white)',
                padding: '40px',
                border: '1px solid var(--neutral-mid)',
                borderRadius: '12px',
                position: 'relative'
              }}>
                <div style={{ 
                  fontSize: '60px', 
                  color: 'var(--light-green)', 
                  position: 'absolute', 
                  top: '20px', 
                  left: '20px',
                  fontFamily: 'serif',
                  lineHeight: 1
                }}>"</div>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#555', 
                  fontStyle: 'italic', 
                  marginBottom: '24px', 
                  position: 'relative', 
                  zIndex: 1 
                }}>
                  {testimonial.quote}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    background: '#ddd', 
                    borderRadius: '50%' 
                  }}></div>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{testimonial.author}</div>
                    <div style={{ fontSize: '12px', color: '#888' }}>{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="section-lg" style={{ background: 'var(--primary-blue)', color: 'var(--white)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--white)', marginBottom: '24px' }}>Ready to Build Your Dream Team?</h2>
          <p style={{ fontSize: '20px', opacity: 0.9, marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            Connect with us today and let's discuss how we can help you achieve your hiring goals.
          </p>
          <Link to="/contact" className="btn" style={{ 
            backgroundColor: 'var(--white)', 
            color: 'var(--primary-blue)',
            padding: '16px 48px'
          }}>
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
