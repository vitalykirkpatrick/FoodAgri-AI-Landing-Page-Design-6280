import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Navigation from './Navigation';
import Footer from './sections/Footer';
import SchedulingModal from './modals/SchedulingModal';
import DemoFormModal from './modals/DemoFormModal';
import useModal from '../hooks/useModal';
import SEOHead from './SEO/SEOHead';
import StructuredData from './SEO/StructuredData';

const { FiArrowLeft, FiZap, FiTarget, FiEdit, FiUsers, FiBarChart3, FiSettings, FiCheck, FiArrowRight, FiTrendingUp, FiEye, FiLayers, FiCpu, FiGlobe, FiRefreshCw, FiAward, FiStar, FiHeadphones, FiDatabase, FiMonitor, FiUserCheck, FiShare2, FiPieChart, FiExternalLink } = FiIcons;

const AllInOneGrowthSuitePage = () => {
  const navigate = useNavigate();
  const schedulingModal = useModal();
  const demoModal = useModal();

  // Component content remains the same...
  const suiteFeatures = [
    {
      icon: FiTrendingUp,
      title: "AI Growth Accelerator Engine",
      description: "AI-powered market intelligence, ICP research, and lead generation with hyper-personalized, multichannel outreach and engagement.",
      details: [
        "AI-powered market intelligence, ICP research, and lead generation",
        "Hyper-personalized, multichannel outreach and engagement",
        "Dynamic content creation and campaign automation",
        "Predictive analytics and real-time reporting",
        "Continuous optimization and dedicated support"
      ],
      pageLink: "/growth-accelerator-bundle",
      linkText: "Learn More About Growth Accelerator →"
    },
    // ... rest of the features
  ];

  const seoData = {
    title: "AI All-in-One Growth Suite - Complete Business Automation | FoodAgri AI",
    description: "Transform your food & agriculture business with our comprehensive AI automation suite. Unified growth, sales, marketing, and support tools in one platform. Get 300% ROI increase.",
    keywords: "AI business automation, food industry growth suite, agriculture AI platform, sales automation, marketing automation, customer support AI, all-in-one business solution",
    canonical: "https://foodagriai.com/all-in-one-growth-suite"
  };

  const structuredDataService = {
    name: "AI All-in-One Growth Suite",
    description: "Complete AI automation platform for food and agriculture businesses covering growth, sales, marketing, and support",
    provider: {
      "@type": "Organization",
      "name": "FoodAgri AI LLC"
    },
    serviceType: "Business Automation Platform",
    areaServed: "United States"
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead {...seoData} />
      <StructuredData type="service" data={structuredDataService} />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-8 transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
          </nav>

          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <header>
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={FiLayers} className="w-10 h-10 text-emerald-600" />
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  AI All-in-One Growth Suite
                </h1>
                
                <h2 className="text-2xl md:text-3xl font-semibold text-emerald-600 mb-6">
                  The Ultimate AI Automation Platform for Food & Agri Growth
                </h2>
                
                <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Unlock the full power of AI across every business function—growth, sales, marketing, support, and analytics—in one seamless, integrated suite. Drive measurable results, maximize efficiency, and scale faster with a turnkey solution tailored for food & agri brands.
                </p>
              </header>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                  aria-label="Book a free digital transformation audit for your food business"
                >
                  <span>Book a Free Digital Transformation Audit</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </button>

                <button
                  onClick={demoModal.openModal}
                  className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                  aria-label="See the All-in-One Suite in action with live demo"
                >
                  <SafeIcon icon={FiEye} className="w-5 h-5" />
                  <span>See the All-in-One Suite in Action</span>
                </button>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
                <p className="text-gray-700 font-medium">
                  Complete digital transformation with integrated AI automation across all business functions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the component content... */}
      
      <SchedulingModal isOpen={schedulingModal.isOpen} onClose={schedulingModal.closeModal} />
      <DemoFormModal isOpen={demoModal.isOpen} onClose={demoModal.closeModal} />
      <Footer />
    </div>
  );
};

export default AllInOneGrowthSuitePage;