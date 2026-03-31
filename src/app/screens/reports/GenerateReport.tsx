import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Checkbox } from '@/app/components/ui/checkbox';
import { Label } from '@/app/components/ui/label';
import { FileText, Download } from 'lucide-react';

export default function GenerateReport() {
  const navigate = useNavigate();
  const [sections, setSections] = useState({
    patientInfo: true,
    testResults: true,
    recommendations: true,
    charts: false
  });
  
  return (
    <MobileLayout title="Generate Report">
      <div className="space-y-6 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3">
          <FileText className="w-6 h-6 text-blue-600" />
          <div>
            <p className="font-semibold text-blue-900">Customizable PDF Report</p>
            <p className="text-sm text-blue-700">Select sections to include</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="patientInfo" 
              checked={sections.patientInfo}
              onCheckedChange={(checked) => setSections({...sections, patientInfo: checked as boolean})}
            />
            <Label htmlFor="patientInfo" className="cursor-pointer">Patient Information</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="testResults" 
              checked={sections.testResults}
              onCheckedChange={(checked) => setSections({...sections, testResults: checked as boolean})}
            />
            <Label htmlFor="testResults" className="cursor-pointer">Test Results & Sensitivity</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="recommendations" 
              checked={sections.recommendations}
              onCheckedChange={(checked) => setSections({...sections, recommendations: checked as boolean})}
            />
            <Label htmlFor="recommendations" className="cursor-pointer">Clinical Recommendations</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="charts" 
              checked={sections.charts}
              onCheckedChange={(checked) => setSections({...sections, charts: checked as boolean})}
            />
            <Label htmlFor="charts" className="cursor-pointer">Visual Charts & Graphs</Label>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button onClick={() => navigate('/reports/preview')} variant="outline" className="flex-1 py-6 rounded-xl">
            Preview
          </Button>
          <Button onClick={() => navigate('/reports/preview')} className="flex-1 bg-blue-600 py-6 rounded-xl">
            <Download className="w-5 h-5 mr-2" />
            Generate
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
