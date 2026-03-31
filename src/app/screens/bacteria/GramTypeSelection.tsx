import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '../../components/MobileLayout';
import { Button } from '../../components/ui/button';
import { CirclePlus, CircleMinus } from 'lucide-react';
import { api } from '../../api';

export default function GramTypeSelection() {
  const navigate = useNavigate();
  const [gramType, setGramType] = useState('');

  const handleNext = () => {
    if (gramType) {
      // Save gram type to current patient record
      const currentPatient = localStorage.getItem('currentPatientData');
      if (currentPatient) {
        const patientData = JSON.parse(currentPatient);
        const updatedRecord = {
          ...patientData,
          bacteriaInfo: {
            ...patientData.bacteriaInfo,
            gramType: gramType,
            gramTypeLabel: gramType === 'positive' ? 'Gram Positive' : 'Gram Negative'
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
      
      navigate('/antibiotic/selection');
    }
  };

  return (
    <MobileLayout title="Gram Type">
      <div className="space-y-6 mt-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-800">
            Select the Gram staining result for the identified bacteria
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => setGramType('positive')}
            className={`w-full p-6 rounded-2xl border-2 transition-all ${
              gramType === 'positive'
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                <CirclePlus className="w-8 h-8" />
              </div>
              <div className="text-left flex-1">
                <p className="font-semibold text-lg">Gram Positive</p>
                <p className="text-sm text-gray-600">Purple/Violet staining</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setGramType('negative')}
            className={`w-full p-6 rounded-2xl border-2 transition-all ${
              gramType === 'negative'
                ? 'border-pink-600 bg-pink-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
                <CircleMinus className="w-8 h-8" />
              </div>
              <div className="text-left flex-1">
                <p className="font-semibold text-lg">Gram Negative</p>
                <p className="text-sm text-gray-600">Pink/Red staining</p>
              </div>
            </div>
          </button>
        </div>

        <Button
          onClick={handleNext}
          disabled={!gramType}
          className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-xl text-lg mt-8 disabled:opacity-50"
        >
          Next: Antibiotic Testing
        </Button>
      </div>
    </MobileLayout>
  );
}