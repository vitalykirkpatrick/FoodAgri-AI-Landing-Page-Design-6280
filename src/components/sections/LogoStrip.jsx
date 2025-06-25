import React from 'react';
import { motion } from 'framer-motion';

const LogoStrip = () => {
  const companies = [
    { name: 'Tyson Foods', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&auto=format' },
    { name: 'Cargill', logo: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=120&h=60&fit=crop&auto=format' },
    { name: 'ADM', logo: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=120&h=60&fit=crop&auto=format' },
    { name: 'JBS', logo: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=120&h=60&fit=crop&auto=format' },
    { name: 'Smithfield Foods', logo: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=120&h=60&fit=crop&auto=format' },
    { name: 'Hormel Foods', logo: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=120&h=60&fit=crop&auto=format' },
    { name: 'Perdue Farms', logo: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=120&h=60&fit=crop&auto=format' },
    { name: 'Pilgrim\'s Pride', logo: 'https://images.unsplash.com/photo-1563379091434-25c4e5f2e373?w=120&h=60&fit=crop&auto=format' },
    { name: 'ConAgra Foods', logo: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=120&h=60&fit=crop&auto=format' },
    { name: 'General Mills', logo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=120&h=60&fit=crop&auto=format' },
    { name: 'Kellogg Company', logo: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=120&h=60&fit=crop&auto=format' },
    { name: 'Kraft Heinz', logo: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=120&h=60&fit=crop&auto=format' },
    { name: 'Unilever', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&auto=format' },
    { name: 'Nestlé', logo: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=120&h=60&fit=crop&auto=format' },
    { name: 'Mondelez', logo: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=120&h=60&fit=crop&auto=format' }
  ];

  // Duplicate the array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-t border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-2">
            Trusted by Industry Leaders
          </p>
          <h3 className="text-2xl font-bold text-gray-900">
            Join the food and agriculture companies already transforming their operations
          </h3>
        </motion.div>

        {/* Scrolling Logo Container */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-scroll">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-lg border border-emerald-200 hover:bg-white/90 transition-colors duration-200 shadow-sm"
              >
                <div className="w-24 h-12 bg-gray-300 rounded flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-600 text-center leading-tight">
                    {company.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-700 max-w-3xl mx-auto">
            These industry leaders understand that staying competitive means embracing AI-powered automation. Join them in transforming your sales, marketing, and operations with FoodAgri AI.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: calc(128px * ${duplicatedCompanies.length} + 32px * ${duplicatedCompanies.length - 1});
        }
      `}</style>
    </section>
  );
};

export default LogoStrip;