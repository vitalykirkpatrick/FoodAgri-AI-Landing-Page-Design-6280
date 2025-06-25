import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiSearch, FiTrendingDown, FiFileText } = FiIcons;

const PainPoints = () => {
  const painPoints = [
    {
      icon: FiSearch,
      title: "Lead Generation Nightmare",
      quote: "We spend hours every week just trying to find the right contacts in food manufacturing.",
      description: "Manual prospecting eats up your team's valuable time that should be spent closing deals."
    },
    {
      icon: FiTrendingDown,
      title: "Sales & Marketing Chaos",
      quote: "Our sales and marketing teams aren't aligned. We're chasing unqualified leads while missing real opportunities.",
      description: "Disconnected sales and marketing efforts create inefficiency and wasted resources in the food industry."
    },
    {
      icon: FiFileText,
      title: "Compliance Headaches",
      quote: "It's a nightmare trying to keep up with all the food safety documentation—we spend hours every month just preparing for audits.",
      description: "Manual compliance tracking creates stress and risk that keeps you up at night."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Still stuck in spreadsheets, endless emails, and{' '}
            <span className="text-red-600">missed opportunities?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You're not alone. Here's what food and agriculture business owners tell us every day:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <SafeIcon icon={pain.icon} className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{pain.title}</h3>
              <blockquote className="text-gray-700 italic mb-4 text-lg leading-relaxed border-l-4 border-red-200 pl-4">
                "{pain.quote}"
              </blockquote>
              <p className="text-gray-600">{pain.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Here's the truth:
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            You don't need another generic software or a bigger team. The real problem? Your tools aren't built 
            for the unique chaos of food and agriculture—so you're always fighting fires instead of fixing the root cause.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;