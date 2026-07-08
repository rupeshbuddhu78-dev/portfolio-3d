'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks';
import { SERVICES } from '@/lib/constants';

const Services: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">Services</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl">
            Comprehensive development solutions tailored for your business needs.
          </p>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isVisible ? 'show' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                variants={item}
                className="premium-card p-8 rounded-lg group hover:border-purple-500/60 transition-colors"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
