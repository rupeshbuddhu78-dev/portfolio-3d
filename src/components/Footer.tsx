'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS, NAVIGATION_ITEMS } from '@/lib/constants';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-purple-500/10 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-2xl font-bold gradient-text mb-2">Rupesh Kumar</div>
            <p className="text-gray-400 text-sm">Enterprise MERN Full Stack Developer</p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-white mb-4">Social</h3>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-purple-500/20 transition-colors"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-purple-500/20 transition-colors"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-purple-500/20 transition-colors"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <p className="text-gray-400 text-sm break-all">{SOCIAL_LINKS.email}</p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-500/10 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} Rupesh Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
