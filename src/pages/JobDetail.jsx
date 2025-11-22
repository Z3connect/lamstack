import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Card from '../components/Card';
import jobsData from '../data/jobs.json';

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobsData.find(j => j.id === id);

  useEffect(() => {
    if (!job) {
      navigate('/jobs');
    }
  }, [job, navigate]);

  if (!job) {
    return null;
  }

  const jobSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    datePosted: job.posted,
    employmentType: job.type.toUpperCase().replace('-', '_'),
    hiringOrganization: {
      '@type': 'Organization',
      name: job.company,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location,
      },
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: job.salary.includes('₹') ? 'INR' : 'USD',
      value: {
        '@type': 'QuantitativeValue',
        value: job.salary,
      },
    },
  };

  return (
    <>
      <SEO
        title={`${job.title} at ${job.company}`}
        description={job.description}
        keywords={`${job.title}, ${job.company}, ${job.department}, jobs`}
        url={`/jobs/${job.id}`}
        schema={jobSchema}
      />

      <div className="min-h-screen bg-base-bg">
        {/* Header */}
        <section className="section-padding bg-gradient-to-br from-purple-50 via-white to-cyan-50">
          <div className="container-custom">
            <Link to="/jobs" className="inline-flex items-center text-base-secondary hover:text-base-text mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7" />
              </svg>
              Back to Jobs
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="mb-3">{job.title}</h1>
                    <p className="text-2xl text-primary-start font-semibold">{job.company}</p>
                  </div>
                  {job.remote && (
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-custom font-medium">
                      Remote
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 text-base-secondary">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {job.salary}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {job.type}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h3 className="text-xl font-semibold mb-4">Apply for this role</h3>
                  <a href="#application-form">
                    <Button className="w-full mb-3">Apply Now</Button>
                  </a>
                  <Button variant="secondary" className="w-full">
                    <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share Job
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details Tabs */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <Card className="p-8">
                  <h2 className="text-2xl font-semibold mb-4">About the Role</h2>
                  <p className="text-base-secondary leading-relaxed whitespace-pre-line">
                    {job.description}
                  </p>
                </Card>

                {/* Requirements */}
                <Card className="p-8">
                  <h2 className="text-2xl font-semibold mb-4">Requirements</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-start mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-base-secondary">{req}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Benefits */}
                <Card className="p-8">
                  <h2 className="text-2xl font-semibold mb-4">Benefits & Perks</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {job.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-start mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-base-secondary">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Application Form */}
                <Card id="application-form" className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Submit Your Application</h2>
                  <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
                    <input type="hidden" name="job_id" value={job.id} />
                    <input type="hidden" name="job_title" value={job.title} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
                        />
                      </div>
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

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
                      />
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
                      <label htmlFor="resume" className="block text-sm font-medium mb-2">
                        Upload Resume/CV *
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

                    <div>
                      <label htmlFor="coverLetter" className="block text-sm font-medium mb-2">
                        Cover Letter (Optional)
                      </label>
                      <textarea
                        id="coverLetter"
                        name="coverLetter"
                        rows="6"
                        placeholder="Tell us why you're a great fit..."
                        className="w-full px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start resize-none"
                      ></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Application
                    </Button>
                  </form>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <div className="space-y-6 sticky top-24">
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Job Details</h3>
                    <dl className="space-y-3">
                      <div>
                        <dt className="text-sm text-base-secondary">Department</dt>
                        <dd className="font-medium">{job.department}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-base-secondary">Employment Type</dt>
                        <dd className="font-medium">{job.type}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-base-secondary">Location</dt>
                        <dd className="font-medium">{job.location}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-base-secondary">Salary Range</dt>
                        <dd className="font-medium">{job.salary}</dd>
                      </div>
                      <div>
                        <dt className="text-sm text-base-secondary">Posted</dt>
                        <dd className="font-medium">{new Date(job.posted).toLocaleDateString()}</dd>
                      </div>
                    </dl>
                  </Card>

                  <Card className="p-6 bg-base-bg border-2 border-primary-start/20">
                    <h3 className="text-lg font-semibold mb-3">Questions?</h3>
                    <p className="text-sm text-base-secondary mb-4">
                      Contact our recruitment team for more information about this role.
                    </p>
                    <Link to="/contact">
                      <Button variant="secondary" size="sm" className="w-full">
                        Contact Us
                      </Button>
                    </Link>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JobDetail;
