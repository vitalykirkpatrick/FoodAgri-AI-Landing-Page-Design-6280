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
  FiArrowLeft, FiZap, FiTarget, FiEdit, FiUsers, FiBarChart3, 
  FiSettings, FiCheck, FiArrowRight, FiTrendingUp, FiEye,
  FiLayers, FiCpu, FiGlobe, FiRefreshCw, FiAward, FiStar,
  FiHeadphones, FiDatabase, FiMonitor, FiUserCheck, FiShare2,
  FiPieChart, FiExternalLink
} = FiIcons;

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
      description: "24/7 AI sales assistant and appointment setter with automated, personalized outreach and follow-up capabilities.",
      details: [
        "24/7 AI sales assistant and appointment setter",
        "Automated, personalized outreach and follow-up",
        "AI sales call review, coaching, and script optimization",
        "Predictive pipeline management and CRM automation",
        "Proposal, contract, and review automation"
      ],
      pageLink: "/sales-performance-bundle",
      linkText: "Learn More About Sales Performance →"
    },
    {
      icon: FiEdit,
      title: "AI Marketing Excellence Suite",
      description: "Instantly generate blogs, social posts, ads, and videos tailored to each segment with viral content and trend analysis.",
      details: [
        "Instantly generate blogs, social posts, ads, and videos tailored to each segment",
        "Viral content and trend analysis for competitive edge",
        "Automated campaign scheduling, A/B testing, and cross-channel distribution",
        "Brand voice and compliance management"
      ],
      pageLink: "/marketing-excellence-bundle",
      linkText: "Learn More About Marketing Excellence →"
    },
    {
      icon: FiHeadphones,
      title: "AI Customer Experience & Support Suite",
      description: "24/7 multilingual AI chat, email, and phone support with automated onboarding and comprehensive analytics.",
      details: [
        "24/7 multilingual AI chat, email, and phone support",
        "Automated onboarding, order tracking, and reminders",
        "Knowledge base and FAQ automation",
        "Feedback, sentiment, and loyalty analytics",
        "Multi-channel engagement and personalization"
      ],
      pageLink: "/customer-experience-bundle",
      linkText: "Learn More About Customer Experience →"
    },
    {
      icon: FiUserCheck,
      title: "AI Onboarding & Training Automation Suite",
      description: "Accelerate employee and customer onboarding, automate training, and ensure compliance with always-on AI assistants.",
      details: [
        "24/7 multilingual AI assistants guide new hires or customers through onboarding",
        "Automated training modules, SOPs, and compliance content using AI",
        "Progress tracking, feedback & analytics with real-time dashboards",
        "Automated task assignment & system integration for seamless workflows",
        "Continuous optimization & human-AI collaboration"
      ],
      pageLink: "/onboarding-training-bundle",
      linkText: "Learn More About Onboarding & Training →"
    },
    {
      icon: FiShare2,
      title: "AI Partnership & Channel Enablement Suite",
      description: "Effortlessly onboard, empower, and accelerate your partners, resellers, and distributors with automated enablement.",
      details: [
        "Automated partner onboarding & resource delivery with personalized journeys",
        "Co-branded campaign automation & lead distribution with AI-generated content",
        "Partner performance dashboards & reporting with real-time KPI tracking",
        "Communication, feedback & enablement automation for ongoing engagement"
      ],
      pageLink: "/partnership-channel-bundle",
      linkText: "Learn More About Partnership & Channel →"
    },
    {
      icon: FiPieChart,
      title: "AI Data Intelligence & Analytics Hub",
      description: "Unified dashboards for sales, marketing, support, and operations with predictive analytics and automated reporting.",
      details: [
        "AI-powered data aggregation from CRM, marketing, sales, support systems",
        "Predictive analytics for demand, churn & growth with scenario modeling",
        "Automated, customized reporting for stakeholders with role-based insights",
        "Data visualization dashboards with real-time interactive charts and analytics",
        "AI-driven recommendations for business optimization and next-best actions"
      ],
      pageLink: "/data-intelligence-bundle",
      linkText: "Learn More About Data Intelligence →"
    },
    {
      icon: FiSettings,
      title: "Custom Integrations & Dedicated AI Workflow Builder",
      description: "Seamless integration with your existing tech stack plus no-code AI workflow builder for complete automation.",
      details: [
        "Seamless integration with ERP, CRM, marketing stack, and support tools",
        "No-code AI workflow builder for end-to-end automation of business processes",
        "Automated task assignment, document management, and compliance workflows",
        "Adaptable, scalable, and easy to update as your business evolves"
      ],
      pageLink: null,
      linkText: "Included in All Bundles"
    },
    {
      icon: FiAward,
      title: "Priority Support & Quarterly Strategy Reviews",
      description: "Dedicated onboarding, priority support, and strategic guidance to ensure your success and maximize ROI.",
      details: [
        "Dedicated onboarding and success management",
        "Priority support with rapid response SLAs",
        "Quarterly strategy reviews and optimization sprints to ensure compounding ROI"
      ],
      pageLink: null,
      linkText: "Included in All Bundles"
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Client onboarding",
      description: "AI analyzes your business, market, and goals; sets up integrations and dashboards."
    },
    {
      step: 2,
      title: "Growth engine launches",
      description: "Automated lead generation, outreach, and campaign execution begin immediately."
    },
    {
      step: 3,
      title: "Sales & marketing alignment",
      description: "AI manages pipeline, content, and campaigns in sync; all data flows into unified dashboards."
    },
    {
      step: 4,
      title: "Support & experience automation",
      description: "AI handles customer inquiries, onboarding, and feedback across all channels."
    },
    {
      step: 5,
      title: "Continuous optimization",
      description: "AI workflow builder automates repetitive tasks; quarterly reviews drive ongoing improvement."
    }
  ];

  const featuresTable = [
    {
      feature: "AI Growth Accelerator Engine",
      delivers: "Predictable pipeline, market expansion, and outreach at scale"
    },
    {
      feature: "AI Sales Performance Engine",
      delivers: "Always-on sales, higher close rates, and data-driven coaching"
    },
    {
      feature: "AI Marketing Excellence Suite",
      delivers: "10x content output, omnichannel marketing, and brand control"
    },
    {
      feature: "AI Customer Experience Suite",
      delivers: "24/7 support, faster onboarding, and loyalty automation"
    },
    {
      feature: "AI Onboarding & Training Suite",
      delivers: "Accelerated learning, automated compliance, and reduced HR workload"
    },
    {
      feature: "AI Partnership & Channel Suite",
      delivers: "Automated partner enablement, co-marketing, and performance tracking"
    },
    {
      feature: "Data Intelligence & Analytics Hub",
      delivers: "Unified dashboards, predictive insights, and reporting"
    },
    {
      feature: "Custom Integrations & Workflow Builder",
      delivers: "End-to-end automation, no-code customization, and scalability"
    },
    {
      feature: "Priority Support & Strategy Reviews",
      delivers: "Fast help, proactive guidance, and compounding ROI"
    }
  ];

  const whyChooseReasons = [
    "Turnkey digital transformation: All your growth, sales, marketing, and support tools in one platform.",
    "Unified data, unified action: Break down silos and make smarter decisions with real-time, cross-functional analytics.",
    "Compounding automation ROI: Every workflow gets smarter and more efficient over time.",
    "No-code customization: Adapt and scale automations as your business grows—no technical expertise required.",
    "Expert support: Dedicated onboarding, priority help, and quarterly reviews to ensure your success."
  ];

  const handleLearnMore = (pageLink) => {
    if (pageLink) {
      navigate(pageLink);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50">
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
                Unlock the full power of AI across every business function—growth, sales, marketing, support, and analytics—in one seamless, 
                integrated suite. Drive measurable results, maximize efficiency, and scale faster with a turnkey solution tailored for food & agri brands.
                Perfect for: Food/agri manufacturers, processors, distributors, and B2B brands ready for digital transformation, unified data, and always-on automation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <span>Book a Free Digital Transformation Audit</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </button>
                <button
                  onClick={demoModal.openModal}
                  className="bg-white border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  <SafeIcon icon={FiEye} className="w-5 h-5" />
                  <span>See the All-in-One Suite in Action</span>
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
                  Complete digital transformation with integrated AI automation across all business functions
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
              What's Included in the AI All-in-One Growth Suite?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nine comprehensive AI-driven components that transform every aspect of your business
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
                className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 border border-emerald-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center">
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
                    {feature.pageLink ? (
                      <button
                        onClick={() => handleLearnMore(feature.pageLink)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
                      >
                        <span>{feature.linkText}</span>
                        <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                      </button>
                    ) : (
                      <div className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold">
                        {feature.linkText}
                      </div>
                    )}
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
              See how our AI All-in-One Growth Suite transforms your entire business from onboarding to optimization
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
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
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
              Comprehensive overview of what each component delivers for your complete business transformation
            </p>
          </motion.div>

          <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-emerald-50 to-blue-50">
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
              Why Choose the AI All-in-One Growth Suite?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for food and agriculture brands ready for complete digital transformation
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

      {/* Ready to Transform Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              See how the AI All-in-One Growth Suite can unify, automate, and accelerate every part of your food/agri business.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Book a Free Digital Transformation Audit</h3>
                <p className="mb-6 opacity-90">
                  See how the AI All-in-One Growth Suite can unify, automate, and accelerate every part of your food/agri business.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book Transformation Audit
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Get Started Now</h3>
                <p className="mb-6 opacity-90">
                  Unlock the power of always-on growth, sales, marketing, support, and analytics—no manual work required.
                </p>
                <button
                  onClick={schedulingModal.openModal}
                  className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Get Started Now
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">See the All-in-One Suite in Action</h3>
                <p className="mb-6 opacity-90">
                  Request a live demo and watch FoodAgri AI's automation platform deliver real results for food and agri brands.
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
                Experience the power of fully integrated, AI-driven business automation—purpose-built for the food and agri sector.
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