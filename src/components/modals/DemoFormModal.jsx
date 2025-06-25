import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiX } = FiIcons;

const DemoFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
          <p className="text-gray-600">See how FoodAgri AI can transform your business in just 15 minutes</p>
        </div>

        {/* Embed your form code here */}
        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <p className="text-gray-700 mb-4">Replace this section with your embedded form code</p>
          <div className="bg-white p-8 rounded-lg border-2 border-dashed border-gray-300">
            <code className="text-sm text-gray-600">
              {`<!-- Your embedded form code goes here -->
<iframe src="your-form-url" width="100%" height="500"></iframe>`}
            </code>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            We respect your privacy. Your information will never be shared.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default DemoFormModal;