import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Download, FileText, Printer, Mail, CheckCircle2 } from 'lucide-react';

export default function PatientGuideDownload() {
  const navigate = useNavigate();
  
  const guideTopics = [
    'Understanding Antibiotic Resistance',
    'What to do if you have allergies',
    'Alternative treatment options',
    'Managing side effects',
    'When to seek emergency care',
    'Natural supportive care methods',
    'Proper antibiotic usage',
    'Importance of completing treatment',
    'Food and drug interactions',
    'Emergency contact information'
  ];
  
  const languages = [
    'English',
    'Spanish',
    'Hindi',
    'Arabic',
    'French',
    'Chinese',
    'Portuguese',
    'Urdu'
  ];
  
  return (
    <MobileLayout title="Patient Guide">
      <div className="space-y-6 mt-6">
        <div className="bg-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-8 h-8" />
            <h2 className="text-xl font-bold">Patient Education Guide</h2>
          </div>
          <p className="text-blue-100 text-sm">
            Comprehensive guide for patients about antibiotic treatment, alternatives, and safety information
          </p>
        </div>
        
        <Card className="p-4">
          <h3 className="font-semibold mb-3">What's Included:</h3>
          <div className="space-y-2">
            {guideTopics.map((topic, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">{topic}</p>
              </div>
            ))}
          </div>
        </Card>
        
        <div>
          <h4 className="font-semibold mb-3">Select Language</h4>
          <div className="grid grid-cols-2 gap-2">
            {languages.map((lang) => (
              <Button
                key={lang}
                variant="outline"
                className="rounded-xl"
              >
                {lang}
              </Button>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Download Options</h4>
          <div className="space-y-3">
            <Button className="w-full bg-blue-600 py-6 rounded-xl">
              <Download className="w-5 h-5 mr-2" />
              Download PDF Guide
            </Button>
            
            <Button variant="outline" className="w-full py-6 rounded-xl">
              <Printer className="w-5 h-5 mr-2" />
              Print Physical Copy
            </Button>
            
            <Button variant="outline" className="w-full py-6 rounded-xl">
              <Mail className="w-5 h-5 mr-2" />
              Email to Patient
            </Button>
          </div>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-sm text-green-900 font-semibold mb-2">
            📱 Digital Access
          </p>
          <p className="text-sm text-green-700">
            Patients can also access this information anytime through the "Antibiotic Concerns & Help" section in the app.
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={() => navigate('/guidance/antibiotic-concerns')}
            variant="outline"
            className="flex-1 py-6 rounded-xl"
          >
            View Guidance
          </Button>
          <Button 
            onClick={() => navigate('/home')}
            className="flex-1 bg-gray-800 py-6 rounded-xl"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
