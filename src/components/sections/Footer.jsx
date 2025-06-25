import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">FoodAgri AI</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Empowering food and agriculture businesses with AI-powered automation, 
            compliance management, and growth acceleration.
          </p>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 FoodAgri AI. All rights reserved. Transform your business with intelligent automation.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;