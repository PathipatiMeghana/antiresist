import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Progress } from '@/app/components/ui/progress';
import { Loader2, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProcessingScreen() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress from 0 to 100
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    // Navigate after progress reaches 100
    const timer = setTimeout(() => {
      navigate('/results/summary');
    }, 3000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [navigate]);

  const handleSkip = () => {
    navigate('/results/summary');
  };

  return (
    <MobileLayout title="Processing" hideHeader={false} showBack={false}>
      <div className="space-y-8 mt-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 mx-auto"
        >
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
            <Loader2 className="w-12 h-12 text-blue-600" />
          </div>
        </motion.div>
        
        <div className="text-center space-y-4">
          <h3 className="font-semibold text-xl">Analyzing Data...</h3>
          <p className="text-gray-600">Processing antibiotic resistance patterns</p>
          
          <div className="space-y-2 mt-8">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-gray-500">{progress}% complete</p>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-800 text-center">
            This may take a few moments...
          </p>
        </div>

        <Button 
          onClick={handleSkip}
          variant="outline"
          className="w-full py-6 rounded-xl"
        >
          Skip & View Results
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </MobileLayout>
  );
}