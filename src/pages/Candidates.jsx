import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Card from '../components/Card';

const Candidates = () => {
  const benefits = [
    {
      title: 'Career Support',
      description: 'Personalized guidance throughout your job search journey',
      icon: '🎯',
    },
    {
      title: 'Feedback Guarantee',
      description: 'Get constructive feedback after every interview',
      icon: '💬',
    },
    {
      title: 'Skill-based Matching',
      description: 'We match you to roles based on skills, not just keywords',
      icon: '🔍',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Submit Your CV',
      description: 'Upload your resume and tell us about your career goals',
    },
    {
      step: '2',
      title: 'Get Matched',
      description: 'Our AI and human experts match you to relevant opportunities',
    },
    {
      step: '3',
      title: 'Interview Prep',
      description: 'Receive interview tips, company insights, and preparation support',
    },
    {
      step: '4',
      title: 'Land the Offer',
      description: 'We support you through negotiations and onboarding',
    },
  ];

  const testimonials = [
    {
      quote: 'They helped me land my dream role in just 3 weeks. The support throughout was exceptional.',
      name: 'Amit Kumar',
      role: 'Software Engineer at Google',
    },
    {
      quote: 'Finally, a recruiter who actually listened to what I wanted. No spam, just quality opportunities.',
      name: 'Jessica Lee',
      role: 'Product Manager at Stripe',
    },
    {
      quote: 'The interview preparation and feedback made all the difference. Highly recommend!',
      name: 'Rahul Verma',
      role: 'Data Scientist at Meta',
    },
  ];

  return (
    <>
      <SEO
        title="Candidates - Land Roles You'll Love"
        description="Connect with companies that value your talent. Get career support, interview feedback, and skill-based job matching."
        keywords="job search, career opportunities, tech jobs, job placement"
        url="/candidates"
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
              Land Roles You'll <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 bg-clip-text text-transparent animate-gradient">Actually Want to Keep</span>
            </h1>
            <p className="text-xl md:text-2xl text-base-secondary">
              We connect you to companies that value talent and culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/jobs">
                <Button size="lg">Browse Jobs</Button>
              </Link>
              <a href="#join-network">
                <Button variant="secondary" size="lg">Join Talent Network</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Work With Us</h2>
            <p className="text-lg text-base-secondary max-w-2xl mx-auto">
              More than just job listings — real career partnership
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className={`p-4 md:p-8 text-center hover-lift hover-glow animate-scaleIn animate-delay-${index * 100}`}>
                <div className="text-3xl md:text-5xl mb-3 md:mb-4">{benefit.icon}</div>
                <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-base-secondary text-xs md:text-base">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-lg text-base-secondary max-w-2xl mx-auto">
              Your journey from application to offer
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {process.map((item, index) => (
              <div key={index} className={`text-center animate-fadeInUp animate-delay-${index * 100}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 rounded-full bg-gradient-primary text-white text-xl md:text-2xl font-bold hover:scale-110 transition-transform duration-300 animate-pulse">
                  {item.step}
                </div>
                <h3 className="text-sm md:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-base-secondary text-xs md:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Success Stories</h2>
            <p className="text-lg text-base-secondary max-w-2xl mx-auto">
              Hear from candidates who found their dream roles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8">
                <div className="mb-6">
                  <svg className="w-10 h-10 text-primary-start opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-base-secondary mb-6">"{testimonial.quote}"</p>
                <div className="border-t border-base-border pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-base-secondary">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Talent Network Form */}
      <section id="join-network" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Join Our Talent Network</h2>
              <p className="text-lg text-base-secondary">
                Get matched to opportunities that align with your skills and career goals
              </p>
            </div>

            <Card className="p-8 md:p-12">
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium mb-2">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    className="w-full px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
                  />
                </div>

                <div>
                  <label htmlFor="skills" className="block text-sm font-medium mb-2">
                    Key Skills
                  </label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    placeholder="e.g., React, Python, Product Management"
                    className="w-full px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
                  />
                </div>

                <div>
                  <label htmlFor="resume" className="block text-sm font-medium mb-2">
                    Upload Resume *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Join Talent Network
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Accelerate Your Career?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Browse our current openings and find your next opportunity
          </p>
          <Link to="/jobs">
            <Button variant="secondary" size="lg">View All Jobs</Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Candidates;
