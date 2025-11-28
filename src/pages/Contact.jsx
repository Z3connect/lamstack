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
      <section className="relative section-padding bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container-custom max-w-4xl text-center relative z-10">
          <h1 className="mb-6 animate-fadeInDown">
            Let's <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 bg-clip-text text-transparent animate-gradient">Start a Conversation</span>
          </h1>
          <p className="text-xl md:text-2xl text-base-secondary animate-fadeInUp animate-delay-200">
            Whether you're hiring or looking for opportunities, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
              <p className="text-lg text-base-secondary mb-8">
                Have a question or ready to start hiring? Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                <Card className="p-4 md:p-6 flex items-start hover-lift transition-all">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mr-3 md:mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-sm md:text-base">Email</div>
                    <a href="mailto:info@lamstacks.com" className="text-primary-start hover:underline text-sm md:text-base">
                      info@lamstacks.com
                    </a>
                  </div>
                </Card>

                <Card className="p-4 md:p-6 flex items-start hover-lift transition-all">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mr-3 md:mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-sm md:text-base">Headquarters</div>
                    <div className="text-base-secondary text-xs md:text-base">
                      DHWARCO BUSINESS CENTER<br />
                      21-B, 5th Cross St, South Phase<br />
                      Thiru Vi Ka Industrial Estate<br />
                      Guindy, Chennai – 600032
                    </div>
                  </div>
                </Card>
              </div>

              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-base-bg hover:bg-gradient-primary hover:text-white rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-base-bg hover:bg-gradient-primary hover:text-white rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-base-bg hover:bg-gradient-primary hover:text-white rounded-xl flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-4 md:p-8 animate-fadeInRight hover-lift">
              <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
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
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
                  >
                    <option value="">Select a subject</option>
                    <option value="hiring">I'm Hiring</option>
                    <option value="candidate">I'm a Candidate</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    className="w-full px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start resize-none"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="attachment" className="block text-sm font-medium mb-2">
                    Attachment (Optional)
                  </label>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    className="w-full px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
