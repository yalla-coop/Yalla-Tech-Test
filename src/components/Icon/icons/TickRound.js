import React from 'react';

const TickRound = ({ width, height, color, ...props }) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill={color || 'currentColor'} />
    <path
      d="M16.375 8.5L10.25 15.5L7.625 12.875"
      stroke="white"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="-4.47035e-08"
        y1="12"
        x2="24"
        y2="12"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00B2D5" />
        <stop offset="1" stopColor="#63C6BF" />
      </linearGradient>
    </defs>
  </svg>
);
export default TickRound;
