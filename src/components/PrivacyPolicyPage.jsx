import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Navigation from './Navigation';
import Footer from './sections/Footer';

const { FiArrowLeft, FiShield } = FiIcons;

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  const informationCategories = [
    {
      category: "Contact & Identity Information",
      examples: "Name, business, email, phone, address",
      purpose: "Account creation, communication, support",
      lawfulBasis: "Contract, Legitimate Interests, Consent"
    },
    {
      category: "Account & Profile Data",
      examples: "Username, password (hashed), company, user ID, profile photo",
      purpose: "Account management, security, personalization",
      lawfulBasis: "Contract, Legitimate Interests"
    },
    {
      category: "Billing & Payment Data",
      examples: "Billing address, payment method (last 4 digits), transaction history, tax/VAT ID",
      purpose: "Payments, invoicing, compliance",
      lawfulBasis: "Contract, Legal Obligation"
    },
    {
      category: "Usage & Activity Data",
      examples: "Logins, IP, device/browser info, pages/features used, actions taken",
      purpose: "Analytics, security, troubleshooting",
      lawfulBasis: "Legitimate Interests, Consent (analytics)"
    },
    {
      category: "Support & Communications",
      examples: "Support tickets, chat/email transcripts, feedback",
      purpose: "Support, quality assurance, dispute resolution",
      lawfulBasis: "Contract, Legitimate Interests"
    },
    {
      category: "Uploaded Content",
      examples: "Files, documents, recordings, business/customer data, AI outputs",
      purpose: "Service delivery, storage, AI features",
      lawfulBasis: "Contract, Legitimate Interests, Consent"
    },
    {
      category: "Marketing & Preferences",
      examples: "Opt-in/opt-out status, preferences, campaign responses",
      purpose: "Marketing (with consent), preference management",
      lawfulBasis: "Consent, Legitimate Interests"
    },
    {
      category: "Cookies, Tracking & Analytics",
      examples: "Cookies, device IDs, geolocation, analytics",
      purpose: "Site functionality, analytics, personalization",
      lawfulBasis: "Consent (non-essential), Legitimate Interests"
    },
    {
      category: "Third-Party Integration Data",
      examples: "Data from integrated tools (CRM, email, calendar), API tokens",
      purpose: "Integrations, workflow automation",
      lawfulBasis: "Contract, Legitimate Interests, Consent"
    },
    {
      category: "Legal & Compliance Data",
      examples: "Consent records, data subject requests, audit logs",
      purpose: "Compliance, legal defense, audits",
      lawfulBasis: "Legal Obligation, Legitimate Interests"
    },
    {
      category: "Special Category Data",
      examples: "Only with explicit consent (e.g., health, biometric, sensitive data)",
      purpose: "Only for specified, limited purposes",
      lawfulBasis: "Explicit Consent (GDPR Art. 9)"
    }
  ];

  const thirdPartyProviders = [
    {
      category: "Cloud Hosting",
      examples: "AWS, Google Cloud",
      dataShared: "All user data",
      purpose: "Secure storage, uptime",
      security: "Encryption, ISO 27001, SOC 2"
    },
    {
      category: "Payment Processing",
      examples: "Stripe, PayPal",
      dataShared: "Billing info, transactions",
      purpose: "Payments, refunds",
      security: "PCI DSS, DPA"
    },
    {
      category: "Analytics",
      examples: "Google Analytics",
      dataShared: "Usage, device info",
      purpose: "Analytics, improvement",
      security: "Data minimization, DPA"
    },
    {
      category: "Email/Communication",
      examples: "SendGrid, Intercom",
      dataShared: "Email, name, support content",
      purpose: "Notifications, support",
      security: "Encryption, DPA"
    },
    {
      category: "CRM/Marketing Automation",
      examples: "HubSpot, Salesforce",
      dataShared: "Contact info, preferences",
      purpose: "CRM, marketing",
      security: "DPA, access controls"
    },
    {
      category: "AI/ML Infrastructure",
      examples: "OpenAI, Google AI",
      dataShared: "Content, usage (as needed)",
      purpose: "AI-powered features",
      security: "DPA, industry-standard security"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 mb-8 transition-colors"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiShield} className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              FoodAgri AI LLC's comprehensive privacy policy and data protection practices
            </p>
            <div className="bg-emerald-50 rounded-2xl p-6 mb-8">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Effective Date:</strong> June 25, 2025
              </p>
              <p className="text-sm text-gray-700">
                <strong>Contact:</strong> <a href="mailto:privacy@foodagriai.com" className="text-emerald-600 hover:text-emerald-700">privacy@foodagriai.com</a> | <a href="tel:+13075551234" className="text-emerald-600 hover:text-emerald-700">+1 (307) 555-1234</a>
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
            {/* Preamble */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Preamble</h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  This Privacy Policy ("Policy") is issued by FoodAgri AI LLC, a Wyoming Limited Liability Company, with its principal place of business at 30 N Gould St Ste R, Sheridan, WY 82801, USA ("FoodAgri AI," "we," "us," or "our"). FoodAgri AI was founded in August 2025.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This Policy explains how FoodAgri AI collects, uses, shares, and protects your personal information in compliance with the California Consumer Privacy Act (CCPA), the General Data Protection Regulation (GDPR), the Children's Online Privacy Protection Act (COPPA), and other applicable data privacy laws. We are committed to transparency, user rights, and responsible data handling.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions or wish to exercise your privacy rights, contact us at:
                </p>
                <ul className="space-y-2 text-gray-700 list-disc ml-6 mb-4">
                  <li><strong>Email:</strong> <a href="mailto:privacy@foodagriai.com" className="text-emerald-600 hover:text-emerald-700">privacy@foodagriai.com</a></li>
                  <li><strong>Phone:</strong> <a href="tel:+13075551234" className="text-emerald-600 hover:text-emerald-700">+1 (307) 555-1234</a></li>
                  <li><strong>Mail:</strong> FoodAgri AI LLC, 30 N Gould St Ste R, Sheridan, WY 82801, USA</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Policy from time to time. We will notify you of material changes via email, website banner, and by updating the "Last Updated" date above. Substantial changes will require renewed consent.
                </p>
              </div>
            </section>

            {/* Definitions */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Definitions</h2>
              <div className="bg-blue-50 rounded-2xl p-8">
                <ul className="space-y-4 text-gray-700">
                  <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable individual (see "Information We Collect").</li>
                  <li><strong>Processing:</strong> Any operation performed on Personal Data (collection, use, storage, sharing, deletion, etc.).</li>
                  <li><strong>User/You:</strong> Any individual or entity using FoodAgri AI's services.</li>
                  <li><strong>Services:</strong> The AI-powered SaaS solutions provided by FoodAgri AI, as described on our website and in user agreements.</li>
                  <li><strong>Third-Party Service Provider:</strong> Any third party engaged by FoodAgri AI to assist in providing services (cloud hosting, analytics, payments, etc.).</li>
                  <li><strong>Data Subject Request:</strong> A request to exercise rights under applicable data protection laws.</li>
                  <li><strong>Data Handling and Deletion Schedule:</strong> Our detailed retention and deletion policy, available at{' '}
                    <button 
                      onClick={() => navigate('/data-handling-deletion-schedule')}
                      className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                    >
                      Data Handling and Deletion Schedule
                    </button>.
                  </li>
                  <li><strong>Standard Contractual Clauses (SCCs):</strong> EU-approved contractual safeguards for international data transfers.</li>
                  <li><strong>Material Change:</strong> Any change to this Policy that significantly affects how we collect, use, or disclose your Personal Data.</li>
                </ul>
              </div>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We collect the following categories of personal data, depending on your interactions with our platform and services:
              </p>
              <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Category</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Examples</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Purpose</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Lawful Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {informationCategories.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-xs font-medium text-gray-900">{item.category}</td>
                        <td className="px-4 py-3 text-xs text-gray-700">{item.examples}</td>
                        <td className="px-4 py-3 text-xs text-gray-700">{item.purpose}</td>
                        <td className="px-4 py-3 text-xs text-gray-700">{item.lawfulBasis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                For more details, see our{' '}
                <button 
                  onClick={() => navigate('/data-handling-deletion-schedule')}
                  className="text-emerald-600 hover:text-emerald-700 underline font-medium"
                >
                  Data Handling and Deletion Schedule
                </button>.
              </p>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. How We Use Your Information</h2>
              <div className="bg-emerald-50 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We process your data only for the purposes described below and in accordance with applicable law:
                </p>
                <ul className="space-y-2 text-gray-700 list-disc ml-6">
                  <li>To create and manage your account</li>
                  <li>To deliver and improve our AI-powered SaaS features</li>
                  <li>To process payments and manage subscriptions</li>
                  <li>To communicate with you about updates, support, and account matters</li>
                  <li>To provide analytics, security, and troubleshooting</li>
                  <li>To send marketing communications (with your consent)</li>
                  <li>To comply with legal obligations and respond to regulatory requests</li>
                  <li>To enable integrations with third-party tools</li>
                  <li>To maintain records of consent and manage your privacy rights</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We rely on contract performance, legitimate interests, legal obligations, and consent (where required) as lawful bases for processing.
                </p>
              </div>
            </section>

            {/* International Data Transfers */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. International Data Transfers</h2>
              <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
                <p className="text-gray-700 leading-relaxed">
                  Your data may be transferred to and processed in countries outside your home jurisdiction, including the United States. We use SCCs, adequacy decisions, and supplementary technical and organizational measures (e.g., encryption, access controls, transfer impact assessments) to ensure your data is protected in accordance with GDPR and other privacy laws. For more, see our{' '}
                  <button 
                    onClick={() => navigate('/data-handling-deletion-schedule')}
                    className="text-purple-600 hover:text-purple-700 underline font-medium"
                  >
                    Data Handling and Deletion Schedule
                  </button>.
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Data Security</h2>
              <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
                <p className="text-gray-700 leading-relaxed mb-4">We use a layered security program, including:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-gray-700 list-disc ml-6">
                    <li><strong>Encryption:</strong> TLS for data in transit, AES-256 for data at rest</li>
                    <li><strong>Access Controls:</strong> Role-based access, MFA for admin accounts</li>
                    <li><strong>Network Security:</strong> Firewalls, intrusion detection, regular patching</li>
                    <li><strong>Data Minimization:</strong> Only necessary data collected/processed</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700 list-disc ml-6">
                    <li><strong>Backup & Recovery:</strong> Regular backups, disaster recovery plan</li>
                    <li><strong>Monitoring & Incident Response:</strong> Continuous monitoring, documented incident response</li>
                    <li><strong>Employee Training:</strong> Regular security and privacy training</li>
                    <li><strong>Certifications:</strong> ISO 27001 and SOC 2 Type 2 certifications</li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  For more, see our{' '}
                  <button 
                    onClick={() => navigate('/data-handling-deletion-schedule')}
                    className="text-red-600 hover:text-red-700 underline font-medium"
                  >
                    Data Handling and Deletion Schedule
                  </button>.
                </p>
              </div>
            </section>

            {/* Data Retention and Deletion */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Data Retention and Deletion</h2>
              <div className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We retain personal data only as long as necessary for the purposes described or as required by law. Retention periods for each data category are detailed in our{' '}
                  <button 
                    onClick={() => navigate('/data-handling-deletion-schedule')}
                    className="text-orange-600 hover:text-orange-700 underline font-medium"
                  >
                    Data Handling and Deletion Schedule
                  </button>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Upon expiry of the retention period or upon verified user request, data is securely deleted or irreversibly anonymized using industry-standard methods (e.g., multi-pass overwriting, cryptographic erasure, secure erase commands, physical destruction, k-anonymity). Deletion and anonymization actions are logged and periodically audited. For data processed by third-party providers, we coordinate deletion and obtain confirmation from those providers.
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Children's Privacy</h2>
              <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
                <p className="text-gray-700 leading-relaxed">
                  We do not knowingly collect personal data from children under 13 (or the applicable age in your jurisdiction) without verifiable parental consent. If we learn that a child has provided us with data without such consent, we will promptly delete that information. Parents may contact us to review, correct, or delete their child's data.
                </p>
              </div>
            </section>

            {/* Cookies and Tracking */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Cookies and Tracking Technologies</h2>
              <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-200">
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar technologies to enhance your experience, analyze usage, and support marketing. On your first visit, you will see a cookie banner allowing you to accept all, reject all, or customize your preferences. Non-essential cookies will only be set with your explicit consent. You can change your preferences at any time via the "Manage Cookie Preferences" link. See our{' '}
                  <button 
                    onClick={() => navigate('/cookie-policy')}
                    className="text-indigo-600 hover:text-indigo-700 underline font-medium"
                  >
                    Cookie Policy
                  </button>{' '}
                  for details.
                </p>
              </div>
            </section>

            {/* Third Party Sharing */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Sharing Your Information with Third Parties</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We share personal data with trusted third-party service providers under strict contractual and security safeguards. These include:
              </p>
              <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Category</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Example Providers</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Data Shared</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Purpose</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900">Security/Compliance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {thirdPartyProviders.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-xs font-medium text-gray-900">{item.category}</td>
                        <td className="px-4 py-3 text-xs text-gray-700">{item.examples}</td>
                        <td className="px-4 py-3 text-xs text-gray-700">{item.dataShared}</td>
                        <td className="px-4 py-3 text-xs text-gray-700">{item.purpose}</td>
                        <td className="px-4 py-3 text-xs text-gray-700">{item.security}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                All providers are contractually bound to use your data only for specified purposes and to implement industry-standard security measures. For a current list of providers and their certifications, contact <a href="mailto:privacy@foodagriai.com" className="text-emerald-600 hover:text-emerald-700">privacy@foodagriai.com</a>.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Your Rights</h2>
              <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the following rights under GDPR, CCPA, and other applicable laws:
                </p>
                <ul className="space-y-3 text-gray-700 list-disc ml-6 mb-4">
                  <li><strong>Right to Know/Access:</strong> Request information about what data we hold and how it is used.</li>
                  <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                  <li><strong>Right to Deletion:</strong> Request deletion of your data, subject to legal exceptions.</li>
                  <li><strong>Right to Restrict Processing:</strong> Request restriction of processing in certain circumstances.</li>
                  <li><strong>Right to Object:</strong> Object to processing for certain purposes (e.g., marketing).</li>
                  <li><strong>Right to Data Portability:</strong> Receive your data in a portable format.</li>
                  <li><strong>Right to Opt-Out of Sale (CCPA):</strong> Direct us not to sell your data (we do not sell data).</li>
                  <li><strong>Right to Non-Discrimination:</strong> Exercise your rights without discrimination.</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time (does not affect prior processing).</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  To exercise your rights, use our Data Rights Request Form, email <a href="mailto:privacy@foodagriai.com" className="text-green-600 hover:text-green-700">privacy@foodagriai.com</a>, call <a href="tel:+13075551234" className="text-green-600 hover:text-green-700">+1 (307) 555-1234</a>, or write to our address above. We will verify your identity and respond within the timeframe required by law.
                </p>
              </div>
            </section>

            {/* Additional Sections */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">11. Data Subject Requests and Verification</h2>
              <div className="bg-blue-50 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed">
                  To protect your data, we verify your identity before processing requests. If you have an account, submit requests while logged in or confirm via your registered email. For sensitive requests, we may ask for additional information. Abusive or excessive requests may be refused or subject to a reasonable fee, with written explanation.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">12. International Transfers and Additional Safeguards</h2>
              <div className="bg-purple-50 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed">
                  For transfers to countries without adequate data protection, we use SCCs and supplementary measures (encryption, access controls, transfer impact assessments, audit rights, etc.) to ensure your data receives essentially equivalent protection.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">13. Changes to This Privacy Policy</h2>
              <div className="bg-yellow-50 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed">
                  We may update this Policy from time to time. For material changes (e.g., new data types, new uses, new third-party sharing, or changes to your rights), we will provide at least 14 days' advance notice by email and website banner, and require renewed consent where required by law. The "Last Updated" date at the top of this Policy will always reflect the current version.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">14. Contact Us</h2>
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200 text-center">
                <p className="text-gray-700 leading-relaxed mb-6">
                  For privacy-related inquiries or to exercise your rights, contact:
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

export default PrivacyPolicyPage;