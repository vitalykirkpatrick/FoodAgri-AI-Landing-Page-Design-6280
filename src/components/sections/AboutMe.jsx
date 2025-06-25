import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiAward, FiTrendingUp, FiUsers, FiTarget } = FiIcons;

const AboutMe = () => {
  const achievements = [
    {
      icon: FiAward,
      number: "18+",
      label: "Years in Enterprise Sales"
    },
    {
      icon: FiTrendingUp,
      number: "$50M+",
      label: "Revenue Growth Generated"
    },
    {
      icon: FiUsers,
      number: "500+",
      label: "Businesses Transformed"
    },
    {
      icon: FiTarget,
      number: "95%",
      label: "Client Success Rate"
    }
  ];

  const skills = [
    'Enterprise Sales Leadership',
    'AI Implementation',
    'Food Industry Expertise',
    'Business Development',
    'Lead Generation',
    'Sales Automation',
    'CRM Integration',
    'Account-Based Marketing',
    'Cold Email Outreach',
    'LinkedIn Sales',
    'Market Research',
    'Compliance Management',
    'Revenue Operations',
    'Sales Process Optimization',
    'Customer Success',
    'Business Intelligence',
    'Data Analytics',
    'Pipeline Management'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
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
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-xl flex-shrink-0 mb-4">
                  <img 
                    src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750876219612-PMBA-Vitaliy-Photo.jpg" 
                    alt="Vitaliy - Founder of FoodAgri AI" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* My Mission Tag + Quote */}
                <div className="w-full max-w-sm">
                  {/* Mission Tag */}
                  <div className="mb-2 text-center">
                    <span className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      My Mission
                    </span>
                  </div>
                  
                  {/* Mission Quote */}
                  <div className="p-4 bg-emerald-50 rounded-xl">
                    <blockquote className="text-gray-700 text-sm italic leading-relaxed mb-3">
                      "To help food and agriculture businesses reclaim their time, boost their margins, and scale 
                      with confidence—using AI-powered sales and marketing that actually understands your industry."
                    </blockquote>
                    <p className="text-emerald-700 font-semibold text-xs text-right">
                      — Vitaly Kirkpatrick, Founder of FoodAgri AI
                    </p>
                  </div>
                </div>
                
                {/* Core Expertise Section - Moved under mission */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full max-w-sm mt-6 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
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
              
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Hi, I'm Vitaliy - Your Sales Growth Partner
                </h3>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    With over 18 years of enterprise sales leadership, I've dedicated my career to helping food and 
                    agriculture businesses unlock their potential through innovative technology solutions. My journey spans 
                    from analytical instrumentation to cloud-based platforms, always with one focus: driving measurable 
                    results for my clients.
                  </p>
                  
                  <p>
                    I understand the unique challenges facing the food and agriculture industry—from compliance and 
                    traceability requirements to the pressure for sustainable operations and profitable growth. That's 
                    why I founded FoodAgri AI: to bring cutting-edge artificial intelligence solutions specifically 
                    tailored to address these pain points.
                  </p>
                  
                  <p>
                    <strong>The problem I kept seeing everywhere:</strong> Food and agriculture businesses were 
                    stuck using generic sales and marketing approaches that didn't understand their unique challenges—from 
                    complex buyer journeys to seasonal market fluctuations.
                  </p>
                  
                  <p>
                    My approach combines deep industry knowledge with proven sales methodologies and emerging AI technologies. 
                    I don't just sell solutions—I partner with you to ensure your business transformation delivers the 
                    ROI you need to thrive in today's competitive market.
                  </p>
                </div>
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
                  '18+ years of enterprise sales leadership experience',
                  'Former VP of Business Development at Fortune 500 food company',
                  'Led $50M+ revenue generation projects',
                  'Expert in analytical instrumentation and cloud platforms',
                  'Speaker at 15+ industry conferences',
                  'Advisor to food tech startups and established brands'
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;