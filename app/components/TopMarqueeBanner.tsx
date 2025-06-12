'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TopMarqueeBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-300 to-orange-400 text-black font-bold py-2 overflow-hidden relative">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: 'linear',
        }}
      >
        <div className="px-6">
          🎉 Admission Open —
          <span className="text-red-600 mx-2">Limited Seats</span> —
          <span className="text-green-700 mx-2">First 10 Students 50% OFF</span> —
          <span className="text-blue-800 mx-2">5 Days Free Demo</span> —
        </div>
        {/* Duplicate content to ensure seamless loop */}
        <div className="px-6">
          🎉 Admission Open —
          <span className="text-red-600 mx-2">Limited Seats</span> —
          <span className="text-green-700 mx-2">First 10 Students 50% OFF</span> —
          <span className="text-blue-800 mx-2">5 Days Free Demo</span> —
        </div>
      </motion.div>
    </div>
  );
}
