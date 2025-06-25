import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiAward, FiTrendingUp, FiUsers, FiTarget } = FiIcons;

const AboutMe = () => {
  const achievements = [
    {
      icon: FiAward,
      number: "20+",
      label: "Years in Food Industry"
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

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-8">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750876219612-PMBA-Vitaliy-Photo.jpg" 
                  alt="Vitaliy - Founder of FoodAgri AI" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white p-4 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <SafeIcon icon={achievement.icon} className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Hi, I'm Vitaliy - Your Food Industry Growth Partner
              </h3>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  After 20+ years in the food and agriculture industry, I've seen firsthand how manual processes, 
                  compliance nightmares, and disconnected systems can drain your profits and your sanity.
                </p>
                
                <p>
                  I started my career on the production floor of a food manufacturing plant, worked my way up 
                  through operations management, and eventually led digital transformation initiatives for 
                  multi-million dollar food companies.
                </p>
                
                <p>
                  <strong>The problem I kept seeing everywhere:</strong> Food and agriculture businesses were 
                  stuck using generic software that didn't understand their unique challenges—from seasonal 
                  variations to complex compliance requirements.
                </p>
                
                <p>
                  That's why I created FoodAgri AI. Not as another tech solution, but as a bridge between 
                  cutting-edge AI technology and the real-world needs of food industry professionals.
                </p>
              </div>

              <div className="mt-8 p-6 bg-emerald-50 rounded-2xl">
                <h4 className="text-xl font-bold text-gray-900 mb-3">My Mission</h4>
                <p className="text-gray-700">
                  To help food and agriculture businesses reclaim their time, boost their margins, and scale 
                  with confidence—using AI that actually understands your industry.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {['Food Manufacturing', 'Supply Chain', 'Compliance Management', 'Business Growth', 'AI Implementation'].map((skill, index) => (
                  <span key={index} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Credentials */}
            <div className="bg-gray-900 text-white rounded-3xl p-8">
              <h4 className="text-2xl font-bold mb-6">Credentials & Experience</h4>
              <ul className="space-y-3">
                {[
                  'MBA in Business Administration with focus on Operations Management',
                  'Former VP of Operations at Fortune 500 food company',
                  'Led $50M+ digital transformation projects',
                  'Certified in HACCP, SQF, and FDA regulations',
                  'Speaker at 15+ industry conferences',
                  'Advisor to food tech startups and established brands'
                ].map((credential, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;