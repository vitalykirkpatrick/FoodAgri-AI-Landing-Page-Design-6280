import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import SchedulingModal from '../modals/SchedulingModal';
import useModal from '../../hooks/useModal';

const { FiTarget, FiEdit3, FiShield, FiHeadphones, FiTrendingUp, FiUsers, FiSearch, FiLinkedin } = FiIcons;

const OurServices = () => {
  const navigate = useNavigate();
  const schedulingModal = useModal();

  const services = [
    {
      icon: FiTarget,
      title: "Appointment Setting",
      description: "Professional appointment setting services that fill your calendar with qualified prospects.",
      features: [
        "Qualified prospect identification",
        "Professional outreach and follow-up",
        "Calendar integration and scheduling",
        "Detailed prospect research and preparation"
      ],
      slug: "appointment-setting"
    },
    {
      icon: FiTrendingUp,
      title: "B2B Lead Generation",
      description: "Comprehensive lead generation strategies tailored for food and agriculture businesses.",
      features: [
        "Industry-specific lead identification",
        "Multi-channel lead generation campaigns",
        "Lead qualification and scoring",
        "CRM integration and management"
      ],
      slug: "lead-generation"
    },
    {
      icon: FiSearch,
      title: "Market Research",
      description: "In-depth market analysis and competitor intelligence for strategic decision making.",
      features: [
        "Industry trend analysis",
        "Competitor positioning research",
        "Market opportunity identification",
        "Custom research reports and insights"
      ],
      slug: "market-research"
    },
    {
      icon: FiUsers,
      title: "Account Based Marketing",
      description: "Targeted marketing strategies for high-value prospects and enterprise accounts.",
      features: [
        "Strategic account identification",
        "Personalized marketing campaigns",
        "Multi-touchpoint engagement strategies",
        "Account penetration and expansion"
      ],
      slug: "account-based-marketing"
    },
    {
      icon: FiEdit3,
      title: "Cold Email Outreach",
      description: "Professional cold email campaigns that generate responses and drive conversions.",
      features: [
        "Personalized email sequences",
        "A/B testing and optimization",
        "Deliverability management",
        "Response tracking and analytics"
      ],
      slug: "cold-email-outreach"
    },
    {
      icon: FiLinkedin,
      title: "LinkedIn Outreach",
      description: "Strategic LinkedIn campaigns to connect with decision makers and build relationships.",
      features: [
        "Profile optimization and strategy",
        "Personalized connection requests",
        "Follow-up message sequences",
        "Relationship building and nurturing"
      ],
      slug: "linkedin-outreach"
    },
    {
      icon: FiHeadphones,
      title: "Outsourced SDR Services",
      description: "Dedicated sales development representatives to accelerate your sales pipeline.",
      features: [
        "Dedicated SDR team assignment",
        "Full sales process management",
        "Lead qualification and handoff",
        "Performance reporting and optimization"
      ],
      slug: "outsourced-sdr-services"
    },
    {
      icon: FiShield,
      title: "Sales Enablement",
      description: "Comprehensive sales tools and training to maximize your team's effectiveness.",
      features: [
        "Sales process optimization",
        "Training and coaching programs",
        "Sales collateral development",
        "Performance tracking and analytics"
      ],
      isPopular: true,
      slug: "sales-enablement"
    }
  ];

  const handleServiceClick = (slug) => {
    navigate(`/services/${slug}`);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect solution for your business needs, or combine multiple services for maximum impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${
                service.isPopular ? 'border-emerald-400' : 'border-gray-100'
              }`}
              onClick={() => handleServiceClick(service.slug)}
            >
              {service.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-4">
                <SafeIcon icon={service.icon} className="w-7 h-7 text-emerald-600" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-xs">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(service.slug);
                  }}
                  className={`w-full py-2 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    service.isPopular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  View Packages
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-emerald-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need a custom solution?
            </h3>
            <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation and we'll create a tailored package that fits your specific business needs and budget.
            </p>
            <button
              onClick={schedulingModal.openModal}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule Free Consultation
            </button>
          </div>
        </motion.div>
      </div>

      <SchedulingModal isOpen={schedulingModal.isOpen} onClose={schedulingModal.closeModal} />
    </section>
  );
};

export default OurServices;