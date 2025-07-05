import { useEffect } from 'react';

export const useSEO = (seoData) => {
  useEffect(() => {
    if (!seoData) return;

    // Update page title
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && seoData.description) {
      metaDescription.setAttribute('content', seoData.description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && seoData.keywords) {
      metaKeywords.setAttribute('content', seoData.keywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && seoData.title) {
      ogTitle.setAttribute('content', seoData.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && seoData.description) {
      ogDescription.setAttribute('content', seoData.description);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage && seoData.image) {
      ogImage.setAttribute('content', seoData.image);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle && seoData.title) {
      twitterTitle.setAttribute('content', seoData.title);
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription && seoData.description) {
      twitterDescription.setAttribute('content', seoData.description);
    }

    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage && seoData.image) {
      twitterImage.setAttribute('content', seoData.image);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical && seoData.canonical) {
      canonical.setAttribute('href', seoData.canonical);
    }

  }, [seoData]);
};