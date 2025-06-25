import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTarget, FiEdit3, FiShield, FiHeadphones, FiTrendingUp, FiUsers } = FiIcons;

const OurServices = () => {
  const services = [
    {
      icon: FiTarget,
      title: "AI-Powered Lead Generation",
      description: "Automated prospecting and outreach that fills your pipeline with qualified leads.",
      features: [
        "Smart contact discovery across food & agriculture networks",
        "Personalized outreach campaigns at scale",
        "Lead scoring and qualification automation",
        "CRM integration and pipeline management"
      ],
      price: "Starting at $299/month"
    },
    {
      icon: FiEdit3,
      title: "Content & Marketing Automation",
      description: "AI-generated content that resonates with your audience and drives engagement.",
      features: [
        "Industry-specific content generation",
        "Social media automation",
        "Email marketing campaigns",
        "Blog posts and thought leadership content"
      ],
      price: "Starting at $199/month"
    },
    {
      icon: FiShield,
      title: "Compliance Management Suite",
      description: "Stay audit-ready with automated documentation and traceability systems.",
      features: [
        "Automated compliance documentation",
        "Real-time audit trail tracking",
        "Regulatory update monitoring",
        "Custom compliance workflows"
      ],
      price: "Starting at $399/month"
    },
    {
      icon: FiHeadphones,
      title: "AI Customer Support",
      description: "24/7 intelligent customer support that delights your customers and reduces churn.",
      features: [
        "Intelligent chatbot with industry knowledge",
        "Automated ticket routing and resolution",
        "Customer onboarding automation",
        "Satisfaction tracking and analytics"
      ],
      price: "Starting at $149/month"
    },
    {
      icon: FiTrendingUp,
      title: "Business Intelligence & Analytics",
      description: "Real-time dashboards and insights that drive strategic decision-making.",
      features: [
        "Custom dashboard creation",
        "Predictive analytics and forecasting",
        "Performance tracking and KPI monitoring",
        "Automated reporting and alerts"
      ],
      price: "Starting at $249/month"
    },
    {
      icon: FiUsers,
      title: "All-in-One Enterprise Package",
      description: "Complete automation suite with dedicated support and custom integrations.",
      features: [
        "All services included",
        "Dedicated account manager",
        "Custom integrations and workflows",
        "Priority support and training"
      ],
      price: "Custom pricing - Contact us",
      isPopular: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect solution for your business needs, or go all-in with our comprehensive enterprise package.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                service.isPopular ? 'border-emerald-400' : 'border-gray-100'
              }`}
            >
              {service.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <SafeIcon icon={service.icon} className="w-8 h-8 text-emerald-600" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="text-2xl font-bold text-emerald-600 mb-4">{service.price}</div>
                <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  service.isPopular 
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  {service.price.includes('Contact') ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-emerald-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Not sure which service is right for you?
            </h3>
            <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation and we'll help you choose the perfect solution for your business needs.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Schedule Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;