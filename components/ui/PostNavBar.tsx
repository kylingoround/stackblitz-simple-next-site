import React, { useState, useEffect } from 'react';

const PostNavBar = () => {
  const [currentActive, setCurrentActive] = useState(-1);

  const handleMouseEnter = (index: number) => {
    setCurrentActive(index);
  };

  const handleMouseLeave = () => {
    setCurrentActive(-1); // Reset to default value when mouse leaves
  };

  return (
    <div className="flex justify-center fixed top-0 w-full z-10">
      <div className="w-full max-w-[1440px] p-12 flex flex-row justify-between">
        <div className="flex items-center space-x-4  ">
          <a
            href="/"
            className={`nav-item ${currentActive === 0 ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                background: currentActive === 0 ? '#2A2A2A' : '#E4E4E4',
              }}
            ></div>
          </a>
          <a
            href="/#work"
            className={`nav-item ${currentActive === 1 ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                background: currentActive === 1 ? '#2A2A2A' : '#E4E4E4',
              }}
            ></div>
          </a>
          <a
            href="/#side"
            className={`nav-item ${currentActive === 2 ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                background: currentActive === 2 ? '#2A2A2A' : '#E4E4E4',
              }}
            ></div>
          </a>
          <a
            href="/#about"
            className={`nav-item ${currentActive === 3 ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                background: currentActive === 3 ? '#2A2A2A' : '#E4E4E4',
              }}
            ></div>
          </a>
        </div>
        <a href="/">Back</a>
      </div>
    </div>
  );
};

export default PostNavBar;
