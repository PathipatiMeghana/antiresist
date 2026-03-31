import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { FlaskConical } from 'lucide-react';

export default function TestMethodSelection() {
  const navigate = useNavigate();
  const [method, setMethod] = useState('');
  
  const methods = [
    { id: 'disk', name: 'Disk Diffusion Method', desc: 'Kirby-Bauer test' },
    { id: 'etest', name: 'E-test', desc: 'MIC determination' },
    { id: 'broth', name: 'Broth Dilution', desc: 'Macro/micro dilution' },
    { id: 'automated', name: 'Automated System', desc: 'VITEK, Phoenix, etc.' }
  ];
  
  return (
    <MobileLayout title="Test Method">
      <div className="space-y-3 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <p className="text-sm text-blue-800">
            Select the laboratory method used for antibiotic sensitivity testing
          </p>
        </div>
        
        {methods.map(m => (
          <button 
            key={m.id} 
            onClick={() => setMethod(m.id)} 
            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
              method === m.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <FlaskConical className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold">{m.name}</p>
                <p className="text-sm text-gray-600">{m.desc}</p>
              </div>
            </div>
          </button>
        ))}
        
        <Button 
          onClick={() => navigate('/antibiotic/zone-inhibition')} 
          disabled={!method} 
          className="w-full mt-8 bg-blue-600 py-6 rounded-xl disabled:opacity-50"
        >
          Next: Measurements
        </Button>
      </div>
    </MobileLayout>
  );
}
