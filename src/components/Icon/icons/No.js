import React from 'react';

const No = ({ width, height, color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={width}
    height={height}
    {...props}
  >
    <circle cx="8" cy="8" r="8" fill={color} />
    <path
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      d="M10.625 10.625l-5.25-5.25M10.625 5.375l-5.25 5.25"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="0"
        x2="16"
        y1="8"
        y2="8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BD1A8D" />
        <stop offset="1" stopColor="#D91473" />
      </linearGradient>
    </defs>
  </svg>
);
export default No;
