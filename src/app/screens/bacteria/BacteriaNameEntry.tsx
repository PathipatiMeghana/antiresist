import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Microscope, Search } from 'lucide-react';

export default function BacteriaNameEntry() {
  const navigate = useNavigate();
  const [bacteriaName, setBacteriaName] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save bacteria name to current patient record
    const currentPatient = localStorage.getItem('currentPatientData');
    if (currentPatient) {
      const patientData = JSON.parse(currentPatient);
      const updatedRecord = {
        ...patientData,
        bacteriaInfo: {
          ...patientData.bacteriaInfo,
          name: bacteriaName
        },
        lastUpdated: new Date().toISOString()
      };
      
      localStorage.setItem('currentPatientData', JSON.stringify(updatedRecord));
      
      // Update in patient records array
      const existingRecords = localStorage.getItem('patientRecords');
      const records = existingRecords ? JSON.parse(existingRecords) : [];
      const updatedRecords = records.map((rec: any) => 
        rec.id === patientData.id ? updatedRecord : rec
      );
      
      localStorage.setItem('patientRecords', JSON.stringify(updatedRecords));
      window.dispatchEvent(new Event('patientRecordsUpdated'));
    }
    
    navigate('/bacteria/gram-type');
  };

  return (
    <MobileLayout title="Bacteria Identification">
      <form onSubmit={handleNext} className="space-y-6 mt-8">
        <div className="space-y-2">
          <Label htmlFor="bacteria">Bacteria Name *</Label>
          <div className="relative">
            <Microscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="bacteria"
              value={bacteriaName}
              onChange={(e) => setBacteriaName(e.target.value)}
              placeholder="e.g., Escherichia coli"
              className="pl-10 py-6 rounded-xl"
              required
            />
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/bacteria/search')}
          className="w-full bg-blue-50 border border-blue-200 text-blue-600 py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-100"
        >
          <Search className="w-5 h-5" />
          Search Bacteria Database
        </button>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-xl text-lg mt-8"
        >
          Next: Gram Type
        </Button>
      </form>
    </MobileLayout>
  );
}