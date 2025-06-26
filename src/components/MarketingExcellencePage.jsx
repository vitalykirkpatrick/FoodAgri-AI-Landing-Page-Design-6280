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

const { 
  FiArrowLeft, FiEdit, FiTarget, FiZap, FiBarChart3, 
  FiSettings, FiCheck, FiArrowRight, FiPenTool, FiTrendingUp,
  FiEye, FiCalendar, FiLayers, FiMonitor, FiRefreshCw
} = FiIcons;

const MarketingExcellencePage = () => {
  const navigate = useNavigate();
  const schedulingModal = useModal();
  const demoModal = useModal();

  const bundleFeatures = [
    {
      icon: FiPenTool,
      title: "AI Content Creation Engine",
      description: "Instantly generate blogs, social posts, newsletters, and marketing copy tailored to each prospect's business, segment, and current trends.",
      details: [
        "Dynamic content blocks adapt to each recipient's profile, engagement, and pain points for hyper-personalization",
        "Supports multiple languages and formats (text, image, video)"
      ],
      value: "10x your content output, stay relevant, and never run out of fresh ideas."
    },
    {
      icon: FiTrendingUp,
      title: "Viral Content & Trend Analysis",
      description: "AI scrapes and analyzes top-performing posts, comments, and hashtags in your sector to inspire and differentiate your brand.",
      details: [
        "Real-time competitor intelligence: see what's working in your category and adapt instantly",
        "Identify viral angles and whitespace for campaigns"
      ],
      value: "Stay ahead of trends, outpace competitors, and always know what's resonating."
    },
    {
      icon: FiTarget,
      title: "AI Ad Campaign Automation",
      description: "Instantly create, test, and optimize ad campaigns (search, social, video, display) using AI-driven creative and copy.",
      details: [
        "Scrape and benchmark best-in-class competitor ads for creative direction and performance insights",
        "Dynamic template adaptation ensures every ad matches your brand and target market"
      ],
      value: "High-ROI ad creatives, faster launches, and optimized spend across all platforms."
    },
    {
      icon: FiCalendar,
      title: "Campaign Scheduling & Cross-Channel Distribution",
      description: "Automate scheduling, A/B testing, and distribution of content and ads across all major channels.",
      details: [
        "AI optimizes send times, formats, and channels for each audience segment",
        "Centralized asset management and approval workflows for team collaboration"
      ],
      value: "Consistent brand presence, less manual work, and maximum reach with minimum effort."
    },
    {
      icon: FiBarChart3,
      title: "Performance Tracking & Real-Time Optimization",
      description: "Real-time dashboards visualize campaign performance, engagement, and ROI across every channel.",
      details: [
        "AI provides actionable insights and recommendations to improve creative, targeting, and spend",
        "Automated reporting delivered to your team and stakeholders"
      ],
      value: "Data-driven decisions, continuous improvement, and campaigns that get smarter every month."
    },
    {
      icon: FiRefreshCw,
      title: "Continuous Optimization & Support",
      description: "AI workflow builder automates repetitive marketing tasks and campaign adjustments.",
      details: [
        "Monthly strategy reviews and hands-on support from FoodAgri AI experts",
        "Integrates with your existing marketing stack and CRM"
      ],
      value: "Ongoing improvement, compounding ROI, and a marketing system that evolves with your business."
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Onboarding",
      description: "AI analyzes your brand, market trends, and competitor content to identify winning campaign angles."
    },
    {
      step: 2,
      title: "Content Creation",
      description: "AI generates and personalizes blogs, posts, ads, and video scripts for each audience and channel."
    },
    {
      step: 3,
      title: "Campaign Launch",
      description: "AI schedules and distributes content and ads, adapting formats for each platform."
    },
    {
      step: 4,
      title: "Performance Tracking",
      description: "Dashboards update in real time; AI recommends optimizations for creative, targeting, and spend."
    },
    {
      step: 5,
      title: "Continuous Optimization",
      description: "AI automates improvements; monthly reviews ensure your marketing stays ahead of the curve."
    }
  ];

  const featuresTable = [
    {
      feature: "AI Content Creation Engine",
      delivers: "Instantly generate blogs, posts, and video scripts"
    },
    {
      feature: "Dynamic Content Personalization",
      delivers: "Hyper-relevant messaging for every audience segment"
    },
    {
      feature: "Viral Content & Trend Analysis",
      delivers: "Real-time insights from top-performing sector content"
    },
    {
      feature: "AI Ad Campaign Automation",
      delivers: "High-ROI ads, creative testing, and spend optimization"
    },
    {
      feature: "Campaign Scheduling & Distribution",
      delivers: "Automated, cross-channel delivery and A/B testing"
    },
    {
      feature: "Performance Tracking & Optimization",
      delivers: "Real-time dashboards, actionable insights, and reporting"
    },
    {
      feature: "Workflow Automation",
      delivers: "End-to-end process automation for scale and efficiency"
    },
    {
      feature: "Dedicated Support & Strategy",
      delivers: "Ongoing reviews and expert guidance from FoodAgri AI"
    }
  ];

  const whyChooseReasons = [
    "All-in-one content and campaign engine: Covers content, social, and ads in a single, integrated suite.",
    "Personalization at scale: Every message, post, and ad adapts to your audience for maximum relevance.",
    "Zero manual campaign management: AI handles the heavy lifting—your team focuses on strategy and creativity.",
    "Compounding ROI: Campaigns get smarter and more effective every month.",
    "Seamless SaaS delivery: Cloud-based, modular, and integrates with your existing tools."
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 via-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-8 transition-colors"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiEdit} className="w-10 h-10 text-orange-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Marketing Excellence Bundle
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-orange-600 mb-6">
                AI Content & Campaign Suite: Scale Content. Dominate Social. Win Ads.
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                Unlock 10x content output, always-on brand visibility, and campaign performance that compounds—powered by AI, 
                tailored for food & agri brands. Perfect for: Food/agri manufacturers, processors, distributors, 
                and B2B brands needing to stay top-of-mind, drive demand, and win their category with targeted, data-backed campaigns.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <span>Book a Free Marketing Audit</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </button>
                <button
                  onClick={demoModal.openModal}
                  className="bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  <SafeIcon icon={FiEye} className="w-5 h-5" />
                  <span>See the Content Engine in Action</span>
                </button>
                <button
                  onClick={schedulingModal.openModal}
                  className="text-orange-600 hover:text-orange-700 font-semibold transition-colors underline"
                >
                  Get Started Now
                </button>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-orange-100">
                <p className="text-gray-700 font-medium">
                  Transform your marketing with intelligent automation that delivers 10x content output and optimized campaigns
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
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
              What's Included in the Marketing Excellence Bundle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six powerful AI-driven components that automate your entire marketing engine
            </p>
          </motion.div>

          <div className="space-y-12">
            {bundleFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-orange-50 to-emerald-50 rounded-3xl p-8 border border-orange-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                      <SafeIcon icon={feature.icon} className="w-8 h-8 text-orange-600" />
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
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-orange-600 text-white rounded-xl p-4">
                      <p className="font-semibold">💡 Value: {feature.value}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Workflow Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Example Workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI Marketing Excellence Bundle works from strategy to optimization
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features & Benefits Table */}
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
              Key Features & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive overview of what each component delivers for your marketing team
            </p>
          </motion.div>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
            <table className="w-full">
              <thead className="bg-orange-50">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">What It Delivers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {featuresTable.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-base font-medium text-gray-900">{item.feature}</td>
                    <td className="px-6 py-4 text-base text-gray-700">{item.delivers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose the Marketing Excellence Bundle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for food and agriculture brands ready to dominate their market
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg leading-relaxed">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Elevate Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-emerald-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Marketing?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              See how the AI Marketing Excellence Bundle can help your brand win more mindshare and drive demand.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Book a Free Marketing Audit</h3>
                <p className="mb-6 opacity-90">
                  See how the AI Marketing Excellence Bundle can help your brand win more mindshare and drive demand.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Marketing Audit
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Get Started Now</h3>
                <p className="mb-6 opacity-90">
                  Unlock 10x content output, always-on campaigns, and optimized ad spend—no manual work required.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started Now
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">See the Content Engine in Action</h3>
                <p className="mb-6 opacity-90">
                  Request a live demo and watch FoodAgri AI's automation suite deliver real results for food and agri brands.
                </p>
                <button
                  onClick={demoModal.openModal}
                  className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  See It In Action
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <p className="text-lg opacity-90 italic">
                All solutions are modular and integrate with your existing tech stack. Upgrade or add bundles as your business grows. 
                Experience the power of always-on, AI-driven marketing—purpose-built for the food and agri sector.
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

export default MarketingExcellencePage;