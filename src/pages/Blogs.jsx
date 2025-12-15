import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Card from '../components/Card';
import { getPublishedBlogs } from '../backend/services/blogService';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const blogsData = await getPublishedBlogs();
        setBlogs(blogsData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateValue) => {
    if (!dateValue) return '';
    const date = dateValue.toDate ? dateValue.toDate() : new Date(dateValue);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-600"></div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Blog"
        description="Insights, tips, and news from our recruitment and technology experts."
        keywords="blog, recruitment tips, tech insights, career advice"
        url="/blogs"
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-2 bg-white text-cyan-700 rounded-full text-sm font-semibold mb-2 border border-cyan-200">
              INSIGHTS & NEWS
            </span>
            <h1 className="leading-tight">
              Our <span className="text-cyan-700">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              Stay updated with the latest in recruitment, technology, and industry trends
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 border-2 border-gray-200 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all shadow-sm hover:shadow-md"
              />
            </div>
          </div>

          {/* Blog Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <Link to={`/blogs/${blog.slug || blog.id}`} key={blog.id}>
                  <Card className={`h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fadeInUp animate-delay-${(index % 6) * 100}`}>
                    {blog.featuredImage && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={blog.featuredImage}
                          alt={blog.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {blog.category && (
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-cyan-50 text-cyan-700 rounded-full mb-3">
                          {blog.category}
                        </span>
                      )}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-cyan-600 transition-colors">
                        {blog.title}
                      </h3>
                      {blog.excerpt && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {blog.excerpt}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{formatDate(blog.publishedAt)}</span>
                        {blog.readTime && <span>{blog.readTime} min read</span>}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="max-w-md mx-auto bg-white rounded-2xl p-12 text-center border-2 border-gray-200">
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">No articles found</h3>
              <p className="text-gray-600">
                {searchQuery ? 'Try a different search term' : 'Check back soon for new content'}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blogs;
