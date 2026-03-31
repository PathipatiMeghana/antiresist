import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function ValidationError() {
  const navigate = useNavigate();
  
  const errors = [
    'Patient age is required',
    'At least one antibiotic must be selected',
    'Zone of inhibition measurement missing'
  ];
  
  return (
    <MobileLayout title="Validation Errors">
      <div className="space-y-6 mt-6">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="font-semibold text-lg mb-2">Validation Failed</h3>
          <p className="text-gray-600">Please fix the following issues</p>
        </div>
        
        <div className="space-y-3">
          {errors.map((error, i) => (
            <div key={i} className="bg-white border border-red-200 rounded-xl p-4 flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-600 text-sm font-semibold">{i + 1}</span>
              </div>
              <p className="text-gray-800">{error}</p>
            </div>
          ))}
        </div>
        
        <Button 
          onClick={() => navigate('/analysis/review')} 
          className="w-full bg-blue-600 py-6 rounded-xl"
        >
          Fix Errors
        </Button>
      </div>
    </MobileLayout>
  );
}
