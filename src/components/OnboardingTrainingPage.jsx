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
  FiSettings, FiCheck, FiArrowRight, FiBook, FiMonitor,
  FiEye, FiAward, FiClock, FiRefreshCw, FiUserCheck, FiFileText
} = FiIcons;

const OnboardingTrainingPage = () => {
  const navigate = useNavigate();
  const schedulingModal = useModal();
  const demoModal = useModal();

  const bundleFeatures = [
    {
      icon: FiUsers,
      title: "AI Chatbots & Virtual Onboarding Assistants",
      description: "24/7 multilingual AI assistants guide new hires or customers through onboarding, answer FAQs, and automate repetitive HR/admin tasks.",
      details: [
        "Personalized onboarding journeys with real-time support, reminders, and adaptive guidance based on user role and progress",
        "Seamless integration with HR, CRM, and helpdesk systems for context-aware assistance"
      ],
      value: "Accelerate onboarding, reduce HR workload by up to 80%, and ensure every user gets a consistent, engaging experience."
    },
    {
      icon: FiBook,
      title: "Automated Training Modules & Knowledge Base Creation",
      description: "Instantly generate, update, and deliver interactive training modules, SOPs, and compliance content using AI.",
      details: [
        "Adaptive learning paths: AI personalizes training content and quizzes based on user profile, skill gaps, and engagement",
        "Centralized knowledge base and dynamic FAQs, accessible anytime across devices"
      ],
      value: "Faster ramp-up, higher knowledge retention, and training that evolves with your business and regulatory needs."
    },
    {
      icon: FiBarChart3,
      title: "Progress Tracking, Feedback & Analytics",
      description: "Real-time dashboards track onboarding/training completion, engagement, and knowledge gaps for each user or team.",
      details: [
        "Automated feedback collection, sentiment analysis, and skill assessments",
        "Actionable insights and alerts for HR, managers, or customer success teams to intervene early and optimize outcomes"
      ],
      value: "Data-driven onboarding and training, improved retention, and continuous program improvement."
    },
    {
      icon: FiSettings,
      title: "Automated Task Assignment & System Integration",
      description: "AI automates IT setup, document management, equipment delivery, and task assignment—no manual follow-up required.",
      details: [
        "E-signature workflows, auto-filled forms, and cloud document storage for compliance and audit-readiness",
        "Integration with HRIS, payroll, Slack, Gmail, and other business systems for seamless onboarding flows"
      ],
      value: "Eliminate paperwork delays, reduce errors, and get new hires or customers productive from day one."
    },
    {
      icon: FiRefreshCw,
      title: "Continuous Optimization & Human-AI Collaboration",
      description: "AI surfaces process improvement opportunities and automates updates to training content and onboarding flows.",
      details: [
        "HR, L&D, or customer success teams focus on high-value coaching and engagement, not repetitive admin",
        "Monthly reviews and optimization sprints included"
      ],
      value: "Ongoing improvement, scalable onboarding, and a system that adapts as your business grows."
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Onboarding triggered by new hire/customer",
      description: "AI assistant launches personalized onboarding journey, sends welcome kit, and assigns tasks."
    },
    {
      step: 2,
      title: "Automated training & knowledge delivery",
      description: "AI delivers interactive modules, quizzes, and FAQ support based on user role and progress."
    },
    {
      step: 3,
      title: "Task automation",
      description: "IT setup, document collection, and compliance forms handled automatically."
    },
    {
      step: 4,
      title: "Progress tracking & feedback",
      description: "Dashboards update in real time; AI collects feedback and flags areas for improvement."
    },
    {
      step: 5,
      title: "Continuous optimization",
      description: "AI refines content and workflows; monthly reviews ensure best-in-class onboarding."
    }
  ];

  const featuresTable = [
    {
      feature: "AI Chatbots & Virtual Assistants",
      delivers: "24/7 onboarding, real-time support, and FAQ automation"
    },
    {
      feature: "Automated Training Modules",
      delivers: "Adaptive, interactive learning paths and compliance content"
    },
    {
      feature: "Knowledge Base & Dynamic FAQs",
      delivers: "Centralized, always-updated support resources"
    },
    {
      feature: "Progress Tracking & Analytics",
      delivers: "Real-time dashboards, skill gap analysis, and feedback"
    },
    {
      feature: "Automated Task Assignment & Integration",
      delivers: "IT setup, document workflow, and system sync"
    },
    {
      feature: "Continuous Optimization",
      delivers: "Ongoing improvement and human-AI collaboration"
    }
  ];

  const whyChooseReasons = [
    "Faster, consistent onboarding: Reduce time-to-productivity and ensure every user gets a world-class experience.",
    "Personalized learning at scale: Adaptive content and support for every role, language, and learning style.",
    "Zero manual admin: Automate repetitive HR and training tasks—freeing your team for strategic work.",
    "Data-driven improvement: Real-time insights and feedback to optimize onboarding and training outcomes.",
    "Seamless integration: Works with your HR, CRM, and business stack."
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
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
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiUserCheck} className="w-10 h-10 text-purple-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Onboarding & Training Automation Bundle
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6">
                Seamless Onboarding & Training—Automated by AI
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
                Accelerate employee and customer onboarding, automate training, and ensure compliance with always-on AI assistants, 
                adaptive learning modules, and real-time progress analytics—purpose-built for food & agri teams. Perfect for: 
                Food/agri manufacturers, processors, distributors, and B2B brands needing to streamline onboarding, 
                improve learning outcomes, and reduce manual HR/training workload.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <span>Book a Free Onboarding Audit</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </button>
                <button
                  onClick={demoModal.openModal}
                  className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  <SafeIcon icon={FiEye} className="w-5 h-5" />
                  <span>See the Training Suite in Action</span>
                </button>
                <button
                  onClick={schedulingModal.openModal}
                  className="text-purple-600 hover:text-purple-700 font-semibold transition-colors underline"
                >
                  Get Started Now
                </button>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100">
                <p className="text-gray-700 font-medium">
                  Transform onboarding and training with intelligent automation that accelerates learning and reduces manual HR workload
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
              What's Included in the AI Onboarding & Training Automation Bundle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Five powerful AI-driven components that automate your entire onboarding and training process
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
                className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 border border-purple-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <SafeIcon icon={feature.icon} className="w-8 h-8 text-purple-600" />
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
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-purple-600 text-white rounded-xl p-4">
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
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
              See how our AI Onboarding & Training Automation Bundle works from start to finish
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
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
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
              Comprehensive overview of what each component delivers for your HR and training teams
            </p>
          </motion.div>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
            <table className="w-full">
              <thead className="bg-purple-50">
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
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose the AI Onboarding & Training Automation Bundle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for food and agriculture brands ready to streamline learning and development
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
                className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <SafeIcon icon={FiCheck} className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg leading-relaxed">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Automate Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Automate Your Onboarding & Training?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              See how the AI Onboarding & Training Automation Bundle can transform your team's ramp-up and learning.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Book a Free Onboarding Audit</h3>
                <p className="mb-6 opacity-90">
                  See how the AI Onboarding & Training Automation Bundle can transform your team's ramp-up and learning.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Onboarding Audit
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Get Started Now</h3>
                <p className="mb-6 opacity-90">
                  Accelerate onboarding, automate training, and free your team from manual work—no technical expertise required.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started Now
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">See the Training Suite in Action</h3>
                <p className="mb-6 opacity-90">
                  Request a live demo and watch FoodAgri AI's onboarding automation deliver real results for food and agri brands.
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
                Experience the power of always-on, AI-driven onboarding and training—purpose-built for the food and agri sector.
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

export default OnboardingTrainingPage;