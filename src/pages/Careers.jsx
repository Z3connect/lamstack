import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Card from '../components/Card';

const Careers = () => {
  const internalRoles = [
    {
      id: 'recruiter-tech',
      title: 'Senior Tech Recruiter',
      department: 'Recruitment',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      id: 'account-manager',
      title: 'Client Account Manager',
      department: 'Client Success',
      location: 'San Francisco, CA',
      type: 'Full-time',
    },
  ];

  return (
    <>
      <SEO
        title="Careers - Join Our Team"
        description="Join our team of recruitment experts. We're building the future of hiring."
        keywords="careers, jobs, recruitment careers, join our team"
        url="/careers"
      />

      {/* Hero */}
      <section className="relative section-padding bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container-custom max-w-4xl text-center relative z-10">
          <h1 className="mb-6">
            Join <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 bg-clip-text text-transparent animate-gradient">Our Mission</span>
          </h1>
          <p className="text-xl md:text-2xl text-base-secondary">
            Help us transform how companies hire and how talent finds opportunities
          </p>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Open Positions</h2>
            <p className="text-lg text-base-secondary">
              Join a team that's redefining recruitment
            </p>
          </div>

          {internalRoles.length > 0 ? (
            <div className="max-w-4xl mx-auto space-y-6">
              {internalRoles.map((role) => (
                <Card key={role.id} className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-semibold mb-2">{role.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-base-secondary">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          {role.department}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {role.location}
                        </span>
                        <span className="px-3 py-1 bg-base-bg rounded-lg font-medium">
                          {role.type}
                        </span>
                      </div>
                    </div>
                    <Link to="/contact">
                      <button className="btn-primary">Apply Now</button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center max-w-2xl mx-auto">
              <div className="text-4xl mb-4">📭</div>
              <h3 className="text-xl font-semibold mb-2">No Open Positions</h3>
              <p className="text-base-secondary mb-6">
                We don't have any open roles at the moment, but we're always looking for exceptional talent.
              </p>
              <Link to="/contact">
                <button className="btn-primary">Send Us Your CV</button>
              </Link>
            </Card>
          )}
        </div>
      </section>
    </>
  );
};

export default Careers;
