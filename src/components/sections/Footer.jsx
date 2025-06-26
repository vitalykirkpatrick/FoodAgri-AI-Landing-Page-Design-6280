import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import Logo from './Logo';
import DisclaimerModal from '../modals/DisclaimerModal';
import useModal from '../../hooks/useModal';

const { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } = FiIcons;

const Footer = () => {
  const disclaimerModal = useModal();

  const services = [
    'Appointment Setting',
    'B2B Lead Generation',
    'Market Research',
    'Account Based Marketing',
    'Cold Email Outreach',
    'LinkedIn Outreach',
    'Outsourced SDR',
    'Sales Enablement'
  ];

  const quickLinks = [
    'About Us',
    'Services',
    'Case Studies',
    'Blog',
    'Contact',
    'Privacy Policy',
    'Terms of Service'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <Logo size="normal" className="mb-4" />
              <p className="text-gray-400 leading-relaxed mb-6">
                Empowering food and agriculture businesses with AI-powered sales automation, lead generation, and marketing solutions that drive real results.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">hello@foodagri.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">Chicago, IL, USA</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest insights on food industry sales and marketing trends.
            </p>
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-r-lg transition-colors duration-200">
                  <SafeIcon icon={FiMail} className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
              >
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
              >
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors duration-200"
              >
                <SafeIcon icon={FiFacebook} className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 FoodAgri AI. All rights reserved. Transform your food business with intelligent sales automation.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <button
                onClick={disclaimerModal.openModal}
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200"
              >
                Disclaimer
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <DisclaimerModal isOpen={disclaimerModal.isOpen} onClose={disclaimerModal.closeModal} />
    </footer>
  );
};

export default Footer;