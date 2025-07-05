import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../../lib/supabase';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiSettings, FiEdit, FiImage, FiFileText, FiBarChart, FiLogOut, FiSave, FiPlus, FiTrash2 } = FiIcons;

const AdminDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('content');
  const [content, setContent] = useState({});
  const [seoSettings, setSeoSettings] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState('');

  const tabs = [
    { id: 'content', name: 'Content Management', icon: FiEdit },
    { id: 'seo', name: 'SEO Settings', icon: FiBarChart },
    { id: 'images', name: 'Image Management', icon: FiImage },
    { id: 'settings', name: 'Site Settings', icon: FiSettings }
  ];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      // Load content data
      const { data: contentData } = await supabase
        .from('site_content')
        .select('*');
      
      // Load SEO data
      const { data: seoData } = await supabase
        .from('seo_settings')
        .select('*');

      if (contentData) {
        const contentObj = {};
        contentData.forEach(item => {
          contentObj[item.key] = item.value;
        });
        setContent(contentObj);
      }

      if (seoData) {
        const seoObj = {};
        seoData.forEach(item => {
          seoObj[item.key] = item.value;
        });
        setSeoSettings(seoObj);
      }
    } catch (error) {
      console.error('Error loading data:', error);
      setMessage('Error loading data');
    } finally {
      setIsLoading(false);
    }
  };

  const saveData = async () => {
    setIsSaving(true);
    try {
      // Save content
      for (const [key, value] of Object.entries(content)) {
        await supabase
          .from('site_content')
          .upsert({ key, value }, { onConflict: 'key' });
      }

      // Save SEO settings
      for (const [key, value] of Object.entries(seoSettings)) {
        await supabase
          .from('seo_settings')
          .upsert({ key, value }, { onConflict: 'key' });
      }

      setMessage('Changes saved successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error saving data:', error);
      setMessage('Error saving changes');
    } finally {
      setIsSaving(false);
    }
  };

  const updateContent = (key, value) => {
    setContent(prev => ({ ...prev, [key]: value }));
  };

  const updateSEO = (key, value) => {
    setSeoSettings(prev => ({ ...prev, [key]: value }));
  };

  const renderContentTab = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">Content Management</h3>
      
      {/* Hero Section */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="text-lg font-semibold mb-4">Hero Section</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Main Headline</label>
            <textarea
              value={content.hero_headline || ''}
              onChange={(e) => updateContent('hero_headline', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              rows="3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Hero Description</label>
            <textarea
              value={content.hero_description || ''}
              onChange={(e) => updateContent('hero_description', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              rows="4"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CTA Button Text</label>
            <input
              type="text"
              value={content.hero_cta_text || ''}
              onChange={(e) => updateContent('hero_cta_text', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="text-lg font-semibold mb-4">About Section</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">About Title</label>
            <input
              type="text"
              value={content.about_title || ''}
              onChange={(e) => updateContent('about_title', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">About Description</label>
            <textarea
              value={content.about_description || ''}
              onChange={(e) => updateContent('about_description', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              rows="6"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="text-lg font-semibold mb-4">Services Section</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Services Title</label>
            <input
              type="text"
              value={content.services_title || ''}
              onChange={(e) => updateContent('services_title', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Services Description</label>
            <textarea
              value={content.services_description || ''}
              onChange={(e) => updateContent('services_description', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              rows="3"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSEOTab = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">SEO Settings</h3>
      
      {/* Global SEO */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="text-lg font-semibold mb-4">Global SEO Settings</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
            <input
              type="text"
              value={seoSettings.site_title || ''}
              onChange={(e) => updateSEO('site_title', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
            <textarea
              value={seoSettings.meta_description || ''}
              onChange={(e) => updateSEO('meta_description', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              rows="3"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Keywords</label>
            <textarea
              value={seoSettings.keywords || ''}
              onChange={(e) => updateSEO('keywords', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              rows="2"
              placeholder="Separate keywords with commas"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">OG Image URL</label>
            <input
              type="url"
              value={seoSettings.og_image || ''}
              onChange={(e) => updateSEO('og_image', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Analytics */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h4 className="text-lg font-semibold mb-4">Analytics & Tracking</h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Google Analytics ID</label>
            <input
              type="text"
              value={seoSettings.google_analytics_id || ''}
              onChange={(e) => updateSEO('google_analytics_id', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="G-XXXXXXXXXX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Google Tag Manager ID</label>
            <input
              type="text"
              value={seoSettings.gtm_id || ''}
              onChange={(e) => updateSEO('gtm_id', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              placeholder="GTM-XXXXXXX"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Facebook Pixel ID</label>
            <input
              type="text"
              value={seoSettings.facebook_pixel_id || ''}
              onChange={(e) => updateSEO('facebook_pixel_id', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-semibold text-gray-900">FoodAgri AI Admin</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user.email}</span>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <SafeIcon icon={FiLogOut} className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {message && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-green-600">{message}</p>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <SafeIcon icon={tab.icon} className="w-5 h-5" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={saveData}
                  disabled={isSaving}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <SafeIcon icon={FiSave} className="w-4 h-4" />
                  <span>{isSaving ? 'Saving...' : 'Save Changes'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {isLoading ? (
              <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
              </div>
            ) : (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'content' && renderContentTab()}
                {activeTab === 'seo' && renderSEOTab()}
                {activeTab === 'images' && (
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Image Management</h3>
                    <p className="text-gray-600">Image management functionality will be added here.</p>
                  </div>
                )}
                {activeTab === 'settings' && (
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Site Settings</h3>
                    <p className="text-gray-600">Additional site settings will be added here.</p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;