import React, { useState } from 'react';

const DiamondSVG = ({ isHovered }: { isHovered: boolean }) => {
  return (
    <svg
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={isHovered ? 'text-textLinkHover' : ''}
    >
      <rect
        x="0.707107"
        y="8.5"
        width="10"
        height="10"
        transform="rotate(-45 0.707107 8.5)"
        stroke="#8A8A8A"
        fill={isHovered ? '#2A2A2A' : 'none'}
      />
    </svg>
  );
};

export default DiamondSVG;
