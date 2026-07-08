'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SOCIAL_LINKS } from '@/lib/constants';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6 glass px-4 py-2 rounded-full"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-gray-300">Available for Work</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block"
              >
                Hi, I'm <span className="gradient-text">Rupesh Kumar</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed"
            >
              Enterprise MERN Full Stack Developer specializing in building scalable web applications,
              college ERPs, food delivery platforms, and AI-powered solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 flex-wrap"
            >
              <a
                href="#projects"
                className="group relative px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold transition-all duration-300 flex items-center gap-2 magnetic-btn"
              >
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg border border-purple-500/30 hover:border-purple-500/60 text-white font-semibold transition-all duration-300 glass"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 mt-8"
            >
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-purple-500/20 transition-colors"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-purple-500/20 transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateZ: 10 }}
            animate={{ opacity: 1, x: 0, rotateZ: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="premium-card p-8 rounded-2xl"
            >
              <div className="space-y-4">
                <div className="text-4xl font-bold gradient-text">4+</div>
                <p className="text-gray-400">Enterprise Projects</p>
                <p className="text-sm text-gray-500">Building the future of web</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="premium-card p-8 rounded-2xl mt-6 ml-12"
            >
              <div className="space-y-4">
                <div className="text-3xl">⚡</div>
                <p className="text-gray-400">Full Stack Expertise</p>
                <p className="text-sm text-gray-500">MERN Stack Specialist</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
