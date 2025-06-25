import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiArrowRight, FiTrendingUp, FiUsers, FiShield, FiBarChart3, FiHeadphones, FiTarget } = FiIcons;

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-2xl font-bold text-emerald-600 mb-2">FoodAgri AI</h1>
            <p className="text-sm text-gray-600 uppercase tracking-wider">AI-Powered Sales & Marketing Platform</p>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Manual lead generation and disconnected sales processes are{' '}
            <span className="text-red-600">killing your margins</span>—and your sanity.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-5xl mx-auto leading-relaxed"
          >
            For food and agriculture businesses overwhelmed by inefficient sales processes, compliance headaches, 
            and slow growth, FoodAgri AI automates your lead generation, fills your pipeline, and keeps you 
            audit-ready—without the tech headaches or generic tools that never fit your needs.
          </motion.p>

          {/* Bullet Points - 6 items focused on core services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto"
          >
            {[
              {
                icon: FiTrendingUp,
                text: "10x your lead generation with AI-powered B2B prospecting and appointment setting—no more wasted hours on manual research."
              },
              {
                icon: FiUsers,
                text: "Scale your outreach with personalized cold email and LinkedIn campaigns that actually convert prospects to customers."
              },
              {
                icon: FiTarget,
                text: "Leverage account-based marketing strategies to target high-value prospects in the food and agriculture industry."
              },
              {
                icon: FiBarChart3,
                text: "Get comprehensive market research and competitor analysis to position your offerings strategically."
              },
              {
                icon: FiHeadphones,
                text: "Access dedicated SDR services and sales enablement tools to accelerate your revenue growth."
              },
              {
                icon: FiShield,
                text: "Maintain compliance documentation and audit readiness while focusing on what matters most—growing your business."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <SafeIcon icon={item.icon} className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <p className="text-gray-700 text-left leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2">
              <span>Reclaim Your Time & Boost Your Margins</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-600">No credit card required • Free consultation • Setup in minutes</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;