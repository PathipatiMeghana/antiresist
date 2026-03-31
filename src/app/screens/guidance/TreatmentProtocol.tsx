import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Pill, Activity, AlertCircle, ClipboardList } from 'lucide-react';

export default function TreatmentProtocol() {
  const navigate = useNavigate();
  
  const protocols = [
    {
      condition: 'Skin & Soft Tissue Infections',
      icon: Activity,
      color: 'bg-pink-100 text-pink-600',
      path: '/guidance/skin-infection-treatment'
    },
    {
      condition: 'Respiratory Tract Infections',
      icon: Activity,
      color: 'bg-blue-100 text-blue-600',
      path: '/guidance/respiratory-treatment'
    },
    {
      condition: 'Urinary Tract Infections',
      icon: Activity,
      color: 'bg-purple-100 text-purple-600',
      path: '/guidance/uti-treatment'
    },
    {
      condition: 'Gastrointestinal Infections',
      icon: Activity,
      color: 'bg-orange-100 text-orange-600',
      path: '/guidance/gi-infection-treatment'
    },
    {
      condition: 'Wound Infections',
      icon: Activity,
      color: 'bg-red-100 text-red-600',
      path: '/guidance/wound-treatment'
    },
    {
      condition: 'Ear, Nose, Throat Infections',
      icon: Activity,
      color: 'bg-green-100 text-green-600',
      path: '/guidance/ent-treatment'
    }
  ];
  
  return (
    <MobileLayout title="Treatment Protocols">
      <div className="space-y-6 mt-6">
        <div className="bg-blue-600 rounded-xl p-4 text-white">
          <div className="flex items-center gap-3">
            <ClipboardList className="w-8 h-8" />
            <div>
              <h3 className="font-semibold text-lg">Select Infection Type</h3>
              <p className="text-sm text-blue-100 mt-1">
                View specific treatment protocols and cure methods
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          {protocols.map((protocol) => (
            <Card
              key={protocol.condition}
              onClick={() => navigate(protocol.path)}
              className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl ${protocol.color} flex items-center justify-center flex-shrink-0`}>
                  <protocol.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800">{protocol.condition}</p>
                  <p className="text-sm text-gray-500 mt-1">View treatment options</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <p className="font-semibold text-yellow-900 mb-1">For Healthcare Providers</p>
              <p className="text-sm text-yellow-700">
                These protocols include alternative treatments for patients with antibiotic allergies or contraindications. Always verify patient allergies before prescribing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}