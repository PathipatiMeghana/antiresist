// This file contains templates for creating remaining screens
// Copy and adapt these templates to create individual screen files

export const screenTemplates = {
  // Antibiotic Testing Screens
  AddMultipleAntibiotics: `
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';

export default function AddMultipleAntibiotics() {
  const navigate = useNavigate();
  const [antibiotics, setAntibiotics] = useState<string[]>(['']);

  const addMore = () => setAntibiotics([...antibiotics, '']);
  
  return (
    <MobileLayout title="Add Antibiotics">
      <div className="space-y-4 mt-6">
        {antibiotics.map((_, i) => (
          <Input key={i} placeholder="Antibiotic name" className="py-6 rounded-xl" />
        ))}
        <Button onClick={addMore} variant="outline" className="w-full">Add More</Button>
        <Button onClick={() => navigate('/antibiotic/test-method')} className="w-full bg-blue-600">Next</Button>
      </div>
    </MobileLayout>
  );
}
  `,

  TestMethodSelection: `
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';

export default function TestMethodSelection() {
  const navigate = useNavigate();
  const [method, setMethod] = useState('');
  const methods = ['Disk Diffusion', 'E-test', 'Broth Dilution', 'Automated System'];
  
  return (
    <MobileLayout title="Test Method">
      <div className="space-y-3 mt-6">
        {methods.map(m => (
          <button key={m} onClick={() => setMethod(m)} className={\`w-full p-4 rounded-xl border-2 \${method === m ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}\`}>
            {m}
          </button>
        ))}
        <Button onClick={() => navigate('/antibiotic/zone-inhibition')} disabled={!method} className="w-full mt-8 bg-blue-600">Next</Button>
      </div>
    </MobileLayout>
  );
}
  `,

  ZoneOfInhibition: `
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';

export default function ZoneOfInhibition() {
  const navigate = useNavigate();
  const [zone, setZone] = useState('');
  
  return (
    <MobileLayout title="Zone of Inhibition">
      <form onSubmit={(e) => { e.preventDefault(); navigate('/antibiotic/sensitivity'); }} className="space-y-6 mt-8">
        <div className="space-y-2">
          <Label>Zone Diameter (mm)</Label>
          <Input type="number" value={zone} onChange={(e) => setZone(e.target.value)} placeholder="Enter diameter in mm" className="py-6 rounded-xl" required />
        </div>
        <Button type="submit" className="w-full bg-blue-600">Next: Classification</Button>
      </form>
    </MobileLayout>
  );
}
  `,

  SensitivityClassification: `
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

export default function SensitivityClassification() {
  const navigate = useNavigate();
  const [classification, setClassification] = useState('');
  const options = [
    { id: 'sensitive', label: 'Sensitive (S)', icon: CheckCircle2, color: 'bg-green-100 text-green-600' },
    { id: 'intermediate', label: 'Intermediate (I)', icon: AlertCircle, color: 'bg-yellow-100 text-yellow-600' },
    { id: 'resistant', label: 'Resistant (R)', icon: XCircle, color: 'bg-red-100 text-red-600' }
  ];
  
  return (
    <MobileLayout title="Sensitivity Result">
      <div className="space-y-4 mt-6">
        {options.map(opt => (
          <button key={opt.id} onClick={() => setClassification(opt.id)} className={\`w-full p-5 rounded-2xl border-2 \${classification === opt.id ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}\`}>
            <div className="flex items-center gap-3">
              <div className={\`w-14 h-14 rounded-xl \${opt.color} flex items-center justify-center\`}>
                <opt.icon className="w-7 h-7" />
              </div>
              <p className="font-semibold text-lg">{opt.label}</p>
            </div>
          </button>
        ))}
        <Button onClick={() => navigate('/evidence/ast-image')} disabled={!classification} className="w-full mt-8 bg-blue-600">Next: Evidence Upload</Button>
      </div>
    </MobileLayout>
  );
}
  `
};
