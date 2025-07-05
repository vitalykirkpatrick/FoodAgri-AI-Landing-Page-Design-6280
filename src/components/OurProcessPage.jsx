import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Navigation from './Navigation';
import Footer from './sections/Footer';
import ProductIntro from './sections/ProductIntro';
import WhyDifferent from './sections/WhyDifferent';
import SchedulingModal from './modals/SchedulingModal';
import DemoFormModal from './modals/DemoFormModal';
import useModal from '../hooks/useModal';
import SEOHead from './SEO/SEOHead';
import StructuredData from './SEO/StructuredData';

const { FiArrowLeft } = FiIcons;

const OurProcessPage = () => {
  const navigate = useNavigate();
  const schedulingModal = useModal();
  const demoModal = useModal();

  const seoData = {
    title: "Our Process - How FoodAgri AI Transforms Food & Agriculture Businesses",
    description: "Learn about FoodAgri AI's proven 3-step process for transforming food and agriculture businesses with AI-powered solutions. Discover what makes us different from generic sales tools and how we deliver measurable results for food manufacturers, processors, and distributors.",
    keywords: "FoodAgri AI process, food industry AI implementation, agriculture automation process, AI transformation methodology, food industry sales automation, agriculture AI solutions, food tech implementation, agritech process",
    canonical: "https://foodagriai.com/our-process",
    image: "https://foodagriai.com/og-image-process.jpg"
  };

  const structuredDataPage = {
    "@type": "WebPage",
    "name": "Our Process - FoodAgri AI",
    "description": "Learn about FoodAgri AI's proven process for transforming food and agriculture businesses with AI-powered solutions",
    "url": "https://foodagriai.com/our-process",
    "mainEntity": {
      "@type": "HowTo",
      "name": "FoodAgri AI Implementation Process",
      "description": "3-step process to transform your food business with AI",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Connect Your Data",
          "text": "Connect your data and workflows with plug-and-play setup"
        },
        {
          "@type": "HowToStep", 
          "name": "Let AI Automate",
          "text": "FoodAgri AI automates lead generation, content, compliance, and support"
        },
        {
          "@type": "HowToStep",
          "name": "Watch Your Business Grow",
          "text": "Scale with confidence while focusing on what matters most"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead {...seoData} />
      <StructuredData type="website" data={structuredDataPage} />
      
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
            <span>Back to Home</span>
          </button>

          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Our Process
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover how we transform food and agriculture businesses with our proven AI implementation process and what makes FoodAgri AI different from other solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Intro / Process Section - FIRST */}
      <ProductIntro />

      {/* Why Different Section - SECOND (after process explanation) */}
      <WhyDifferent />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Let's discuss how our proven process can help transform your food or agriculture business with AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={schedulingModal.openModal}
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule Free Consultation
              </button>
              <button
                onClick={demoModal.openModal}
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                See Our Process in Action
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <SchedulingModal isOpen={schedulingModal.isOpen} onClose={schedulingModal.closeModal} />
      <DemoFormModal isOpen={demoModal.isOpen} onClose={demoModal.closeModal} />
      <Footer />
    </div>
  );
};

export default OurProcessPage;