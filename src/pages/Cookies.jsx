import SEO from '../components/SEO';

const Cookies = () => {
  return (
    <>
      <SEO
        title="Cookie Policy"
        description="Our cookie policy and how we use cookies on our website."
        url="/cookies"
      />

      <div className="min-h-screen bg-base-bg">
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h1 className="mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-base-secondary">
              <p className="text-sm text-base-secondary">Last updated: November 13, 2025</p>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience and understand how you use our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">2. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-semibold text-base-text mb-3">Essential Cookies</h3>
                <p>Required for the website to function properly. These cannot be disabled.</p>
                
                <h3 className="text-xl font-semibold text-base-text mb-3 mt-4">Analytics Cookies</h3>
                <p>Help us understand how visitors interact with our website by collecting anonymous information.</p>
                
                <h3 className="text-xl font-semibold text-base-text mb-3 mt-4">Marketing Cookies</h3>
                <p>Track your visits across websites to show you relevant advertisements.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">3. How We Use Cookies</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and user behavior</li>
                  <li>Improve website performance and user experience</li>
                  <li>Deliver personalized content and advertisements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">4. Managing Cookies</h2>
                <p>
                  You can control and/or delete cookies through your browser settings. Please note that disabling cookies may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">5. Third-Party Cookies</h2>
                <p>
                  We may use third-party services like Google Analytics that set their own cookies. These are governed by their respective privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-base-text mb-4">6. Contact</h2>
                <p>
                  Questions about our cookie policy? Contact us at{' '}
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

export default Cookies;
