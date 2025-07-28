import React from 'react';


const LightningBolt = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 34 34"
    fill="pink"
    className={`w-5 h-5 drop-shadow-lg animate-pulse ${className}`}
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export default LightningBolt;