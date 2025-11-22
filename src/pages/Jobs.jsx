import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Card from '../components/Card';
import jobsData from '../data/jobs.json';

const Jobs = () => {
  const [filters, setFilters] = useState({
    location: 'all',
    type: 'all',
    department: 'all',
    remote: 'all',
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique values for filters
  const locations = ['all', ...new Set(jobsData.map(job => job.location))];
  const types = ['all', ...new Set(jobsData.map(job => job.type))];
  const departments = ['all', ...new Set(jobsData.map(job => job.department))];

  // Filter jobs
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = filters.location === 'all' || job.location === filters.location;
    const matchesType = filters.type === 'all' || job.type === filters.type;
    const matchesDepartment = filters.department === 'all' || job.department === filters.department;
    const matchesRemote = filters.remote === 'all' ||
      (filters.remote === 'remote' && job.remote) ||
      (filters.remote === 'onsite' && !job.remote);

    return matchesSearch && matchesLocation && matchesType && matchesDepartment && matchesRemote;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <>
      <SEO
        title="Browse Jobs"
        description="Explore our current job openings across tech, product, design, and more. Find your next career opportunity."
        keywords="jobs, careers, job openings, tech jobs, remote jobs"
        url="/jobs"
      />

      {/* Hero Section */}
      <section className="relative section-padding bg-base-bg overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-start/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-purple/20 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm text-primary-start rounded-full text-sm font-semibold mb-2 shadow-lg border border-white/10">
              CAREER OPPORTUNITIES
            </span>
            <h1 className="leading-tight">
              Find Your <span className="bg-gradient-to-r from-primary-start via-accent-cyan to-accent-blue bg-clip-text text-transparent animate-gradient">Next Opportunity</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              Explore {jobsData.length} current openings from top companies
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section-padding bg-base-bg pt-0">
        <div className="container-custom">
          <div className="mb-12">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-3xl mx-auto">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by job title or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-base-card/50 border border-white/10 rounded-2xl text-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-start focus:border-primary-start transition-all shadow-lg hover:shadow-primary-start/10 backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="px-4 py-3 bg-base-card/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start transition-all text-gray-300 hover:border-white/30 font-medium"
              >
                {locations.map(location => (
                  <option key={location} value={location} className="bg-base-card text-gray-300">
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>

              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="px-4 py-3 bg-base-card/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start transition-all text-gray-300 hover:border-white/30 font-medium"
              >
                {types.map(type => (
                  <option key={type} value={type} className="bg-base-card text-gray-300">
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>

              <select
                value={filters.department}
                onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                className="px-4 py-3 bg-base-card/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start transition-all text-gray-300 hover:border-white/30 font-medium"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept} className="bg-base-card text-gray-300">
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>

              <select
                value={filters.remote}
                onChange={(e) => setFilters({ ...filters, remote: e.target.value })}
                className="px-4 py-3 bg-base-card/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start transition-all text-gray-300 hover:border-white/30 font-medium"
              >
                <option value="all" className="bg-base-card text-gray-300">All Options</option>
                <option value="remote" className="bg-base-card text-gray-300">Remote Only</option>
                <option value="onsite" className="bg-base-card text-gray-300">Onsite Only</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8 flex items-center justify-between max-w-5xl mx-auto">
            <p className="text-gray-400 font-medium">
              Showing <span className="font-bold text-white text-lg">{filteredJobs.length}</span> {filteredJobs.length === 1 ? 'job' : 'jobs'}
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Updated daily</span>
            </div>
          </div>

          {/* Jobs Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job, index) => (
                <div key={job.id} className={`group bg-base-card/50 backdrop-blur-md rounded-[2rem] p-6 border border-white/10 hover:border-primary-start/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:-translate-y-1 flex flex-col animate-fadeInUp animate-delay-${(index % 6) * 100}`}>
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-start transition-colors line-clamp-2 flex-1">{job.title}</h3>
                      {job.remote && (
                        <span className="ml-2 px-3 py-1 text-xs font-bold bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 rounded-lg flex-shrink-0 shadow-sm">
                          Remote
                        </span>
                      )}
                    </div>
                    <p className="text-primary-start font-semibold text-base">{job.company}</p>
                  </div>

                  <div className="space-y-3 mb-4 flex-grow">
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-4 h-4 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="font-medium">{job.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-4 h-4 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-white">{job.salary}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1.5 text-xs font-semibold bg-primary-start/10 text-primary-start rounded-lg border border-primary-start/20">
                        {job.type}
                      </span>
                      <span className="px-3 py-1.5 text-xs font-semibold bg-accent-purple/10 text-accent-purple rounded-lg border border-accent-purple/20">
                        {job.department}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">
                      Posted {formatDate(job.posted)}
                    </span>
                    <Link to={`/jobs/${job.id}`}>
                      <span className="inline-flex items-center text-primary-start font-bold text-sm hover:text-accent-cyan transition-colors group-hover:translate-x-1 transition-transform">
                        View Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-md mx-auto bg-base-card/50 backdrop-blur-md rounded-[2rem] p-12 text-center border border-white/10">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2 text-white">No jobs found</h3>
              <p className="text-gray-400">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-base-bg pt-0">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-base-card/50 backdrop-blur-md rounded-[2rem] p-12 border border-white/10 text-center shadow-2xl">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-start to-accent-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Don't See the Right Role?</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join our talent network and we'll notify you when matching opportunities become available
            </p>
            <Link to="/candidates#join-network">
              <button className="px-10 py-5 bg-gradient-to-r from-primary-start to-accent-blue text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary-start/20 transition-all hover:scale-105">
                Join Talent Network
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
