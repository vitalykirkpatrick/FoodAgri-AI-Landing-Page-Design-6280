import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiPlay } = FiIcons;

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden"
      >
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="bg-black bg-opacity-50 text-white hover:text-gray-300 transition-colors p-3 rounded-full hover:bg-opacity-70"
          >
            <SafeIcon icon={FiX} className="w-6 h-6" />
          </button>
        </div>

        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-gray-900 flex items-center justify-center min-h-[400px]">
            {/* Placeholder for video - replace with actual video embed */}
            <div className="text-center text-white p-8">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiPlay} className="w-10 h-10 ml-1" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Platform Demo Video</h3>
              <p className="text-gray-400 mb-6">
                See how FoodAgri AI transforms food businesses in under 3 minutes
              </p>
              
              {/* Replace with actual video embed - responsive container */}
              <div className="relative w-full max-w-4xl mx-auto">
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-sm text-gray-500 text-center">
                    Video embed will be placed here<br />
                    (YouTube, Vimeo, or direct video file)
                    <br /><br />
                    Example for YouTube:<br />
                    &lt;iframe width="100%" height="100%" src="https://www.youtube.com/embed/VIDEO_ID" 
                    frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoModal;