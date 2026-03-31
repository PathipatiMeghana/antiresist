import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Phone, AlertTriangle, Activity, MapPin } from 'lucide-react';

export default function Emergency() {
  const navigate = useNavigate();
  
  const emergencySigns = [
    'Difficulty breathing or shortness of breath',
    'Swelling of face, lips, tongue, or throat',
    'Severe skin rash or blistering',
    'Rapid or irregular heartbeat',
    'Loss of consciousness or fainting',
    'Severe chest pain',
    'Confusion or disorientation',
    'Seizures or convulsions'
  ];
  
  const immediateActions = [
    {
      step: '1',
      action: 'Call Emergency Services',
      detail: 'Dial 911 or local emergency number immediately'
    },
    {
      step: '2',
      action: 'Stop Medication',
      detail: 'Discontinue antibiotic immediately'
    },
    {
      step: '3',
      action: 'Stay Calm',
      detail: 'Keep patient calm and in comfortable position'
    },
    {
      step: '4',
      action: 'Provide Information',
      detail: 'Tell emergency responders the antibiotic name and dosage'
    }
  ];
  
  return (
    <MobileLayout title="Emergency Guidelines" showBack={true}>
      <div className="space-y-6 mt-6">
        <div className="bg-red-600 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8" />
            <h2 className="text-xl font-bold">Medical Emergency</h2>
          </div>
          <p className="text-red-100 mb-4">
            If experiencing severe allergic reaction or life-threatening symptoms, seek immediate medical attention.
          </p>
          <Button 
            className="w-full bg-white text-red-600 hover:bg-red-50 py-4 font-bold text-lg"
            onClick={() => window.location.href = 'tel:911'}
          >
            <Phone className="w-6 h-6 mr-2" />
            CALL 911
          </Button>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Activity className="w-5 h-5 text-red-600" />
            Emergency Warning Signs
          </h4>
          <Card className="p-4 bg-red-50 border-red-200">
            <div className="space-y-2">
              {emergencySigns.map((sign, i) => (
                <div key={i} className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-900">{sign}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Immediate Actions</h4>
          <div className="space-y-3">
            {immediateActions.map((item) => (
              <Card key={item.step} className="p-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{item.action}</p>
                    <p className="text-sm text-gray-600 mt-1">{item.detail}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <Card className="p-4 bg-blue-50 border-blue-200">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-900 mb-1">Go to Nearest Hospital</p>
              <p className="text-sm text-blue-700">
                Visit the emergency room if unable to reach emergency services or symptoms worsen rapidly.
              </p>
            </div>
          </div>
        </Card>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="text-sm text-yellow-900 font-semibold mb-2">
            Important Information to Provide:
          </p>
          <div className="space-y-1 text-sm text-yellow-800">
            <p>• Name of antibiotic</p>
            <p>• Dosage and when last taken</p>
            <p>• Symptoms and when they started</p>
            <p>• Any known allergies</p>
            <p>• Other medications being taken</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Button 
            onClick={() => window.location.href = 'tel:911'}
            className="py-6 rounded-xl bg-red-600 hover:bg-red-700"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call 911
          </Button>
          <Button 
            onClick={() => navigate('/guidance/antibiotic-allergy')}
            variant="outline"
            className="py-6 rounded-xl"
          >
            Allergy Guide
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}