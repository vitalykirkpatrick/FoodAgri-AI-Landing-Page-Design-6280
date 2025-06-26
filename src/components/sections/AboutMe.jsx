import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiAward, FiTrendingUp, FiUsers, FiTarget } = FiIcons;

const AboutMe = () => {
  const achievements = [
    { icon: FiAward, number: "18+", label: "Years in Enterprise Sales" },
    { icon: FiTrendingUp, number: "$5M+", label: "Revenue Generated" },
    { icon: FiUsers, number: "Fortune 500", label: "Clients Served" },
    { icon: FiTarget, number: "170%", label: "Peak Sales Growth" }
  ];

  const skills = [
    'Enterprise Sales Leadership',
    'Food Industry Sales',
    'SaaS & Cloud Solutions',
    'Account Management',
    'Lead Generation',
    'Sales Automation',
    'CRM Systems (Salesforce, SAP)',
    'Strategic Territory Management',
    'Analytical Instrumentation',
    'Quality Management Systems',
    'Food Safety Compliance',
    'Agricultural Technology',
    'Business Development',
    'Revenue Operations',
    'Customer Success',
    'IoT Solutions',
    'Data Analytics',
    'Pipeline Management'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Your <span className="text-emerald-600">Industry Expert</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Led by a proven food industry veteran who understands your challenges because he's lived them.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Content with Image - Wider (2/3) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
          >
            <div className="space-y-6">
              {/* Wide Hero Image */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-6">
                <img
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750891585987-Picture7.jpg"
                  alt="Vitaly working with food manufacturers - industry expertise in action"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Hi, I'm Vitaly - Your Sales Growth Partner
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    My journey began in the kitchen, not the boardroom. As an orphan in Ukraine, the kitchen was my first refuge—a place where I discovered belonging, purpose, and the value of uncompromising quality. Those early mornings kneading dough and learning from master chefs taught me patience, resilience, and the science behind every ingredient. Graduating as valedictorian from culinary school, I learned that great food is both an art and a science—a lesson that would shape every step of my career.
                  </p>
                  <p>
                    Driven by curiosity, I transitioned from culinary arts to electronics engineering and, later, to advanced food quality control. My path led me from the heat of restaurant kitchens to the precision of NIR (Near-Infrared) spectroscopy and data-driven quality assurance. Along the way, I earned degrees in electronics and computer science, and ultimately an MBA—each chapter deepening my understanding of how technology can transform food manufacturing.
                  </p>
                  <p>
                    Throughout my career, I've worked with industry leaders like Cargill, Nestlé, ADM, Tyson Foods, PepsiCo, and Darigold, helping them implement technology solutions that drive real business outcomes. I know firsthand the challenges of food safety, quality management, and the unique sales cycles that define our industry—because I've lived them from both sides: as a chef and as a technologist.
                  </p>
                  <p>
                    Today, I'm passionate about bridging the gap between tradition and innovation. With FoodAgri AI, I help food and agriculture businesses unlock their potential—automating what's tedious, personalizing what matters, and ensuring quality at every step. My mission is simple: to empower you with the technology, insights, and support you need to thrive in a rapidly evolving industry—without ever losing sight of the values that make great food possible.
                  </p>
                  <p className="font-semibold text-emerald-700">
                    Let's build the future of food, together.
                  </p>
                </div>
              </div>

              {/* My Mission Section */}
              <div className="bg-emerald-50 rounded-xl p-6">
                <div className="mb-2 text-center">
                  <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    My Mission
                  </span>
                </div>
                <blockquote className="text-gray-700 text-sm italic leading-relaxed mb-3 text-center">
                  "To help food and agriculture businesses reclaim their time, boost their margins, and scale with confidence—using AI-powered sales and marketing that actually understands your industry."
                </blockquote>
                <p className="text-emerald-700 font-semibold text-xs text-center">
                  — Vitaly Kirkpatrick, Founder of FoodAgri AI
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Credentials + Achievements */}
          <div className="lg:col-span-1 space-y-6">
            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-900 text-white rounded-3xl p-6 shadow-lg"
            >
              <h4 className="text-xl font-bold mb-4">Credentials & Experience</h4>
              <ul className="space-y-2">
                {[
                  '18+ years enterprise sales leadership',
                  'MBA from University of Utah with two Bachelor degrees in Computer Science and Electronics',
                  'Worked with Fortune 500 clients: Cargill, Nestlé, ADM, Tyson Foods',
                  'Salesforce Certified Administrator (SCA)',
                  'Founded and scaled SaaS/IoT startup with 135+ clients',
                  'Generated $5M+ in revenue through strategic sales initiatives',
                  'Expert in analytical instrumentation and quality management systems',
                  'Deep understanding of food safety regulations and compliance'
                ].map((credential, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 text-xs leading-relaxed">{credential}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Achievement Stats - 2x2 Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <SafeIcon icon={achievement.icon} className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                  <div className="text-xs text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Core Expertise Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
            >
              <h4 className="text-sm font-bold text-gray-900 mb-3 text-center">Core Expertise</h4>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    viewport={{ once: true }}
                    className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full text-xs font-medium hover:bg-emerald-200 transition-colors duration-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;