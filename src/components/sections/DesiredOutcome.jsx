import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTarget, FiSettings, FiHeart } = FiIcons;

const DesiredOutcome = () => {
  const outcomes = [
    {
      icon: FiTarget,
      title: "Self-Filling Pipeline",
      description: "Your sales pipeline fills itself with qualified leads—while your team focuses on closing, not chasing.",
      benefits: [
        "Automated lead discovery and qualification",
        "Personalized outreach at scale",
        "Higher conversion rates with better targeting"
      ]
    },
    {
      icon: FiSettings,
      title: "Automated Operations",
      description: "Your marketing and compliance run like clockwork, with AI generating content, tracking trends, and handling documentation behind the scenes.",
      benefits: [
        "Content generation that resonates",
        "Real-time compliance monitoring",
        "Streamlined audit preparation"
      ]
    },
    {
      icon: FiHeart,
      title: "Delighted Customers",
      description: "Your customers rave about your lightning-fast support and seamless onboarding—freeing you to scale without stress.",
      benefits: [
        "24/7 AI-powered customer support",
        "Automated onboarding workflows",
        "Reduced churn and increased loyalty"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Imagine your business running on{' '}
            <span className="text-emerald-600">autopilot</span>—finally.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Picture this: You wake up to a business that runs itself while you sleep.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                <SafeIcon icon={outcome.icon} className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{outcome.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{outcome.description}</p>
              <ul className="space-y-2">
                {outcome.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Welcome to the new paradigm:
          </h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-90">
            <strong>FoodAgri AI:</strong> The first platform designed for food and agriculture businesses to automate, 
            unify, and personalize every workflow—from lead gen to compliance—using the power of vertical AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DesiredOutcome;