import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { AlertCircle, Clock, Microscope, FileText } from 'lucide-react';

export default function NotResponding() {
  const navigate = useNavigate();
  
  const reasons = [
    {
      icon: Microscope,
      title: 'Resistant Bacteria',
      desc: 'The bacteria may be resistant to the current antibiotic',
      color: 'text-red-600'
    },
    {
      icon: Clock,
      title: 'Insufficient Time',
      desc: 'Antibiotics need 2-3 days to show improvement',
      color: 'text-orange-600'
    },
    {
      icon: AlertCircle,
      title: 'Wrong Diagnosis',
      desc: 'The infection may be viral, not bacterial',
      color: 'text-yellow-600'
    }
  ];
  
  const actions = [
    'Continue taking the antibiotic as prescribed',
    'Do not stop early even if feeling better',
    'Monitor symptoms for 48-72 hours',
    'Contact doctor if no improvement after 3 days',
    'Return for re-evaluation and possible culture test',
    'Doctor may prescribe a different antibiotic'
  ];
  
  return (
    <MobileLayout title="Not Responding to Treatment">
      <div className="space-y-6 mt-6">
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-orange-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-orange-900 mb-1">Treatment Not Working?</h3>
              <p className="text-sm text-orange-700">
                Several reasons could explain why antibiotics aren't showing results yet.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Common Reasons</h4>
          <div className="space-y-3">
            {reasons.map((reason, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-start gap-3">
                  <reason.icon className={`w-6 h-6 ${reason.color} flex-shrink-0`} />
                  <div>
                    <p className="font-semibold text-gray-800">{reason.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{reason.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">What You Should Do</h4>
          <Card className="p-4">
            <div className="space-y-3">
              {actions.map((action, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-700">{action}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-900 font-semibold mb-2">
            💡 Important: Antibiotic Sensitivity Testing
          </p>
          <p className="text-sm text-blue-700">
            This app helps identify which antibiotics work best against specific bacteria. If treatment fails, a new culture test can guide better antibiotic selection.
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={() => navigate('/patient/basic-details')}
            className="flex-1 bg-blue-600 py-6 rounded-xl"
          >
            <Microscope className="w-5 h-5 mr-2" />
            New Culture Test
          </Button>
          <Button 
            onClick={() => navigate('/guidance/alternative-treatments')}
            variant="outline"
            className="flex-1 py-6 rounded-xl"
          >
            View Options
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}