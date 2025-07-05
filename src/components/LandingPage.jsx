import React from 'react';
import Navigation from './Navigation';
import HeroMain from './sections/HeroMain';
import LogoStrip from './sections/LogoStrip';
import Hero from './sections/Hero';
import PainPoints from './sections/PainPoints';
import DesiredOutcome from './sections/DesiredOutcome';
import OurServices from './sections/OurServices';
import WorkingTogether from './sections/WorkingTogether';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import SEOHead from './SEO/SEOHead';
import StructuredData from './SEO/StructuredData';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="FoodAgri AI - AI-Powered Sales & Marketing Platform for Food & Agriculture Businesses"
        description="Transform your food and agriculture business with AI-powered sales automation, lead generation, and marketing solutions. Increase revenue by 300% with our specialized platform for food manufacturers, processors, and distributors."
        keywords="food industry AI, agriculture AI, sales automation, lead generation, food marketing, agriculture sales, food tech, agritech, B2B sales, food manufacturing, food processing, agricultural technology, CRM automation, marketing automation, food compliance, FDA compliance, USDA compliance"
        canonical="https://foodagriai.com/"
      />
      <StructuredData type="organization" />
      <StructuredData type="software" />
      <StructuredData type="website" />
      
      <Navigation />
      
      <main role="main">
        <HeroMain />
        <LogoStrip />
        <Hero />
        <PainPoints />
        <DesiredOutcome />
        <OurServices />
        <WorkingTogether />
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;