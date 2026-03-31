import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { FileText, Download, Share2 } from 'lucide-react';

export default function ReportPreview() {
  const navigate = useNavigate();
  
  return (
    <MobileLayout title="Report Preview">
      <div className="space-y-6 mt-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6 min-h-[400px]">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold mb-2">Antibiotic Sensitivity Test Report</h2>
            <p className="text-sm text-gray-600">Patient ID: P-2024-001</p>
            <p className="text-sm text-gray-600">Test Date: January 27, 2026</p>
          </div>
          
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold mb-1">Patient Information</p>
              <p className="text-gray-600">John Doe, 45 years, Male</p>
            </div>
            
            <div>
              <p className="font-semibold mb-1">Sample Details</p>
              <p className="text-gray-600">Blood Culture • Sample ID: S-2024-001</p>
            </div>
            
            <div>
              <p className="font-semibold mb-1">Bacteria Identified</p>
              <p className="text-gray-600">Escherichia coli (Gram Negative)</p>
            </div>
            
            <div>
              <p className="font-semibold mb-1">Sensitivity Results</p>
              <div className="space-y-1">
                <p className="text-gray-600">✓ Ciprofloxacin - Sensitive</p>
                <p className="text-gray-600">✓ Gentamicin - Sensitive</p>
                <p className="text-gray-600">⚠ Ceftriaxone - Intermediate</p>
                <p className="text-gray-600">✗ Amoxicillin - Resistant</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="py-6 rounded-xl">
            <Share2 className="w-5 h-5 mr-2" />
            Share
          </Button>
          <Button className="py-6 rounded-xl bg-blue-600">
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </Button>
        </div>
        
        <Button 
          onClick={() => navigate('/test-complete')} 
          className="w-full py-6 rounded-xl bg-green-600 hover:bg-green-700"
        >
          Complete Test
        </Button>
      </div>
    </MobileLayout>
  );
}