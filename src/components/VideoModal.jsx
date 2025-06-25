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
        className="relative max-w-4xl w-full"
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <SafeIcon icon={FiX} className="w-8 h-8" />
        </button>

        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video bg-gray-900 flex items-center justify-center">
            {/* Placeholder for video - replace with actual video embed */}
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiPlay} className="w-10 h-10 ml-1" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Platform Demo Video</h3>
              <p className="text-gray-400">
                See how FoodAgri AI transforms food businesses in under 3 minutes
              </p>
              {/* Replace this div with actual video embed */}
              <div className="mt-8 p-8 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-500">
                  Video embed will be placed here<br />
                  (YouTube, Vimeo, or direct video file)
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoModal;