import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiX } = FiIcons;

const SchedulingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl max-w-4xl w-full p-8 relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <SafeIcon icon={FiX} className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Schedule Your Free Consultation</h3>
          <p className="text-gray-600">Choose a convenient time for your personalized strategy session</p>
        </div>

        {/* Embed your scheduling widget here */}
        <div className="bg-gray-50 rounded-xl p-6">
          <div className="bg-white p-8 rounded-lg border-2 border-dashed border-gray-300 text-center">
            <p className="text-gray-700 mb-4">Replace this section with your Calendly or iMeetify embed code</p>
            <code className="text-sm text-gray-600">
              {`<!-- Calendly embed code -->
<div class="calendly-inline-widget" data-url="https://calendly.com/your-username" style="min-width:320px;height:630px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

<!-- OR iMeetify embed code -->
<iframe src="https://imeetify.com/your-booking-page" width="100%" height="600"></iframe>`}
            </code>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Your consultation is completely free with no obligations. We're here to help you succeed.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SchedulingModal;