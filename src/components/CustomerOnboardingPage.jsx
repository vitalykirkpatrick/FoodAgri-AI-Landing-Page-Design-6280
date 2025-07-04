import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Navigation from './Navigation';
import Footer from './sections/Footer';

const { FiArrowLeft, FiUser, FiMail, FiPhone, FiBriefcase, FiMapPin, FiDollarSign, FiUsers, FiTarget, FiTrendingUp, FiSettings, FiShield, FiCheck, FiUpload } = FiIcons;

const CustomerOnboardingPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    industry: '',
    companySize: '',
    annualRevenue: '',
    website: '',
    yearEstablished: '',
    
    // Contact Information
    contactName: '',
    title: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    
    // Business Operations
    businessType: '',
    primaryProducts: '',
    targetMarkets: '',
    salesChannels: [],
    geographicMarkets: '',
    seasonality: '',
    
    // Current Challenges
    primaryChallenges: [],
    currentLeadGenSources: [],
    monthlyLeadVolume: '',
    conversionRate: '',
    averageDealSize: '',
    salesCycleLength: '',
    
    // Technology Stack
    currentCRM: '',
    marketingTools: [],
    salesTools: [],
    techStack: '',
    integrationNeeds: '',
    
    // Goals & Objectives
    primaryGoals: [],
    timeframe: '',
    budgetRange: '',
    successMetrics: '',
    
    // Team Information
    salesTeamSize: '',
    marketingTeamSize: '',
    decisionMakers: '',
    
    // Additional Information
    additionalInfo: '',
    documents: null
  });

  const totalSteps = 6;

  const industryOptions = [
    'Food Manufacturing', 'Food Processing', 'Agriculture', 'Dairy Products',
    'Meat & Poultry', 'Seafood', 'Beverages', 'Bakery & Confectionery',
    'Frozen Foods', 'Organic Foods', 'Pet Food', 'Food Distribution',
    'Restaurant/Foodservice', 'Food Packaging', 'Agricultural Equipment',
    'Food Technology', 'Other'
  ];

  const companySizeOptions = [
    '1-10 employees', '11-50 employees', '51-200 employees', 
    '201-500 employees', '501-1000 employees', '1000+ employees'
  ];

  const revenueOptions = [
    'Under $1M', '$1M - $5M', '$5M - $25M', '$25M - $100M', '$100M - $500M', '$500M+'
  ];

  const businessTypeOptions = [
    'B2B Only', 'B2C Only', 'Both B2B and B2C', 'B2B2C'
  ];

  const salesChannelsOptions = [
    'Direct Sales', 'Distributors', 'Retailers', 'Online/E-commerce', 
    'Food Service', 'Export/International', 'Private Label'
  ];

  const challengesOptions = [
    'Lead Generation', 'Sales Process Efficiency', 'Marketing Automation',
    'Customer Support', 'Data Management', 'Team Training', 'Market Expansion', 
    'Customer Retention', 'Pricing Strategy', 'Inventory Management', 'Quality Control'
  ];

  const leadSourcesOptions = [
    'Cold Calling', 'Email Marketing', 'Social Media', 'Trade Shows',
    'Referrals', 'Website', 'Content Marketing', 'Paid Advertising',
    'Networking Events', 'Industry Publications'
  ];

  const marketingToolsOptions = [
    'HubSpot', 'Mailchimp', 'Constant Contact', 'Salesforce Marketing Cloud',
    'Marketo', 'Pardot', 'ActiveCampaign', 'ConvertKit', 'None', 'Other'
  ];

  const salesToolsOptions = [
    'Salesforce', 'HubSpot CRM', 'Pipedrive', 'Zoho CRM', 'Monday.com',
    'Copper', 'Freshsales', 'Microsoft Dynamics', 'None', 'Other'
  ];

  const goalsOptions = [
    'Increase Lead Generation', 'Improve Sales Conversion', 'Automate Marketing',
    'Enhance Customer Support', 'Streamline Operations', 'Expand Market Reach', 
    'Reduce Manual Tasks', 'Improve Data Analytics', 'Scale Team Productivity'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked 
          ? [...(prev[name] || []), value]
          : (prev[name] || []).filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      documents: e.target.files[0]
    }));
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return formData.companyName && formData.industry && formData.companySize && formData.annualRevenue;
      case 2:
        return formData.contactName && formData.title && formData.email && formData.phone;
      case 3:
        return formData.businessType && formData.primaryProducts && formData.targetMarkets && formData.salesChannels.length > 0;
      case 4:
        return formData.primaryChallenges.length > 0;
      case 5:
        return formData.primaryGoals.length > 0 && formData.timeframe && formData.budgetRange;
      case 6:
        return true; // No required fields in final step
      default:
        return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      console.log('Customer Onboarding Data:', formData);
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert('Thank you! Your information has been submitted successfully. Our team will review your details and contact you within 24 hours to discuss your custom AI solution.');
      
      // Reset form
      setFormData({
        companyName: '', industry: '', companySize: '', annualRevenue: '', website: '', yearEstablished: '',
        contactName: '', title: '', email: '', phone: '', address: '', city: '', state: '', zipCode: '', country: '',
        businessType: '', primaryProducts: '', targetMarkets: '', salesChannels: [], geographicMarkets: '', seasonality: '',
        primaryChallenges: [], currentLeadGenSources: [], monthlyLeadVolume: '', conversionRate: '', averageDealSize: '', salesCycleLength: '',
        currentCRM: '', marketingTools: [], salesTools: [], techStack: '', integrationNeeds: '',
        primaryGoals: [], timeframe: '', budgetRange: '', successMetrics: '',
        salesTeamSize: '', marketingTeamSize: '', decisionMakers: '',
        additionalInfo: '', documents: null
      });
      setCurrentStep(1);
      
    } catch (error) {
      alert('Sorry, there was an error submitting your information. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (validateCurrentStep() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else if (!validateCurrentStep()) {
      alert('Please fill in all required fields before proceeding.');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry <span className="text-red-500">*</span>
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  <option value="">Select your industry</option>
                  {industryOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Size <span className="text-red-500">*</span>
                </label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  <option value="">Select company size</option>
                  {companySizeOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Revenue <span className="text-red-500">*</span>
                </label>
                <select
                  name="annualRevenue"
                  value={formData.annualRevenue}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  <option value="">Select revenue range</option>
                  {revenueOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="https://yourcompany.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year Established</label>
                <input
                  type="number"
                  name="yearEstablished"
                  value={formData.yearEstablished}
                  onChange={handleInputChange}
                  min="1800"
                  max={new Date().getFullYear()}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="2020"
                />
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title/Position <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="CEO, Sales Director, etc."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Street address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="City"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State/Province</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="State/Province"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ZIP/Postal Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="ZIP Code"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Country"
                />
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Operations</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Type <span className="text-red-500">*</span>
              </label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              >
                <option value="">Select business type</option>
                {businessTypeOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Products/Services <span className="text-red-500">*</span>
              </label>
              <textarea
                name="primaryProducts"
                value={formData.primaryProducts}
                onChange={handleInputChange}
                required
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Describe your main products or services..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Markets/Customer Types <span className="text-red-500">*</span>
              </label>
              <textarea
                name="targetMarkets"
                value={formData.targetMarkets}
                onChange={handleInputChange}
                required
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Describe your target customers (restaurants, retailers, manufacturers, etc.)"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Sales Channels <span className="text-red-500">*</span> (Select all that apply)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {salesChannelsOptions.map(option => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="salesChannels"
                      value={option}
                      checked={formData.salesChannels.includes(option)}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Geographic Markets</label>
              <textarea
                name="geographicMarkets"
                value={formData.geographicMarkets}
                onChange={handleInputChange}
                rows="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Local, Regional, National, International markets you serve"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Seasonality Factors</label>
              <textarea
                name="seasonality"
                value={formData.seasonality}
                onChange={handleInputChange}
                rows="2"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="How does seasonality affect your business? Peak seasons, slow periods, etc."
              />
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Challenges & Technology</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Primary Business Challenges <span className="text-red-500">*</span> (Select all that apply)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {challengesOptions.map(option => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="primaryChallenges"
                      value={option}
                      checked={formData.primaryChallenges.includes(option)}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Current Lead Generation Sources (Select all that apply)</label>
              <div className="grid md:grid-cols-2 gap-3">
                {leadSourcesOptions.map(option => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="currentLeadGenSources"
                      value={option}
                      checked={formData.currentLeadGenSources.includes(option)}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Lead Volume</label>
                <select
                  name="monthlyLeadVolume"
                  value={formData.monthlyLeadVolume}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  <option value="">Select range</option>
                  <option value="0-50">0-50 leads</option>
                  <option value="51-100">51-100 leads</option>
                  <option value="101-250">101-250 leads</option>
                  <option value="251-500">251-500 leads</option>
                  <option value="500+">500+ leads</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lead to Customer Conversion Rate</label>
                <select
                  name="conversionRate"
                  value={formData.conversionRate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  <option value="">Select range</option>
                  <option value="<5%">Less than 5%</option>
                  <option value="5-10%">5-10%</option>
                  <option value="11-20%">11-20%</option>
                  <option value="21-30%">21-30%</option>
                  <option value=">30%">More than 30%</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Average Deal Size</label>
                <select
                  name="averageDealSize"
                  value={formData.averageDealSize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  <option value="">Select range</option>
                  <option value="<$10K">Less than $10K</option>
                  <option value="$10K-$50K">$10K - $50K</option>
                  <option value="$50K-$100K">$50K - $100K</option>
                  <option value="$100K-$500K">$100K - $500K</option>
                  <option value=">$500K">More than $500K</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Average Sales Cycle Length</label>
                <select
                  name="salesCycleLength"
                  value={formData.salesCycleLength}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  <option value="">Select range</option>
                  <option value="<1 month">Less than 1 month</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value=">12 months">More than 12 months</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current CRM System</label>
              <input
                type="text"
                name="currentCRM"
                value={formData.currentCRM}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Salesforce, HubSpot, None, etc."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Current Marketing Tools (Select all that apply)</label>
              <div className="grid md:grid-cols-2 gap-3">
                {marketingToolsOptions.map(option => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="marketingTools"
                      value={option}
                      checked={formData.marketingTools.includes(option)}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Current Sales Tools (Select all that apply)</label>
              <div className="grid md:grid-cols-2 gap-3">
                {salesToolsOptions.map(option => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="salesTools"
                      value={option}
                      checked={formData.salesTools.includes(option)}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Other Technology Stack</label>
              <textarea
                name="techStack"
                value={formData.techStack}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="List other important software, systems, or tools your business uses"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Integration Needs</label>
              <textarea
                name="integrationNeeds"
                value={formData.integrationNeeds}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="What systems need to integrate with our AI platform? Any specific requirements?"
              />
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Goals & Team Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Primary Goals <span className="text-red-500">*</span> (Select all that apply)
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {goalsOptions.map(option => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="primaryGoals"
                      value={option}
                      checked={formData.primaryGoals.includes(option)}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Implementation Timeframe <span className="text-red-500">*</span>
                </label>
                <select
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  <option value="">Select timeframe</option>
                  <option value="ASAP">ASAP (Within 30 days)</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="Planning phase">Still in planning phase</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range <span className="text-red-500">*</span>
                </label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  <option value="">Select budget range</option>
                  <option value="Under $5K/month">Under $5K/month</option>
                  <option value="$5K-$15K/month">$5K-$15K/month</option>
                  <option value="$15K-$30K/month">$15K-$30K/month</option>
                  <option value="$30K-$50K/month">$30K-$50K/month</option>
                  <option value="$50K+/month">$50K+/month</option>
                  <option value="Project-based">Project-based pricing</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Success Metrics</label>
              <textarea
                name="successMetrics"
                value={formData.successMetrics}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="How will you measure success? What KPIs are most important?"
              />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sales Team Size</label>
                <select
                  name="salesTeamSize"
                  value={formData.salesTeamSize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  <option value="">Select size</option>
                  <option value="0">No dedicated sales team</option>
                  <option value="1-2">1-2 people</option>
                  <option value="3-5">3-5 people</option>
                  <option value="6-10">6-10 people</option>
                  <option value="10+">10+ people</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Marketing Team Size</label>
                <select
                  name="marketingTeamSize"
                  value={formData.marketingTeamSize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  <option value="">Select size</option>
                  <option value="0">No dedicated marketing team</option>
                  <option value="1-2">1-2 people</option>
                  <option value="3-5">3-5 people</option>
                  <option value="6-10">6-10 people</option>
                  <option value="10+">10+ people</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Key Decision Makers</label>
                <input
                  type="text"
                  name="decisionMakers"
                  value={formData.decisionMakers}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Who else is involved in decisions?"
                />
              </div>
            </div>
          </div>
        );
      
      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Information</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                placeholder="Please share any additional information about your business, specific challenges, or requirements that would help us better understand your needs and create the perfect AI solution for you."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Supporting Documents (Optional)</label>
              <div className="border-2 border-dashed border-emerald-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors">
                <SafeIcon icon={FiUpload} className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  Upload any relevant documents (company overview, current process docs, etc.)
                </p>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  id="documents"
                  accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                />
                <label
                  htmlFor="documents"
                  className="cursor-pointer text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  Choose File
                </label>
                <p className="text-xs text-gray-500 mt-1">
                  PDF, DOC, TXT, JPG, PNG (max 10MB)
                </p>
                {formData.documents && (
                  <p className="text-sm text-green-600 mt-2">
                    File selected: {formData.documents.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

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
              <SafeIcon icon={FiBriefcase} className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Grow Your Business Together
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Tell us about your business so we can create a custom AI solution that drives real results for your food or agriculture company.
            </p>
            
            {/* Progress Bar */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                <span className="text-sm font-medium text-emerald-600">
                  Step {currentStep} of {totalSteps}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              {renderStep()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit & Start Growing'}
                  </button>
                )}
              </div>
            </motion.div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomerOnboardingPage;