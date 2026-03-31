import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Image, CheckCircle2 } from 'lucide-react';

export default function ImagePreview() {
  const navigate = useNavigate();
  
  return (
    <MobileLayout title="Preview & Confirm">
      <div className="space-y-6 mt-6">
        <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center">
          <Image className="w-16 h-16 text-gray-400" />
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
          <p className="text-sm text-green-800">All uploads confirmed</p>
        </div>
        
        <Button 
          onClick={() => navigate('/analysis/review')} 
          className="w-full bg-blue-600 py-6 rounded-xl"
        >
          Continue to Analysis
        </Button>
      </div>
    </MobileLayout>
  );
}
