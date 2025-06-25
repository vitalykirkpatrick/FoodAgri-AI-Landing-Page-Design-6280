import React from 'react';
import { motion } from 'framer-motion';
import Hero from './sections/Hero';
import PainPoints from './sections/PainPoints';
import DesiredOutcome from './sections/DesiredOutcome';
import OurServices from './sections/OurServices';
import WhyDifferent from './sections/WhyDifferent';
import ProductIntro from './sections/ProductIntro';
import AboutMe from './sections/AboutMe';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <PainPoints />
      <DesiredOutcome />
      <OurServices />
      <WhyDifferent />
      <ProductIntro />
      <AboutMe />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;