import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Navigation from './Navigation';
import Footer from './sections/Footer';

const { FiArrowLeft, FiSettings } = FiIcons;

const CookiePolicyPage = () => {
  const navigate = useNavigate();

  const cookieTypes = [
    {
      type: "Strictly Necessary",
      purpose: "Essential for website operation, security, and enabling core features",
      examples: "Session cookies, authentication, security tokens"
    },
    {
      type: "Preference/Functionality",
      purpose: "Remember your preferences and settings",
      examples: "Language choice, saved logins, UI customizations"
    },
    {
      type: "Analytics/Performance",
      purpose: "Collect information about how visitors use our site to improve performance and usability",
      examples: "Google Analytics, Mixpanel"
    },
    {
      type: "Marketing/Advertising",
      purpose: "Track user activity to deliver relevant ads and measure campaign effectiveness",
      examples: "Facebook Pixel, Google Ads, retargeting cookies"
    },
    {
      type: "Third-Party/Integration",
      purpose: "Enable integrations with third-party services and social media platforms",
      examples: "LinkedIn, CRM integrations, embedded content"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-8 transition-colors"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiSettings} className="w-10 h-10 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              How FoodAgri AI LLC uses cookies and similar tracking technologies
            </p>
            <div className="bg-purple-50 rounded-2xl p-6 mb-8">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Effective Date:</strong> June 25, 2025
              </p>
              <p className="text-sm text-gray-700">
                <strong>Contact:</strong> <a href="mailto:privacy@foodagriai.com" className="text-purple-600 hover:text-purple-700">privacy@foodagriai.com</a> | <a href="tel:+13075551234" className="text-purple-600 hover:text-purple-700">+1 (307) 555-1234</a>
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
                  This Cookie Policy explains how FoodAgri AI LLC ("FoodAgri AI," "we," "us," or "our") uses cookies and similar tracking technologies on our website and platform. We are committed to transparency, user control, and compliance with the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and other applicable laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you have questions, please contact us at <a href="mailto:privacy@foodagriai.com" className="text-purple-600 hover:text-purple-700">privacy@foodagriai.com</a> or <a href="tel:+13075551234" className="text-purple-600 hover:text-purple-700">+1 (307) 555-1234</a>.
                </p>
              </div>
            </section>

            {/* What Are Cookies */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Cookies?</h2>
              <div className="bg-blue-50 rounded-2xl p-8">
                <p className="text-gray-700 leading-relaxed">
                  Cookies are small text files stored on your device (computer, tablet, smartphone) when you visit a website. They help websites remember your preferences, enhance your experience, and provide analytics and marketing insights. We also use similar technologies such as pixels, web beacons, and local storage.
                </p>
              </div>
            </section>

            {/* Types of Cookies */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
              <div className="overflow-x-auto bg-white border border-gray-200 rounded-2xl shadow-lg">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cookie Type</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Examples</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cookieTypes.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.type}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{item.purpose}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{item.examples}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* How We Use Cookies */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Cookies</h2>
              <div className="bg-emerald-50 rounded-2xl p-8">
                <ul className="space-y-3 text-gray-700 list-disc ml-6">
                  <li>To enable secure logins and protect your account</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyze website and platform usage for improvement</li>
                  <li>To personalize your experience and content</li>
                  <li>To support marketing, retargeting, and advertising campaigns</li>
                  <li>To enable integrations and third-party features</li>
                </ul>
              </div>
            </section>

            {/* Cookie Consent */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Consent and User Choices</h2>
              
              <div className="space-y-8">
                {/* Explicit Consent */}
                <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Explicit, Granular Consent (GDPR, CCPA, and Global Standards)</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Consent Banner:</h4>
                      <p className="text-gray-700 leading-relaxed mb-2">
                        On your first visit, you will see a cookie banner allowing you to:
                      </p>
                      <ul className="space-y-1 text-gray-700 list-disc ml-6">
                        <li>Accept all cookies</li>
                        <li>Reject all non-essential cookies</li>
                        <li>Customize your preferences by category</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">No Non-Essential Cookies Without Consent:</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Non-essential cookies (analytics, marketing, personalization) are only set if you provide explicit consent. No pre-ticked boxes.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Persistent Preferences:</h4>
                      <p className="text-gray-700 leading-relaxed">
                        You can change your cookie preferences at any time via the "Manage Cookie Preferences" link in the website footer.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Withdrawal of Consent:</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Withdrawing consent is as easy as giving it. Changes take effect immediately.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Region-Specific Compliance:</h4>
                      <ul className="space-y-2 text-gray-700 list-disc ml-6">
                        <li><strong>GDPR (EU/UK):</strong> Explicit opt-in required for all non-essential cookies.</li>
                        <li><strong>CCPA (California):</strong> Right to opt-out of sale/sharing; "Do Not Sell or Share My Personal Information" link provided.</li>
                        <li><strong>Other Jurisdictions:</strong> Geolocation rules ensure the correct consent model is displayed.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Browser Compatibility */}
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Browser and Device Compatibility</h3>
                  <ul className="space-y-2 text-gray-700 list-disc ml-6">
                    <li>Our cookie consent mechanism is fully responsive and works across all major browsers and devices.</li>
                    <li>Accessibility features ensure screen reader and keyboard navigation support.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Third Party Cookies */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies Set by Third Parties</h2>
              <div className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Some cookies are set by trusted third-party service providers (e.g., analytics, advertising, CRM, integration partners). These providers are contractually required to use your data only for specified purposes and to implement industry-standard security measures.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For a list of key third-party providers and their privacy practices, contact <a href="mailto:privacy@foodagriai.com" className="text-orange-600 hover:text-orange-700">privacy@foodagriai.com</a>.
                </p>
              </div>
            </section>

            {/* Managing Cookies */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Managing and Disabling Cookies</h2>
              <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Via Our Preferences Panel:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Use the "Manage Cookie Preferences" link on our site to update your choices at any time.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Via Browser Settings:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Most browsers allow you to block or delete cookies. Refer to your browser's help section for instructions. Note: Blocking cookies may affect site functionality.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Analytics Opt-Out:</h4>
                    <p className="text-gray-700 leading-relaxed">
                      For Google Analytics, you can install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 underline">Google Analytics Opt-Out Browser Add-on</a>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Collected */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Collected via Cookies</h2>
              <div className="bg-indigo-50 rounded-2xl p-8 border border-indigo-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your preferences, cookies may collect:
                </p>
                <ul className="space-y-2 text-gray-700 list-disc ml-6 mb-4">
                  <li>Device and browser information</li>
                  <li>IP address and geolocation (approximate)</li>
                  <li>Pages visited and actions taken</li>
                  <li>Referring and exit URLs</li>
                  <li>Interaction with ads and marketing content</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  All data collected via cookies is processed in accordance with our{' '}
                  <button 
                    onClick={() => navigate('/privacy-policy')}
                    className="text-indigo-600 hover:text-indigo-700 underline font-medium"
                  >
                    Privacy Policy
                  </button>.
                </p>
              </div>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">International Transfers and Safeguards</h2>
              <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
                <p className="text-gray-700 leading-relaxed">
                  If cookie data is transferred outside your jurisdiction, we use Standard Contractual Clauses (SCCs) and supplementary safeguards (encryption, access controls) to ensure your data is protected in line with GDPR and CCPA requirements.
                </p>
              </div>
            </section>

            {/* Retention */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Retention of Cookie Data</h2>
              <div className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
                <ul className="space-y-3 text-gray-700 list-disc ml-6 mb-4">
                  <li><strong>Session Cookies:</strong> Expire when you close your browser.</li>
                  <li><strong>Persistent Cookies:</strong> Retained for up to 13 months unless you withdraw consent or delete them sooner.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  For more details, see our{' '}
                  <button 
                    onClick={() => navigate('/data-handling-deletion-schedule')}
                    className="text-yellow-600 hover:text-yellow-700 underline font-medium"
                  >
                    Data Handling and Deletion Schedule
                  </button>.
                </p>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Cookie Policy</h2>
              <div className="bg-teal-50 rounded-2xl p-8 border border-teal-200">
                <p className="text-gray-700 leading-relaxed">
                  We may update this Cookie Policy from time to time. Material changes will be announced via website banner and email (where applicable), and the "Last Updated" date will be changed. For substantial changes, renewed consent may be requested.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200 text-center">
                <p className="text-gray-700 leading-relaxed mb-6">
                  For questions about this Cookie Policy or your privacy rights, contact:
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

export default CookiePolicyPage;