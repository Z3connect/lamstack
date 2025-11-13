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
      <section className="section-padding bg-gradient-to-br from-purple-50 via-white to-cyan-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="leading-tight">
              Find Your <span className="gradient-text">Next Opportunity</span>
            </h1>
            <p className="text-xl md:text-2xl text-base-secondary">
              Explore {jobsData.length} current openings from top companies
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-8">
            {/* Search Bar */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search by job title or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 border border-base-border rounded-custom text-lg focus:outline-none focus:ring-2 focus:ring-primary-start"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>

              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
              >
                {types.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>

              <select
                value={filters.department}
                onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                className="px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>

              <select
                value={filters.remote}
                onChange={(e) => setFilters({ ...filters, remote: e.target.value })}
                className="px-4 py-3 border border-base-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-start"
              >
                <option value="all">All Options</option>
                <option value="remote">Remote Only</option>
                <option value="onsite">Onsite Only</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-base-secondary">
              Showing <span className="font-semibold text-base-text">{filteredJobs.length}</span> {filteredJobs.length === 1 ? 'job' : 'jobs'}
            </p>
          </div>

          {/* Jobs Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredJobs.map((job, index) => (
                <Card key={job.id} className={`p-4 md:p-6 flex flex-col hover-lift animate-fadeInUp animate-delay-${(index % 6) * 100}`}>
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold line-clamp-2">{job.title}</h3>
                      {job.remote && (
                        <span className="ml-2 px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-lg flex-shrink-0">
                          Remote
                        </span>
                      )}
                    </div>
                    <p className="text-primary-start font-medium">{job.company}</p>
                  </div>

                  <div className="space-y-2 mb-4 flex-grow">
                    <div className="flex items-center text-sm text-base-secondary">
                      <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-base-secondary">
                      <svg className="w-4 h-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.salary}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-3 py-1 text-xs font-medium bg-base-bg text-base-text rounded-lg">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-base-bg text-base-text rounded-lg">
                        {job.department}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-base-border flex items-center justify-between">
                    <span className="text-xs text-base-secondary">
                      Posted {formatDate(job.posted)}
                    </span>
                    <Link to={`/jobs/${job.id}`}>
                      <span className="text-primary-start font-semibold text-sm hover:underline">
                        View Details →
                      </span>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
              <p className="text-base-secondary">
                Try adjusting your filters or search query
              </p>
            </Card>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-base-bg">
        <div className="container-custom text-center">
          <h2 className="mb-4">Don't See the Right Role?</h2>
          <p className="text-lg text-base-secondary mb-8 max-w-2xl mx-auto">
            Join our talent network and we'll notify you when matching opportunities become available
          </p>
          <Link to="/candidates#join-network">
            <button className="btn-primary">Join Talent Network</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Jobs;
