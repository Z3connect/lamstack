import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Our privacy policy and how we handle your data."
        url="/privacy-policy"
      />

      <div className="min-h-screen bg-base-bg">
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h1 className="mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-base-secondary">
              <p className="text-sm text-base-secondary">Last updated: November 13, 2025</p>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">1. Information We Collect</h2>
                <p>We collect information you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, phone number</li>
                  <li>Resume/CV and professional information</li>
                  <li>Company information (for employers)</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Match candidates with job opportunities</li>
                  <li>Communicate with you about jobs or hiring services</li>
                  <li>Improve our services and user experience</li>
                  <li>Send relevant updates and marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">3. Information Sharing</h2>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Employers (for candidates applying to jobs)</li>
                  <li>Service providers who assist our operations</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">5. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">6. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@recruit.com" className="text-primary-start hover:underline">
                    privacy@recruit.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
