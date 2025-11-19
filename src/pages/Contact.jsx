import SEO from '../components/SEO';
import Button from '../components/Button';
import Card from '../components/Card';

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with our recruitment team. We're here to help with your hiring needs."
        keywords="contact, get in touch, recruitment inquiry"
        url="/contact"
      />

      {/* Hero */}
      <section className="section-lg" style={{ background: 'var(--neutral-light)', textAlign: 'center' }}>
        <div className="container">
          <h1 className="animate-fadeInDown" style={{ marginBottom: '24px' }}>
            Let's <span style={{ color: 'var(--primary-green)' }}>Start a Conversation</span>
          </h1>
          <p className="animate-fadeInUp" style={{ fontSize: '20px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            Whether you're hiring or looking for opportunities, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-lg">
        <div className="container">
          <div className="grid-12">
            {/* Contact Info */}
            <div style={{ gridColumn: 'span 5' }}>
              <h2 style={{ marginBottom: '24px' }}>Get in Touch</h2>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>
                Have a question or ready to start hiring? Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    background: 'var(--light-green)', 
                    borderRadius: '8px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--primary-green)'
                  }}>
                    ✉️
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Email</div>
                    <a href="mailto:info@lamstacks.com" style={{ color: 'var(--primary-blue)' }}>info@lamstacks.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    background: 'var(--light-green)', 
                    borderRadius: '8px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: 'var(--primary-green)'
                  }}>
                    🏢
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>Headquarters</div>
                    <div style={{ color: '#666', fontSize: '14px' }}>
                      DHWARCO BUSINESS CENTER<br />
                      21-B, 5th Cross St, South Phase<br />
                      Thiru Vi Ka Industrial Estate<br />
                      Guindy, Chennai – 600032
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ gridColumn: 'span 7' }}>
              <div style={{ 
                background: 'var(--white)', 
                padding: '40px', 
                borderRadius: '12px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                border: '1px solid var(--neutral-mid)'
              }}>
                <form className="space-y-4">
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>First Name</label>
                      <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Last Name</label>
                      <input type="text" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd' }} />
                    </div>
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Email</label>
                    <input type="email" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd' }} />
                  </div>
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '14px' }}>Message</label>
                    <textarea rows="4" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd' }}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
