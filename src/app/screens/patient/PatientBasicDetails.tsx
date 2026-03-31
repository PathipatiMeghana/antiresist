import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { User, IdCard } from 'lucide-react';

export default function PatientBasicDetails() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    patientName: '',
    patientId: ''
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/patient/demographics');
  };

  return (
    <MobileLayout title="Patient Details">
      <form onSubmit={handleNext} className="space-y-6 mt-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <p className="text-sm text-blue-800">
            Enter basic patient information to start a new test record
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Patient Name *</Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="name"
              value={formData.patientName}
              onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
              placeholder="Enter patient full name"
              className="pl-10 py-6 rounded-xl"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="patientId">Patient ID *</Label>
          <div className="relative">
            <IdCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="patientId"
              value={formData.patientId}
              onChange={(e) => setFormData({ ...formData, patientId: e.target.value })}
              placeholder="e.g., P-2024-001"
              className="pl-10 py-6 rounded-xl"
              required
            />
          </div>
          <p className="text-sm text-gray-500">Hospital or lab patient identification number</p>
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-xl text-lg mt-8"
        >
          Next: Demographics
        </Button>
      </form>
    </MobileLayout>
  );
}
