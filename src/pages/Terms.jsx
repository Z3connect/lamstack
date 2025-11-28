import SEO from '../components/SEO';

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms and conditions for using our recruitment services."
        url="/terms"
      />

      <div className="min-h-screen bg-base-bg">
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h1 className="mb-8">Terms & Conditions</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-base-secondary">
              <p className="text-sm text-base-secondary">Last updated: November 13, 2025</p>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using our recruitment services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">2. Services</h2>
                <p>We provide recruitment and staffing services including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Candidate sourcing and screening</li>
                  <li>Executive search services</li>
                  <li>Contract staffing</li>
                  <li>Recruitment process outsourcing (RPO)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">3. Client Obligations</h2>
                <p>Clients agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate job descriptions and requirements</li>
                  <li>Respond to candidate submissions in a timely manner</li>
                  <li>Pay agreed fees according to the pricing model</li>
                  <li>Maintain confidentiality of candidate information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">4. Fees and Payment</h2>
                <p>
                  Fees are based on the agreed pricing model (contingent, retained, or subscription). Payment terms are specified in individual service agreements. Late payments may incur interest charges.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">5. Guarantee Period</h2>
                <p>
                  We offer a 60-day replacement guarantee. If a placed candidate leaves or is terminated within 60 days of employment start date, we will provide a replacement at no additional fee.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">6. Limitation of Liability</h2>
                <p>
                  We are not liable for indirect, incidental, or consequential damages arising from our services. Our total liability is limited to the fees paid for the specific service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">7. Contact</h2>
                <p>
                  For questions about these Terms, contact us at{' '}
                  <a href="mailto:legal@recruit.com" className="text-primary-start hover:underline">
                    legal@recruit.com
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

export default Terms;
