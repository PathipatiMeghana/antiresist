import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Hash } from 'lucide-react';

export default function SampleIDEntry() {
  const navigate = useNavigate();
  const [sampleId, setSampleId] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/sample/collection-date');
  };

  return (
    <MobileLayout title="Sample ID">
      <form onSubmit={handleNext} className="space-y-6 mt-8">
        <div className="space-y-2">
          <Label htmlFor="sampleId">Sample ID *</Label>
          <div className="relative">
            <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="sampleId"
              value={sampleId}
              onChange={(e) => setSampleId(e.target.value)}
              placeholder="e.g., S-2024-001"
              className="pl-10 py-6 rounded-xl"
              required
            />
          </div>
          <p className="text-sm text-gray-500">Unique laboratory sample identification number</p>
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-xl text-lg mt-8"
        >
          Next: Collection Date
        </Button>
      </form>
    </MobileLayout>
  );
}
