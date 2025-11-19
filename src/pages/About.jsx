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
      <section className="section-lg" style={{ background: 'var(--neutral-light)', textAlign: 'center' }}>
        <div className="container">
          <h1 className="animate-fadeInDown" style={{ marginBottom: '24px' }}>
            Excellence in <span style={{ color: 'var(--primary-green)' }}>IT Services</span>
          </h1>
          <p className="animate-fadeInUp" style={{ fontSize: '20px', color: '#666', maxWidth: '800px', margin: '0 auto' }}>
            We're a team of IT experts providing exceptional DevOps services, IT Consulting, Mobile App Development, and Digital Transformation solutions.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-lg">
        <div className="container">
          <div className="section-title">Our Story</div>
          <div className="grid-12" style={{ alignItems: 'center' }}>
            <div style={{ gridColumn: 'span 6' }}>
              <h3 style={{ marginBottom: '24px', color: 'var(--primary-blue)' }}>Transforming Technology, Together</h3>
              <p style={{ marginBottom: '24px', color: '#666', fontSize: '16px' }}>
                Founded with a vision to transform how businesses leverage technology, <strong>Lamstacks</strong> has become a trusted partner for organizations seeking exceptional IT services.
              </p>
              <p style={{ color: '#666', fontSize: '16px' }}>
                We provide a wide range of services with a team of experts in the latest DevOps technologies and methodologies. We work closely with our clients to understand their specific needs and goals, delivering solutions that drive real business value.
              </p>
            </div>
            <div style={{ gridColumn: 'span 6' }}>
              <div style={{ 
                background: 'var(--white)', 
                padding: '40px', 
                borderRadius: '12px', 
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                border: '1px solid var(--neutral-mid)'
              }}>
                <h4 style={{ color: 'var(--primary-green)', marginBottom: '16px' }}>Our Expertise</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['DevOps Services', 'IT Consulting', 'Mobile App Development', 'Digital Transformation'].map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#555' }}>
                      <span style={{ color: 'var(--primary-green)' }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-lg" style={{ background: 'var(--primary-blue)', color: 'var(--white)' }}>
        <div className="container">
          <div className="section-title" style={{ color: 'var(--white)' }}>Our Values</div>
          <div className="grid-12">
            {values.map((value, index) => (
              <div key={index} style={{ gridColumn: 'span 3', textAlign: 'center' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{value.icon}</div>
                <h4 style={{ fontSize: '18px', marginBottom: '12px', color: 'var(--white)' }}>{value.title}</h4>
                <p style={{ fontSize: '14px', opacity: 0.8 }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInDown">
            <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">
              THE PEOPLE BEHIND SUCCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your success
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {teamData.map((member) => (
              <div 
                key={member.id} 
                className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-scaleIn" 
                style={{ animationDelay: `${parseInt(member.id) * 100}ms` }}
              >
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold group-hover:scale-105 transition-transform duration-300 shadow-lg">
                    {member.name.charAt(0)}
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-cyan-600 text-white text-xs font-semibold rounded-full shadow-lg">
                    Team Member
                  </div>
                </div>

                {/* Info */}
                <div className="text-center space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">{member.name}</h3>
                  <div className="text-sm font-medium text-cyan-600 bg-cyan-50 inline-block px-3 py-1 rounded-lg">{member.position}</div>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mt-3">{member.bio}</p>
                </div>

                {/* LinkedIn */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-50 hover:bg-cyan-50 text-gray-700 hover:text-cyan-600 font-medium rounded-xl transition-all group-hover:shadow-md"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInDown">
            <span className="inline-block px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
              TRUSTED PARTNERSHIPS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Recognized By</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proud to be trusted by leading organizations worldwide
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          {/* Partner Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'TechCorp', abbr: 'TC' },
              { name: 'InnovateLabs', abbr: 'IL' },
              { name: 'CloudSys', abbr: 'CS' },
              { name: 'NextGen', abbr: 'NG' },
              { name: 'DataHub', abbr: 'DH' },
              { name: 'SmartWorks', abbr: 'SW' },
              { name: 'FutureTech', abbr: 'FT' },
              { name: 'DevPlus', abbr: 'D+' },
            ].map((partner, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col items-center justify-center aspect-square"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {partner.abbr}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 group-hover:text-cyan-600 transition-colors">{partner.name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Awards/Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 text-center hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Awards</h3>
              <p className="text-gray-600">Recognized for excellence in IT services</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 text-center hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">5-Star Rating</h3>
              <p className="text-gray-600">Consistently rated by our clients</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 text-center hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Partners</h3>
              <p className="text-gray-600">Collaborating with industry leaders</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
