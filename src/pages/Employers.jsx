import { Link } from 'react-router-dom';
import { useState } from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Card from '../components/Card';
import faqData from '../data/faq.json';

const Employers = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      title: 'Executive Search',
      description: 'Discrete, targeted recruitment for C-suite and senior leadership positions.',
      features: ['Confidential searches', 'Deep market mapping', 'Assessment centers', '60-day guarantee'],
      icon: '🎯',
    },
    {
      title: 'Tech Hiring',
      description: 'Specialized recruitment for engineering, product, design, and data roles.',
      features: ['Technical assessments', '72-hour shortlists', 'Remote hiring expertise', 'Skill-based matching'],
      icon: '💻',
    },
    {
      title: 'RPO Services',
      description: 'Become your embedded recruitment partner for scalable hiring needs.',
      features: ['Dedicated team', 'ATS integration', 'Process optimization', 'Metrics & reporting'],
      icon: '⚡',
    },
    {
      title: 'Contract Staffing',
      description: 'Flexible talent solutions for project-based and temporary requirements.',
      features: ['Quick deployment', 'Vetted contractors', 'Compliance handling', 'Flexible terms'],
      icon: '📊',
    },
    {
      title: 'Employer Branding',
      description: 'Build a compelling employer brand that attracts talent organically.',
      features: ['Brand strategy', 'Content creation', 'Candidate experience', 'Analytics'],
      icon: '✨',
    },
  ];

  const processSteps = [
    {
      title: 'Job Intake',
      description: 'We conduct a detailed intake call to understand role requirements, culture, and must-haves.',
      duration: 'Day 1',
    },
    {
      title: 'Candidate Sourcing',
      description: 'Our team activates networks, posts strategically, and proactively reaches out to passive candidates.',
      duration: 'Days 2-5',
    },
    {
      title: 'Screening & Assessment',
      description: 'Multi-stage vetting including skills tests, cultural fit, and reference checks.',
      duration: 'Days 6-8',
    },
    {
      title: 'Shortlist Delivery',
      description: 'Receive a curated shortlist of 3-5 exceptional candidates with full profiles.',
      duration: 'Day 9',
    },
    {
      title: 'Interview Coordination',
      description: 'We handle scheduling, feedback collection, and candidate communication.',
      duration: 'Days 10-20',
    },
    {
      title: 'Offer & Onboarding',
      description: 'Support with offer negotiation, acceptance, and smooth onboarding.',
      duration: 'Days 21-30',
    },
  ];

  const guarantees = [
    '60-day replacement guarantee',
    '72-hour shortlist delivery (for urgent roles)',
    'Only top 5% candidates shortlisted',
    'Complete background verification',
    'Post-placement support',
    'Transparent communication',
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Employers - Recruitment Services"
        description="Recruitment services for employers: executive search, tech hiring, RPO, and contract staffing. Get quality candidates delivered in 72 hours."
        keywords="employer recruitment, executive search, tech hiring, RPO, recruitment services"
        url="/employers"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="leading-tight">
              Recruitment That Ships <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 bg-clip-text text-transparent animate-gradient">Offers, Not CV Piles</span>
            </h1>
            <p className="text-xl md:text-2xl text-base-secondary">
              Your hiring partner for tech, leadership, and project staffing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">Upload Your JD</Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="secondary" size="lg">View Case Studies</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-base-secondary max-w-2xl mx-auto">
              Comprehensive recruitment solutions for every hiring need
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`p-4 md:p-8 hover-lift hover-glow animate-fadeInUp animate-delay-${index * 100}`}>
                <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.icon}</div>
                <h3 className="text-base md:text-2xl font-semibold mb-2 md:mb-3">{service.title}</h3>
                <p className="text-base-secondary text-xs md:text-base mb-4 md:mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-start mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs md:text-sm text-base-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-lg text-base-secondary max-w-2xl mx-auto">
              Our proven 30-day hiring process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-grow pb-8 border-l-2 border-base-border pl-6 last:border-0">
                  <div className="bg-white rounded-custom p-6 shadow-md">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <span className="text-sm text-primary-start font-medium">{step.duration}</span>
                    </div>
                    <p className="text-base-secondary">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Guarantees</h2>
            <p className="text-lg text-base-secondary max-w-2xl mx-auto">
              We stand behind our work with industry-leading guarantees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <Card key={index} className="p-6 flex items-center">
                <svg className="w-8 h-8 text-primary-start mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{guarantee}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-base-secondary max-w-2xl mx-auto">
              Everything you need to know about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-base-bg transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-base-secondary flex-shrink-0 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-base-secondary">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Start Hiring?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Upload your job description and get a curated shortlist in 72 hours
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">Post a Role</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Employers;
