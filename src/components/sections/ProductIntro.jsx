import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import DemoForm from '../DemoForm';

const { FiDatabase, FiZap, FiTrendingUp, FiArrowRight } = FiIcons;

const ProductIntro = () => {
  const [showForm, setShowForm] = useState(false);

  const steps = [
    {
      icon: FiDatabase,
      title: "Connect Your Data",
      description: "Connect your data and workflows (no IT headaches—just plug and play).",
      details: "Seamlessly integrate with your existing systems in minutes, not months."
    },
    {
      icon: FiZap,
      title: "Let AI Automate",
      description: "Let FoodAgri AI automate your lead gen, content, compliance, and support.",
      details: "Our AI learns your business and handles the heavy lifting automatically."
    },
    {
      icon: FiTrendingUp,
      title: "Watch Your Business Grow",
      description: "Watch your business grow—while you focus on what matters most.",
      details: "Scale with confidence knowing your operations are optimized and efficient."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-emerald-600">FoodAgri AI:</span> The All-in-One AI Automation Platform for Food & Agriculture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business in three simple steps—no technical expertise required.
          </p>
        </motion.div>

        {/* 3-Step Process */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                {index + 1}
              </div>
              
              {/* Card */}
              <div className="bg-gray-50 rounded-2xl p-8 h-full border-2 border-transparent hover:border-emerald-200 transition-all duration-300">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <SafeIcon icon={step.icon} className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                <p className="text-sm text-gray-600">{step.details}</p>
              </div>

              {/* Arrow (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                  <SafeIcon icon={FiArrowRight} className="w-6 h-6 text-emerald-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Founder Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-emerald-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">F</span>
            </div>
            <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed italic">
              "As a former food industry operator, I know the pain of juggling compliance, sales, and customer support 
              with outdated tools. That's why we built FoodAgri AI—to give you an unfair advantage, using the best of AI, 
              with zero complexity."
            </blockquote>
            <p className="text-emerald-400 font-semibold">— Founder, FoodAgri AI</p>
          </div>
        </motion.div>

        {/* Final CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to reclaim your time, boost your margins, and finally scale with confidence?
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join hundreds of food and agriculture businesses already transforming their operations with FoodAgri AI.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
            <button 
              onClick={() => setShowForm(true)}
              className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Get Your Free Demo Now</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <p className="text-sm text-gray-600">
            No credit card required • Free demo • Setup in minutes
          </p>
        </motion.div>
      </div>

      {/* Demo Form Modal */}
      {showForm && <DemoForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default ProductIntro;