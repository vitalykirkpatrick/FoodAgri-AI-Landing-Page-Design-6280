import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Navigation from './Navigation';
import Footer from './sections/Footer';

const { FiArrowLeft, FiShield, FiUpload, FiCheck, FiUser, FiMail, FiPhone, FiFileText } = FiIcons;

const DataRightsRequestPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    accountId: '',
    requestTypes: [],
    otherRequest: '',
    description: '',
    supportingDocs: null,
    consent: false,
    isAgent: false,
    authorizationDocs: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const requestTypes = [
    { id: 'access', label: 'Access my data' },
    { id: 'delete', label: 'Delete my data' },
    { id: 'correct', label: 'Correct my data' },
    { id: 'restrict', label: 'Restrict processing' },
    { id: 'object', label: 'Object to processing/marketing' },
    { id: 'portability', label: 'Data portability (export)' },
    { id: 'withdraw', label: 'Withdraw consent' },
    { id: 'other', label: 'Other' }
  ];

  const handleRequestTypeChange = (typeId) => {
    setFormData(prev => ({
      ...prev,
      requestTypes: prev.requestTypes.includes(typeId)
        ? prev.requestTypes.filter(id => id !== typeId)
        : [...prev.requestTypes, typeId]
    }));
  };

  const handleFileChange = (field, file) => {
    setFormData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      console.log('Data Rights Request:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      alert('Your data rights request has been submitted successfully. We will respond within 30 days or as required by law.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        accountId: '',
        requestTypes: [],
        otherRequest: '',
        description: '',
        supportingDocs: null,
        consent: false,
        isAgent: false,
        authorizationDocs: null
      });
    } catch (error) {
      alert('Sorry, there was an error submitting your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/privacy-policy')}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
            <span>Back to Privacy Policy</span>
          </button>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiShield} className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Data Rights Request Form
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Exercise your privacy rights under GDPR, CCPA, and other applicable data protection laws
            </p>
            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Response Time:</strong> We will respond within 30 days or as required by law
              </p>
              <p className="text-sm text-gray-700">
                <strong>Contact:</strong> <a href="mailto:privacy@foodagriai.com" className="text-blue-600 hover:text-blue-700">privacy@foodagriai.com</a> | <a href="tel:+13075551234" className="text-blue-600 hover:text-blue-700">+1 (307) 555-1234</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* 1. Your Information */}
            <section className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <SafeIcon icon={FiUser} className="w-6 h-6 text-emerald-600 mr-3" />
                1. Your Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Account ID/Username (if any)
                  </label>
                  <input
                    type="text"
                    name="accountId"
                    value={formData.accountId}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="Your account ID or username"
                  />
                </div>
              </div>
            </section>

            {/* 2. Type of Request */}
            <section className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <SafeIcon icon={FiCheck} className="w-6 h-6 text-blue-600 mr-3" />
                2. Type of Request (select all that apply)
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {requestTypes.map((type) => (
                  <label key={type.id} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.requestTypes.includes(type.id)}
                      onChange={() => handleRequestTypeChange(type.id)}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{type.label}</span>
                  </label>
                ))}
              </div>
              {formData.requestTypes.includes('other') && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Please specify other request:
                  </label>
                  <input
                    type="text"
                    name="otherRequest"
                    value={formData.otherRequest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Describe your specific request"
                  />
                </div>
              )}
            </section>

            {/* 3. Describe Your Request */}
            <section className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <SafeIcon icon={FiFileText} className="w-6 h-6 text-purple-600 mr-3" />
                3. Describe Your Request
              </h2>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                placeholder="Please provide detailed information about your data rights request. Include any specific data categories, time periods, or other relevant details that will help us process your request efficiently."
              />
            </section>

            {/* 4. Identity Verification */}
            <section className="bg-orange-50 rounded-2xl p-8 border border-orange-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <SafeIcon icon={FiShield} className="w-6 h-6 text-orange-600 mr-3" />
                4. Identity Verification
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-orange-200">
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Please submit this form using your registered email address.</li>
                    <li>• For certain requests, we may ask for additional information or documentation to verify your identity.</li>
                    <li>• Supporting documents are optional but may help expedite your request.</li>
                  </ul>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Supporting Documents (optional)
                  </label>
                  <div className="border-2 border-dashed border-orange-300 rounded-xl p-6 text-center hover:border-orange-400 transition-colors">
                    <SafeIcon icon={FiUpload} className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Click to upload or drag and drop
                    </p>
                    <input
                      type="file"
                      onChange={(e) => handleFileChange('supportingDocs', e.target.files[0])}
                      className="hidden"
                      id="supporting-docs"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    <label
                      htmlFor="supporting-docs"
                      className="cursor-pointer text-orange-600 hover:text-orange-700 font-medium"
                    >
                      Choose File
                    </label>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF, DOC, JPG, PNG (max 10MB)
                    </p>
                    {formData.supportingDocs && (
                      <p className="text-sm text-green-600 mt-2">
                        File selected: {formData.supportingDocs.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Consent */}
            <section className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Consent</h2>
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-0.5"
                />
                <span className="text-gray-700">
                  I consent to FoodAgri AI LLC processing this request and verifying my identity as described in the{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/privacy-policy')}
                    className="text-green-600 hover:text-green-700 underline font-medium"
                  >
                    Privacy Policy
                  </button>. *
                </span>
              </label>
            </section>

            {/* 6. Authorized Agent */}
            <section className="bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Are you an authorized agent acting on behalf of someone else?</h2>
              <div className="space-y-4">
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="isAgent"
                      value="false"
                      checked={!formData.isAgent}
                      onChange={(e) => setFormData(prev => ({ ...prev, isAgent: false }))}
                      className="w-5 h-5 text-yellow-600 border-gray-300 focus:ring-yellow-500"
                    />
                    <span className="text-gray-700">No</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="isAgent"
                      value="true"
                      checked={formData.isAgent}
                      onChange={(e) => setFormData(prev => ({ ...prev, isAgent: true }))}
                      className="w-5 h-5 text-yellow-600 border-gray-300 focus:ring-yellow-500"
                    />
                    <span className="text-gray-700">Yes (please upload proof of authorization)</span>
                  </label>
                </div>
                {formData.isAgent && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Proof of Authorization
                    </label>
                    <div className="border-2 border-dashed border-yellow-300 rounded-xl p-6 text-center hover:border-yellow-400 transition-colors">
                      <SafeIcon icon={FiUpload} className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                      <input
                        type="file"
                        onChange={(e) => handleFileChange('authorizationDocs', e.target.files[0])}
                        className="hidden"
                        id="authorization-docs"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                      <label
                        htmlFor="authorization-docs"
                        className="cursor-pointer text-yellow-600 hover:text-yellow-700 font-medium"
                      >
                        Choose File
                      </label>
                      {formData.authorizationDocs && (
                        <p className="text-sm text-green-600 mt-2">
                          File selected: {formData.authorizationDocs.name}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* 7. Submission Date */}
            <section className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Submission Date</h2>
              <p className="text-gray-700">
                <strong>Auto-filled:</strong> {new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  timeZone: 'UTC'
                })}
              </p>
            </section>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting || !formData.consent}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-12 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
              >
                {isSubmitting ? 'Submitting Request...' : 'Submit Data Rights Request'}
              </button>
            </div>

            {/* Notice */}
            <section className="bg-indigo-50 rounded-2xl p-8 border border-indigo-200 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Notice</h3>
              <div className="space-y-3 text-gray-700 text-sm leading-relaxed">
                <p>
                  We may retain certain data as required by law or for legitimate business purposes. For more information, see our{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/privacy-policy')}
                    className="text-indigo-600 hover:text-indigo-700 underline font-medium"
                  >
                    Privacy Policy
                  </button>{' '}
                  and{' '}
                  <button
                    type="button"
                    onClick={() => navigate('/data-handling-deletion-schedule')}
                    className="text-indigo-600 hover:text-indigo-700 underline font-medium"
                  >
                    Data Handling and Deletion Schedule
                  </button>.
                </p>
                <p>
                  Contact us at{' '}
                  <a href="mailto:privacy@foodagriai.com" className="text-indigo-600 hover:text-indigo-700 underline">
                    privacy@foodagriai.com
                  </a>{' '}
                  or{' '}
                  <a href="tel:+13075551234" className="text-indigo-600 hover:text-indigo-700 underline">
                    +1 (307) 555-1234
                  </a>{' '}
                  with questions.
                </p>
                <p>
                  <strong>We will respond within 30 days or as required by law. Exercising your rights will not affect your service or result in discrimination.</strong>
                </p>
              </div>
            </section>
          </motion.form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataRightsRequestPage;