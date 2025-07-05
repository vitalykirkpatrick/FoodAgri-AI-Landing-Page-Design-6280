import React from 'react';
import { useSEO } from '../../hooks/useSEO';

const SEOHead = ({ 
  title = "FoodAgri AI - AI-Powered Sales & Marketing Platform for Food & Agriculture Businesses",
  description = "Transform your food and agriculture business with AI-powered sales automation, lead generation, and marketing solutions. Increase revenue by 300% with our specialized platform.",
  keywords = "food industry AI, agriculture AI, sales automation, lead generation, food marketing, agriculture sales, food tech, agritech, B2B sales, food manufacturing",
  image = "https://foodagriai.com/og-image.jpg",
  canonical = "https://foodagriai.com/",
  type = "website"
}) => {
  useSEO({
    title,
    description,
    keywords,
    image,
    canonical,
    type
  });

  return null; // This component doesn't render anything
};

export default SEOHead;