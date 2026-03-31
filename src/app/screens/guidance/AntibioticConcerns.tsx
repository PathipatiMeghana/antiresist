import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { AlertTriangle, Shield, Phone, FileText, ClipboardList } from 'lucide-react';

export default function AntibioticConcerns() {
  const navigate = useNavigate();
  
  const concerns = [
    {
      title: 'Antibiotic Allergy',
      icon: AlertTriangle,
      color: 'bg-red-100 text-red-600',
      path: '/guidance/antibiotic-allergy'
    },
    {
      title: 'Not Responding to Treatment',
      icon: Shield,
      color: 'bg-orange-100 text-orange-600',
      path: '/guidance/not-responding'
    },
    {
      title: 'Fear of Side Effects',
      icon: AlertTriangle,
      color: 'bg-yellow-100 text-yellow-600',
      path: '/guidance/side-effects'
    },
    {
      title: 'Fear of Taking Antibiotics',
      icon: Shield,
      color: 'bg-green-100 text-green-600',
      path: '/guidance/fear-of-antibiotics'
    },
    {
      title: 'Skin Allergies & Rashes',
      icon: AlertTriangle,
      color: 'bg-pink-100 text-pink-600',
      path: '/guidance/skin-allergy-alternatives'
    },
    {
      title: 'Alternative Treatments',
      icon: FileText,
      color: 'bg-blue-100 text-blue-600',
      path: '/guidance/alternative-treatments'
    },
    {
      title: 'Treatment Protocols',
      icon: ClipboardList,
      color: 'bg-purple-100 text-purple-600',
      path: '/guidance/treatment-protocol'
    }
  ];
  
  return (
    <MobileLayout title="Antibiotic Concerns">
      <div className="space-y-6 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="font-semibold text-blue-900 mb-2">Need Help?</h3>
          <p className="text-sm text-blue-700">
            If you have concerns about antibiotic treatment, select your concern below for guidance and next steps.
          </p>
        </div>
        
        <div className="space-y-3">
          {concerns.map((concern) => (
            <Card
              key={concern.title}
              onClick={() => navigate(concern.path)}
              className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${concern.color} flex items-center justify-center`}>
                  <concern.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{concern.title}</p>
                  <p className="text-sm text-gray-500">Tap for guidance</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-red-600 mt-0.5" />
            <div>
              <p className="font-semibold text-red-900 mb-1">Emergency Contact</p>
              <p className="text-sm text-red-700 mb-2">
                If experiencing severe allergic reaction (difficulty breathing, swelling, rash), seek immediate medical attention.
              </p>
              <Button 
                onClick={() => navigate('/guidance/emergency')}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Emergency Guidelines
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}