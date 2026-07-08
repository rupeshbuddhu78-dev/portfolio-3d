'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'accent';
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-purple-500/20 border-purple-500/30 text-purple-300',
    secondary: 'bg-blue-500/20 border-blue-500/30 text-blue-300',
    accent: 'bg-pink-500/20 border-pink-500/30 text-pink-300',
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-block px-3 py-1 rounded-full border text-xs font-medium ${variants[variant]}`}
    >
      {label}
    </motion.span>
  );
};
