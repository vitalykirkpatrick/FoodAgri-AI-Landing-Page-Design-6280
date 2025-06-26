import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiX } = FiIcons;

const DisclaimerModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handlePolicyLinkClick = (path) => {
    onClose();
    navigate(path);
  };

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
          <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
            <p className="text-sm text-gray-600 mb-4">
              <strong>FoodAgri AI LLC</strong>
            </p>

            <p>
              FoodAgri AI LLC ("FoodAgri AI," "we," "us," or "our") provides this website, platform, and all related services for informational, educational, and business guidance purposes only. All information, tools, and AI-generated outputs are intended to support your decision-making but should not be solely relied upon for critical business, legal, financial, or regulatory actions. You are responsible for independently verifying any information or recommendations before acting upon them.
            </p>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Accuracy, Completeness, and Updates</h4>
              <p>
                We strive to ensure that all information, data, and services provided are accurate and up-to-date. However, due to the evolving nature of AI technologies, integrations with third-party services, and the agricultural industry, we do not guarantee the accuracy, completeness, or ongoing validity of any content, AI outputs, or recommendations. Information may be updated, modified, or removed at any time without prior notice.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Third-Party Services and Data Control</h4>
              <p>
                FoodAgri AI integrates with various third-party platforms and service providers to deliver its features. While we select partners with robust security and compliance standards, we do not control the data practices, availability, or accuracy of these external services. Some features, including data export, analytics, or integrations, may be subject to technical or contractual limitations imposed by third-party vendors. We are not liable for any issues, errors, or data unavailability resulting from third-party systems or for any limitations on data access, export, or deletion beyond our direct control.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">No Warranties or Guarantees</h4>
              <p>
                All information, services, and AI-generated outputs are provided "as is" and "as available," without warranties of any kind, express or implied. This includes, but is not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee any specific outcomes, results, or earnings from the use of our platform, nor do we represent that our services will be uninterrupted, error-free, or fully secure.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Earnings and Results Disclaimer</h4>
              <p>
                Any examples, case studies, or forward-looking statements regarding business results, performance, or earnings potential are for illustrative purposes only. Actual results depend on numerous factors, including user effort, market conditions, data quality, and the effective use of our tools. We make no guarantees that users will achieve similar results, and FoodAgri AI does not offer any "get rich quick" opportunities. Success with our platform requires your own diligence, expertise, and ongoing effort.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">User Responsibilities and Assumption of Risk</h4>
              <p className="mb-3">By using our website and services, you acknowledge and agree that:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>You are solely responsible for how you use any information, AI-generated content, or recommendations provided.</li>
                <li>You will independently verify all outputs before relying on them for business or regulatory decisions.</li>
                <li>You assume all risks associated with the application of our information, tools, or services, including any loss, damage, or liability that may arise, whether direct or indirect.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Indemnification and Limitation of Liability</h4>
              <p>
                You agree to indemnify, defend, and hold harmless FoodAgri AI LLC, its affiliates, officers, employees, and partners from any claims, damages, losses, or expenses (including legal fees) arising from your use or misuse of our website, platform, or services, or from your violation of these terms. To the fullest extent permitted by law, our liability for any claim related to your use of our services is limited as described in our{' '}
                <button
                  onClick={() => handlePolicyLinkClick('/terms-of-use')}
                  className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                >
                  Terms of Use
                </button>.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Data Privacy, Security, and User Rights</h4>
              <p>
                We are committed to protecting your privacy and personal data in accordance with applicable laws. Our{' '}
                <button
                  onClick={() => handlePolicyLinkClick('/privacy-policy')}
                  className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                >
                  Privacy Policy
                </button>{' '}
                describes how we collect, use, share, and protect your information, as well as your rights to access, correct, delete, or restrict your data. Some data rights may be limited by technical or contractual constraints with third-party vendors; in such cases, we will communicate transparently and assist you as much as possible. For information about cookies and tracking technologies, see our{' '}
                <button
                  onClick={() => handlePolicyLinkClick('/cookie-policy')}
                  className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                >
                  Cookie Policy
                </button>. To exercise your data rights, use our{' '}
                <button
                  onClick={() => handlePolicyLinkClick('/data-rights-request')}
                  className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                >
                  Data Rights Request Form
                </button>.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">No Professional Advice</h4>
              <p>
                Nothing on this website or in our services constitutes legal, financial, agronomic, or regulatory advice. You should consult with qualified professionals before making decisions based on information or outputs from our platform.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Changes and Updates</h4>
              <p>
                We may update this disclaimer, our{' '}
                <button
                  onClick={() => handlePolicyLinkClick('/terms-of-use')}
                  className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                >
                  Terms of Use
                </button>, and our{' '}
                <button
                  onClick={() => handlePolicyLinkClick('/privacy-policy')}
                  className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                >
                  Privacy Policy
                </button>{' '}
                at any time. Continued use of our website or services after such updates constitutes your acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Contact</h4>
              <p className="mb-4">For questions about this disclaimer, our services, or your rights, please contact:</p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>Email:</strong> <a href="mailto:privacy@foodagriai.com" className="text-emerald-600 hover:text-emerald-700">privacy@foodagriai.com</a></li>
                <li><strong>Phone:</strong> <a href="tel:+13075551234" className="text-emerald-600 hover:text-emerald-700">+1 (307) 555-1234</a></li>
                <li><strong>Mail:</strong> FoodAgri AI LLC, 30 N Gould St Ste R, Sheridan, WY 82801, USA</li>
              </ul>
            </div>

            <div>
              <p>
                By accessing or using the FoodAgri AI platform, you acknowledge that you have read, understood, and agreed to this disclaimer, our{' '}
                <button
                  onClick={() => handlePolicyLinkClick('/terms-of-use')}
                  className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                >
                  Terms of Use
                </button>, {' '}
                <button
                  onClick={() => handlePolicyLinkClick('/privacy-policy')}
                  className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                >
                  Privacy Policy
                </button>, and{' '}
                <button
                  onClick={() => handlePolicyLinkClick('/cookie-policy')}
                  className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                >
                  Cookie Policy
                </button>. For exercising your data rights, please use our{' '}
                <button
                  onClick={() => handlePolicyLinkClick('/data-rights-request')}
                  className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                >
                  Data Rights Request Form
                </button>.
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