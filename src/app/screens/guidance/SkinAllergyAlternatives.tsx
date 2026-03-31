import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Pill, Shield, Droplet, Sparkles, Activity, AlertCircle } from 'lucide-react';

export default function SkinAllergyAlternatives() {
  const navigate = useNavigate();
  
  const topicalTreatments = [
    {
      icon: Droplet,
      name: 'Antiseptic Solutions',
      options: ['Betadine (Povidone-iodine)', 'Chlorhexidine', 'Hydrogen peroxide'],
      use: 'Wound cleaning and infection prevention',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Sparkles,
      name: 'Antibiotic Creams/Ointments',
      options: ['Mupirocin (Bactroban)', 'Neomycin ointment', 'Bacitracin', 'Fusidic acid'],
      use: 'Direct application to infected skin areas',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Shield,
      name: 'Silver Sulfadiazine',
      options: ['Silver-based dressings', 'Flamazine cream'],
      use: 'Burns and deep wounds with infection risk',
      color: 'bg-gray-100 text-gray-600'
    }
  ];
  
  const alternativeAntibiotics = [
    {
      allergy: 'Penicillin Allergy',
      avoid: ['Amoxicillin', 'Ampicillin', 'Penicillin G/V'],
      alternatives: [
        'Macrolides (Azithromycin, Clarithromycin)',
        'Fluoroquinolones (Levofloxacin, Ciprofloxacin)',
        'Cephalosporins (if not severe allergy)',
        'Clindamycin'
      ]
    },
    {
      allergy: 'Sulfa Drug Allergy',
      avoid: ['Sulfamethoxazole-Trimethoprim (Bactrim)', 'Sulfasalazine'],
      alternatives: [
        'Doxycycline',
        'Nitrofurantoin (for UTIs)',
        'Fluoroquinolones',
        'Cephalosporins'
      ]
    },
    {
      allergy: 'Cephalosporin Allergy',
      avoid: ['Cephalexin', 'Ceftriaxone', 'Cefuroxime'],
      alternatives: [
        'Fluoroquinolones',
        'Macrolides',
        'Doxycycline',
        'Clindamycin'
      ]
    }
  ];
  
  const skinCare = [
    'Apply cool compresses to reduce itching',
    'Use fragrance-free moisturizers',
    'Take antihistamines (Benadryl, Cetirizine) for rash',
    'Apply hydrocortisone cream for mild rashes',
    'Avoid scratching to prevent secondary infection',
    'Wear loose, breathable cotton clothing',
    'Keep affected area clean and dry',
    'Document reaction for future medical records'
  ];
  
  return (
    <MobileLayout title="Skin Allergy Alternatives">
      <div className="space-y-6 mt-6">
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-purple-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-purple-900 mb-2">Safe Treatment Options</h3>
              <p className="text-sm text-purple-700">
                Multiple antibiotic alternatives and topical treatments available for patients with skin allergies.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Topical Treatments (Applied to Skin)</h4>
          <div className="space-y-3">
            {topicalTreatments.map((treatment, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-xl ${treatment.color} flex items-center justify-center flex-shrink-0`}>
                    <treatment.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{treatment.name}</p>
                    <div className="mt-2 space-y-1">
                      {treatment.options.map((option, j) => (
                        <p key={j} className="text-xs text-gray-600">• {option}</p>
                      ))}
                    </div>
                    <p className="text-xs text-blue-600 mt-2 font-medium">Use: {treatment.use}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Alternative Oral Antibiotics by Allergy Type</h4>
          <div className="space-y-3">
            {alternativeAntibiotics.map((item, i) => (
              <Card key={i} className="p-4">
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="font-semibold text-gray-800">{item.allergy}</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-2 mb-2">
                    <p className="text-xs text-red-800 font-medium mb-1">❌ Avoid:</p>
                    <div className="space-y-0.5">
                      {item.avoid.map((drug, j) => (
                        <p key={j} className="text-xs text-red-700">• {drug}</p>
                      ))}
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2">
                    <p className="text-xs text-green-800 font-medium mb-1">✅ Safe Alternatives:</p>
                    <div className="space-y-0.5">
                      {item.alternatives.map((alt, j) => (
                        <p key={j} className="text-xs text-green-700">• {alt}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Managing Skin Allergy Symptoms</h4>
          <Card className="p-4">
            <div className="space-y-2">
              {skinCare.map((tip, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Activity className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-900 font-semibold mb-2">
            💡 How This App Helps You
          </p>
          <p className="text-sm text-blue-700">
            Our antibiotic sensitivity test identifies which antibiotics work for your specific bacteria, helping doctors choose alternatives that avoid your allergies.
          </p>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <p className="font-semibold text-yellow-900 mb-1">Important</p>
              <p className="text-sm text-yellow-700">
                Always inform your doctor about ALL drug allergies before starting treatment. Keep an updated allergy list.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={() => navigate('/guidance/antibiotic-allergy')}
            variant="outline"
            className="flex-1 py-6 rounded-xl"
          >
            Allergy Guide
          </Button>
          <Button 
            onClick={() => navigate('/results/recommendations')}
            className="flex-1 bg-blue-600 py-6 rounded-xl"
          >
            <Pill className="w-5 h-5 mr-2" />
            View Test Results
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
