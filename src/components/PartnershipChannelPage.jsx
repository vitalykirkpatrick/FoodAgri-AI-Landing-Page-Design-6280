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
  FiSettings, FiCheck, FiArrowRight, FiShare2, FiTrendingUp,
  FiEye, FiUserPlus, FiGlobe, FiRefreshCw, FiAward, FiMessageCircle
} = FiIcons;

const PartnershipChannelPage = () => {
  const navigate = useNavigate();
  const schedulingModal = useModal();
  const demoModal = useModal();

  const bundleFeatures = [
    {
      icon: FiUserPlus,
      title: "Automated Partner Onboarding & Resource Delivery",
      description: "AI-driven partner recruitment: Identify, segment, and onboard the right partners using data-driven criteria.",
      details: [
        "Personalized onboarding journeys with step-by-step guidance, documentation, and training modules tailored to each partner type",
        "Centralized partner portal for instant access to sales/marketing assets, training, and compliance resources"
      ],
      value: "Reduce onboarding time by 70%, ensure every partner is productive from day one, and deliver a consistent, branded experience."
    },
    {
      icon: FiShare2,
      title: "Co-Branded Campaign Automation & Lead Distribution",
      description: "Launch co-branded campaigns with partners using AI-generated content, creative, and campaign templates.",
      details: [
        "Automate lead assignment and sharing based on partner profile, geography, or product fit",
        "Track campaign engagement, lead status, and conversion metrics in real time"
      ],
      value: "Drive more pipeline through partners, increase engagement, and ensure leads are followed up quickly and accurately."
    },
    {
      icon: FiBarChart3,
      title: "Partner Performance Dashboards & Reporting",
      description: "Real-time dashboards for both internal teams and partners, tracking KPIs like leads submitted, revenue influenced, training progress, and campaign performance.",
      details: [
        "AI-driven partner scoring: Identify your top performers, 'sleeping giants,' and at-risk partners using engagement and outcome data",
        "Automated leaderboards and gamification to boost motivation and accountability"
      ],
      value: "Data-driven partner management, transparent attribution, and smarter resource allocation for maximum channel ROI."
    },
    {
      icon: FiMessageCircle,
      title: "Communication, Feedback & Enablement Automation",
      description: "Automated updates, reminders, and feedback requests to keep partners engaged and informed.",
      details: [
        "AI-powered content recommendations and enablement resources based on partner performance and needs",
        "Seamless integration with CRM, marketing automation, and payout systems for unified partner operations"
      ],
      value: "Reduce manual admin, increase partner satisfaction, and keep your ecosystem aligned and motivated."
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Partner recruitment",
      description: "AI identifies and segments potential partners, initiates personalized outreach and onboarding."
    },
    {
      step: 2,
      title: "Onboarding & enablement",
      description: "Partners complete guided onboarding, access resources, and receive tailored training modules."
    },
    {
      step: 3,
      title: "Co-marketing & lead distribution",
      description: "Launch joint campaigns; AI assigns leads and tracks engagement and conversion."
    },
    {
      step: 4,
      title: "Performance tracking",
      description: "Partners and internal teams view real-time dashboards; AI surfaces insights and recommendations."
    },
    {
      step: 5,
      title: "Ongoing communication & optimization",
      description: "Automated updates, feedback, and enablement resources keep partners engaged and improving."
    }
  ];

  const featuresTable = [
    {
      feature: "Automated Partner Onboarding",
      delivers: "Fast, personalized onboarding and resource delivery"
    },
    {
      feature: "Co-Branded Campaign Automation",
      delivers: "Joint campaign launches, creative, and lead sharing"
    },
    {
      feature: "Lead Distribution & Attribution",
      delivers: "Automated, rules-based lead assignment and transparent credit"
    },
    {
      feature: "Partner Performance Dashboards",
      delivers: "Real-time KPIs, scoring, and gamification"
    },
    {
      feature: "Communication & Feedback Automation",
      delivers: "Automated updates, reminders, and enablement content"
    },
    {
      feature: "CRM & Marketing Integration",
      delivers: "Unified data, seamless workflows, and payout automation"
    }
  ];

  const whyChooseReasons = [
    "Faster, smarter partner onboarding: AI automates recruitment, segmentation, and enablement for rapid productivity.",
    "Co-marketing at scale: Launch more campaigns with less effort and drive higher pipeline through your channel.",
    "Data-driven partner management: Real-time dashboards, scoring, and attribution ensure you invest where it counts.",
    "Seamless integration: Works with your CRM, marketing automation, and payout systems for unified operations.",
    "Always-on engagement: Automated communication and enablement keep partners motivated and aligned."
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50">
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
                <SafeIcon icon={FiUsers} className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Partnership & Channel Enablement Bundle
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-6">
                Scale Your Partner Ecosystem with AI-Powered Enablement
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                Effortlessly onboard, empower, and accelerate your partners, resellers, and distributors with automated onboarding, 
                co-marketing, lead sharing, and real-time performance dashboards—purpose-built for food & agri B2B growth. 
                Perfect for: Food/agri manufacturers, processors, and B2B brands expanding through channel sales, partnerships, and alliances.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <span>Book a Free Partner Audit</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </button>
                <button
                  onClick={demoModal.openModal}
                  className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  <SafeIcon icon={FiEye} className="w-5 h-5" />
                  <span>See the Partner Suite in Action</span>
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
                  Transform your partner ecosystem with intelligent automation that drives channel growth and partnership success
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
              What's Included in the AI Partnership & Channel Enablement Bundle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four powerful AI-driven components that automate your entire partner ecosystem
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
                className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300"
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
              See how our AI Partnership & Channel Enablement Bundle works from recruitment to optimization
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
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">{step.title}</h3>
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
              Comprehensive overview of what each component delivers for your partner ecosystem
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose the AI Partnership & Channel Enablement Bundle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for food and agriculture brands ready to scale through partnerships
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

      {/* Ready to Scale Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Scale Your Partner Ecosystem?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              See how the AI Partnership & Channel Enablement Bundle can help you recruit, onboard, and empower high-performing partners.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Book a Free Partner Audit</h3>
                <p className="mb-6 opacity-90">
                  See how the AI Partnership & Channel Enablement Bundle can help you recruit, onboard, and empower high-performing partners.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Partner Audit
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Get Started Now</h3>
                <p className="mb-6 opacity-90">
                  Automate onboarding, launch co-branded campaigns, and drive more revenue through your channel—no manual admin required.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-green-500 hover:bg-green-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started Now
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">See the Partner Suite in Action</h3>
                <p className="mb-6 opacity-90">
                  Request a live demo and watch FoodAgri AI's partner automation suite deliver real results for food and agri brands.
                </p>
                <button
                  onClick={demoModal.openModal}
                  className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  See It In Action
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <p className="text-lg opacity-90 italic">
                All solutions are modular and integrate with your existing tech stack. Upgrade or add bundles as your business grows. 
                Experience the power of always-on, AI-driven partner and channel enablement—purpose-built for the food and agri sector.
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

export default PartnershipChannelPage;