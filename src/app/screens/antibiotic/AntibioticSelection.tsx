import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '../../components/MobileLayout';
import { Button } from '../../components/ui/button';
import { Pill, Check, Plus, Layers, Trash2, Loader2 } from 'lucide-react';
import { useAntibiotics } from '../../context/AntibioticContext';

export default function AntibioticSelection() {
  const navigate = useNavigate();
  const { getAllAntibiotics, removeCustomAntibiotic, isLoading } = useAntibiotics();
  const [selectedAntibiotics, setSelectedAntibiotics] = useState<string[]>([]);

  const allAntibiotics = getAllAntibiotics();

  const toggleAntibiotic = (antibiotic: string) => {
    if (selectedAntibiotics.includes(antibiotic)) {
      setSelectedAntibiotics(selectedAntibiotics.filter(a => a !== antibiotic));
    } else {
      setSelectedAntibiotics([...selectedAntibiotics, antibiotic]);
    }
  };

  const handleDeleteCustom = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    removeCustomAntibiotic(id);
    // Also remove from selected if it was selected
    const antibioticToRemove = allAntibiotics.find(ab => ab.id === id);
    if (antibioticToRemove) {
      setSelectedAntibiotics(prev => prev.filter(name => name !== antibioticToRemove.name));
    }
  };

  const handleNext = () => {
    if (selectedAntibiotics.length > 0) {
      localStorage.setItem('selectedAntibiotics', JSON.stringify(selectedAntibiotics));
      navigate('/antibiotic/test-method');
    }
  };

  return (
    <MobileLayout title="Select Antibiotics">
      <div className="space-y-6 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-800">
            Select one or more antibiotics tested ({selectedAntibiotics.length} selected)
          </p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-10 h-10 animate-spin text-blue-600 mb-4" />
            <p className="text-gray-500 text-sm">Loading antibiotics...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {allAntibiotics.map((antibiotic) => (
              <button
                key={antibiotic.id}
                onClick={() => toggleAntibiotic(antibiotic.name)}
                className={`p-4 rounded-xl border-2 transition-all relative ${
                  selectedAntibiotics.includes(antibiotic.name)
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                {antibiotic.isCustom && (
                  <div
                    onClick={(e) => handleDeleteCustom(e, antibiotic.id)}
                    className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 rounded-full p-1 z-10 shadow-lg cursor-pointer"
                    title="Delete custom antibiotic"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleDeleteCustom(e as any, antibiotic.id);
                      }
                    }}
                  >
                    <Trash2 className="w-3 h-3 text-white" />
                  </div>
                )}
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-12 h-12 rounded-lg ${
                    selectedAntibiotics.includes(antibiotic.name)
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-600'
                  } flex items-center justify-center relative`}>
                    <Pill className="w-6 h-6" />
                    {selectedAntibiotics.includes(antibiotic.name) && (
                      <div className="absolute -top-1 -right-1 bg-blue-600 rounded-full p-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-xs font-medium text-center">{antibiotic.name}</p>
                  {antibiotic.isCustom && (
                    <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                      Custom
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Additional Options */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={() => navigate('/antibiotic/add-new')}
            variant="outline"
            className="py-6 rounded-xl border-2 border-dashed border-blue-300 text-blue-600 hover:bg-blue-50"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New
          </Button>
          <Button
            onClick={() => navigate('/antibiotic/combinations')}
            variant="outline"
            className="py-6 rounded-xl border-2 border-dashed border-purple-300 text-purple-600 hover:bg-purple-50"
          >
            <Layers className="w-5 h-5 mr-2" />
            Combinations
          </Button>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={() => navigate('/antibiotic/add-multiple')}
            variant="outline"
            className="flex-1 py-6 rounded-xl"
          >
            Add Custom
          </Button>
          <Button
            onClick={handleNext}
            disabled={selectedAntibiotics.length === 0}
            className="flex-1 bg-blue-600 hover:bg-blue-700 py-6 rounded-xl disabled:opacity-50"
          >
            Next ({selectedAntibiotics.length})
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}