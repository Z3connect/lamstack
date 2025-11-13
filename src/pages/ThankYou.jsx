import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ThankYou = () => {
  return (
    <>
      <SEO
        title="Thank You"
        description="Thank you for your submission. We'll be in touch soon."
        url="/thank-you"
      />

      <section className="section-padding min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-cyan-50">
        <div className="container-custom max-w-2xl text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="mb-4">Thank You!</h1>
            <p className="text-xl text-base-secondary mb-8">
              We've received your submission and will get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <button className="btn-primary">Back to Home</button>
              </Link>
              <Link to="/jobs">
                <button className="btn-secondary">Browse Jobs</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
