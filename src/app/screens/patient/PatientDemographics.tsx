import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';

export default function PatientDemographics() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: '',
    gender: ''
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/patient/hospital-lab');
  };

  return (
    <MobileLayout title="Patient Demographics">
      <form onSubmit={handleNext} className="space-y-6 mt-8">
        <div className="space-y-2">
          <Label htmlFor="age">Age *</Label>
          <Input
            id="age"
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            placeholder="Enter age in years"
            className="py-6 rounded-xl"
            required
            min="0"
            max="150"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">Gender *</Label>
          <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
            <SelectTrigger className="py-6 rounded-xl">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-xl text-lg mt-8"
        >
          Next: Hospital/Lab Info
        </Button>
      </form>
    </MobileLayout>
  );
}
