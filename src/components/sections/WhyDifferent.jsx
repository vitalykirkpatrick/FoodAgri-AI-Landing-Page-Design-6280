import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTarget, FiZap, FiShield, FiTrendingUp, FiUsers, FiCpu } = FiIcons;

const WhyDifferent = () => {
  const differentiators = [
    {
      icon: FiTarget,
      title: "Food & Agriculture Focused",
      description: "Unlike generic sales tools, we're built specifically for your industry's unique challenges.",
      details: "Deep understanding of food industry sales cycles, buyer personas, and market dynamics."
    },
    {
      icon: FiZap,
      title: "Plug-and-Play Setup",
      description: "No technical expertise required. Get started in minutes, not months.",
      details: "Pre-configured sales workflows, industry templates, and seamless CRM integrations."
    },
    {
      icon: FiShield,
      title: "Compliance-Aware Approach",
      description: "Built with food industry regulations in mind, ensuring your outreach stays compliant.",
      details: "Understanding of FDA, USDA, and industry-specific communication requirements."
    },
    {
      icon: FiTrendingUp,
      title: "Proven ROI",
      description: "Our clients see average 300% ROI within 6 months through increased lead conversion and sales efficiency.",
      details: "Measurable improvements in appointment rates, lead quality, and sales cycle acceleration."
    },
    {
      icon: FiUsers,
      title: "Industry Expertise",
      description: "Founded by food industry veterans who understand your sales challenges firsthand.",
      details: "20+ years combined experience in food industry sales, marketing, and business development."
    },
    {
      icon: FiCpu,
      title: "Advanced AI Technology",
      description: "Cutting-edge AI models trained specifically on food and agriculture sales data.",
      details: "Machine learning algorithms optimized for food industry lead scoring, personalization, and conversion."
    }
  ];

  return (
    <section id="why-different" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-emerald-400">FoodAgri AI</span> is Different
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're not just another sales automation platform. We're your industry-specific growth partner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
                <SafeIcon icon={item.icon} className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
              <p className="text-sm text-gray-400">{item.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            FoodAgri AI vs. Generic Sales Tools
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-6 text-gray-300">Feature</th>
                  <th className="text-center py-4 px-6 text-emerald-400 font-bold">FoodAgri AI</th>
                  <th className="text-center py-4 px-6 text-gray-400">Generic Tools</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Industry-Specific AI', '✓ Trained on F&A sales data', '✗ Generic algorithms'],
                  ['Food Industry Templates', '✓ Pre-built campaigns', '✗ Start from scratch'],
                  ['Setup Time', '✓ Minutes', '✗ Weeks/Months'],
                  ['Compliance Awareness', '✓ Built-in guidelines', '✗ Manual compliance'],
                  ['Lead Quality', '✓ Industry-qualified leads', '✗ Generic prospects'],
                  ['Expert Support', '✓ Food industry veterans', '✗ Generic support']
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="py-4 px-6 text-gray-300">{row[0]}</td>
                    <td className="py-4 px-6 text-center text-emerald-400">{row[1]}</td>
                    <td className="py-4 px-6 text-center text-gray-400">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDifferent;