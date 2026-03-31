import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import svgPaths from '@/imports/svg-2pqak78ml3';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div 
      className="h-full flex items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: "linear-gradient(135.293deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 50%, rgb(20, 71, 230) 100%)" }}
    >
      {/* Background Blur Effects */}
      <div className="absolute bg-[rgba(255,255,255,0.1)] blur-[40px] right-[50px] rounded-full w-[128px] h-[128px] top-[40px]" />
      <div className="absolute bg-[rgba(255,255,255,0.1)] blur-[40px] left-[40px] rounded-full w-[160px] h-[160px] top-[136px]" />
      
      {/* Content Container */}
      <div className="relative w-full flex flex-col items-center px-6">
        {/* Icon Container */}
        <div className="bg-white rounded-[24px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] w-[143.958px] h-[143.958px] flex items-center justify-center mb-8">
          <div className="w-[79.985px] h-[79.985px] relative">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.9863 74.9863">
              <path 
                d={svgPaths.p12ca2400} 
                stroke="#155DFC" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="8.33181" 
              />
            </svg>
          </div>
        </div>
        
        {/* Brand Name */}
        <h1 
          className="text-[36px] font-bold text-white text-center leading-[40px] tracking-[-0.9px] mb-2"
          style={{ fontFamily: "'Arimo', sans-serif" }}
        >
          AntiResist
        </h1>
        
        {/* Subtitle */}
        <p 
          className="text-[24px] font-bold text-[#dbeafe] text-center leading-[32px] mb-4"
          style={{ fontFamily: "'Arimo', sans-serif" }}
        >
          Analyzer
        </p>
        
        {/* Description */}
        <p 
          className="text-[14px] text-[#bedbff] text-center leading-[20px] mb-4"
          style={{ fontFamily: "'Arimo', sans-serif" }}
        >
          Antibiotic Resistance Pattern Analysis
        </p>
        
        {/* Version */}
        <p 
          className="text-[12px] text-[rgba(255,255,255,0.6)] leading-[16px]"
          style={{ fontFamily: "'Arimo', sans-serif" }}
        >
          Version 1.0.0
        </p>
      </div>
    </div>
  );
}