import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import Card from '../components/Card';
import { getBlogBySlug, getBlogById, getRecentBlogs } from '../backend/services/blogService';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        // Try to get by slug first, then by ID
        let blogData = await getBlogBySlug(slug);
        if (!blogData) {
          blogData = await getBlogById(slug);
        }
        
        if (!blogData || blogData.status !== 'published') {
          navigate('/blogs');
          return;
        }
        
        setBlog(blogData);
        
        // Fetch related blogs
        const recent = await getRecentBlogs(4);
        setRelatedBlogs(recent.filter(b => b.id !== blogData.id).slice(0, 3));
      } catch (error) {
        console.error('Error fetching blog:', error);
        navigate('/blogs');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug, navigate]);

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

  if (!blog) {
    return null;
  }

  return (
    <>
      <SEO
        title={blog.title}
        description={blog.excerpt || blog.title}
        keywords={blog.tags?.join(', ') || 'blog'}
        url={`/blogs/${blog.slug || blog.id}`}
      />

      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-50">
          <div className="container-custom">
            <Link to="/blogs" className="inline-flex items-center text-gray-600 hover:text-cyan-600 mb-6 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            <div className="max-w-4xl">
              {blog.category && (
                <span className="inline-block px-4 py-2 text-sm font-semibold bg-cyan-100 text-cyan-700 rounded-full mb-4">
                  {blog.category}
                </span>
              )}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                {blog.author && (
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-cyan-700 font-semibold">
                        {blog.author.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="font-medium">{blog.author}</span>
                  </div>
                )}
                <span>•</span>
                <span>{formatDate(blog.publishedAt)}</span>
                {blog.readTime && (
                  <>
                    <span>•</span>
                    <span>{blog.readTime} min read</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {blog.featuredImage && (
          <div className="container-custom -mt-8">
            <div className="max-w-4xl mx-auto">
              <img
                src={blog.featuredImage}
                alt={blog.title}
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-cyan-600 prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-500 mb-4">TAGS</h4>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-cyan-50 hover:text-cyan-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="section-padding bg-gray-50">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog) => (
                  <Link to={`/blogs/${relatedBlog.slug || relatedBlog.id}`} key={relatedBlog.id}>
                    <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      {relatedBlog.featuredImage && (
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={relatedBlog.featuredImage}
                            alt={relatedBlog.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-cyan-600 transition-colors">
                          {relatedBlog.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {formatDate(relatedBlog.publishedAt)}
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
};

export default BlogDetail;
