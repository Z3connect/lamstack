import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords,
  image,
  url,
  type = 'website',
  schema
}) => {
  const siteName = 'Recruit - Recruitment Platform';
  const defaultImage = '/og-image.jpg';
  
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullUrl = url ? `https://recruit.com${url}` : 'https://recruit.com';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      {description && <meta property="twitter:description" content={description} />}
      <meta property="twitter:image" content={image || defaultImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
