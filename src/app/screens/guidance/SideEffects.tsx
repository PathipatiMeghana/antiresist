import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

export default function SideEffects() {
  const navigate = useNavigate();
  
  const commonSideEffects = [
    { name: 'Nausea or upset stomach', severity: 'mild', tip: 'Take with food' },
    { name: 'Diarrhea', severity: 'mild', tip: 'Stay hydrated, eat bland foods' },
    { name: 'Headache', severity: 'mild', tip: 'Rest and drink water' },
    { name: 'Yeast infections', severity: 'mild', tip: 'Eat yogurt, consult doctor' }
  ];
  
  const seriousSideEffects = [
    'Severe allergic reaction (rash, swelling)',
    'Difficulty breathing or wheezing',
    'Severe diarrhea with blood',
    'Irregular heartbeat',
    'Confusion or hallucinations',
    'Severe abdominal pain'
  ];
  
  const managementTips = [
    {
      title: 'Take with Food',
      desc: 'Reduces stomach upset and nausea'
    },
    {
      title: 'Stay Hydrated',
      desc: 'Drink plenty of water throughout the day'
    },
    {
      title: 'Avoid Alcohol',
      desc: 'Can increase side effects and reduce effectiveness'
    },
    {
      title: 'Complete Full Course',
      desc: 'Don\'t stop early even if feeling better'
    },
    {
      title: 'Take Probiotics',
      desc: 'Help restore gut bacteria (consult doctor)'
    },
    {
      title: 'Report Symptoms',
      desc: 'Inform doctor of any concerning side effects'
    }
  ];
  
  return (
    <MobileLayout title="Side Effects & Safety">
      <div className="space-y-6 mt-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900 mb-1">Most Side Effects Are Mild</p>
              <p className="text-sm text-green-700">
                Common side effects are usually temporary and manageable. Serious reactions are rare.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-yellow-600" />
            Common Side Effects
          </h4>
          <div className="space-y-2">
            {commonSideEffects.map((effect, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium text-gray-800">{effect.name}</p>
                    <p className="text-sm text-gray-600 mt-1">💡 {effect.tip}</p>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full font-medium whitespace-nowrap">
                    {effect.severity}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-red-600" />
            Seek Medical Help If You Experience:
          </h4>
          <Card className="p-4 bg-red-50 border-red-200">
            <div className="space-y-2">
              {seriousSideEffects.map((effect, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-red-900">{effect}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">How to Manage Side Effects</h4>
          <div className="space-y-2">
            {managementTips.map((tip, i) => (
              <Card key={i} className="p-3">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-xs flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-800">{tip.title}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{tip.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={() => navigate('/guidance/antibiotic-allergy')}
            variant="outline"
            className="flex-1 py-6 rounded-xl"
          >
            Allergy Info
          </Button>
          <Button 
            onClick={() => navigate('/guidance/emergency')}
            className="flex-1 bg-red-600 py-6 rounded-xl"
          >
            Emergency Help
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}