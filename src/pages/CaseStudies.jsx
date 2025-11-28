import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Card from '../components/Card';
import caseStudiesData from '../data/casestudies.json';

const CaseStudies = () => {
  return (
    <>
      <SEO
        title="Case Studies - Success Stories"
        description="Discover how we've helped companies transform their hiring processes and build exceptional teams."
        keywords="case studies, recruitment success stories, hiring transformation"
        url="/case-studies"
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
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 bg-clip-text text-transparent animate-gradient">Success Stories</span> from Our Clients
            </h1>
            <p className="text-xl md:text-2xl text-base-secondary">
              Real results from real companies
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {caseStudiesData.map((caseStudy, index) => (
              <Card key={caseStudy.id} className={`overflow-hidden group hover-lift animate-fadeInUp animate-delay-${index * 100}`}>
                <div className="aspect-video bg-gradient-primary p-6 md:p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="text-white text-center z-10">
                    <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">{caseStudy.company}</div>
                    <div className="text-xs md:text-sm opacity-90">{caseStudy.industry}</div>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3 line-clamp-2">
                    {caseStudy.title}
                  </h3>
                  <p className="text-base-secondary text-sm mb-4 line-clamp-3">
                    {caseStudy.challenge}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-base-bg text-base-text rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/case-studies/${caseStudy.id}`}
                    className="text-primary-start font-semibold hover:underline inline-flex items-center"
                  >
                    Read Case Study
                    <svg className="w-4 h-4 ml-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Want Similar Results?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's discuss how we can transform your hiring process
          </p>
          <Link to="/contact">
            <button className="btn-secondary">Get in Touch</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
