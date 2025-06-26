import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import VideoModal from '../VideoModal';
import DemoFormModal from '../modals/DemoFormModal';
import useModal from '../../hooks/useModal';

const { FiPlay, FiArrowRight } = FiIcons;

const HeroMain = () => {
  const videoModal = useModal();
  const demoModal = useModal();

  const stats = [
    { number: "300%", label: "Average ROI Increase" },
    { number: "50+", label: "Food Businesses Transformed" },
    { number: "95%", label: "Client Satisfaction Rate" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="AI-powered food manufacturing and agricultural automation technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Food Business with{' '}
            <span className="text-emerald-400">
              <span className="text-emerald-400">FoodAgri</span>{' '}
              <span className="text-blue-400">AI</span>
            </span>-Powered Growth
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            Stop losing sales to manual processes. <span className="text-emerald-400">FoodAgri</span>{' '}
            <span className="text-blue-400">AI</span> automates your lead generation, fills your pipeline, and scales your revenue—specifically designed for food and agriculture businesses.
          </p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mb-10"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button
              onClick={videoModal.openModal}
              className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center space-x-3 hover:scale-105"
            >
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiPlay} className="w-6 h-6 text-white ml-1" />
              </div>
              <span>Watch in Action</span>
            </button>
            <button
              onClick={demoModal.openModal}
              className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <span>Let's Grow Your Business</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-sm text-gray-400 mt-6"
          >
            No credit card required • Free consultation • Results in 30 days
          </motion.p>
        </motion.div>
      </div>

      {/* Modals */}
      <VideoModal isOpen={videoModal.isOpen} onClose={videoModal.closeModal} />
      <DemoFormModal isOpen={demoModal.isOpen} onClose={demoModal.closeModal} />
    </section>
  );
};

export default HeroMain;