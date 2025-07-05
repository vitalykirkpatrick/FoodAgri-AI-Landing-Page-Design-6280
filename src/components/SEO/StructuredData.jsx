import React from 'react';

const StructuredData = ({ type = 'website', data = {} }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "FoodAgri AI LLC",
          "alternateName": "FoodAgri AI",
          "url": "https://foodagriai.com",
          "logo": "https://foodagriai.com/logo.png",
          "description": "AI-powered sales and marketing automation platform specifically designed for food and agriculture businesses.",
          "foundingDate": "2025",
          "founder": {
            "@type": "Person",
            "name": "Vitaly Kirkpatrick"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "30 N Gould St Ste R",
            "addressLocality": "Sheridan",
            "addressRegion": "WY",
            "postalCode": "82801",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-307-555-1234",
            "contactType": "customer service",
            "email": "privacy@foodagriai.com"
          },
          "sameAs": [
            "https://linkedin.com/company/foodagri-ai",
            "https://twitter.com/foodagriai"
          ],
          ...data
        };

      case 'software':
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "FoodAgri AI Platform",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser",
          "description": "AI-powered sales and marketing automation platform for food and agriculture businesses",
          "offers": {
            "@type": "Offer",
            "price": "Custom",
            "priceCurrency": "USD"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "50",
            "bestRating": "5",
            "worstRating": "1"
          },
          ...data
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name || "AI Sales Automation",
          "description": data.description || "AI-powered sales automation service for food and agriculture businesses",
          "provider": {
            "@type": "Organization",
            "name": "FoodAgri AI LLC"
          },
          "serviceType": "Business Automation",
          "areaServed": "United States",
          ...data
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.headline,
          "description": data.description,
          "author": {
            "@type": "Organization",
            "name": "FoodAgri AI LLC"
          },
          "publisher": {
            "@type": "Organization",
            "name": "FoodAgri AI LLC",
            "logo": {
              "@type": "ImageObject",
              "url": "https://foodagriai.com/logo.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          ...data
        };

      default:
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "FoodAgri AI",
          "url": "https://foodagriai.com",
          "description": "AI-powered sales and marketing automation platform for food and agriculture businesses",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://foodagriai.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          ...data
        };
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  );
};

export default StructuredData;