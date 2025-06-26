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
  FiArrowLeft, FiTrendingUp, FiTarget, FiZap, FiUsers, FiBarChart3, 
  FiSettings, FiCheck, FiArrowRight, FiCpu, FiDatabase, FiMessageCircle,
  FiFileText, FiEye, FiRefreshCw
} = FiIcons;

const GrowthAcceleratorPage = () => {
  const navigate = useNavigate();
  const schedulingModal = useModal();
  const demoModal = useModal();

  const bundleFeatures = [
    {
      icon: FiDatabase,
      title: "AI-Powered Market & ICP Research",
      description: "Analyze industry trends, viral content, competitor moves, and demand signals using advanced AI tools.",
      details: [
        "Continuously refine your Ideal Customer Profile (ICP) with real-time data for laser-focused targeting",
        "Receive actionable, client-specific reports on whitespace, positioning, and content opportunities"
      ],
      value: "Start every campaign with a clear map of your best opportunities—before sending a single message."
    },
    {
      icon: FiTarget,
      title: "Automated Lead Generation Engine",
      description: "Scrape, segment, and score leads from food/ag databases, LinkedIn, trade shows, and directories.",
      details: [
        "Predictive scoring highlights companies most likely to buy, based on market signals and historical patterns",
        "Seamless CRM integration pushes qualified leads directly into your sales pipeline"
      ],
      value: "10x more qualified leads, zero manual prospecting, and a pipeline that never runs dry."
    },
    {
      icon: FiMessageCircle,
      title: "Hyper-Personalized Outreach & Engagement",
      description: "AI crafts and sends personalized emails, LinkedIn messages, and SMS referencing each prospect's business and market context.",
      details: [
        "Automated follow-ups adapt messaging in real time based on prospect engagement (opens, clicks, replies)",
        "AI chatbots and SDRs engage, qualify, and book appointments 24/7 across all channels"
      ],
      value: "Every touchpoint feels custom—dramatically boosting engagement and response rates."
    },
    {
      icon: FiFileText,
      title: "AI Content Creation & Campaign Automation",
      description: "Instantly generate blogs, social posts, newsletters, and video content tailored to each prospect and trend.",
      details: [
        "Scrape and analyze top-performing competitor content and hashtags for inspiration",
        "Automate scheduling, A/B testing, and distribution across all channels (integrates with Contentpace, Creasquare, BigVU, Minvo, etc.)"
      ],
      value: "10x content output, hyper-relevant messaging, and optimized campaign performance—without hiring a full marketing team."
    },
    {
      icon: FiBarChart3,
      title: "Predictive Analytics & Real-Time Reporting",
      description: "Real-time dashboards visualize lead flow, campaign performance, and sales pipeline health.",
      details: [
        "Predictive analytics forecast demand, spot high-value accounts, and recommend next-best actions",
        "Automated reports deliver actionable insights to management and stakeholders"
      ],
      value: "Data-driven decisions and continuous optimization for maximum ROI."
    },
    {
      icon: FiRefreshCw,
      title: "Continuous Optimization & Support",
      description: "Automate internal and client-facing workflows using Zapier, Pabbly, or N8N-style tools.",
      details: [
        "AI agents monitor performance, suggest improvements, and implement optimizations automatically",
        "Dedicated support and monthly strategy reviews included"
      ],
      value: "Ongoing improvements, compounding ROI, and a system that gets smarter over time."
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Onboarding",
      description: "AI analyzes your business, market trends, and competitor landscape to identify ICP and whitespace opportunities."
    },
    {
      step: 2,
      title: "Lead Generation",
      description: "AI scrapes and scores leads, pushing the best into your CRM and highlighting \"hot\" accounts for outreach."
    },
    {
      step: 3,
      title: "Outreach & Engagement",
      description: "AI crafts and sends dynamic, personalized messages across channels, with adaptive follow-ups."
    },
    {
      step: 4,
      title: "Content & Campaigns",
      description: "AI generates and schedules content referencing each prospect's business and trending topics."
    },
    {
      step: 5,
      title: "Analytics & Reporting",
      description: "Dashboards update in real time; automated reports and recommendations are delivered."
    },
    {
      step: 6,
      title: "Continuous Optimization",
      description: "AI workflow builder automates repetitive tasks; monthly reviews ensure ongoing improvement."
    }
  ];

  const featuresTable = [
    {
      feature: "AI Market & ICP Research",
      delivers: "Real-time, data-driven targeting and positioning"
    },
    {
      feature: "Automated Lead Generation",
      delivers: "10x qualified leads, predictive scoring, CRM-ready"
    },
    {
      feature: "Hyper-Personalized Outreach",
      delivers: "Dynamic, multi-channel messaging that adapts"
    },
    {
      feature: "Dynamic Content Creation",
      delivers: "Blogs, posts, and campaigns tailored to each buyer"
    },
    {
      feature: "Campaign Automation & Optimization",
      delivers: "Scheduling, A/B testing, and cross-channel delivery"
    },
    {
      feature: "AI Analytics & Reporting",
      delivers: "Real-time dashboards, predictive insights"
    },
    {
      feature: "Workflow Automation",
      delivers: "End-to-end process automation for scale"
    },
    {
      feature: "Dedicated Support & Optimization",
      delivers: "Ongoing strategy reviews and hands-on support"
    }
  ];

  const whyChooseReasons = [
    "End-to-End Growth Engine: Covers the entire front end of your funnel, from research to pipeline.",
    "Hyper-Personalization at Scale: Every lead, message, and piece of content is tailored for maximum relevance.",
    "Zero Manual Prospecting: AI does the heavy lifting, freeing your team for high-value work.",
    "Predictable, Compounding ROI: Measurable growth that scales effortlessly.",
    "Seamless SaaS Delivery: All solutions are cloud-based, integrated, and require no heavy services or custom coding."
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-green-50 to-blue-50">
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
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiTrendingUp} className="w-10 h-10 text-emerald-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Growth Accelerator Bundle
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-emerald-600 mb-6">
                Full-Funnel Market Expansion Engine for Food & Agri Businesses
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                Rapidly fill your pipeline, dominate new markets, and drive predictable growth with minimal manual effort. 
                Perfect for: Food/agri manufacturers, processors, distributors, and B2B brands.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <span>Book a Free Strategy Call</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </button>
                <button
                  onClick={demoModal.openModal}
                  className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  <SafeIcon icon={FiEye} className="w-5 h-5" />
                  <span>See It In Action</span>
                </button>
                <button
                  onClick={schedulingModal.openModal}
                  className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors underline"
                >
                  Get Started Now
                </button>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-emerald-100">
                <p className="text-gray-700 font-medium">
                  Transform your food business with intelligent automation that works 24/7 to fuel your growth
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
              What's Included in the Growth Accelerator Bundle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six powerful AI-driven components that work together to create your complete growth engine
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
                className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 border border-emerald-100 hover:shadow-lg transition-all duration-300"
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
                    <div className="bg-emerald-600 text-white rounded-xl p-4">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
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
              See how our AI Growth Accelerator Bundle works from start to finish
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
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
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
              Comprehensive overview of what each component delivers for your business
            </p>
          </motion.div>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
            <table className="w-full">
              <thead className="bg-emerald-50">
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
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose the Growth Accelerator Bundle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for food and agriculture businesses ready to scale
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
                className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg leading-relaxed">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Accelerate Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Discover how the AI Growth Accelerator Bundle can transform your pipeline and dominate your market.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Book a Free Strategy Call</h3>
                <p className="mb-6 opacity-90">
                  Discover how the AI Growth Accelerator Bundle can transform your pipeline and dominate your market.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Strategy Call
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Get Started Now</h3>
                <p className="mb-6 opacity-90">
                  Instantly boost your lead flow, automate your outreach, and scale your content—no manual prospecting required.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started Now
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">See It In Action</h3>
                <p className="mb-6 opacity-90">
                  Request a live demo and see how FoodAgri AI's automation engine works for food and agri brands like yours.
                </p>
                <button
                  onClick={demoModal.openModal}
                  className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  See It In Action
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <p className="text-lg opacity-90 italic">
                All solutions are modular and integrate with your existing tech stack. Upgrade or add bundles as your business grows. 
                Experience the power of always-on, AI-driven market expansion—purpose-built for the food and agri sector.
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

export default GrowthAcceleratorPage;