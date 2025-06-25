import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import HeroMain from './sections/HeroMain';
import LogoStrip from './sections/LogoStrip';
import Hero from './sections/Hero';
import PainPoints from './sections/PainPoints';
import DesiredOutcome from './sections/DesiredOutcome';
import OurServices from './sections/OurServices';
import WorkingTogether from './sections/WorkingTogether';
import WhyDifferent from './sections/WhyDifferent';
import ProductIntro from './sections/ProductIntro';
import AboutMe from './sections/AboutMe';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroMain />
      <LogoStrip />
      <Hero />
      <PainPoints />
      <DesiredOutcome />
      <OurServices />
      <WorkingTogether />
      <WhyDifferent />
      <ProductIntro />
      <AboutMe />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;