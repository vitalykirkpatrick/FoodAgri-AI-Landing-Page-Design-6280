import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Navigation from './Navigation';
import Footer from './sections/Footer';

const { FiArrowLeft, FiCheck, FiStar, FiTarget, FiTrendingUp, FiUsers, FiShield, FiZap, FiHeadphones } = FiIcons;

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const services = {
    'appointment-setting': {
      title: 'Appointment Setting',
      description: 'Professional appointment setting services that fill your calendar with qualified prospects',
      icon: FiTarget,
      hero: 'Fill Your Calendar with Qualified Prospects',
      subtitle: 'Let our expert team handle your appointment setting while you focus on closing deals',
      packages: [
        {
          name: 'Starter Package',
          price: 'Custom Pricing',
          description: 'Perfect for small businesses getting started',
          features: [
            '20-30 qualified appointments per month',
            'Basic prospect research',
            'Standard email templates',
            'CRM integration',
            'Monthly reporting'
          ],
          popular: false
        },
        {
          name: 'Growth Package',
          price: 'Custom Pricing',
          description: 'Ideal for growing businesses ready to scale',
          features: [
            '40-60 qualified appointments per month',
            'Advanced prospect research',
            'Custom messaging',
            'Multi-channel outreach',
            'Dedicated account manager',
            'Weekly reporting',
            'A/B testing'
          ],
          popular: true
        },
        {
          name: 'Enterprise Package',
          price: 'Custom Pricing',
          description: 'Comprehensive solution for large organizations',
          features: [
            '80+ qualified appointments per month',
            'Premium prospect intelligence',
            'Fully customized campaigns',
            'Multi-channel automation',
            'Dedicated team of specialists',
            'Real-time reporting',
            'Advanced analytics',
            'Priority support'
          ],
          popular: false
        }
      ]
    },
    'lead-generation': {
      title: 'B2B Lead Generation',
      description: 'Comprehensive lead generation strategies tailored for food and agriculture businesses',
      icon: FiTrendingUp,
      hero: 'Generate High-Quality B2B Leads',
      subtitle: 'Leverage our proven strategies to build a pipeline of qualified prospects',
      packages: [
        {
          name: 'Foundation Package',
          price: 'Custom Pricing',
          description: 'Essential lead generation for emerging businesses',
          features: [
            '200-300 qualified leads per month',
            'Industry-specific targeting',
            'Basic lead scoring',
            'Email sequences',
            'Monthly strategy review'
          ],
          popular: false
        },
        {
          name: 'Accelerator Package',
          price: 'Custom Pricing',
          description: 'Advanced lead generation for growth-focused companies',
          features: [
            '500-800 qualified leads per month',
            'Multi-channel campaigns',
            'Advanced lead scoring',
            'Personalized outreach',
            'Lead nurturing sequences',
            'Bi-weekly optimization',
            'Performance analytics'
          ],
          popular: true
        },
        {
          name: 'Dominator Package',
          price: 'Custom Pricing',
          description: 'Maximum lead generation for market leaders',
          features: [
            '1000+ qualified leads per month',
            'Omnichannel strategy',
            'AI-powered lead scoring',
            'Full automation suite',
            'Dedicated success team',
            'Weekly optimization',
            'Custom integrations',
            'Executive reporting'
          ],
          popular: false
        }
      ]
    },
    'market-research': {
      title: 'Market Research',
      description: 'In-depth market analysis and competitor intelligence for strategic decision making',
      icon: FiUsers,
      hero: 'Make Data-Driven Strategic Decisions',
      subtitle: 'Get comprehensive market insights to stay ahead of the competition',
      packages: [
        {
          name: 'Market Intel Package',
          price: 'Custom Pricing',
          description: 'Essential market research for informed decisions',
          features: [
            'Industry trend analysis',
            'Competitor landscape overview',
            'Market size assessment',
            'Customer persona development',
            'Monthly market updates'
          ],
          popular: false
        },
        {
          name: 'Strategic Insights Package',
          price: 'Custom Pricing',
          description: 'Comprehensive research for strategic planning',
          features: [
            'Deep competitive analysis',
            'Market opportunity mapping',
            'Customer behavior insights',
            'Pricing strategy recommendations',
            'Quarterly strategic reviews',
            'Custom research projects',
            'Executive briefings'
          ],
          popular: true
        },
        {
          name: 'Market Mastery Package',
          price: 'Custom Pricing',
          description: 'Advanced intelligence for market domination',
          features: [
            'Real-time market monitoring',
            'Predictive trend analysis',
            'Competitive intelligence alerts',
            'Market entry strategies',
            'Risk assessment reports',
            'Custom dashboards',
            'Dedicated research team',
            'Priority research requests'
          ],
          popular: false
        }
      ]
    }
  };

  const currentService = services[serviceId];

  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

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
            <span>Back to Services</span>
          </button>

          <div className="text-center max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={currentService.icon} className="w-10 h-10 text-emerald-600" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {currentService.hero}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {currentService.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started Today
              </button>
              <button className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the package that best fits your business needs and growth goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {currentService.packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  pkg.popular ? 'border-emerald-400 ring-4 ring-emerald-100' : 'border-gray-100'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <SafeIcon icon={FiStar} className="w-4 h-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{pkg.price}</div>
                  <p className="text-sm text-gray-500">Tailored to your needs</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-emerald-50 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
                Every business is unique. Let's discuss how we can create a tailored package that perfectly fits your specific requirements and budget.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Schedule Custom Consultation
                </button>
                <button className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
                  Contact Sales Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;