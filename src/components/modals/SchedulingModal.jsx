import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiX } = FiIcons;

const SchedulingModal = ({ isOpen, onClose }) => {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (isOpen && calendarRef.current) {
      // Clear existing content
      calendarRef.current.innerHTML = '';
      
      // Insert the exact HTML from your calendar code
      calendarRef.current.innerHTML = `
        <div class="imeetify-full-calendar" height="600" width="100%" url="https://meet.vitalykirkpatrick.com/vitaly/60-min-Virtual-Collab" title="Full Calendar"></div>
      `;

      // Load the script
      const script = document.createElement('script');
      script.src = 'https://imeetify.com/assets/care_panel/js/embed/widget.js';
      script.type = 'text/javascript';
      script.async = true;
      document.head.appendChild(script);

      return () => {
        // Cleanup
        const existingScript = document.querySelector('script[src="https://imeetify.com/assets/care_panel/js/embed/widget.js"]');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden relative shadow-2xl"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between z-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Schedule Your Free Consultation</h3>
            <p className="text-gray-600">Choose a convenient time for your personalized strategy session</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
          >
            <SafeIcon icon={FiX} className="w-6 h-6" />
          </button>
        </div>

        {/* iMeetify Calendar Container - Optimized for full screen */}
        <div className="w-full h-[calc(95vh-120px)] overflow-auto">
          <div
            ref={calendarRef}
            className="w-full min-h-[600px]"
            style={{ height: '100%' }}
          />
        </div>

        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-4 text-center">
          <p className="text-xs text-gray-500">
            Your consultation is completely free with no obligations. We're here to help you succeed.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SchedulingModal;