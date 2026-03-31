import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Pill, Syringe, Droplet, Shield, AlertTriangle } from 'lucide-react';

export default function AlternativeTreatments() {
  const navigate = useNavigate();
  
  const options = [
    {
      icon: Pill,
      title: 'Different Antibiotic Class',
      desc: 'Switch to an alternative antibiotic family',
      examples: 'Penicillin → Cephalosporin → Fluoroquinolone',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Syringe,
      title: 'Intravenous (IV) Antibiotics',
      desc: 'Delivered directly into bloodstream for severe cases',
      examples: 'Hospital or clinic administration',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Droplet,
      title: 'Combination Therapy',
      desc: 'Using two or more antibiotics together',
      examples: 'For multi-drug resistant bacteria',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Shield,
      title: 'Supportive Care',
      desc: 'Help body fight infection naturally',
      examples: 'Rest, hydration, immune support',
      color: 'bg-orange-100 text-orange-600'
    }
  ];
  
  const nonAntibiotic = [
    'Antipyretics for fever reduction',
    'Pain management medication',
    'Plenty of fluids and rest',
    'Nutritious diet to boost immunity',
    'Wound care and drainage (if applicable)',
    'Regular monitoring of symptoms'
  ];
  
  return (
    <MobileLayout title="Alternative Treatments">
      <div className="space-y-6 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="font-semibold text-blue-900 mb-2">Treatment Options</h3>
          <p className="text-sm text-blue-700">
            If standard antibiotics don't work or cause allergies, several alternatives are available.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Medical Alternatives</h4>
          <div className="space-y-3">
            {options.map((option, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-xl ${option.color} flex items-center justify-center flex-shrink-0`}>
                    <option.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{option.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{option.desc}</p>
                    <p className="text-xs text-gray-500 mt-2 italic">{option.examples}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Supportive Care Measures</h4>
          <Card className="p-4">
            <div className="space-y-2">
              {nonAntibiotic.map((measure, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{measure}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <p className="font-semibold text-yellow-900 mb-1">Consult Your Doctor</p>
              <p className="text-sm text-yellow-700">
                Always consult with a healthcare professional before changing or stopping antibiotic treatment. Do not self-medicate.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={() => navigate('/results/recommendations')}
            className="flex-1 bg-blue-600 py-6 rounded-xl"
          >
            View Test Results
          </Button>
          <Button 
            onClick={() => navigate('/guidance/antibiotic-concerns')}
            variant="outline"
            className="flex-1 py-6 rounded-xl"
          >
            Back to Concerns
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}