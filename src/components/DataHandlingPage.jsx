import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Navigation from './Navigation';
import Footer from './sections/Footer';

const { FiArrowLeft, FiDatabase, FiShield, FiTrash2 } = FiIcons;

const DataHandlingPage = () => {
  const navigate = useNavigate();

  const dataCategories = [
    {
      category: "Contact & Identity Information",
      retention: "Account duration + 2 years",
      purpose: "Account management, support, legal compliance"
    },
    {
      category: "Account/Profile Data",
      retention: "Account duration + 2 years",
      purpose: "Account security, personalization"
    },
    {
      category: "Billing & Payment Data",
      retention: "7 years after transaction",
      purpose: "Tax, accounting, regulatory compliance"
    },
    {
      category: "Usage & Activity Data",
      retention: "2 years from collection",
      purpose: "Analytics, security, service improvement"
    },
    {
      category: "Support/Communications",
      retention: "2 years after last interaction",
      purpose: "Support, dispute resolution, quality assurance"
    },
    {
      category: "Uploaded Content",
      retention: "Account duration + 30 days post-close",
      purpose: "Service delivery, user access"
    },
    {
      category: "Marketing & Preferences",
      retention: "Until opt-out or 2 years inactivity",
      purpose: "Marketing, preference management"
    },
    {
      category: "Cookies & Analytics Data",
      retention: "13 months (analytics cookies)",
      purpose: "Site performance, analytics"
    },
    {
      category: "Third-Party Integration Data",
      retention: "Integration duration + 1 year",
      purpose: "Workflow automation, integrations"
    },
    {
      category: "Legal & Compliance Data",
      retention: "7 years or as required by law",
      purpose: "Legal, audit, regulatory compliance"
    },
    {
      category: "Data Subject Requests",
      retention: "2 years from request resolution",
      purpose: "Compliance documentation"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/terms-of-use')}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
            <span>Back to Terms of Use</span>
          </button>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiDatabase} className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Data Handling and Deletion Schedule
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              FoodAgri AI LLC's comprehensive data retention, handling, and secure deletion policies
            </p>
            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Effective Date:</strong> June 25, 2025
              </p>
              <p className="text-sm text-gray-700">
                <strong>Contact:</strong> <a href="mailto:privacy@foodagriai.com" className="text-blue-600 hover:text-blue-700">privacy@foodagriai.com</a> | <a href="tel:+13075551234" className="text-blue-600 hover:text-blue-700">+1 (307) 555-1234</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  FoodAgri AI LLC is committed to data minimization, transparency, and compliance with all applicable data privacy laws, including GDPR (Articles 5, 17, 32), CCPA (Sections 1798.100–1798.105), and industry best practices. This Data Handling and Deletion Schedule explains:
                </p>
                <ul className="space-y-2 text-gray-700 list-disc ml-6">
                  <li>What categories of data we collect and retain</li>
                  <li>How long we retain each category</li>
                  <li>The secure deletion and anonymization methods we use</li>
                  <li>How we handle data processed by third-party service providers</li>
                  <li>How users can exercise their rights</li>
                  <li>Our audit, documentation, and compliance processes</li>
                </ul>
              </div>
            </section>

            {/* Data Categories Table */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Data Categories and Retention Periods</h2>
              <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Data Category</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Retention Period</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose/Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {dataCategories.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.category}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{item.retention}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{item.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4 italic">
                *Data may be retained longer if required by law (e.g., ongoing litigation, regulatory investigation).
              </p>
            </section>

            {/* Secure Deletion Methods */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Secure Deletion and Anonymization Methods</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                  <div className="flex items-center mb-4">
                    <SafeIcon icon={FiTrash2} className="w-6 h-6 text-red-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Live Systems and Databases</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li><strong>Overwriting/Wiping:</strong> Multi-pass overwrite (NIST SP 800-88, DoD 5220.22-M) for HDDs and file systems.</li>
                    <li><strong>Cryptographic Erasure:</strong> For encrypted data, deletion of encryption keys to render data irretrievable.</li>
                    <li><strong>Secure Erase Commands:</strong> Use hardware/firmware-based secure erase for SSDs and NVMe storage.</li>
                    <li><strong>API-Based Deletion:</strong> For cloud storage, use provider APIs to permanently delete records and objects.</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <div className="flex items-center mb-4">
                    <SafeIcon icon={FiShield} className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Backups and Archives</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li><strong>"Beyond Use" Policy:</strong> Expired data is flagged and excluded from restores; deleted on next backup cycle (max 90 days).</li>
                    <li><strong>Physical Media Destruction:</strong> End-of-life media are shredded, degaussed, or incinerated; certificates of destruction are retained.</li>
                    <li><strong>Anonymization:</strong> Data is irreversibly anonymized for analytics/research when deletion is not feasible.</li>
                    <li><strong>Automated Logging:</strong> All deletion/anonymization actions are logged with timestamps and audit trails.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Third-Party Service Providers */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Data Processed by Third-Party Service Providers</h2>
              <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  FoodAgri AI LLC uses trusted third-party service providers (e.g., cloud hosting, analytics, payment processors, AI infrastructure) to deliver and support our services. In some cases, these providers may have direct access to data, even if FoodAgri AI does not.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Contractual Safeguards:</strong> All providers are contractually required to follow strict data retention, secure deletion, and privacy standards that meet or exceed GDPR and CCPA requirements.</li>
                  <li><strong>Deletion Requests:</strong> When you request deletion of your data, we will coordinate with our providers to ensure secure and irreversible deletion or anonymization across all systems.</li>
                  <li><strong>Verification:</strong> We obtain written confirmation or certificates of deletion from providers and audit their compliance periodically.</li>
                  <li><strong>Transparency:</strong> A list of our key third-party providers and their privacy practices is available upon request.</li>
                </ul>
              </div>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. User Rights and Deletion Requests</h2>
              <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <strong>Right to Deletion:</strong> Users may request deletion of their personal data at any time (subject to legal exceptions). Submit requests via our Data Rights Request Form or contact privacy@foodagriai.com.
                  </li>
                  <li>
                    <strong>Verification:</strong> We will verify your identity before processing the request.
                  </li>
                  <li>
                    <strong>Timeline:</strong> Requests will be processed within 30 days (GDPR) or 45 days (CCPA), unless an extension is required by law.
                  </li>
                  <li>
                    <strong>Confirmation:</strong> Users will receive written confirmation when deletion is complete, including confirmation that third-party providers have also deleted or anonymized the relevant data.
                  </li>
                </ul>
              </div>
            </section>

            {/* Documentation and Audit */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Documentation and Audit</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Documentation</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Retention and deletion logs</li>
                    <li>• Certificates of destruction</li>
                    <li>• Annual schedule reviews</li>
                    <li>• Process documentation</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Audit & Compliance</h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• External audit capabilities</li>
                    <li>• Immutable audit logs</li>
                    <li>• Compliance verification</li>
                    <li>• Third-party certifications</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Special Notes */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Special Notes</h2>
              <div className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
                <ul className="space-y-3 text-gray-700">
                  <li><strong>Legal Holds:</strong> Data subject to legal hold will not be deleted until the hold is lifted.</li>
                  <li><strong>Cloud Providers:</strong> We use only cloud providers with robust deletion and encryption capabilities (e.g., AWS, Azure, GCP), and require contractual commitments to secure deletion.</li>
                  <li><strong>International Transfers:</strong> Data transferred outside the EEA is subject to SCCs and supplementary safeguards, including deletion guarantees.</li>
                </ul>
              </div>
            </section>

            {/* References and Compliance */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. References and Compliance</h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Legal Frameworks</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• GDPR Articles 5, 17, 32</li>
                      <li>• CCPA Sections 1798.100–1798.105</li>
                      <li>• NIST SP 800-88, DoD 5220.22-M</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Certifications</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• ISO 27001</li>
                      <li>• SOC 2</li>
                      <li>• Security certification frameworks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Contact and Questions</h2>
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200 text-center">
                <p className="text-gray-700 leading-relaxed mb-6">
                  For questions about this schedule or to exercise your data rights, contact:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> <a href="mailto:privacy@foodagriai.com" className="text-emerald-600 hover:text-emerald-700">privacy@foodagriai.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+13075551234" className="text-emerald-600 hover:text-emerald-700">+1 (307) 555-1234</a></p>
                  <p><strong>Mail:</strong> FoodAgri AI LLC, 30 N Gould St Ste R, Sheridan, WY 82801, USA</p>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-8 text-center">
              <p className="text-sm text-gray-500 italic">
                Last updated: June 25, 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataHandlingPage;