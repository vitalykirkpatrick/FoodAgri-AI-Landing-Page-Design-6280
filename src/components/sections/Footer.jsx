import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import Logo from './Logo';
import DisclaimerModal from '../modals/DisclaimerModal';
import ContactFormModal from '../modals/ContactFormModal';
import useModal from '../../hooks/useModal';

const { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } = FiIcons;

const Footer = () => {
  const navigate = useNavigate();
  const disclaimerModal = useModal();
  const contactModal = useModal();
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const services = [
    { name: 'Growth Accelerator', href: '/growth-accelerator-bundle' },
    { name: 'Sales Performance', href: '/sales-performance-bundle' },
    { name: 'Marketing Excellence', href: '/marketing-excellence-bundle' },
    { name: 'Customer Experience', href: '/customer-experience-bundle' },
    { name: 'Onboarding & Training', href: '/onboarding-training-bundle' },
    { name: 'Partnership & Channel', href: '/partnership-channel-bundle' },
    { name: 'Data Intelligence', href: '/data-intelligence-bundle' },
    { name: 'All-in-One Suite', href: '/all-in-one-growth-suite' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '/all-in-one-growth-suite' },
    { name: 'Case Studies', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', action: 'contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-use' },
    { name: 'Cookie Policy', href: '/cookie-policy' }
  ];

  const handleLinkClick = (href, action) => {
    if (action === 'contact') {
      contactModal.openModal();
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSubscribing(true);
    
    try {
      // Simulate newsletter subscription
      console.log('Newsletter subscription:', email);
      // Here you would typically send the email to your backend/newsletter service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you for subscribing! You\'ll receive our latest insights on food industry sales and marketing trends.');
      setEmail('');
    } catch (error) {
      alert('Sorry, there was an error subscribing to our newsletter. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

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
                Empowering food and agriculture businesses with <span className="text-blue-400">AI</span>-powered 
                sales automation, lead generation, and marketing solutions that drive real results.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">privacy@foodagriai.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">+1 (307) 555-1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">30 N Gould St Ste R, Sheridan, WY 82801, USA</span>
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
                  <button
                    onClick={() => navigate(service.href)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm text-left"
                  >
                    {service.name}
                  </button>
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
                  <button
                    onClick={() => handleLinkClick(link.href, link.action)}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm text-left"
                  >
                    {link.name}
                  </button>
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
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubscribing}
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-600 px-4 py-2 rounded-r-lg transition-colors duration-200 disabled:cursor-not-allowed"
                >
                  {isSubscribing ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <SafeIcon icon={FiMail} className="w-4 h-4" />
                  )}
                </button>
              </div>
            </form>
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
              © 2024 <span className="text-emerald-400">FoodAgri</span>{' '}
              <span className="text-blue-400">AI</span>. All rights reserved. 
              Transform your food business with intelligent sales automation.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <button
                onClick={() => navigate('/privacy-policy')}
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigate('/terms-of-use')}
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button
                onClick={() => navigate('/cookie-policy')}
                className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200"
              >
                Cookie Policy
              </button>
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
      <ContactFormModal isOpen={contactModal.isOpen} onClose={contactModal.closeModal} />
    </footer>
  );
};

export default Footer;