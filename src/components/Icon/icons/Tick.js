import React from 'react';

const Tick = ({ width, height, color, ...props }) => (
  <svg
    width={width}
    height={height}
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.5 6L9 18L4.5 13.5"
      stroke={color || 'currentColor'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Tick;
