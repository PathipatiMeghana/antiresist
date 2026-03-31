import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Pill, Droplet, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function UTITreatment() {
  const navigate = useNavigate();
  
  const treatments = [
    {
      condition: 'Uncomplicated Cystitis (Bladder Infection)',
      patient: 'Non-Pregnant Women',
      standard: [
        { name: 'Nitrofurantoin', dose: '100mg every 12 hours', duration: '5 days' },
        { name: 'Trimethoprim-Sulfamethoxazole', dose: '160/800mg every 12 hours', duration: '3 days' },
        { name: 'Fosfomycin', dose: '3g single dose', duration: 'One time' }
      ],
      alternative: [
        { name: 'Ciprofloxacin', dose: '250mg every 12 hours', duration: '3 days' },
        { name: 'Levofloxacin', dose: '250mg once daily', duration: '3 days' },
        { name: 'Cephalexin', dose: '500mg every 6 hours', duration: '5-7 days' }
      ]
    },
    {
      condition: 'Uncomplicated Cystitis',
      patient: 'Pregnant Women',
      standard: [
        { name: 'Nitrofurantoin', dose: '100mg every 12 hours', duration: '5-7 days', note: 'Avoid in last month of pregnancy' },
        { name: 'Cephalexin', dose: '500mg every 6 hours', duration: '5-7 days' },
        { name: 'Amoxicillin-Clavulanate', dose: '875mg every 12 hours', duration: '5-7 days' }
      ],
      alternative: [
        { name: 'Cefpodoxime', dose: '100mg every 12 hours', duration: '5-7 days' },
        { name: 'Cefuroxime', dose: '250mg every 12 hours', duration: '7 days' }
      ]
    },
    {
      condition: 'Pyelonephritis (Kidney Infection)',
      patient: 'Outpatient Treatment',
      standard: [
        { name: 'Ciprofloxacin', dose: '500mg every 12 hours OR 1000mg XR daily', duration: '7 days' },
        { name: 'Levofloxacin', dose: '750mg once daily', duration: '5 days' },
        { name: 'Ceftriaxone IM (loading)', dose: '1g once, then oral antibiotic', duration: '7-14 days total' }
      ],
      alternative: [
        { name: 'Trimethoprim-Sulfamethoxazole', dose: '160/800mg every 12 hours', duration: '14 days' },
        { name: 'Cefpodoxime', dose: '200mg every 12 hours', duration: '14 days' }
      ]
    },
    {
      condition: 'Pyelonephritis (Kidney Infection)',
      patient: 'Inpatient (Severe) - IV Treatment',
      standard: [
        { name: 'Ceftriaxone IV', dose: '1-2g once daily', duration: 'Until improved, then oral' },
        { name: 'Ciprofloxacin IV', dose: '400mg every 12 hours', duration: 'Until improved, then oral' },
        { name: 'Gentamicin IV', dose: '5-7mg/kg once daily', duration: '3-5 days, then oral' }
      ],
      alternative: [
        { name: 'Aztreonam IV', dose: '1-2g every 8 hours', duration: 'For severe penicillin allergy' },
        { name: 'Ertapenem IV', dose: '1g once daily', duration: 'For resistant organisms' }
      ]
    }
  ];
  
  const supportiveCare = [
    {
      measure: 'Hydration',
      details: 'Drink 2-3 liters of water daily',
      benefit: 'Flushes bacteria from urinary tract'
    },
    {
      measure: 'Cranberry Products',
      details: 'Cranberry juice (unsweetened) or supplements',
      benefit: 'May prevent bacterial adherence (prevention, not treatment)'
    },
    {
      measure: 'Pain Relief',
      details: 'Phenazopyridine (Pyridium) 200mg 3 times daily',
      benefit: 'Relieves burning and urgency (max 2 days)'
    },
    {
      measure: 'NSAIDs',
      details: 'Ibuprofen 400mg every 8 hours',
      benefit: 'Reduces pain and inflammation'
    },
    {
      measure: 'Heat Application',
      details: 'Warm compress on lower abdomen',
      benefit: 'Relieves discomfort'
    },
    {
      measure: 'Avoid Irritants',
      details: 'No caffeine, alcohol, spicy foods',
      benefit: 'Reduces bladder irritation'
    }
  ];
  
  const preventionMeasures = [
    'Urinate after sexual intercourse',
    'Wipe front to back after bowel movements',
    'Avoid holding urine for long periods',
    'Wear cotton underwear and loose clothing',
    'Take showers instead of baths',
    'D-Mannose supplements (500mg-2g daily)',
    'Probiotic supplements (Lactobacillus)',
    'Maintain good personal hygiene'
  ];
  
  return (
    <MobileLayout title="UTI Treatment">
      <div className="space-y-6 mt-6">
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <Droplet className="w-6 h-6 text-purple-600" />
            <div>
              <h3 className="font-semibold text-purple-900">Urinary Tract Infections</h3>
              <p className="text-sm text-purple-700 mt-1">
                Complete treatment protocols for cystitis and pyelonephritis
              </p>
            </div>
          </div>
        </div>
        
        {treatments.map((treatment, i) => (
          <div key={i} className="space-y-3">
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="font-semibold text-gray-800">{treatment.condition}</p>
              <p className="text-sm text-purple-600 mt-1">{treatment.patient}</p>
            </div>
            
            <Card className="p-4">
              <p className="font-semibold text-green-700 mb-3">✓ First-Line Treatment</p>
              <div className="space-y-3">
                {treatment.standard.map((med, j) => (
                  <div key={j} className="bg-green-50 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Pill className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-800">{med.name}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          <span className="font-medium">Dose:</span> {med.dose}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Duration:</span> {med.duration}
                        </p>
                        {med.note && (
                          <p className="text-xs text-orange-600 mt-1 italic">⚠ {med.note}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-4">
              <p className="font-semibold text-orange-700 mb-3">⚠ Alternative Options</p>
              <div className="space-y-3">
                {treatment.alternative.map((med, j) => (
                  <div key={j} className="bg-orange-50 rounded-lg p-3">
                    <div className="flex items-start gap-2">
                      <Pill className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
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
          </div>
        ))}
        
        <div>
          <h4 className="font-semibold mb-3">Supportive Care & Symptom Relief</h4>
          <div className="space-y-2">
            {supportiveCare.map((care, i) => (
              <Card key={i} className="p-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{care.measure}</p>
                    <p className="text-sm text-gray-600 mt-1">{care.details}</p>
                    <p className="text-xs text-blue-600 mt-1 italic">{care.benefit}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Prevention Strategies</h4>
          <Card className="p-4 bg-green-50 border-green-200">
            <div className="space-y-2">
              {preventionMeasures.map((measure, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 flex-shrink-0" />
                  <p className="text-sm text-green-800">{measure}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <p className="font-semibold text-yellow-900 mb-1">Clinical Guidelines</p>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• Always obtain urine culture before starting antibiotics (if possible)</li>
                <li>• Adjust therapy based on culture and sensitivity results</li>
                <li>• Consider local resistance patterns</li>
                <li>• Avoid fluoroquinolones in pregnancy</li>
                <li>• Symptoms should improve within 48 hours</li>
                <li>• Refer to urology if recurrent infections (&gt;2 in 6 months)</li>
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
            Other Protocols
          </Button>
          <Button 
            onClick={() => navigate('/patient/basic-details')}
            className="flex-1 bg-purple-600 py-6 rounded-xl"
          >
            Start New Test
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
