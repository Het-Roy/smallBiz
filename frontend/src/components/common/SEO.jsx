import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, name, type }) => {
  const siteTitle = 'SmallBiz - WhatsApp-First CRM for Small Businesses';
  const fullTitle = title ? `${title} | SmallBiz` : siteTitle;
  const defaultDescription = 'SmallBiz is a powerful, WhatsApp-first CRM designed specifically for small businesses to manage contacts, deals, and invoices seamlessly.';
  const metaDescription = description || defaultDescription;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:site_name" content="SmallBiz" />
      
      {/* Twitter */}
      <meta name="twitter:creator" content={name || 'SmallBiz'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      
      {/* Robot tags */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;
