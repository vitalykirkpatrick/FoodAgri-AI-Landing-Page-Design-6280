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
  FiArrowLeft, FiUsers, FiTarget, FiZap, FiBarChart3, 
  FiSettings, FiCheck, FiArrowRight, FiPhoneCall, FiMail,
  FiFileText, FiEye, FiTrendingUp, FiHeadphones, FiStar, FiClock
} = FiIcons;

const SalesPerformancePage = () => {
  const navigate = useNavigate();
  const schedulingModal = useModal();
  const demoModal = useModal();

  const bundleFeatures = [
    {
      icon: FiHeadphones,
      title: "24/7 AI Sales Assistant & Appointment Setter",
      description: "Multichannel AI agent (web, phone, SMS, email, social) instantly engages inbound leads, answers FAQs, qualifies prospects, and books appointments—even after hours.",
      details: [
        "Customizable conversation flows for different buyer personas, products, and regions",
        "Integrates with your CRM, Google/Office calendars, and all major communication channels"
      ],
      value: "Never miss a lead, maximize conversion from every channel, and keep your sales calendar full automatically."
    },
    {
      icon: FiMail,
      title: "AI-Powered Sales Outreach & Follow-Up Automation",
      description: "AI crafts hyper-personalized outbound messages and follow-ups, referencing each prospect's business, market trends, and pain points.",
      details: [
        "Automated sequencing adapts messaging based on engagement (opens, clicks, replies), so no lead slips through the cracks",
        "Dynamic content blocks ensure every touchpoint is relevant and timely"
      ],
      value: "Higher engagement, more responses, and less manual follow-up for your sales team."
    },
    {
      icon: FiPhoneCall,
      title: "AI Sales Call Review & Coaching",
      description: "All sales calls are recorded, transcribed, and analyzed by AI for sentiment, objection handling, and closing techniques.",
      details: [
        "Actionable coaching tips and performance dashboards for each rep and team",
        "Script optimization: AI identifies which scripts, offers, and talk tracks yield the best results"
      ],
      value: "Continuous improvement, higher close rates, and a data-driven sales coaching culture."
    },
    {
      icon: FiBarChart3,
      title: "Predictive Sales Pipeline Management",
      description: "AI-driven pipeline forecasting: Real-time deal scoring, win probability, and next-best-action recommendations.",
      details: [
        "Automated CRM hygiene: AI updates deal stages, logs activities, and prompts reps for missing info",
        "Visual dashboards for sales leaders to spot bottlenecks and optimize the funnel"
      ],
      value: "Predictable revenue, fewer stalled deals, and less time spent on admin."
    },
    {
      icon: FiFileText,
      title: "Automated Proposal & Contract Generation",
      description: "AI generates tailored, ROI-backed proposals and contracts from discovery call transcripts and CRM data.",
      details: [
        "E-signature integration and automated contract follow-up sequences"
      ],
      value: "Faster deal cycles, less paperwork, and a seamless closing experience."
    },
    {
      icon: FiStar,
      title: "Sales Review & Reputation Automation",
      description: "AI requests reviews and testimonials from closed customers at the optimal moment.",
      details: [
        "Automates review management and showcases positive feedback on landing pages and social proof modules"
      ],
      value: "Builds trust, boosts referrals, and enhances brand reputation."
    },
    {
      icon: FiTrendingUp,
      title: "Sales Analytics & Continuous Optimization",
      description: "Real-time analytics dashboard visualizes all key sales KPIs, from lead response time to close rates and pipeline velocity.",
      details: [
        "AI surfaces actionable insights and recommends workflow/process improvements",
        "Monthly strategy reviews and optimization sprints included"
      ],
      value: "Data-driven decision-making, ongoing improvement, and maximum ROI."
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Inbound Lead Arrives",
      description: "AI Sales Assistant engages instantly via website, phone, or social, qualifies, and books a call."
    },
    {
      step: 2,
      title: "Outbound Campaign Launches",
      description: "AI crafts and sends dynamic messages, adapts follow-ups based on engagement."
    },
    {
      step: 3,
      title: "Sales Call Takes Place",
      description: "AI records, transcribes, and analyzes the call; delivers coaching tips to reps."
    },
    {
      step: 4,
      title: "Deal Progresses in CRM",
      description: "AI updates pipeline, scores deal, and prompts next actions."
    },
    {
      step: 5,
      title: "Proposal Generated",
      description: "AI creates a tailored proposal; e-signature and contract follow-up automated."
    },
    {
      step: 6,
      title: "Deal Closes",
      description: "AI requests reviews and manages testimonials."
    },
    {
      step: 7,
      title: "Analytics Dashboard Updates",
      description: "Sales leaders review performance and optimization recommendations."
    }
  ];

  const featuresTable = [
    {
      feature: "24/7 AI Sales Assistant",
      delivers: "Instant engagement, qualification, and appointment booking"
    },
    {
      feature: "Multichannel Lead Capture",
      delivers: "Website, phone, SMS, email, and social integration"
    },
    {
      feature: "AI Outreach & Follow-Up Automation",
      delivers: "Personalized, dynamic messaging with adaptive sequencing"
    },
    {
      feature: "AI Sales Call Review & Coaching",
      delivers: "Automated analysis, actionable feedback, and script optimization"
    },
    {
      feature: "Predictive Pipeline Management",
      delivers: "Real-time deal scoring, CRM automation, and next-best-action"
    },
    {
      feature: "Automated Proposal & Contract Generation",
      delivers: "Instant, tailored proposals/contracts and e-signature workflows"
    },
    {
      feature: "Review & Reputation Automation",
      delivers: "Automated review requests, management, and social proof"
    },
    {
      feature: "Sales Analytics & Optimization",
      delivers: "Dashboards, actionable insights, and monthly optimization"
    }
  ];

  const whyChooseReasons = [
    "True 24/7 sales coverage: Never miss a lead or appointment—AI works around the clock.",
    "Vertical AI expertise: Sales agents are fine-tuned for food/agri workflows, buyer personas, and compliance needs.",
    "Full-funnel automation: From first touch to closed deal and review request, every step is optimized and automated.",
    "Continuous improvement: Built-in analytics, coaching, and optimization ensure your sales process gets better every month.",
    "Seamless integration: Works with your existing stack—CRM, calendars, communication tools, and more."
  ];

  return (
    <div className="min-h-screen bg-white">
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
          
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiUsers} className="w-10 h-10 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Sales Performance Bundle
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
                Always-On Sales Engine for Food & Agri Teams
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                Automate, optimize, and scale your entire sales process—from first touch to closed deal—with vertical AI agents, 
                real-time analytics, and seamless workflow automation. Perfect for: Food/agri manufacturers, distributors, 
                processors, and B2B sales teams seeking to maximize close rates, shorten cycles, and boost sales productivity.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <span>Book a Free Sales Audit</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </button>
                <button
                  onClick={demoModal.openModal}
                  className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  <SafeIcon icon={FiEye} className="w-5 h-5" />
                  <span>See the Sales Engine in Action</span>
                </button>
                <button
                  onClick={schedulingModal.openModal}
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors underline"
                >
                  Get Started Now
                </button>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
                <p className="text-gray-700 font-medium">
                  Maximize close rates, shorten sales cycles, and boost productivity with AI-powered sales automation
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
              What's Included in the Sales Performance Bundle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seven powerful AI-driven components that automate your entire sales process
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
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <SafeIcon icon={feature.icon} className="w-8 h-8 text-blue-600" />
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
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-blue-600 text-white rounded-xl p-4">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
              See how our AI Sales Performance Bundle works from lead to close
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{step.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">{step.description}</p>
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
              Comprehensive overview of what each component delivers for your sales team
            </p>
          </motion.div>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
            <table className="w-full">
              <thead className="bg-blue-50">
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
              Why Choose the Sales Performance Bundle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for food and agriculture sales teams ready to scale
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
                className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg leading-relaxed">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Boost Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Boost Your Sales Performance?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              See how the AI Sales Performance Bundle can help your team close more deals, faster.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Book a Free Sales Audit</h3>
                <p className="mb-6 opacity-90">
                  See how the AI Sales Performance Bundle can help your team close more deals, faster.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Sales Audit
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Get Started Now</h3>
                <p className="mb-6 opacity-90">
                  Automate your outreach, optimize your pipeline, and scale your sales—no manual admin required.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started Now
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">See the Sales Engine in Action</h3>
                <p className="mb-6 opacity-90">
                  Request a live demo and watch FoodAgri AI's sales automation engine turn leads into loyal customers.
                </p>
                <button
                  onClick={demoModal.openModal}
                  className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  See It In Action
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <p className="text-lg opacity-90 italic">
                All solutions are modular and integrate with your existing tech stack. Upgrade or add bundles as your business grows. 
                Experience the power of always-on, AI-driven sales performance—purpose-built for the food and agri sector.
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

export default SalesPerformancePage;