import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTarget, FiTrendingUp, FiUsers, FiSettings, FiBarChart, FiShield, FiZap, FiHeart } = FiIcons;

const WorkingTogether = () => {
  const workingSteps = [
    {
      icon: FiTarget,
      title: "Generate 10-20+ Qualified Opportunities Monthly",
      description: "Set up automated systems that deliver qualified prospects to your calendar without any manual effort from your sales team."
    },
    {
      icon: FiZap,
      title: "Close 5, 6 and 7 Figure Deals Remotely",
      description: "Master phone and Zoom selling techniques that convert high-value prospects into customers consistently."
    },
    {
      icon: FiUsers,
      title: "Nail Your Messaging for Maximum Impact",
      description: "Craft compelling messaging that makes your ideal customers unable to ignore your outreach and proposals."
    },
    {
      icon: FiSettings,
      title: "Get Back 2-3 Hours Daily with Automation",
      description: "Implement proven sales automation that handles repetitive tasks while you focus on closing deals."
    },
    {
      icon: FiBarChart,
      title: "Dominate Your Best Sales Channels",
      description: "Identify and optimize the highest-converting channels for your specific offer and market segment."
    },
    {
      icon: FiShield,
      title: "Ensure Nothing Falls Through the Cracks",
      description: "Create systems that track every opportunity and prevent deals from going dark or getting lost in your pipeline."
    }
  ];

  const clientResults = [
    {
      icon: FiTarget,
      title: "A Reliable Sales Process",
      description: "Get a proven system that generates leads and new customers predictably, month after month.",
      metric: "10-20+ qualified opportunities monthly"
    },
    {
      icon: FiUsers,
      title: "Scripts, Tools & Systems",
      description: "Receive battle-tested scripts, tools and systems that create repeatable sales outcomes for your team.",
      metric: "Proven conversion frameworks"
    },
    {
      icon: FiTrendingUp,
      title: "Growing Pipeline of High-Probability Deals",
      description: "Build a pipeline filled with qualified, high-probability deals that are ready to close.",
      metric: "5-7 figure deal flow"
    },
    {
      icon: FiZap,
      title: "A Machine That Books Warm Calls",
      description: "Get a funnel system that fills your calendar on-demand with ideal customers who want to buy.",
      metric: "Calendar filled weekly"
    },
    {
      icon: FiShield,
      title: "Absolute Clarity on Your Best Customers",
      description: "Identify exactly who you can deliver the most value to at the highest price point.",
      metric: "Maximum value delivery"
    },
    {
      icon: FiHeart,
      title: "The Confidence to Scale",
      description: "Most importantly, get the confidence that you can scale your business predictably and profitably.",
      metric: "Scalable growth system"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Working Together Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partner with FoodAgri AI, and I'll Show You How To:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your food business with proven strategies that deliver measurable results in 90 days or less.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {workingSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <SafeIcon icon={step.icon} className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Client Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            After Our Partnership, Clients Get:
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's what you'll have in place after working together - the systems and confidence to scale your business predictably.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {clientResults.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-indigo-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <SafeIcon icon={result.icon} className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{result.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{result.description}</p>
                  <div className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                    {result.metric}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <blockquote className="text-2xl md:text-3xl font-bold mb-4">
              "Here's the thing – scaling sales for a B2B business doesn't have to be hard."
            </blockquote>
            <p className="text-xl opacity-90 mb-6">
              It's a process and it's what we do. Let's build your sales machine together.
            </p>
            <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Schedule Your Free Strategy Session
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkingTogether;