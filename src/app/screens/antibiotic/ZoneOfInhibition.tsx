import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Ruler } from 'lucide-react';

export default function ZoneOfInhibition() {
  const navigate = useNavigate();
  const [zone, setZone] = useState('');
  
  return (
    <MobileLayout title="Zone of Inhibition">
      <form onSubmit={(e) => { e.preventDefault(); navigate('/antibiotic/sensitivity'); }} className="space-y-6 mt-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-800">
            Measure the diameter of the zone where bacterial growth is inhibited
          </p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="zone">Zone Diameter (mm) *</Label>
          <div className="relative">
            <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input 
              id="zone"
              type="number" 
              value={zone} 
              onChange={(e) => setZone(e.target.value)} 
              placeholder="Enter diameter in millimeters" 
              className="pl-10 py-6 rounded-xl" 
              required 
              min="0"
              step="0.1"
            />
          </div>
          <p className="text-sm text-gray-500">Typical range: 6-40mm</p>
        </div>
        
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-xl text-lg mt-8">
          Next: Classification
        </Button>
      </form>
    </MobileLayout>
  );
}
