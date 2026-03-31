import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { FileText, Upload } from 'lucide-react';

export default function LabReportUpload() {
  const navigate = useNavigate();
  
  return (
    <MobileLayout title="Lab Report Upload">
      <div className="space-y-6 mt-6">
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-10 h-10 text-gray-400" />
          </div>
          <p className="text-gray-600 mb-4">Upload lab report PDF</p>
          <Button variant="outline">
            <Upload className="w-5 h-5 mr-2" />
            Choose File
          </Button>
        </div>
        
        <Button 
          onClick={() => navigate('/evidence/preview')} 
          className="w-full bg-blue-600 py-6 rounded-xl"
        >
          Continue
        </Button>
      </div>
    </MobileLayout>
  );
}
