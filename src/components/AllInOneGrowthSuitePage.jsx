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
    {
      icon: FiUsers,
      title: "AI Sales Performance Engine",
      description: "24/7 AI sales assistant, call review & coaching, automated proposal generation, and predictive pipeline management.",
      details: [
        "24/7 AI sales assistant and appointment setting",
        "AI-powered sales call review and coaching",
        "Automated proposal and contract generation",
        "Predictive pipeline management and deal scoring",
        "Sales analytics and continuous optimization"
      ],
      pageLink: "/sales-performance-bundle",
      linkText: "Learn More About Sales Performance →"
    },
    {
      icon: FiEdit,
      title: "AI Marketing Excellence Engine",
      description: "AI content creation, viral trend analysis, automated ad campaigns, and cross-channel distribution.",
      details: [
        "AI content creation engine for blogs, posts, and video scripts",
        "Viral content and trend analysis for competitive advantage",
        "AI ad campaign automation and optimization",
        "Campaign scheduling and cross-channel distribution",
        "Performance tracking and real-time optimization"
      ],
      pageLink: "/marketing-excellence-bundle",
      linkText: "Learn More About Marketing Excellence →"
    },
    {
      icon: FiHeadphones,
      title: "AI Customer Experience & Support Engine",
      description: "24/7 multilingual customer service, AI virtual assistants, knowledge base automation, and sentiment analytics.",
      details: [
        "24/7 AI customer service automation",
        "AI virtual assistants for onboarding and self-service",
        "Knowledge base and FAQ automation",
        "Feedback, sentiment, and loyalty analytics",
        "Multi-channel engagement and personalization"
      ],
      pageLink: "/customer-experience-bundle",
      linkText: "Learn More About Customer Experience →"
    },
    {
      icon: FiUserCheck,
      title: "AI Onboarding & Training Engine",
      description: "AI chatbots for onboarding, automated training modules, progress tracking, and task automation.",
      details: [
        "AI chatbots and virtual onboarding assistants",
        "Automated training modules and knowledge base creation",
        "Progress tracking, feedback, and analytics",
        "Automated task assignment and system integration",
        "Continuous optimization and human-AI collaboration"
      ],
      pageLink: "/onboarding-training-bundle",
      linkText: "Learn More About Onboarding & Training →"
    },
    {
      icon: FiShare2,
      title: "AI Partnership & Channel Engine",
      description: "Automated partner onboarding, co-branded campaigns, performance dashboards, and communication automation.",
      details: [
        "Automated partner onboarding and resource delivery",
        "Co-branded campaign automation and lead distribution",
        "Partner performance dashboards and reporting",
        "Communication, feedback, and enablement automation"
      ],
      pageLink: "/partnership-channel-bundle",
      linkText: "Learn More About Partnership & Channel →"
    },
    {
      icon: FiPieChart,
      title: "AI Data Intelligence & Insights Engine",
      description: "AI-powered data aggregation, predictive analytics, automated reporting, and AI-driven recommendations.",
      details: [
        "AI-powered data aggregation from all business systems",
        "Predictive analytics for demand, churn, and growth",
        "Automated, customized reporting for stakeholders",
        "Data visualization dashboards",
        "AI-driven recommendations for business optimization"
      ],
      pageLink: "/data-intelligence-bundle",
      linkText: "Learn More About Data Intelligence →"
    }
  ];

  const integrationBenefits = [
    {
      icon: FiGlobe,
      title: "Unified Data & Insights",
      description: "All your business data flows seamlessly between modules, creating a single source of truth for decision-making."
    },
    {
      icon: FiRefreshCw,
      title: "Automated Workflows",
      description: "Cross-functional automation ensures leads flow from marketing to sales to support without manual handoffs."
    },
    {
      icon: FiCpu,
      title: "AI Learning & Optimization",
      description: "Our AI learns from all modules simultaneously, continuously optimizing performance across your entire business."
    },
    {
      icon: FiAward,
      title: "Scalable Growth",
      description: "Start with any module and add others as you grow, with seamless integration and data continuity."
    }
  ];

  const pricingTiers = [
    {
      name: "Growth Starter",
      description: "Perfect for small to medium food businesses",
      features: [
        "Choose 2 AI Engine Modules",
        "Basic integration and setup",
        "Email support",
        "Monthly reporting",
        "Standard training"
      ],
      popular: false
    },
    {
      name: "Business Accelerator",
      description: "Ideal for growing food and agriculture companies",
      features: [
        "Choose 4 AI Engine Modules",
        "Advanced integration and automation",
        "Priority support and dedicated success manager",
        "Weekly reporting and optimization",
        "Custom training and onboarding",
        "API access and custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise Transformation",
      description: "Complete solution for large organizations",
      features: [
        "All 7 AI Engine Modules included",
        "White-glove setup and migration",
        "24/7 dedicated support team",
        "Real-time analytics and custom dashboards",
        "Executive training and change management",
        "Custom development and integrations",
        "SLA guarantees and priority feature requests"
      ],
      popular: false
    }
  ];

  const successMetrics = [
    { metric: "300%", label: "Average ROI Increase" },
    { metric: "85%", label: "Reduction in Manual Tasks" },
    { metric: "10x", label: "Lead Generation Improvement" },
    { metric: "60%", label: "Faster Sales Cycles" }
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

      {/* Success Metrics */}
      <section className="py-12 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {successMetrics.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{item.metric}</div>
                <div className="text-emerald-100 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Engines Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              7 Powerful AI Engines, One Unified Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each engine is powerful on its own, but together they create an unstoppable growth machine for your food & agriculture business.
            </p>
          </motion.div>

          <div className="space-y-12">
            {suiteFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center">
                      <SafeIcon icon={feature.icon} className="w-8 h-8 text-emerald-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {index + 1}. {feature.title}
                    </h3>
                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => navigate(feature.pageLink)}
                      className="text-emerald-600 hover:text-emerald-700 font-semibold flex items-center space-x-2 transition-colors"
                    >
                      <span>{feature.linkText}</span>
                      <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose the Complete Suite?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Individual engines are powerful, but the real magic happens when they work together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <SafeIcon icon={benefit.icon} className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Growth Level
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with what you need today and scale up as your business grows. All packages include setup, training, and ongoing support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  tier.popular ? 'border-emerald-400 ring-4 ring-emerald-100' : 'border-gray-100'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <SafeIcon icon={FiStar} className="w-4 h-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="text-2xl font-bold text-emerald-600 mb-2">Custom Pricing</div>
                  <p className="text-sm text-gray-500">Tailored to your business needs</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={schedulingModal.openModal}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Custom Quote
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Food Business?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Join the food and agriculture companies already scaling with FoodAgri AI. Get a custom demonstration of the complete suite.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button
                onClick={schedulingModal.openModal}
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule Free Digital Transformation Audit
              </button>
              
              <button
                onClick={demoModal.openModal}
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                See Complete Suite Demo
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <p className="text-lg opacity-90 italic">
                All solutions are modular and integrate with your existing tech stack. Start with any engine and add others as you grow, with seamless data continuity and unified insights across your entire business.
              </p>
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

export default AllInOneGrowthSuitePage;