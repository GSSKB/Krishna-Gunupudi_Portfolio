import React, { useState, useContext } from 'react';
import { ResumeContext } from '../App';

const ResumeButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { openResume } = useContext(ResumeContext);

  return (
    <div className="relative inline-block">
      <button
        onClick={openResume}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`p-2 border border-white rounded-full transition-all duration-300 ease-in-out flex justify-center items-center ${isHovered ? 'pr-4 pl-4 scale-105' : 'pr-2 pl-2'}`}
      >
        <img src='/assets/download.png' alt="View Resume" className="inline-block w-5 h-5" />
        {isHovered && (
          <span className={`ml-2 text-white-700 transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            Resume
          </span>
        )}
      </button>
    </div>
  );
};

export default ResumeButton;
