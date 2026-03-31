import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { AlertTriangle, CheckCircle2, Phone } from 'lucide-react';

export default function AntibioticAllergy() {
  const navigate = useNavigate();
  
  const symptoms = [
    'Skin rash or hives',
    'Itching or swelling',
    'Difficulty breathing',
    'Wheezing or coughing',
    'Nausea or vomiting',
    'Dizziness or fainting'
  ];
  
  const steps = [
    {
      step: '1',
      title: 'Stop Antibiotic Immediately',
      desc: 'Discontinue use and do not take another dose'
    },
    {
      step: '2',
      title: 'Contact Doctor',
      desc: 'Inform your healthcare provider about the reaction'
    },
    {
      step: '3',
      title: 'Document Allergy',
      desc: 'Record the antibiotic name and symptoms for future reference'
    },
    {
      step: '4',
      title: 'Get Alternative',
      desc: 'Doctor will prescribe a different class of antibiotic'
    }
  ];
  
  return (
    <MobileLayout title="Antibiotic Allergy">
      <div className="space-y-6 mt-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">Common Allergy Symptoms</h3>
              <p className="text-sm text-red-700">
                Watch for these signs of allergic reaction:
              </p>
            </div>
          </div>
        </div>
        
        <Card className="p-4">
          <h4 className="font-semibold mb-3">Symptoms to Watch For</h4>
          <div className="space-y-2">
            {symptoms.map((symptom, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full" />
                <p className="text-sm text-gray-700">{symptom}</p>
              </div>
            ))}
          </div>
        </Card>
        
        <div>
          <h4 className="font-semibold mb-3">Steps to Take</h4>
          <div className="space-y-3">
            {steps.map((item) => (
              <Card key={item.step} className="p-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <Card className="p-4 bg-green-50 border-green-200">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900 mb-1">Good News</p>
              <p className="text-sm text-green-700">
                There are many antibiotic classes available. Your doctor can find a safe alternative based on your sensitivity test results.
              </p>
            </div>
          </div>
        </Card>
        
        <div className="flex gap-3">
          <Button 
            onClick={() => navigate('/guidance/alternative-treatments')}
            className="flex-1 bg-blue-600 py-6 rounded-xl"
          >
            View Alternatives
          </Button>
          <Button 
            onClick={() => navigate('/guidance/emergency')}
            variant="outline"
            className="flex-1 py-6 rounded-xl border-red-500 text-red-600 hover:bg-red-50"
          >
            <Phone className="w-5 h-5 mr-2" />
            Emergency
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}