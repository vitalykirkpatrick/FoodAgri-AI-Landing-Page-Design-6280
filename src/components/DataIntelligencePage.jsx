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
  FiArrowLeft, FiDatabase, FiTarget, FiZap, FiBarChart3, 
  FiSettings, FiCheck, FiArrowRight, FiTrendingUp, FiEye,
  FiPieChart, FiActivity, FiBrain, FiLayers, FiMonitor, FiRefreshCw
} = FiIcons;

const DataIntelligencePage = () => {
  const navigate = useNavigate();
  const schedulingModal = useModal();
  const demoModal = useModal();

  const bundleFeatures = [
    {
      icon: FiDatabase,
      title: "AI-Powered Data Aggregation",
      description: "Seamlessly connect and unify data from CRM, marketing, sales, support, supply chain, and other business systems.",
      details: [
        "Automated data cleaning and normalization ensures consistency and reliability",
        "Integrate with cloud and on-premise sources—no manual data wrangling required"
      ],
      value: "One source of truth for all your business data, instantly accessible and always up to date."
    },
    {
      icon: FiTrendingUp,
      title: "Predictive Analytics for Demand, Churn & Growth",
      description: "Use advanced AI models to forecast demand, identify churn risk, and spot growth opportunities.",
      details: [
        "Scenario modeling and \"what if\" analysis for strategic planning",
        "Automated anomaly detection and trend alerts for proactive management"
      ],
      value: "See what's coming next—so you can act before your competitors do."
    },
    {
      icon: FiBarChart3,
      title: "Automated, Customized Reporting for Stakeholders",
      description: "Generate tailored, role-based reports for executives, managers, and teams.",
      details: [
        "Schedule automated delivery of insights and dashboards to stakeholders' inboxes",
        "Drill-down and interactive reporting for deep dives into any metric or KPI"
      ],
      value: "Empower every stakeholder with the right data, at the right time, in the right format."
    },
    {
      icon: FiMonitor,
      title: "Data Visualization Dashboards",
      description: "Real-time dashboards for marketing, sales, operations, and executive leadership.",
      details: [
        "Interactive charts, maps, and tables with drill-down, filtering, and storytelling capabilities",
        "Role-based access and security controls to protect sensitive information"
      ],
      value: "Instantly spot trends, outliers, and opportunities—no more spreadsheet chaos or outdated reports."
    },
    {
      icon: FiBrain,
      title: "AI-Driven Recommendations for Business Optimization",
      description: "Context-aware suggestions for improving sales, marketing, operations, and customer experience.",
      details: [
        "Automated alerts for critical changes in KPIs or emerging risks",
        "Continuous learning: AI refines recommendations as your data and business evolve"
      ],
      value: "Move from \"what happened?\" to \"what should we do next?\"—and let AI guide your next steps."
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Connect data sources",
      description: "AI ingests and unifies data from CRM, marketing, sales, support, and supply chain systems."
    },
    {
      step: 2,
      title: "Data cleaning & normalization",
      description: "Automated processes ensure data quality and consistency."
    },
    {
      step: 3,
      title: "Dashboard & reporting setup",
      description: "Custom dashboards and reports are configured for each team and executive."
    },
    {
      step: 4,
      title: "Predictive analytics & alerts",
      description: "AI forecasts demand, flags churn risk, and sends real-time alerts on key trends."
    },
    {
      step: 5,
      title: "Actionable recommendations",
      description: "AI surfaces optimization opportunities and next-best actions for decision makers."
    }
  ];

  const featuresTable = [
    {
      feature: "AI-Powered Data Aggregation",
      delivers: "Unified, real-time data from all business systems"
    },
    {
      feature: "Predictive Analytics",
      delivers: "Demand, churn, and growth forecasting"
    },
    {
      feature: "Automated, Customized Reporting",
      delivers: "Role-based, interactive, and scheduled insights for stakeholders"
    },
    {
      feature: "Data Visualization Dashboards",
      delivers: "Real-time, interactive dashboards for every business function"
    },
    {
      feature: "AI-Driven Recommendations",
      delivers: "Actionable insights and next-best actions for optimization"
    },
    {
      feature: "Security & Role-Based Controls",
      delivers: "Protect sensitive data with granular access management"
    }
  ];

  const whyChooseReasons = [
    "Eliminate data silos: All your business data, unified and accessible in real time.",
    "See around corners: Predict demand, identify risks, and seize opportunities before others do.",
    "Empower every team: Custom dashboards and reports for every function and stakeholder.",
    "Data-driven culture: Move from gut feel to insight-driven decisions at every level.",
    "Seamless SaaS delivery: Cloud-based, scalable, and integrates with your existing stack."
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 mb-8 transition-colors"
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
              <div className="w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiPieChart} className="w-10 h-10 text-indigo-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Data Intelligence & Insights Bundle
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-6">
                Turn Data Into Decisions—AI-Powered Insights for Food & Agri
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                Aggregate, analyze, and visualize your business data in real time. Unlock predictive analytics, custom dashboards, 
                and actionable recommendations—purpose-built for food/agri brands seeking clarity and competitive advantage. 
                Perfect for: Food/agri manufacturers, processors, distributors, and B2B leaders who want to eliminate data silos, 
                forecast with confidence, and drive smarter decisions at every level.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <span>Book a Free Data Audit</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </button>
                <button
                  onClick={demoModal.openModal}
                  className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  <SafeIcon icon={FiEye} className="w-5 h-5" />
                  <span>See the Insights Suite in Action</span>
                </button>
                <button
                  onClick={schedulingModal.openModal}
                  className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors underline"
                >
                  Get Started Now
                </button>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-indigo-100">
                <p className="text-gray-700 font-medium">
                  Transform your decision-making with intelligent data analytics that turn information into competitive advantage
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
              What's Included in the AI Data Intelligence & Insights Bundle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five powerful AI-driven components that transform your data into actionable insights
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
                className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center">
                      <SafeIcon icon={feature.icon} className="w-8 h-8 text-indigo-600" />
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
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-indigo-600 text-white rounded-xl p-4">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
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
              See how our AI Data Intelligence & Insights Bundle transforms raw data into actionable intelligence
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
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
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
              Comprehensive overview of what each component delivers for your data intelligence needs
            </p>
          </motion.div>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
            <table className="w-full">
              <thead className="bg-indigo-50">
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
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose the AI Data Intelligence & Insights Bundle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for food and agriculture brands ready to harness the power of their data
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
                className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg leading-relaxed">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Unlock Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Unlock the Power of Your Data?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Discover how the AI Data Intelligence & Insights Bundle can transform your food/agri business with actionable analytics.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Book a Free Data Audit</h3>
                <p className="mb-6 opacity-90">
                  Discover how the AI Data Intelligence & Insights Bundle can transform your food/agri business with actionable analytics.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Data Audit
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Get Started Now</h3>
                <p className="mb-6 opacity-90">
                  Unify your data, forecast with confidence, and make smarter decisions—no data science team required.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started Now
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">See the Insights Suite in Action</h3>
                <p className="mb-6 opacity-90">
                  Request a live demo and watch FoodAgri AI's analytics platform deliver real results for food and agri brands.
                </p>
                <button
                  onClick={demoModal.openModal}
                  className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  See It In Action
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <p className="text-lg opacity-90 italic">
                All solutions are modular and integrate with your existing tech stack. Upgrade or add bundles as your business grows. 
                Experience the power of always-on, AI-driven data intelligence—purpose-built for the food and agri sector.
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

export default DataIntelligencePage;