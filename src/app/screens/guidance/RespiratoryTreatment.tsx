import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Pill, Wind, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function RespiratoryTreatment() {
  const navigate = useNavigate();
  
  const treatments = [
    {
      condition: 'Community-Acquired Pneumonia (CAP)',
      severity: 'Outpatient (Mild)',
      standard: [
        { name: 'Amoxicillin', dose: '1g every 8 hours', duration: '5-7 days' },
        { name: 'Amoxicillin-Clavulanate', dose: '875mg every 12 hours', duration: '5-7 days' },
        { name: 'OR Macrolide: Azithromycin', dose: '500mg day 1, 250mg days 2-5', duration: '5 days' }
      ],
      alternative: [
        { name: 'Doxycycline', dose: '100mg every 12 hours', duration: '7 days' },
        { name: 'Levofloxacin', dose: '750mg once daily', duration: '5 days' },
        { name: 'Moxifloxacin', dose: '400mg once daily', duration: '5 days' }
      ]
    },
    {
      condition: 'Community-Acquired Pneumonia (CAP)',
      severity: 'Inpatient (Moderate to Severe)',
      standard: [
        { name: 'Ceftriaxone IV', dose: '1-2g once daily', duration: '5-7 days' },
        { name: 'PLUS Azithromycin', dose: '500mg IV/PO daily', duration: '5 days' },
        { name: 'OR Ceftriaxone + Doxycycline', dose: '100mg IV/PO every 12h', duration: '7 days' }
      ],
      alternative: [
        { name: 'Levofloxacin IV', dose: '750mg once daily', duration: '5-7 days' },
        { name: 'Moxifloxacin IV', dose: '400mg once daily', duration: '5-7 days' },
        { name: 'Aztreonam (severe allergy)', dose: '1-2g every 8 hours', duration: '7-10 days' }
      ]
    },
    {
      condition: 'Acute Bronchitis',
      severity: 'Usually Viral - Antibiotics Not Needed',
      standard: [
        { name: 'Symptomatic treatment preferred', dose: 'Rest, fluids, cough suppressants', duration: '7-10 days' },
        { name: 'If bacterial (COPD patients)', dose: 'Consider antibiotics', duration: 'As below' }
      ],
      alternative: [
        { name: 'Azithromycin', dose: '500mg day 1, 250mg days 2-5', duration: '5 days' },
        { name: 'Doxycycline', dose: '100mg every 12 hours', duration: '5-7 days' },
        { name: 'Amoxicillin-Clavulanate', dose: '875mg every 12 hours', duration: '5-7 days' }
      ]
    }
  ];
  
  const supportiveCare = [
    {
      treatment: 'Bronchodilators',
      details: 'Albuterol inhaler (2 puffs every 4-6 hours)',
      indication: 'For wheezing and shortness of breath'
    },
    {
      treatment: 'Corticosteroids',
      details: 'Prednisone 40-60mg daily for 5 days',
      indication: 'For severe inflammation, COPD exacerbation'
    },
    {
      treatment: 'Oxygen Therapy',
      details: 'Maintain SpO2 >90%',
      indication: 'For hypoxemia'
    },
    {
      treatment: 'Expectorants',
      details: 'Guaifenesin 200-400mg every 4 hours',
      indication: 'To loosen mucus'
    },
    {
      treatment: 'Antipyretics',
      details: 'Acetaminophen 650mg every 6 hours or Ibuprofen 400mg every 8 hours',
      indication: 'For fever and body aches'
    },
    {
      treatment: 'Hydration',
      details: '2-3 liters of fluids daily',
      indication: 'Essential for recovery'
    }
  ];
  
  const nonAntibioticApproaches = [
    'Steam inhalation (3-4 times daily, 10-15 minutes)',
    'Chest physiotherapy and postural drainage',
    'Breathing exercises (incentive spirometry)',
    'Humidifier use at night',
    'Elevate head of bed 30-45 degrees',
    'Avoid smoking and secondhand smoke',
    'Herbal teas (ginger, honey, lemon)',
    'Vitamin C supplementation (1000mg daily)'
  ];
  
  return (
    <MobileLayout title="Respiratory Infection Treatment">
      <div className="space-y-6 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <Wind className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold text-blue-900">Respiratory Tract Infections</h3>
              <p className="text-sm text-blue-700 mt-1">
                Treatment protocols for pneumonia and bronchitis
              </p>
            </div>
          </div>
        </div>
        
        {treatments.map((treatment, i) => (
          <div key={i} className="space-y-3">
            <div className="bg-gray-100 rounded-lg p-3">
              <p className="font-semibold text-gray-800">{treatment.condition}</p>
              <p className="text-sm text-gray-600 mt-1">{treatment.severity}</p>
            </div>
            
            <Card className="p-4">
              <p className="font-semibold text-green-700 mb-3">✓ Standard Treatment</p>
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            {treatment.alternative && (
              <Card className="p-4">
                <p className="font-semibold text-orange-700 mb-3">⚠ For Allergic Patients (Alternative)</p>
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
            )}
          </div>
        ))}
        
        <div>
          <h4 className="font-semibold mb-3">Essential Supportive Care</h4>
          <div className="space-y-2">
            {supportiveCare.map((care, i) => (
              <Card key={i} className="p-3">
                <p className="font-medium text-gray-800">{care.treatment}</p>
                <p className="text-sm text-blue-600 mt-1">{care.details}</p>
                <p className="text-xs text-gray-500 mt-1 italic">{care.indication}</p>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Non-Antibiotic Supportive Measures</h4>
          <Card className="p-4">
            <div className="space-y-2">
              {nonAntibioticApproaches.map((approach, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{approach}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <p className="font-semibold text-yellow-900 mb-1">Important Notes</p>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• Order chest X-ray for pneumonia confirmation</li>
                <li>• Check renal function before prescribing</li>
                <li>• Monitor respiratory rate and oxygen saturation</li>
                <li>• Hospitalize if: SpO2 &lt;90%, respiratory rate &gt;30, altered mental status</li>
                <li>• Consider influenza and COVID-19 testing</li>
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
            onClick={() => navigate('/results/recommendations')}
            className="flex-1 bg-blue-600 py-6 rounded-xl"
          >
            View Test Results
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
