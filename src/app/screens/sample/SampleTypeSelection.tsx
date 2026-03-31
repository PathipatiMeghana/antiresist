import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Droplet, TestTube, Wind, Bandage } from 'lucide-react';

const sampleTypes = [
  { id: 'blood', name: 'Blood', icon: Droplet, color: 'bg-red-100 text-red-600' },
  { id: 'urine', name: 'Urine', icon: TestTube, color: 'bg-yellow-100 text-yellow-600' },
  { id: 'sputum', name: 'Sputum', icon: Wind, color: 'bg-green-100 text-green-600' },
  { id: 'wound', name: 'Wound', icon: Bandage, color: 'bg-orange-100 text-orange-600' }
];

export default function SampleTypeSelection() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('');

  const handleNext = () => {
    if (selected) {
      navigate('/sample/id');
    }
  };

  return (
    <MobileLayout title="Sample Type">
      <div className="space-y-6 mt-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-800">
            Select the type of biological sample collected for testing
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {sampleTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelected(type.id)}
              className={`p-6 rounded-2xl border-2 transition-all ${
                selected === type.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl ${type.color} flex items-center justify-center mx-auto mb-3`}>
                <type.icon className="w-8 h-8" />
              </div>
              <p className="font-semibold text-gray-800">{type.name}</p>
            </button>
          ))}
        </div>

        <Button
          onClick={handleNext}
          disabled={!selected}
          className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-xl text-lg mt-8 disabled:opacity-50"
        >
          Next: Sample ID
        </Button>
      </div>
    </MobileLayout>
  );
}
