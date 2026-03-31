import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { CheckCircle2, AlertCircle, XCircle } from 'lucide-react';

export default function SensitivityClassification() {
  const navigate = useNavigate();
  const [classification, setClassification] = useState('');
  
  const options = [
    { 
      id: 'sensitive', 
      label: 'Sensitive (S)', 
      desc: 'Antibiotic is effective',
      icon: CheckCircle2, 
      color: 'bg-green-100 text-green-600',
      borderColor: 'border-green-600'
    },
    { 
      id: 'intermediate', 
      label: 'Intermediate (I)', 
      desc: 'Moderate effectiveness',
      icon: AlertCircle, 
      color: 'bg-yellow-100 text-yellow-600',
      borderColor: 'border-yellow-600'
    },
    { 
      id: 'resistant', 
      label: 'Resistant (R)', 
      desc: 'Antibiotic is not effective',
      icon: XCircle, 
      color: 'bg-red-100 text-red-600',
      borderColor: 'border-red-600'
    }
  ];
  
  return (
    <MobileLayout title="Sensitivity Result">
      <div className="space-y-4 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-800">
            Classify the antibiotic sensitivity based on zone diameter or MIC value
          </p>
        </div>
        
        {options.map(opt => (
          <button 
            key={opt.id} 
            onClick={() => setClassification(opt.id)} 
            className={`w-full p-5 rounded-2xl border-2 transition-all ${
              classification === opt.id 
                ? `${opt.borderColor} bg-opacity-10` 
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-xl ${opt.color} flex items-center justify-center`}>
                <opt.icon className="w-7 h-7" />
              </div>
              <div className="text-left flex-1">
                <p className="font-semibold text-lg">{opt.label}</p>
                <p className="text-sm text-gray-600">{opt.desc}</p>
              </div>
            </div>
          </button>
        ))}
        
        <Button 
          onClick={() => navigate('/evidence/ast-image')} 
          disabled={!classification} 
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 py-6 rounded-xl disabled:opacity-50"
        >
          Next: Evidence Upload
        </Button>
      </div>
    </MobileLayout>
  );
}
