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
      <section className="relative section-padding bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container-custom max-w-4xl text-center relative z-10">
          <h1 className="mb-6 animate-fadeInDown">
            Excellence in <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-600 bg-clip-text text-transparent animate-gradient">IT Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-base-secondary leading-relaxed animate-fadeInUp animate-delay-200">
            We're a team of IT experts providing exceptional DevOps services, IT consulting, mobile app development, and digital transformation solutions.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fadeInDown">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">
                OUR JOURNEY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full"></div>
            </div>

            {/* Story Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Main Story */}
              <div className="space-y-6 animate-fadeInLeft">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                  <div className="pl-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Transforming Technology, Together</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Founded with a vision to transform how businesses leverage technology, <span className="font-semibold text-gray-900">Lamstacks</span> has become a trusted partner for organizations seeking exceptional IT services.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <p className="text-gray-700 leading-relaxed">
                    We provide a wide range of services with a team of experts in the latest DevOps technologies and methodologies. We work closely with our clients to understand their specific needs and goals, delivering solutions that drive real business value.
                  </p>
                </div>
              </div>

              {/* Right Side - Expertise & Commitment */}
              <div className="space-y-6 animate-fadeInRight">
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Our Expertise</h4>
                      <p className="text-gray-700">
                        DevOps Services, IT Consulting, Mobile Application Development, and Digital Transformation — helping companies modernize infrastructure and accelerate development cycles.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Our Commitment</h4>
                      <p className="text-gray-700 font-medium">
                        At Lamstacks, we're committed to excellence in everything we do. <span className="text-cyan-700 font-semibold">Your success is our success.</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">50+</div>
                    <div className="text-xs text-gray-600 font-medium mt-1">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">15+</div>
                    <div className="text-xs text-gray-600 font-medium mt-1">Years</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">98%</div>
                    <div className="text-xs text-gray-600 font-medium mt-1">Satisfied</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fadeInDown">
            <span className="inline-block px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-semibold mb-4 shadow-sm">
              WHAT DRIVES US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Principles that guide everything we do
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, idx) => (
              <div 
                key={idx} 
                className={`group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-fadeInUp animate-delay-${idx * 100}`}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300 border border-cyan-200">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-cyan-600 transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
