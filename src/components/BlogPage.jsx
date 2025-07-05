import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import Navigation from './Navigation';
import Footer from './sections/Footer';
import SEOHead from './SEO/SEOHead';
import StructuredData from './SEO/StructuredData';

const { FiArrowLeft, FiCalendar, FiUser, FiClock, FiArrowRight, FiSearch } = FiIcons;

const BlogPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Demo blog posts - replace with WordPress API integration
  const blogPosts = [
    {
      id: 1,
      title: "AI-Powered Lead Generation: A Game Changer for Food Manufacturers",
      excerpt: "Discover how AI is revolutionizing lead generation in the food manufacturing industry, helping companies identify and convert high-quality prospects faster than ever.",
      content: "Full article content would be here...",
      author: "Vitaly Kirkpatrick",
      date: "2025-01-27",
      readTime: "5 min read",
      category: "AI Technology",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["AI", "Lead Generation", "Food Manufacturing"]
    },
    {
      id: 2,
      title: "The Future of Food Industry Sales: Automation and Personalization",
      excerpt: "Explore how sales automation is transforming the food industry while maintaining the personal touch that builds lasting customer relationships.",
      content: "Full article content would be here...",
      author: "Vitaly Kirkpatrick",
      date: "2025-01-25",
      readTime: "7 min read",
      category: "Sales Automation",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Sales", "Automation", "Food Industry"]
    },
    {
      id: 3,
      title: "Compliance Made Easy: AI Solutions for Food Safety Documentation",
      excerpt: "Learn how AI-powered documentation systems are helping food companies maintain compliance while reducing manual paperwork by 80%.",
      content: "Full article content would be here...",
      author: "Vitaly Kirkpatrick",
      date: "2025-01-23",
      readTime: "6 min read",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Compliance", "Food Safety", "Documentation"]
    },
    {
      id: 4,
      title: "ROI Case Study: How ABC Food Corp Increased Sales by 300%",
      excerpt: "A detailed case study showing how one food manufacturer transformed their sales process with AI automation and achieved remarkable results.",
      content: "Full article content would be here...",
      author: "Vitaly Kirkpatrick",
      date: "2025-01-20",
      readTime: "8 min read",
      category: "Case Studies",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Case Study", "ROI", "Sales Growth"]
    },
    {
      id: 5,
      title: "Agriculture Technology Trends: What's Next for 2025",
      excerpt: "Stay ahead of the curve with insights into the latest agriculture technology trends that will shape the industry in 2025 and beyond.",
      content: "Full article content would be here...",
      author: "Vitaly Kirkpatrick",
      date: "2025-01-18",
      readTime: "9 min read",
      category: "Industry Trends",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Agriculture", "Technology", "Trends"]
    },
    {
      id: 6,
      title: "Marketing Automation for Food Distributors: Best Practices",
      excerpt: "Discover proven marketing automation strategies specifically designed for food distributors to increase efficiency and drive more sales.",
      content: "Full article content would be here...",
      author: "Vitaly Kirkpatrick",
      date: "2025-01-15",
      readTime: "6 min read",
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Marketing", "Automation", "Food Distribution"]
    }
  ];

  const categories = [
    'all',
    'AI Technology',
    'Sales Automation',
    'Marketing',
    'Compliance',
    'Case Studies',
    'Industry Trends'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const seoData = {
    title: "FoodAgri AI Blog - AI Insights & Trends for Food & Agriculture Industry",
    description: "Stay updated with the latest insights, trends, and best practices in AI-powered solutions for food and agriculture businesses. Expert articles on sales automation, lead generation, compliance, and industry innovations from FoodAgri AI.",
    keywords: "food industry blog, agriculture AI insights, sales automation articles, food tech blog, agritech content, AI marketing tips, food industry trends, agriculture technology news, food safety compliance, sales optimization",
    canonical: "https://foodagriai.com/blog",
    image: "https://foodagriai.com/og-image-blog.jpg"
  };

  const structuredDataBlog = {
    "@type": "Blog",
    "name": "FoodAgri AI Blog",
    "description": "Expert insights on AI solutions for food and agriculture businesses",
    "url": "https://foodagriai.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "FoodAgri AI LLC"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://foodagriai.com/blog/${post.id}`,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "image": post.image,
      "keywords": post.tags.join(", ")
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead {...seoData} />
      <StructuredData type="website" data={structuredDataBlog} />
      
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
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
                FoodAgri AI Blog
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Expert insights, industry trends, and best practices for AI-powered growth in food and agriculture.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-lg">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Articles' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No articles found matching your search criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
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
                      <span className="flex items-center space-x-1">
                        <SafeIcon icon={FiClock} className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full mb-3">
                      {post.category}
                    </span>

                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-2 transition-colors">
                      <span>Read More</span>
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated with Industry Insights
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              Get the latest articles, case studies, and industry trends delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center max-w-lg mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-xl text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;