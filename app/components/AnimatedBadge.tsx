'use client';

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

type BadgeProps = {
  bg: string;
  textColor: string;
  lines: string[];
  isAnimated?: boolean; // controls animation
};

const Badge: React.FC<BadgeProps> = ({ bg, textColor, lines, isAnimated = false }) => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });

  if (!isAnimated) {
    return (
      <div
        className={`flex flex-col justify-center items-center w-[180px] h-[180px] md:w-[150px] md:h-[150px] text-xl font-bold rounded-full text-center px-4 py-2 m-2 ${bg} ${textColor}`}
      >
        {lines.map((line, idx) => (
          <span key={idx}>{line}</span>
        ))}
      </div>
    );
  }

  return (
    <div
  ref={ref}
  className="h-[50vh] w-full flex justify-center items-center snap-start"
>
      <AnimatePresence mode="wait">
        {inView && (
          <motion.div
            key={lines.join('-')}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className={`flex flex-col justify-center items-center w-[220px] h-[220px] text-3xl md:text-xl font-bold rounded-full text-center px-4 py-2 ${bg} ${textColor}`}
          >
            {lines.map((line, idx) => (
              <span key={idx}>{line}</span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Badge;
