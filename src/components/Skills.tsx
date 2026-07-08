'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks';
import { SKILLS } from '@/lib/constants';

const Skills: React.FC = () => {
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
    <section id="skills" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 gradient-text">Technical Skills</h2>

          <motion.div
            variants={container}
            initial="hidden"
            animate={isVisible ? 'show' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {SKILLS.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={item}
                className="premium-card p-8 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-6 gradient-text">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-sm font-medium text-gray-300 hover:border-purple-500/60 transition-colors"
                    >
                      {skill}
                    </motion.span>
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

export default Skills;
