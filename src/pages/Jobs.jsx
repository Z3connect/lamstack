import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
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
      <section className="section-lg" style={{ background: 'var(--neutral-light)', textAlign: 'center' }}>
        <div className="container">
          <span style={{ 
            display: 'inline-block', 
            padding: '8px 16px', 
            background: 'var(--white)', 
            color: 'var(--primary-blue)', 
            borderRadius: '50px', 
            fontSize: '12px', 
            fontWeight: 'bold', 
            marginBottom: '24px',
            border: '1px solid var(--neutral-mid)'
          }}>
            CAREER OPPORTUNITIES
          </span>
          <h1 style={{ marginBottom: '24px' }}>
            Find Your <span style={{ color: 'var(--primary-green)' }}>Next Opportunity</span>
          </h1>
          <p style={{ fontSize: '20px', color: '#666' }}>
            Explore {jobsData.length} current openings from top companies
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section-lg">
        <div className="container">
          <div style={{ marginBottom: '60px' }}>
            {/* Search Bar */}
            <div style={{ maxWidth: '800px', margin: '0 auto 40px', position: 'relative' }}>
              <input
                type="text"
                placeholder="Search by job title or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '20px 24px 20px 60px', 
                  borderRadius: '50px', 
                  border: '2px solid var(--neutral-mid)', 
                  fontSize: '18px',
                  outline: 'none',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                }}
              />
              <span style={{ position: 'absolute', left: '24px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px' }}>🔍</span>
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <select 
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid var(--neutral-mid)', background: 'var(--white)' }}
              >
                <option value="all">All Locations</option>
                {locations.filter(l => l !== 'all').map(l => <option key={l} value={l}>{l}</option>)}
              </select>
              
              <select 
                value={filters.department}
                onChange={(e) => setFilters({ ...filters, department: e.target.value })}
                style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid var(--neutral-mid)', background: 'var(--white)' }}
              >
                <option value="all">All Departments</option>
                {departments.filter(d => d !== 'all').map(d => <option key={d} value={d}>{d}</option>)}
              </select>

              <select 
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid var(--neutral-mid)', background: 'var(--white)' }}
              >
                <option value="all">All Types</option>
                {types.filter(t => t !== 'all').map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          {/* Jobs List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Link to={`/jobs/${job.id}`} key={job.id} style={{ 
                  display: 'block',
                  background: 'var(--white)',
                  padding: '32px',
                  borderRadius: '12px',
                  border: '1px solid var(--neutral-mid)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)';
                  e.currentTarget.style.borderColor = 'var(--primary-green)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--neutral-mid)';
                }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--primary-blue)' }}>{job.title}</h3>
                      <div style={{ display: 'flex', gap: '16px', color: '#666', fontSize: '14px', marginBottom: '16px' }}>
                        <span>🏢 {job.company}</span>
                        <span>📍 {job.location}</span>
                        <span>💼 {job.type}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {job.tags && job.tags.map(tag => (
                          <span key={tag} style={{ 
                            fontSize: '12px', 
                            padding: '4px 12px', 
                            background: 'var(--neutral-light)', 
                            borderRadius: '50px',
                            color: '#555'
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span className="btn btn-outline" style={{ padding: '8px 24px', fontSize: '14px' }}>Apply Now</span>
                      <div style={{ marginTop: '12px', fontSize: '12px', color: '#999' }}>
                        Posted {formatDate(job.postedAt)}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '60px', color: '#666' }}>
                <h3>No jobs found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
