import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiX } = FiIcons;

const DisclaimerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">Disclaimer</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <SafeIcon icon={FiX} className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              This web site and its information and services are provided for educational guidance and informational purposes only.
            </p>
            
            <p>
              The information contained herein has been compiled from sources deemed reliable and it is accurate to the best of our knowledge and belief; however, FoodAgri AI/Vitaly Kirkpatrick cannot guarantee as to its accuracy, completeness and validity and cannot be held liable for any errors or omissions. Changes are periodically made to this web site and may be made at any time.
            </p>
            
            <p>
              All information contained herein should be independently verified and confirmed.
            </p>
            
            <p>
              FoodAgri AI does not accept any liability for any loss or damage whatsoever caused in reliance upon such information or services.
            </p>
            
            <p>
              Visitor agrees to indemnify and hold harmless FoodAgri AI from and against any damages, costs and expenses, including any legal fees, potentially resulting from the application of any of the information or services provided by FoodAgri AI. This disclaimer applies to any damages, injury or loss caused by the use and application, whether directly or indirectly, of any advice or information presented, whether for breach of contract, tort, negligence, personal injury, criminal intent or under any other cause of action.
            </p>
            
            <p>
              Visitor agrees to assume all risk resulting from the application of any of the information, products or services provided by FoodAgri AI.
            </p>
            
            <p>
              By using this web site, including any applets, software and content contained therein, the visitor agrees that the use of this web site and its information and services is entirely at his/her own risk.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">EARNINGS DISCLAIMER</h4>
              
              <p>
                Every effort has been made to accurately represent this product and its potential. Even though this industry is one of the few where one can write their own check in terms of earnings, there is no guarantee that you will earn any money using the techniques and ideas presented here.
              </p>
              
              <p>
                Examples here are not to be taken as a promise or guarantee of earnings. Earning potential is entirely dependent on the person using our product, ideas, techniques and the effort they put forth.
              </p>
              
              <p>
                We do not purport this as a "get rich scheme", and nor should you view it as such.
              </p>
              
              <p>
                Your level of success in attaining the results claimed in our materials depends on the time you devote, ideas and techniques mentioned, knowledge and various skills.
              </p>
              
              <p>
                Since these factors differ according to individuals, we cannot guarantee your success or income level.
              </p>
              
              <p>
                Any and all forward looking statements here or on any of our sales material are intended to express our opinion of earnings potential.
              </p>
              
              <p>
                Many factors will be important in determining your actual results and no guarantees are made that you will achieve results similar to ours or anybody else's, in fact no guarantees are made that you will achieve any results from our ideas, techniques and software.
              </p>
              
              <p>
                Results vary, and as with any opportunity, you could make more or less. Success in ANYTHING is a result of hard work, time and a variety of other factors. No express or implied guarantees of income are made by FoodAgri AI.
              </p>
            </div>
          </div>
        </div>
        
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 text-center">
          <button
            onClick={onClose}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300"
          >
            I Understand
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DisclaimerModal;