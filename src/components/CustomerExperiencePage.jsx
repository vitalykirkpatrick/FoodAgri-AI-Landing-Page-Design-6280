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
  FiArrowLeft, FiHeadphones, FiTarget, FiZap, FiBarChart3, 
  FiSettings, FiCheck, FiArrowRight, FiMessageCircle, FiUsers,
  FiEye, FiBook, FiHeart, FiStar, FiClock, FiRefreshCw
} = FiIcons;

const CustomerExperiencePage = () => {
  const navigate = useNavigate();
  const schedulingModal = useModal();
  const demoModal = useModal();

  const bundleFeatures = [
    {
      icon: FiHeadphones,
      title: "24/7 AI Customer Service Automation",
      description: "Multilingual AI chat, email, and phone support resolves up to 90% of inquiries instantly, around the clock.",
      details: [
        "Intelligent routing escalates complex issues to human agents with full context",
        "Seamless handoff ensures a smooth blend of AI efficiency and human empathy"
      ],
      value: "Never miss a customer inquiry, even after hours. Dramatically reduce wait times and operational costs."
    },
    {
      icon: FiUsers,
      title: "AI Virtual Assistants for Onboarding & Self-Service",
      description: "Automate customer onboarding, order tracking, reminders, and appointment scheduling.",
      details: [
        "Personalized guidance and recommendations for each customer journey",
        "Self-service flows for common requests—empowering customers to get answers fast"
      ],
      value: "Streamlined onboarding, fewer repetitive tickets, and higher customer satisfaction."
    },
    {
      icon: FiBook,
      title: "Knowledge Base & FAQ Automation",
      description: "AI builds, updates, and manages support documentation based on real customer queries and feedback.",
      details: [
        "Dynamic FAQs and troubleshooting guides adapt to trending issues and new products",
        "Instant access to up-to-date help resources across all channels"
      ],
      value: "Reduce agent workload and empower customers to solve issues independently."
    },
    {
      icon: FiBarChart3,
      title: "Feedback, Sentiment & Loyalty Analytics",
      description: "AI analyzes every interaction for sentiment, satisfaction, and emerging trends.",
      details: [
        "Real-time dashboards highlight loyalty opportunities and at-risk customers",
        "Automated feedback requests and NPS surveys at key moments in the customer journey"
      ],
      value: "Proactively improve service, increase retention, and turn customers into advocates."
    },
    {
      icon: FiMessageCircle,
      title: "Multi-Channel Engagement & Personalization",
      description: "Engage customers on their preferred channels (web, WhatsApp, SMS, email, voice) with AI-driven, personalized conversations.",
      details: [
        "Tailor support and campaigns to individual preferences, history, and needs",
        "Integrates with CRM and marketing tools for a unified customer view"
      ],
      value: "Consistent brand experience and higher engagement across every touchpoint."
    },
    {
      icon: FiRefreshCw,
      title: "Continuous Optimization & Human-AI Collaboration",
      description: "AI surfaces insights and recommends process improvements; human agents focus on high-value, complex cases.",
      details: [
        "Monthly reviews and optimization sprints ensure your support keeps getting better",
        "Scalable to handle spikes in volume without adding headcount"
      ],
      value: "Lower costs, happier agents, and a support system that evolves with your business."
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Customer initiates inquiry",
      description: "AI instantly responds via web, chat, or phone, resolves or routes as needed."
    },
    {
      step: 2,
      title: "Onboarding or order tracking",
      description: "AI guides customer through self-service flows or automates reminders."
    },
    {
      step: 3,
      title: "Complex issue detected",
      description: "AI escalates with full context to a human agent for resolution."
    },
    {
      step: 4,
      title: "Knowledge base updates",
      description: "AI adds new FAQs and updates documentation based on recurring queries."
    },
    {
      step: 5,
      title: "Feedback & analytics",
      description: "AI sends satisfaction surveys, analyzes sentiment, and provides actionable insights."
    },
    {
      step: 6,
      title: "Continuous improvement",
      description: "Monthly reviews optimize flows and ensure best-in-class support."
    }
  ];

  const featuresTable = [
    {
      feature: "24/7 AI Customer Service",
      delivers: "Instant, multilingual support on every channel"
    },
    {
      feature: "AI Virtual Assistants",
      delivers: "Automated onboarding, order tracking, and reminders"
    },
    {
      feature: "Knowledge Base & FAQ Automation",
      delivers: "Self-updating, dynamic help resources"
    },
    {
      feature: "Feedback & Sentiment Analytics",
      delivers: "Real-time insights, loyalty tracking, and proactive outreach"
    },
    {
      feature: "Multi-Channel Personalization",
      delivers: "Consistent, tailored experiences across web, chat, SMS, voice"
    },
    {
      feature: "Continuous Optimization",
      delivers: "Ongoing improvements and human-AI collaboration"
    }
  ];

  const whyChooseReasons = [
    "Always-on support: Never miss a customer, no matter the hour or channel.",
    "Personalization at scale: Every interaction is tailored—improving satisfaction and loyalty.",
    "Lower costs, higher efficiency: Automate 80–90% of repetitive tasks and free up agents for complex issues.",
    "Real-time analytics: Instantly spot trends, satisfaction drivers, and at-risk customers.",
    "Seamless integration: Works with your CRM, marketing, and sales stack."
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-green-600 hover:text-green-700 mb-8 transition-colors"
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
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiHeadphones} className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Customer Experience & Support Bundle
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-6">
                24/7 AI-Powered Customer Support & Loyalty Suite
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                Deliver world-class support, boost retention, and build lasting customer loyalty with multilingual AI chat, 
                automation, and real-time analytics—purpose-built for food & agri brands. Perfect for: Food/agri manufacturers, 
                processors, distributors, and B2B brands seeking to reduce support costs, improve response times, 
                and delight every customer, every time.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <span>Book a Free Support Audit</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </button>
                <button
                  onClick={demoModal.openModal}
                  className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  <SafeIcon icon={FiEye} className="w-5 h-5" />
                  <span>See the Support Suite in Action</span>
                </button>
                <button
                  onClick={schedulingModal.openModal}
                  className="text-green-600 hover:text-green-700 font-semibold transition-colors underline"
                >
                  Get Started Now
                </button>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100">
                <p className="text-gray-700 font-medium">
                  Transform customer support with intelligent automation that delivers 24/7 service and builds lasting loyalty
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
              What's Included in the Customer Experience & Support Bundle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six powerful AI-driven components that automate your entire customer support experience
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
                className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                      <SafeIcon icon={feature.icon} className="w-8 h-8 text-green-600" />
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
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-green-600 text-white rounded-xl p-4">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
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
              See how our AI Customer Experience & Support Bundle works from inquiry to improvement
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
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
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
              Comprehensive overview of what each component delivers for your customer support team
            </p>
          </motion.div>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
            <table className="w-full">
              <thead className="bg-green-50">
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose the Customer Experience & Support Bundle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for food and agriculture brands ready to delight every customer
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
                className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg leading-relaxed">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              See how the AI Customer Experience & Support Bundle can help you delight customers and scale loyalty.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Book a Free Support Audit</h3>
                <p className="mb-6 opacity-90">
                  See how the AI Customer Experience & Support Bundle can help you delight customers and scale loyalty.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Support Audit
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Get Started Now</h3>
                <p className="mb-6 opacity-90">
                  Automate support, boost retention, and build a customer-centric brand—no extra headcount required.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started Now
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">See the Support Suite in Action</h3>
                <p className="mb-6 opacity-90">
                  Request a live demo and watch FoodAgri AI's support automation suite deliver real results for food and agri brands.
                </p>
                <button
                  onClick={demoModal.openModal}
                  className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  See It In Action
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <p className="text-lg opacity-90 italic">
                All solutions are modular and integrate with your existing tech stack. Upgrade or add bundles as your business grows. 
                Experience the power of always-on, AI-driven customer experience—purpose-built for the food and agri sector.
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

export default CustomerExperiencePage;