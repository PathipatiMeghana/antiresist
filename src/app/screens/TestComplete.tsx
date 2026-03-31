import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, FileText, BarChart3, Home } from 'lucide-react';

export default function TestComplete() {
  const navigate = useNavigate();
  
  return (
    <MobileLayout title="Test Complete" showBack={true}>
      <div className="space-y-6 mt-12 text-center">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-14 h-14 text-green-600" />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Test Completed Successfully!</h2>
          <p className="text-gray-600">
            Your antibiotic resistance analysis has been completed and saved.
          </p>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-2 text-left">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-700">Patient data recorded</p>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-700">Bacteria identified</p>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-700">Antibiotics tested</p>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-700">Results analyzed</p>
          </div>
        </div>
        
        <div className="space-y-3 pt-4">
          <Button 
            onClick={() => navigate('/home')} 
            className="w-full bg-blue-600 py-6 rounded-xl"
          >
            <Home className="w-5 h-5 mr-2" />
            Return to Home
          </Button>
          
          <Button 
            onClick={() => navigate('/reports/history')} 
            variant="outline"
            className="w-full py-6 rounded-xl"
          >
            <FileText className="w-5 h-5 mr-2" />
            View All Records
          </Button>
          
          <Button 
            onClick={() => navigate('/patient/basic-details')} 
            variant="outline"
            className="w-full py-6 rounded-xl"
          >
            Start New Test
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}