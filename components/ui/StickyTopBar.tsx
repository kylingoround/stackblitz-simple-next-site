import React, { useState, useEffect } from 'react';

const StickyTopBar = () => {
  const [currentActive, setCurrentActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = [
        document.getElementById('greetings')?.offsetTop ?? 0,
        document.getElementById('work')?.offsetTop ?? 0,
        document.getElementById('side')?.offsetTop ?? 0,
        document.getElementById('about')?.offsetTop ?? 0,
      ];

      const scrollPosition = window.scrollY + 100;

      let currentActive = 1;

      console.log(currentActive);

      let activeIndex = 0;
      for (let i = sectionOffsets.length - 1; i >= 0; i--) {
        if (scrollPosition >= sectionOffsets[i]) {
          activeIndex = i;
          break;
        }
      }

      setCurrentActive(activeIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-0 w-full z-10 ">
      <div className="w-full max-w-[1440px] p-12">
        <div className="flex items-center space-x-4  ">
          <a
            href="#greetings"
            className={`nav-item ${currentActive === 0 ? 'active' : ''}`}
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
            href="#work"
            className={`nav-item ${currentActive === 1 ? 'active' : ''}`}
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
            href="#side"
            className={`nav-item ${currentActive === 2 ? 'active' : ''}`}
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
            href="#about"
            className={`nav-item ${currentActive === 3 ? 'active' : ''}`}
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
      </div>
    </div>
  );
};

export default StickyTopBar;
