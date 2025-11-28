import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import Card from '../components/Card';
import caseStudiesData from '../data/casestudies.json';

const CaseStudyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const caseStudy = caseStudiesData.find(cs => cs.id === id);

  useEffect(() => {
    if (!caseStudy) {
      navigate('/case-studies');
    }
  }, [caseStudy, navigate]);

  if (!caseStudy) return null;

  return (
    <>
      <SEO
        title={`Case Study: ${caseStudy.title}`}
        description={caseStudy.challenge}
        keywords={`case study, ${caseStudy.tags.join(', ')}`}
        url={`/case-studies/${caseStudy.id}`}
      />

      <div className="min-h-screen bg-base-bg">
        {/* Hero */}
        <section className="section-padding bg-gradient-primary text-white">
          <div className="container-custom">
            <Link to="/case-studies" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7" />
              </svg>
              Back to Case Studies
            </Link>

            <div className="max-w-4xl">
              <div className="text-sm font-semibold uppercase tracking-wide mb-4 text-white/80">
                {caseStudy.industry}
              </div>
              <h1 className="text-white mb-6">{caseStudy.title}</h1>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-custom text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-custom max-w-5xl">
            {/* Challenge - Approach - Results */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8">
                <div className="text-3xl mb-4">🎯</div>
                <h2 className="text-2xl font-semibold mb-4">Challenge</h2>
                <p className="text-base-secondary leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </Card>

              <Card className="p-8">
                <div className="text-3xl mb-4">⚡</div>
                <h2 className="text-2xl font-semibold mb-4">Approach</h2>
                <p className="text-base-secondary leading-relaxed">
                  {caseStudy.approach}
                </p>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-purple-50 to-cyan-50 border-2 border-primary-start/20">
                <div className="text-3xl mb-4">🚀</div>
                <h2 className="text-2xl font-semibold mb-4">Results</h2>
                <p className="text-base-secondary leading-relaxed">
                  Achieved exceptional outcomes across all key metrics
                </p>
              </Card>
            </div>

            {/* Key Metrics */}
            <div className="mb-12">
              <h2 className="text-3xl font-semibold mb-8 text-center">Key Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseStudy.results.map((result, idx) => (
                  <Card key={idx} className="p-6 text-center">
                    <div className="text-sm font-semibold text-primary-start uppercase tracking-wide mb-2">
                      {result.metric}
                    </div>
                    <div className="flex items-center justify-center gap-4 mb-2">
                      <div className="text-base-secondary line-through">{result.before}</div>
                      <svg className="w-6 h-6 text-primary-start" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                      <div className="text-2xl font-bold gradient-text">{result.after}</div>
                    </div>
                    <div className="text-sm text-base-secondary">{result.improvement}</div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <Card className="p-12 bg-gradient-to-br from-base-bg to-white">
              <div className="max-w-3xl mx-auto text-center">
                <svg className="w-12 h-12 text-primary-start opacity-50 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl md:text-2xl text-base-text mb-6 leading-relaxed italic">
                  "{caseStudy.testimonial.quote}"
                </p>
                <div className="font-semibold text-lg">{caseStudy.testimonial.author}</div>
                <div className="text-base-secondary">{caseStudy.testimonial.position}</div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-primary text-white">
          <div className="container-custom text-center">
            <h2 className="text-white mb-4">Ready to Transform Your Hiring?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's discuss how we can deliver similar results for your organization
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">Start a Conversation</Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudyDetail;
