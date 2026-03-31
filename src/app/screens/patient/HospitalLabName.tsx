import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Building2 } from 'lucide-react';

export default function HospitalLabName() {
  const navigate = useNavigate();
  const [hospitalName, setHospitalName] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/patient/test-date');
  };

  return (
    <MobileLayout title="Hospital / Lab Information">
      <form onSubmit={handleNext} className="space-y-6 mt-8">
        <div className="space-y-2">
          <Label htmlFor="hospital">Hospital / Laboratory Name *</Label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="hospital"
              value={hospitalName}
              onChange={(e) => setHospitalName(e.target.value)}
              placeholder="Enter hospital or lab name"
              className="pl-10 py-6 rounded-xl"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-xl text-lg mt-8"
        >
          Next: Test Date
        </Button>
      </form>
    </MobileLayout>
  );
}
