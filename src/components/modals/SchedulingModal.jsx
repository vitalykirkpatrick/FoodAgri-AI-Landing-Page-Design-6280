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
        <div class="imeetify-full-calendar" height="570" width="1000" url="https://meet.vitalykirkpatrick.com/vitaly/60-min-Virtual-Collab" title="Full Calendar"></div>
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
        className="bg-white rounded-2xl max-w-6xl w-full p-6 relative max-h-[90vh] overflow-hidden"
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

        {/* iMeetify Calendar Container */}
        <div className="w-full h-[570px] overflow-hidden rounded-xl border border-gray-200">
          <div 
            ref={calendarRef}
            style={{ height: '570px', width: '100%' }}
          ></div>
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