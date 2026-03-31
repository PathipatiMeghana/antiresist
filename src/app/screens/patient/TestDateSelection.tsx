import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Calendar } from 'lucide-react';

export default function TestDateSelection() {
  const navigate = useNavigate();
  const [testDate, setTestDate] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/sample/type');
  };

  return (
    <MobileLayout title="Test Date">
      <form onSubmit={handleNext} className="space-y-6 mt-8">
        <div className="space-y-2">
          <Label htmlFor="testDate">Test Date *</Label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="testDate"
              type="date"
              value={testDate}
              onChange={(e) => setTestDate(e.target.value)}
              className="pl-10 py-6 rounded-xl"
              required
            />
          </div>
          <p className="text-sm text-gray-500">Date when the antibiotic sensitivity test was performed</p>
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-xl text-lg mt-8"
        >
          Next: Sample Information
        </Button>
      </form>
    </MobileLayout>
  );
}
