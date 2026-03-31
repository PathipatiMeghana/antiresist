import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Plus, X } from 'lucide-react';

export default function AddMultipleAntibiotics() {
  const navigate = useNavigate();
  const [antibiotics, setAntibiotics] = useState<string[]>(['']);

  const addMore = () => setAntibiotics([...antibiotics, '']);
  const remove = (index: number) => setAntibiotics(antibiotics.filter((_, i) => i !== index));
  
  return (
    <MobileLayout title="Add Custom Antibiotics">
      <div className="space-y-4 mt-6">
        {antibiotics.map((antibiotic, i) => (
          <div key={i} className="flex gap-2">
            <Input 
              value={antibiotic}
              onChange={(e) => {
                const newAntibiotics = [...antibiotics];
                newAntibiotics[i] = e.target.value;
                setAntibiotics(newAntibiotics);
              }}
              placeholder="Enter antibiotic name" 
              className="py-6 rounded-xl flex-1" 
            />
            {antibiotics.length > 1 && (
              <Button variant="outline" size="icon" onClick={() => remove(i)} className="rounded-xl">
                <X className="w-5 h-5" />
              </Button>
            )}
          </div>
        ))}
        <Button onClick={addMore} variant="outline" className="w-full py-6 rounded-xl">
          <Plus className="w-5 h-5 mr-2" />
          Add More
        </Button>
        <Button onClick={() => navigate('/antibiotic/test-method')} className="w-full bg-blue-600 py-6 rounded-xl mt-6">
          Continue
        </Button>
      </div>
    </MobileLayout>
  );
}
