// SEO utility functions
export const generateMetaTags = (pageData) => {
  const {
    title = "FoodAgri AI - AI-Powered Sales & Marketing Platform for Food & Agriculture",
    description = "Transform your food and agriculture business with AI-powered sales automation, lead generation, and marketing solutions.",
    keywords = "food industry AI, agriculture AI, sales automation, lead generation",
    image = "https://foodagriai.com/og-image.jpg",
    url = "https://foodagriai.com/",
    type = "website"
  } = pageData;

  return {
    title,
    description,
    keywords,
    image,
    url,
    type
  };
};

export const trackEvent = (eventName, properties = {}) => {
  // Google Analytics 4 event tracking
  if (window.gtag) {
    window.gtag('event', eventName, properties);
  }

  // Facebook Pixel event tracking
  if (window.fbq) {
    window.fbq('track', eventName, properties);
  }

  // Custom analytics can be added here
  console.log('Event tracked:', eventName, properties);
};

export const optimizeImageSrc = (src, width = 800, quality = 85) => {
  // Add image optimization parameters if using a service like Cloudinary
  if (src.includes('cloudinary.com')) {
    return src.replace('/upload/', `/upload/w_${width},q_${quality},f_auto/`);
  }
  
  return src;
};

export const generateBreadcrumbs = (pathname) => {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ name: 'Home', href: '/' }];
  
  let currentPath = '';
  paths.forEach((path, index) => {
    currentPath += `/${path}`;
    const name = path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    breadcrumbs.push({
      name,
      href: currentPath,
      current: index === paths.length - 1
    });
  });
  
  return breadcrumbs;
};

export const validateSEOData = (data) => {
  const errors = [];
  
  if (!data.title || data.title.length < 30 || data.title.length > 60) {
    errors.push('Title should be between 30-60 characters');
  }
  
  if (!data.description || data.description.length < 120 || data.description.length > 160) {
    errors.push('Description should be between 120-160 characters');
  }
  
  if (!data.keywords || data.keywords.split(',').length < 3) {
    errors.push('At least 3 keywords are recommended');
  }
  
  return errors;
};