import React, { useState } from 'react';

const Resume = ({ onClose }) => {
  const resumePdfPath = '/resume/Krishna_Gunupudi_Full%20Stack%20AI%20Developer.pdf';
  const resumeDocxPath = '/resume/Krishna_Gunupudi_Full%20Stack%20AI%20Developer.docx';
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="min-h-screen w-full relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
        }}
      />
      
      {/* Decorative elements */}
      <div 
        className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      />
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 py-8 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              My Resume
            </h1>
            <p className="text-gray-400 text-lg">
              Full Stack AI Developer • Krishna Gunupudi
            </p>
          </div>
          
          <div className="flex items-center gap-3 flex-wrap">
            {/* Download PDF Button */}
            <a
              href={resumePdfPath}
              download="Krishna_Gunupudi_Resume.pdf"
              className="group relative px-5 py-2.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                PDF
              </span>
            </a>

            {/* Download DOCX Button */}
            <a
              href={resumeDocxPath}
              download="Krishna_Gunupudi_Resume.docx"
              className="group relative px-5 py-2.5 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                boxShadow: '0 4px 20px rgba(17, 153, 142, 0.4)',
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                DOCX
              </span>
            </a>
            
            {/* Back Button */}
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl font-semibold text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </button>
          </div>
        </div>

        {/* Resume Card */}
        <div 
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Card Header */}
          <div 
            className="px-6 py-4 flex items-center justify-between"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono">Krishna_Gunupudi_Resume.pdf</span>
            </div>

            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              PDF Document
            </div>
          </div>

          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-white/20 border-t-purple-500 rounded-full animate-spin"></div>
                <p className="text-white text-lg">Loading Resume...</p>
              </div>
            </div>
          )}

          {/* PDF Viewer */}
          <div className="w-full h-[75vh]">
            <iframe
              src={`${resumePdfPath}#toolbar=0&navpanes=0&scrollbar=0&zoom=90`}
              title="Krishna Gunupudi Resume"
              className="w-full h-full"
              style={{ border: 'none', backgroundColor: '#fff' }}
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Krishna Gunupudi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
