'use client';

import React from 'react';

type GlowBadgeProps = {
  lines: string[]; // array of lines you want to display
};

const GlowBadge: React.FC<GlowBadgeProps> = ({ lines }) => {
  return (
    <div className="animate-glow flex flex-col justify-center items-center w-[100px] h-[100px] md:w-[150px] md:h-[150px] px-2 py-2 rounded-full bg-white text-center shadow-lg font-bold text-sm text-black border-2 border-yellow-600">
      <p className="leading-tight space-y-0.5">
        {lines.map((line, idx) => (
          <span
            key={idx}
            className={`block ${line.toLowerCase() === 'free' ? 'text-green-700 text-lg md:text-xl' : line.toLowerCase() === '50% off' ? 'text-red-700 text-lg md:text-xl': line.toLowerCase() === 'limited' ? 'text-red-700 font-stretch-75% text-lg md:text-xl': 'text-sm md:text-lg'}`}
          >
            {line}
          </span>
        ))}
      </p>
    </div>
  );
};

export default GlowBadge;
