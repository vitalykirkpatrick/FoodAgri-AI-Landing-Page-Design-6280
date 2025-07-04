import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiX, FiUser, FiMail, FiPhone, FiBriefcase, FiMessageSquare, FiCalendar } = FiIcons;

const DemoFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    companySize: '',
    currentChallenge: '',
    demoType: '',
    preferredTime: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const industryOptions = [
    'Food Manufacturing',
    'Food Processing', 
    'Agriculture',
    'Dairy Products',
    'Meat & Poultry',
    'Beverages',
    'Food Distribution',
    'Restaurant/Foodservice',
    'Other'
  ];

  const companySizeOptions = [
    '1-10 employees',
    '11-50 employees', 
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const challengeOptions = [
    'Lead Generation',
    'Sales Process Efficiency',
    'Marketing Automation',
    'Customer Support',
    'Data Management',
    'Market Expansion',
    'Other'
  ];

  const demoTypeOptions = [
    'Live Demo Call (30 mins)',
    'Product Walkthrough (15 mins)',
    'Custom Solution Demo (45 mins)',
    'Technical Deep Dive (60 mins)'
  ];

  const timeOptions = [
    'This Week',
    'Next Week',
    'Within 2 Weeks',
    'Within a Month',
    'No Rush'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Demo request:', formData);
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      alert('Thank you! Your demo request has been submitted. Our team will contact you within 24 hours to schedule your personalized demo.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        companySize: '',
        currentChallenge: '',
        demoType: '',
        preferredTime: '',
        message: ''
      });
      
      onClose();
    } catch (error) {
      alert('Sorry, there was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <SafeIcon icon={FiX} className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Get Your Free Demo</h3>
          <p className="text-gray-600">See how FoodAgri AI can transform your business in just 15-30 minutes</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <SafeIcon icon={FiUser} className="w-4 h-4 inline mr-2" />
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <SafeIcon icon={FiMail} className="w-4 h-4 inline mr-2" />
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <SafeIcon icon={FiPhone} className="w-4 h-4 inline mr-2" />
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <SafeIcon icon={FiBriefcase} className="w-4 h-4 inline mr-2" />
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Your company name"
              />
            </div>
          </div>

          {/* Business Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Industry <span className="text-red-500">*</span>
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              >
                <option value="">Select your industry</option>
                {industryOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Size <span className="text-red-500">*</span>
              </label>
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              >
                <option value="">Select company size</option>
                {companySizeOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Current Challenge */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Biggest Challenge <span className="text-red-500">*</span>
            </label>
            <select
              name="currentChallenge"
              value={formData.currentChallenge}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            >
              <option value="">What's your biggest challenge right now?</option>
              {challengeOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Demo Preferences */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <SafeIcon icon={FiCalendar} className="w-4 h-4 inline mr-2" />
                Demo Type <span className="text-red-500">*</span>
              </label>
              <select
                name="demoType"
                value={formData.demoType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              >
                <option value="">Choose demo type</option>
                {demoTypeOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Timing
              </label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              >
                <option value="">When would you like to meet?</option>
                {timeOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <SafeIcon icon={FiMessageSquare} className="w-4 h-4 inline mr-2" />
              Additional Information
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
              placeholder="Tell us more about your specific needs or questions for the demo..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
          >
            {isSubmitting ? 'Scheduling Demo...' : 'Schedule My Free Demo'}
          </button>

          {/* Benefits */}
          <div className="bg-emerald-50 rounded-xl p-4 mt-6">
            <h4 className="font-semibold text-emerald-800 mb-2">What you'll get in your demo:</h4>
            <ul className="text-sm text-emerald-700 space-y-1">
              <li>✓ Personalized walkthrough of FoodAgri AI features</li>
              <li>✓ See how it solves your specific challenges</li>
              <li>✓ Custom ROI analysis for your business</li>
              <li>✓ Q&A with our food industry experts</li>
              <li>✓ Next steps and implementation timeline</li>
            </ul>
          </div>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          We respect your privacy. Your information will never be shared and you can unsubscribe at any time.
        </p>
      </motion.div>
    </div>
  );
};

export default DemoFormModal;