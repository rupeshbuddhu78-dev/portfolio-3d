'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks';

const About: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver();

  const stats = [
    { label: 'Projects', value: '4+' },
    { label: 'Years Experience', value: '3+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Clients', value: 'Global' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 gradient-text">About Me</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Engineer with a mission to build world-class software solutions.
                Specialized in architecting scalable enterprise applications using the MERN stack.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My expertise spans across backend architecture, API design, database optimization, and creating
                intuitive user interfaces. I've successfully delivered multiple enterprise-grade applications
                including college ERPs, food delivery platforms, and parental monitoring systems.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open source, and learning
                about system design and cloud infrastructure.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="premium-card p-6 rounded-lg text-center group"
                >
                  <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
