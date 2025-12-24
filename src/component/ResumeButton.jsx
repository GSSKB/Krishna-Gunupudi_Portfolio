import React, { useState } from 'react';

const ResumeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    // Try .docx first, then .doc, then fall back to .pdf
    const resumeFormats = [
      { path: '/resume/Krishna_Gunupudi_Full%20Stack%20AI%20Developer.docx', filename: 'Krishna_Gunupudi_Resume.docx', type: 'docx' },
      { path: '/resume/Krishna_Gunupudi_Full%20Stack%20AI%20Developer.doc', filename: 'Krishna_Gunupudi_Resume.doc', type: 'doc' },
      { path: '/resume/Krishna_Gunupudi_Full%20Stack%20AI%20Developer.pdf', filename: 'Krishna_Gunupudi_Resume.pdf', type: 'pdf' }
    ];

    // Use the first available format (you can change the order if needed)
    const resume = resumeFormats[0]; // Change index to 0 for .docx, 1 for .doc, 2 for .pdf
    
    const link = document.createElement('a');
    link.href = resume.path;
    link.setAttribute('download', resume.filename);
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleDownload}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`p-2 border border-white rounded-full transition-all duration-300 ease-in-out flex justify-center items-center ${isHovered ? 'pr-4 pl-4 scale-105' : 'pr-2 pl-2'}`} // Smooth transition with scaling
      >
        <img src='/assets/download.png' alt="Download" className="inline-block w-5 h-5" />
        {isHovered && <span className={`ml-2 text-white-700 transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          Resume
        </span>}
        
      </button>
    </div>
  );
};

export default ResumeButton;
