import SEO from '../components/SEO';
import Card from '../components/Card';
import teamData from '../data/team.json';

const About = () => {
  const values = [
    { icon: '🎯', title: 'Quality Over Quantity', description: 'We shortlist only the top 5% of candidates' },
    { icon: '⚡', title: 'Speed Matters', description: 'Fast turnaround without compromising quality' },
    { icon: '🤝', title: 'True Partnership', description: 'We are invested in your long-term success' },
    { icon: '💡', title: 'Innovation First', description: 'Leveraging technology to enhance human judgment' },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about our mission to help businesses hire right — faster, smarter, globally."
        keywords="about us, recruitment company, hiring experts"
        url="/about"
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-purple-50 via-white to-cyan-50">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="mb-6 animate-fadeInDown">
            Excellence in <span className="gradient-text animate-gradient">IT Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-base-secondary leading-relaxed animate-fadeInUp animate-delay-200">
            We're a team of IT experts providing exceptional DevOps services, IT consulting, mobile app development, and digital transformation solutions.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <Card className="p-6 md:p-12 hover-lift animate-scaleIn">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Our Story</h2>
            <div className="prose prose-lg text-base-secondary space-y-4">
              <p>
                Founded with a vision to transform how businesses leverage technology, Lamstacks has become a trusted partner for organizations seeking exceptional IT services.
              </p>
              <p>
                We provide a wide range of services with a team of experts in the latest DevOps technologies and methodologies. We work closely with our clients to understand their specific needs and goals, delivering solutions that drive real business value.
              </p>
              <p>
                Our expertise spans DevOps Services, IT Consulting, Mobile Application Development, and Digital Transformation. We've helped numerous companies modernize their infrastructure, accelerate development cycles, and achieve their digital transformation goals.
              </p>
              <p className="font-semibold text-base-text">
                At Lamstacks, we're committed to excellence in everything we do. Your success is our success.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-base-bg">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-lg text-base-secondary max-w-2xl mx-auto">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {values.map((value, idx) => (
              <Card key={idx} className={`p-4 md:p-8 text-center hover-lift hover-glow animate-fadeInUp animate-delay-${idx * 100}`}>
                <div className="text-3xl md:text-5xl mb-2 md:mb-4">{value.icon}</div>
                <h3 className="text-sm md:text-xl font-semibold mb-2 md:mb-3">{value.title}</h3>
                <p className="text-base-secondary text-xs md:text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-lg text-base-secondary max-w-2xl mx-auto">
              Experienced recruiters who actually care
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {teamData.map((member) => (
              <Card key={member.id} className="p-4 md:p-6 text-center group hover-lift animate-scaleIn" style={{ animationDelay: `${parseInt(member.id) * 100}ms` }}>
                <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl md:text-4xl font-bold group-hover:scale-110 transition-transform duration-300 animate-pulse">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-sm md:text-lg font-semibold mb-1">{member.name}</h3>
                <div className="text-xs md:text-sm text-primary-start font-medium mb-2 md:mb-3">{member.position}</div>
                <p className="text-xs md:text-sm text-base-secondary mb-3 md:mb-4 line-clamp-3">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary-start hover:underline"
                >
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section-padding bg-base-bg">
        <div className="container-custom text-center">
          <h2 className="mb-12">Recognized By</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto opacity-50">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-2xl font-bold text-base-secondary">
                Partner Logo {i}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
