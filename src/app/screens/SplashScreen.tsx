import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ShieldCheck } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export default function SplashScreen() {
  const navigate = useNavigate();

  // Auto-navigate to login after 1 minute (60 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 60000); // 60 seconds = 60000 milliseconds

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-8" 
      style={{ 
        backgroundColor: "#2563EB"
      }}
    >
      {/* Center Content */}
      <div className="flex flex-col items-center justify-center flex-1 max-w-md">
        {/* Logo - White circle with blue shield */}
        <div className="bg-white rounded-full w-36 h-36 flex items-center justify-center mb-8 shadow-2xl">
          <ShieldCheck className="w-20 h-20 text-blue-600" strokeWidth={2.5} />
        </div>
        
        {/* App Name */}
        <h1 className="text-white text-4xl lg:text-5xl text-center leading-snug italic mb-24" style={{ fontFamily: 'Georgia, serif' }}>
          Anti Resist<br />Analyzer
        </h1>
        
        {/* Version */}
        <p className="text-white/70 text-sm italic" style={{ fontFamily: 'Georgia, serif' }}>
          Version 1.0.0
        </p>
      </div>

      {/* Get Started Button - Fixed at bottom */}
      <div className="w-full max-w-md pb-12">
        <Button 
          onClick={handleGetStarted}
          className="w-full text-blue-600 hover:bg-gray-50 py-6 rounded-xl text-xl font-medium shadow-2xl transition-all duration-300 italic bg-white"
          style={{ 
            fontFamily: 'Georgia, serif'
          }}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}