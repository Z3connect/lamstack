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
      <section className="section-lg" style={{ background: 'var(--neutral-light)', textAlign: 'center' }}>
        <div className="container">
          <span style={{ 
            display: 'inline-block', 
            padding: '8px 16px', 
            background: 'var(--white)', 
            color: 'var(--primary-blue)', 
            borderRadius: '50px', 
            fontSize: '12px', 
            fontWeight: 'bold', 
            marginBottom: '24px',
            border: '1px solid var(--neutral-mid)'
          }}>
            SERVICES
          </span>
          <h1 className="animate-fadeInDown" style={{ marginBottom: '24px' }}>
            DevOps <span style={{ color: 'var(--primary-green)' }}>Solutions</span>
          </h1>
          <p className="animate-fadeInUp" style={{ fontSize: '20px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            Accelerate your software delivery with our expert DevOps services. We help you build, test, and deploy faster and more reliably.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-lg">
        <div className="container">
          <div className="grid-12">
            {services.map((service, index) => (
              <div key={index} style={{ 
                gridColumn: 'span 6',
                background: 'var(--white)',
                padding: '40px',
                borderRadius: '12px',
                border: '1px solid var(--neutral-mid)',
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start'
              }}>
                <div style={{ fontSize: '40px' }}>{service.icon}</div>
                <div>
                  <h3 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--primary-blue)' }}>{service.title}</h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-lg" style={{ background: 'var(--primary-blue)', color: 'var(--white)' }}>
        <div className="container">
          <div className="grid-12" style={{ alignItems: 'center' }}>
            <div style={{ gridColumn: 'span 6' }}>
              <h2 style={{ color: 'var(--white)', marginBottom: '24px' }}>Why Choose DevOps?</h2>
              <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '32px' }}>
                Implementing DevOps practices can significantly improve your organization's performance and culture.
              </p>
              <Link to="/contact" className="btn" style={{ 
                backgroundColor: 'var(--white)', 
                color: 'var(--primary-blue)',
                padding: '16px 32px'
              }}>
                Get Started
              </Link>
            </div>
            <div style={{ gridColumn: 'span 6' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                {benefits.map((benefit, index) => (
                  <div key={index} style={{ 
                    background: 'rgba(255,255,255,0.1)', 
                    padding: '20px', 
                    borderRadius: '8px',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <div style={{ color: 'var(--primary-green)', marginBottom: '8px', fontWeight: 'bold' }}>✓</div>
                    <div style={{ fontWeight: '600' }}>{benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DevOps;
