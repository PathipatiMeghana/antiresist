import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Plus, Pill, Save, Trash2, CheckCircle2 } from 'lucide-react';
import { useAntibiotics } from '@/app/context/AntibioticContext';

interface NewAntibiotic {
  name: string;
  class: string;
  dosage: string;
  route: string;
}

export default function AddNewAntibiotic() {
  const navigate = useNavigate();
  const { addCustomAntibiotic } = useAntibiotics();
  const [antibiotics, setAntibiotics] = useState<NewAntibiotic[]>([
    { name: '', class: '', dosage: '', route: '' }
  ]);
  const [showSuccess, setShowSuccess] = useState(false);

  const addAnotherAntibiotic = () => {
    setAntibiotics([...antibiotics, { name: '', class: '', dosage: '', route: '' }]);
  };

  const removeAntibiotic = (index: number) => {
    if (antibiotics.length > 1) {
      setAntibiotics(antibiotics.filter((_, i) => i !== index));
    }
  };

  const updateAntibiotic = (index: number, field: keyof NewAntibiotic, value: string) => {
    const updated = [...antibiotics];
    updated[index][field] = value;
    setAntibiotics(updated);
  };

  const handleSave = () => {
    // Validate that at least one antibiotic has a name
    const validAntibiotics = antibiotics.filter(ab => ab.name.trim() !== '');
    
    if (validAntibiotics.length === 0) {
      alert('Please enter at least one antibiotic name');
      return;
    }

    // Add each valid antibiotic to the context
    validAntibiotics.forEach((antibiotic) => {
      addCustomAntibiotic({
        name: antibiotic.name,
        class: antibiotic.class || 'Other',
        mechanism: `${antibiotic.dosage || 'Custom dosage'} - ${antibiotic.route || 'Custom route'}`
      });
    });
    
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/antibiotic/selection');
    }, 1500);
  };

  const antibioticClasses = [
    'Penicillins',
    'Cephalosporins',
    'Fluoroquinolones',
    'Macrolides',
    'Tetracyclines',
    'Aminoglycosides',
    'Carbapenems',
    'Glycopeptides',
  ];

  const routes = ['Oral', 'IV', 'IM', 'Topical', 'Inhaled'];

  return (
    <MobileLayout title="Add New Antibiotics" showBack={true}>
      <div className="space-y-6 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Pill className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-900">Add New Antibiotics</p>
              <p className="text-xs text-blue-700 mt-1">
                Enter details for antibiotics not in the standard list
              </p>
            </div>
          </div>
        </div>

        {antibiotics.map((antibiotic, index) => (
          <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">Antibiotic {index + 1}</h3>
              {antibiotics.length > 1 && (
                <button
                  onClick={() => removeAntibiotic(index)}
                  className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor={`name-${index}`}>Antibiotic Name *</Label>
              <Input
                id={`name-${index}`}
                value={antibiotic.name}
                onChange={(e) => updateAntibiotic(index, 'name', e.target.value)}
                placeholder="e.g., Amoxicillin"
                className="py-6 rounded-xl"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`class-${index}`}>Antibiotic Class *</Label>
              <select
                id={`class-${index}`}
                value={antibiotic.class}
                onChange={(e) => updateAntibiotic(index, 'class', e.target.value)}
                className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select class</option>
                {antibioticClasses.map((cls) => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor={`dosage-${index}`}>Dosage</Label>
                <Input
                  id={`dosage-${index}`}
                  value={antibiotic.dosage}
                  onChange={(e) => updateAntibiotic(index, 'dosage', e.target.value)}
                  placeholder="e.g., 500mg"
                  className="py-6 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`route-${index}`}>Route</Label>
                <select
                  id={`route-${index}`}
                  value={antibiotic.route}
                  onChange={(e) => updateAntibiotic(index, 'route', e.target.value)}
                  className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  {routes.map((route) => (
                    <option key={route} value={route}>{route}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}

        <Button
          onClick={addAnotherAntibiotic}
          variant="outline"
          className="w-full py-6 rounded-xl border-2 border-dashed border-blue-300 text-blue-600 hover:bg-blue-50"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Another Antibiotic
        </Button>

        <div className="flex gap-3 pt-4">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="flex-1 py-6 rounded-xl"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="flex-1 bg-blue-600 hover:bg-blue-700 py-6 rounded-xl"
          >
            <Save className="w-5 h-5 mr-2" />
            Save Antibiotics
          </Button>
        </div>

        {showSuccess && (
          <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-green-900">Success</p>
                <p className="text-xs text-green-700 mt-1">
                  Antibiotics saved successfully
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </MobileLayout>
  );
}