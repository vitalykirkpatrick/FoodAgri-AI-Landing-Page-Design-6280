import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPlus, FiMinus } = FiIcons;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How quickly can I see results with FoodAgri AI?",
      answer: "Most clients see immediate improvements in workflow efficiency within the first week. Significant ROI typically becomes evident within 30-60 days, with full transformation benefits realized within 3-6 months. Our AI learns your business patterns quickly and starts optimizing processes from day one."
    },
    {
      question: "Do I need technical expertise to use FoodAgri AI?",
      answer: "Not at all! FoodAgri AI is designed for food industry professionals, not IT experts. Our plug-and-play setup gets you started in minutes, and our intuitive interface requires no coding or technical skills. We also provide comprehensive onboarding and support to ensure your success."
    },
    {
      question: "How does FoodAgri AI handle food safety and compliance requirements?",
      answer: "Compliance is built into our core, not added as an afterthought. We support HACCP, FDA, USDA, SQF, BRC, and international food safety standards. Our system automatically generates compliance documentation, maintains audit trails, and keeps you updated on regulatory changes specific to your operations."
    },
    {
      question: "Can FoodAgri AI integrate with my existing systems?",
      answer: "Yes! We integrate seamlessly with popular ERP systems (SAP, Oracle, Microsoft Dynamics), CRM platforms (Salesforce, HubSpot), accounting software (QuickBooks, Xero), and industry-specific tools. Our API-first approach ensures smooth data flow between all your systems."
    },
    {
      question: "What makes FoodAgri AI different from generic automation tools?",
      answer: "Unlike generic platforms, we're built specifically for food and agriculture. Our AI is trained on industry-specific data, understands seasonal variations, supply chain complexities, and regulatory requirements. We speak your language and solve your unique challenges, not generic business problems."
    },
    {
      question: "Is my data secure with FoodAgri AI?",
      answer: "Absolutely. We use enterprise-grade security with SOC 2 Type II compliance, end-to-end encryption, and regular security audits. Your data is stored in secure, redundant data centers with 99.9% uptime guarantee. We never share your data with third parties and maintain strict confidentiality."
    },
    {
      question: "What's included in the pricing?",
      answer: "Our pricing is transparent with no hidden fees. Each package includes the software, implementation support, training, and ongoing customer success management. Enterprise packages include dedicated account management and custom integrations. We offer flexible monthly or annual billing options."
    },
    {
      question: "Do you offer training and support?",
      answer: "Yes! Every client receives comprehensive onboarding, training sessions, and access to our knowledge base. We provide email, chat, and phone support during business hours, with priority support for enterprise clients. Our customer success team proactively monitors your progress and provides optimization recommendations."
    },
    {
      question: "Can I try FoodAgri AI before committing?",
      answer: "Absolutely! We offer a free demo where you can see FoodAgri AI in action with your specific use cases. We also provide a 30-day money-back guarantee on all paid plans, so you can try our platform risk-free and see the results for yourself."
    },
    {
      question: "How do you measure ROI and success?",
      answer: "We track key metrics including lead generation improvement, time savings, compliance cost reduction, customer satisfaction scores, and overall operational efficiency. Our dashboard provides real-time ROI calculations, and our average client sees 300% ROI within 6 months through increased productivity and reduced manual work."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about FoodAgri AI and how it can transform your business.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <SafeIcon 
                    icon={openIndex === index ? FiMinus : FiPlus} 
                    className="w-5 h-5 text-emerald-600 transition-transform duration-200" 
                  />
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
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
              Still have questions?
            </h3>
            <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
              Our team is here to help. Schedule a free consultation to get personalized answers to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Free Consultation
              </button>
              <button className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
                Email Us Your Questions
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;