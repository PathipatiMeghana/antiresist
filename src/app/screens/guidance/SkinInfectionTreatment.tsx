import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Pill, Syringe, Droplet, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function SkinInfectionTreatment() {
  const navigate = useNavigate();
  
  const treatments = [
    {
      severity: 'Mild Skin Infections (Cellulitis, Impetigo)',
      treatments: [
        {
          category: 'First-Line (No Allergy)',
          medications: [
            { name: 'Cephalexin', dose: '500mg every 6 hours', duration: '7-10 days' },
            { name: 'Dicloxacillin', dose: '500mg every 6 hours', duration: '7-10 days' },
            { name: 'Amoxicillin-Clavulanate', dose: '875mg every 12 hours', duration: '7-10 days' }
          ]
        },
        {
          category: 'For Penicillin/Beta-Lactam Allergy',
          medications: [
            { name: 'Clindamycin', dose: '300-450mg every 6 hours', duration: '7-10 days' },
            { name: 'Azithromycin', dose: '500mg day 1, then 250mg daily', duration: '5 days' },
            { name: 'Doxycycline', dose: '100mg every 12 hours', duration: '7-10 days' }
          ]
        },
        {
          category: 'Topical Treatment (for localized)',
          medications: [
            { name: 'Mupirocin 2% ointment', dose: 'Apply 3 times daily', duration: '7-10 days' },
            { name: 'Fusidic acid cream', dose: 'Apply 3 times daily', duration: '7 days' },
            { name: 'Retapamulin ointment', dose: 'Apply twice daily', duration: '5 days' }
          ]
        }
      ]
    },
    {
      severity: 'Moderate to Severe Infections (Abscess, Deep Cellulitis)',
      treatments: [
        {
          category: 'IV Antibiotics (Hospital Setting)',
          medications: [
            { name: 'Cefazolin IV', dose: '1-2g every 8 hours', duration: '5-7 days' },
            { name: 'Nafcillin IV', dose: '1-2g every 4-6 hours', duration: '5-7 days' },
            { name: 'Vancomycin IV (MRSA)', dose: '15-20mg/kg every 12 hours', duration: '7-14 days' }
          ]
        },
        {
          category: 'For Antibiotic-Allergic Patients',
          medications: [
            { name: 'Vancomycin IV', dose: '15-20mg/kg every 12 hours', duration: '7-14 days' },
            { name: 'Linezolid', dose: '600mg every 12 hours (oral/IV)', duration: '10-14 days' },
            { name: 'Daptomycin IV', dose: '4-6mg/kg once daily', duration: '7-14 days' }
          ]
        },
        {
          category: 'Surgical Intervention',
          medications: [
            { name: 'Incision & Drainage', dose: 'For abscess >2cm', duration: 'One-time procedure' },
            { name: 'Wound debridement', dose: 'Remove necrotic tissue', duration: 'As needed' }
          ]
        }
      ]
    }
  ];
  
  const supportiveCare = [
    'Warm compresses to affected area (20 min, 3-4 times daily)',
    'Elevate affected limb to reduce swelling',
    'Keep wound clean and covered with sterile dressing',
    'Change dressings daily or when soiled',
    'NSAIDs (Ibuprofen 400mg every 8 hours) for pain and inflammation',
    'Adequate hydration (2-3 liters of water daily)',
    'Rest and avoid strenuous activity',
    'Monitor for signs of worsening (fever, spreading redness)'
  ];
  
  const nonAntibioticOptions = [
    {
      method: 'Medical-Grade Honey Dressings',
      description: 'Antimicrobial properties, promotes healing',
      usage: 'Apply to wound, change daily'
    },
    {
      method: 'Silver Sulfadiazine Cream',
      description: 'Broad-spectrum antimicrobial for burns and wounds',
      usage: 'Apply 1-2mm layer twice daily'
    },
    {
      method: 'Hyperbaric Oxygen Therapy',
      description: 'For chronic or non-healing wounds',
      usage: 'Hospital-based treatment, 20-40 sessions'
    },
    {
      method: 'Phototherapy (Blue Light)',
      description: 'Kills bacteria on skin surface',
      usage: 'Dermatologist-administered, 2-3 sessions/week'
    }
  ];
  
  return (
    <MobileLayout title="Skin Infection Treatment">
      <div className="space-y-6 mt-6">
        <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
          <h3 className="font-semibold text-pink-900 mb-2">Skin & Soft Tissue Infections</h3>
          <p className="text-sm text-pink-700">
            Complete treatment protocols including alternatives for antibiotic-allergic patients
          </p>
        </div>
        
        {treatments.map((section, i) => (
          <div key={i} className="space-y-3">
            <h4 className="font-semibold text-gray-800">{section.severity}</h4>
            {section.treatments.map((treatment, j) => (
              <Card key={j} className="p-4">
                <div className="mb-3">
                  <p className="font-semibold text-blue-700 mb-2">{treatment.category}</p>
                </div>
                <div className="space-y-3">
                  {treatment.medications.map((med, k) => (
                    <div key={k} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-start gap-2">
                        <Pill className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-medium text-gray-800">{med.name}</p>
                          <p className="text-sm text-gray-600 mt-1">
                            <span className="font-medium">Dose:</span> {med.dose}
                          </p>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Duration:</span> {med.duration}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        ))}
        
        <div>
          <h4 className="font-semibold mb-3">Supportive Care Measures</h4>
          <Card className="p-4">
            <div className="space-y-2">
              {supportiveCare.map((care, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{care}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Non-Antibiotic Treatment Options</h4>
          <div className="space-y-3">
            {nonAntibioticOptions.map((option, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-start gap-3">
                  <Droplet className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-800">{option.method}</p>
                    <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                    <p className="text-xs text-blue-600 mt-2">
                      <span className="font-medium">Usage:</span> {option.usage}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <p className="font-semibold text-yellow-900 mb-1">Clinical Notes</p>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• Adjust dose based on renal function</li>
                <li>• Check for drug interactions</li>
                <li>• Culture and sensitivity testing recommended</li>
                <li>• Monitor for treatment failure after 48-72 hours</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={() => navigate('/guidance/treatment-protocol')}
            variant="outline"
            className="flex-1 py-6 rounded-xl"
          >
            Back to Protocols
          </Button>
          <Button 
            onClick={() => navigate('/patient/basic-details')}
            className="flex-1 bg-blue-600 py-6 rounded-xl"
          >
            Start New Test
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
