import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Navigation from './Navigation';
import Footer from './sections/Footer';
import AboutMe from './sections/AboutMe';
import SchedulingModal from './modals/SchedulingModal';
import DemoFormModal from './modals/DemoFormModal';
import useModal from '../hooks/useModal';
import SEOHead from './SEO/SEOHead';
import StructuredData from './SEO/StructuredData';

const { FiArrowLeft, FiAward, FiTrendingUp, FiUsers, FiTarget, FiCalendar, FiClock, FiUser, FiArrowRight } = FiIcons;

const AboutPage = () => {
  const navigate = useNavigate();
  const schedulingModal = useModal();
  const demoModal = useModal();

  const companyValues = [
    {
      icon: FiTarget,
      title: "Innovation-First Approach",
      description: "We combine cutting-edge AI technology with deep industry expertise to solve real business problems."
    },
    {
      icon: FiUsers,
      title: "Customer Success Focus",
      description: "Your success is our success. We're committed to delivering measurable results and ongoing support."
    },
    {
      icon: FiTrendingUp,
      title: "Continuous Improvement",
      description: "We constantly evolve our platform based on customer feedback and emerging industry trends."
    },
    {
      icon: FiAward,
      title: "Industry Expertise",
      description: "Built by food industry veterans who understand your unique challenges and opportunities."
    }
  ];

  // Demo blog posts for preview
  const latestPosts = [
    {
      id: 1,
      title: "AI-Powered Lead Generation: A Game Changer for Food Manufacturers",
      excerpt: "Discover how AI is revolutionizing lead generation in the food manufacturing industry, helping companies identify and convert high-quality prospects faster than ever.",
      author: "Vitaly Kirkpatrick",
      date: "2025-01-27",
      readTime: "5 min read",
      category: "AI Technology",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "The Future of Food Industry Sales: Automation and Personalization",
      excerpt: "Explore how sales automation is transforming the food industry while maintaining the personal touch that builds lasting customer relationships.",
      author: "Vitaly Kirkpatrick",
      date: "2025-01-25",
      readTime: "7 min read",
      category: "Sales Automation",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Compliance Made Easy: AI Solutions for Food Safety Documentation",
      excerpt: "Learn how AI-powered documentation systems are helping food companies maintain compliance while reducing manual paperwork by 80%.",
      author: "Vitaly Kirkpatrick",
      date: "2025-01-23",
      readTime: "6 min read",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const seoData = {
    title: "About FoodAgri AI - Meet the Team Behind AI-Powered Food Industry Solutions",
    description: "Learn about FoodAgri AI's mission to transform food and agriculture businesses with AI-powered sales automation and marketing solutions. Founded by industry veteran Vitaly Kirkpatrick with 18+ years of enterprise sales experience in food manufacturing and agriculture.",
    keywords: "about FoodAgri AI, food industry AI company, agriculture AI solutions, Vitaly Kirkpatrick, food tech company, agritech solutions, food industry expertise, agriculture technology leadership, AI food solutions team",
    canonical: "https://foodagriai.com/about",
    image: "https://foodagriai.com/og-image-about.jpg"
  };

  const structuredDataOrganization = {
    name: "FoodAgri AI LLC",
    description: "AI-powered sales and marketing automation platform specifically designed for food and agriculture businesses",
    founder: {
      "@type": "Person",
      "name": "Vitaly Kirkpatrick",
      "jobTitle": "Founder & CEO",
      "worksFor": {
        "@type": "Organization",
        "name": "FoodAgri AI LLC"
      }
    },
    foundingDate: "2025",
    industry: "Software",
    serviceArea: {
      "@type": "Country",
      "name": "United States"
    },
    knowsAbout: [
      "Food Industry Sales",
      "Agriculture Technology",
      "AI Automation",
      "Sales Process Optimization",
      "Food Safety Compliance"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead {...seoData} />
      <StructuredData type="organization" data={structuredDataOrganization} />
      
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About FoodAgri AI
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We're transforming the food and agriculture industry with AI-powered solutions that drive real business results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="bg-emerald-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                To help food and agriculture businesses reclaim their time, boost their margins, and scale with confidence using AI-powered sales and marketing that actually understands your industry.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <AboutMe />

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at FoodAgri AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <SafeIcon icon={value.icon} className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest from Our Blog */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, trends, and success stories in food industry AI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {latestPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                onClick={() => navigate(`/blog/${post.id}`)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center space-x-1">
                      <SafeIcon icon={FiUser} className="w-4 h-4" />
                      <span>{post.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </span>
                  </div>

                  <span className="inline-block bg-emerald-100 text-emerald-600 text-xs font-semibold px-2 py-1 rounded-full mb-3">
                    {post.category}
                  </span>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-1 text-sm text-gray-500">
                      <SafeIcon icon={FiClock} className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </span>
                    <button className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center space-x-1 transition-colors">
                      <span>Read More</span>
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View All Blog Posts Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={() => navigate('/blog')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2 mx-auto"
            >
              <span>View All Blog Posts</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Join the food and agriculture companies already scaling with FoodAgri AI. Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={schedulingModal.openModal}
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Schedule Free Consultation
              </button>
              <button
                onClick={demoModal.openModal}
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <SchedulingModal isOpen={schedulingModal.isOpen} onClose={schedulingModal.closeModal} />
      <DemoFormModal isOpen={demoModal.isOpen} onClose={demoModal.closeModal} />
      <Footer />
    </div>
  );
};

export default AboutPage;