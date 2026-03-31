import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Plus, Layers, Check, X, AlertCircle } from 'lucide-react';

const availableAntibiotics = [
  'Amoxicillin', 'Clavulanic Acid', 'Azithromycin', 'Ceftriaxone',
  'Ciprofloxacin', 'Doxycycline', 'Erythromycin', 'Gentamicin',
  'Levofloxacin', 'Metronidazole', 'Penicillin', 'Tetracycline',
  'Vancomycin', 'Rifampicin', 'Streptomycin', 'Trimethoprim'
];

interface Combination {
  id: string;
  drugs: string[];
  name: string;
  synergyType: string;
}

export default function AntibioticCombinations() {
  const navigate = useNavigate();
  const [combinations, setCombinations] = useState<Combination[]>([]);
  const [currentDrugs, setCurrentDrugs] = useState<string[]>([]);
  const [combinationName, setCombinationName] = useState('');
  const [synergyType, setSynergyType] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleDrug = (drug: string) => {
    if (currentDrugs.includes(drug)) {
      setCurrentDrugs(currentDrugs.filter(d => d !== drug));
    } else {
      if (currentDrugs.length < 4) { // Limit to 4 drugs per combination
        setCurrentDrugs([...currentDrugs, drug]);
      }
    }
  };

  const saveCombination = () => {
    if (currentDrugs.length >= 2 && combinationName) {
      const newCombination: Combination = {
        id: Date.now().toString(),
        drugs: currentDrugs,
        name: combinationName,
        synergyType: synergyType || 'Synergistic'
      };
      setCombinations([...combinations, newCombination]);
      setCurrentDrugs([]);
      setCombinationName('');
      setSynergyType('');
      setShowAddForm(false);
    }
  };

  const removeCombination = (id: string) => {
    setCombinations(combinations.filter(c => c.id !== id));
  };

  const synergyTypes = [
    'Synergistic',
    'Additive',
    'Antagonistic',
    'Bactericidal Enhancement',
    'Spectrum Extension'
  ];

  return (
    <MobileLayout title="Antibiotic Combinations" showBack={true}>
      <div className="space-y-6 mt-6">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Layers className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-blue-900">Combination Therapy</p>
              <p className="text-xs text-blue-700 mt-1">
                Test multiple antibiotics together for synergistic effects
              </p>
            </div>
          </div>
        </div>

        {/* Saved Combinations */}
        {combinations.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900">Saved Combinations</h3>
            {combinations.map((combo) => (
              <div key={combo.id} className="bg-white border-2 border-gray-200 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-medium text-gray-900">{combo.name}</h4>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full mt-1 inline-block">
                      {combo.synergyType}
                    </span>
                  </div>
                  <button
                    onClick={() => removeCombination(combo.id)}
                    className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {combo.drugs.map((drug, idx) => (
                    <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      {drug}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add New Combination */}
        {!showAddForm ? (
          <Button
            onClick={() => setShowAddForm(true)}
            className="w-full py-6 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New Combination
          </Button>
        ) : (
          <div className="space-y-4 bg-gray-50 border-2 border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">New Combination</h3>
              <button
                onClick={() => {
                  setShowAddForm(false);
                  setCurrentDrugs([]);
                  setCombinationName('');
                  setSynergyType('');
                }}
                className="text-gray-600 hover:bg-gray-200 p-2 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <Label htmlFor="combo-name">Combination Name *</Label>
              <Input
                id="combo-name"
                value={combinationName}
                onChange={(e) => setCombinationName(e.target.value)}
                placeholder="e.g., Triple Therapy for MRSA"
                className="py-6 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="synergy-type">Synergy Type</Label>
              <select
                id="synergy-type"
                value={synergyType}
                onChange={(e) => setSynergyType(e.target.value)}
                className="w-full py-3 px-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select type</option>
                {synergyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label>Select Antibiotics (2-4) *</Label>
              {currentDrugs.length > 0 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-2">
                  <p className="text-xs text-blue-700 font-medium mb-2">Selected: {currentDrugs.length}/4</p>
                  <div className="flex flex-wrap gap-2">
                    {currentDrugs.map((drug, idx) => (
                      <span key={idx} className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                        {drug}
                        <Check className="w-3 h-3" />
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto">
                {availableAntibiotics.map((drug) => (
                  <button
                    key={drug}
                    onClick={() => toggleDrug(drug)}
                    disabled={!currentDrugs.includes(drug) && currentDrugs.length >= 4}
                    className={`p-3 rounded-lg border-2 text-left text-sm transition-all ${
                      currentDrugs.includes(drug)
                        ? 'border-blue-600 bg-blue-50 text-blue-900'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    <div className="flex items-center gap-2">
                      {currentDrugs.includes(drug) && (
                        <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      )}
                      <span className="truncate">{drug}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {currentDrugs.length < 2 && currentDrugs.length > 0 && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-amber-800">
                  Select at least 2 antibiotics to create a combination
                </p>
              </div>
            )}

            <Button
              onClick={saveCombination}
              disabled={currentDrugs.length < 2 || !combinationName}
              className="w-full py-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
            >
              <Check className="w-5 h-5 mr-2" />
              Save Combination
            </Button>
          </div>
        )}

        <div className="flex gap-3 pt-4">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="flex-1 py-6 rounded-xl"
          >
            Back
          </Button>
          <Button
            onClick={() => navigate('/antibiotic/test-method')}
            disabled={combinations.length === 0}
            className="flex-1 bg-blue-600 hover:bg-blue-700 py-6 rounded-xl disabled:opacity-50"
          >
            Continue Testing
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
