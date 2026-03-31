import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '../../components/MobileLayout';
import { Input } from '../../components/ui/input';
import { Search, Check, Loader2 } from 'lucide-react';
import { api } from '../../api';

export default function BacteriaSearch() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState('');
  const [bacteriaList, setBacteriaList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBacteria = async () => {
      setIsLoading(true);
      try {
        const data = await api.getBacteria();
        if (Array.isArray(data)) {
          const list = data.map((item: any) => 
            typeof item === 'string' ? item : (item.name || item.bacteria_name)
          );
          setBacteriaList(list);
        } else {
          setBacteriaList(['Escherichia coli', 'Staphylococcus aureus', 'Klebsiella pneumoniae']);
        }
      } catch (error) {
        console.error('Error fetching bacteria:', error);
        setBacteriaList(['Escherichia coli', 'Staphylococcus aureus', 'Klebsiella pneumoniae']);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBacteria();
  }, []);

  const filteredBacteria = bacteriaList.filter(b =>
    b.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (bacteria: string) => {
    setSelected(bacteria);
    
    // Save bacteria name to current patient record
    const currentPatient = localStorage.getItem('currentPatientData');
    if (currentPatient) {
      const patientData = JSON.parse(currentPatient);
      const updatedRecord = {
        ...patientData,
        bacteriaInfo: {
          ...patientData.bacteriaInfo,
          name: bacteria
        },
        lastUpdated: new Date().toISOString()
      };
      localStorage.setItem('currentPatientData', JSON.stringify(updatedRecord));
      
      // Update in patient records array
      const existingRecords = JSON.parse(localStorage.getItem('patientRecords') || '[]');
      const recordIndex = existingRecords.findIndex((r: any) => r.id === updatedRecord.id);
      if (recordIndex !== -1) {
        existingRecords[recordIndex] = updatedRecord;
        localStorage.setItem('patientRecords', JSON.stringify(existingRecords));
      }
      
      // Trigger event for other components to update
      window.dispatchEvent(new Event('patientRecordsUpdated'));
    }
    
    setTimeout(() => navigate('/bacteria/gram-type'), 500);
  };

  return (
    <MobileLayout title="Bacteria Database">
      <div className="space-y-4 mt-6">
        {/* Search Bar */}
        <div className="space-y-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              placeholder="Search bacteria..."
              className="pl-10 py-6 rounded-xl"
            />
          </div>
        </div>

        {/* Bacteria List */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-10 h-10 animate-spin text-blue-600 mb-4" />
            <p className="text-gray-500 text-sm">Loading bacteria species...</p>
          </div>
        ) : !search ? (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center space-y-3">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Bacteria Species</h3>
              <p className="text-sm text-gray-600">
                Search from {bacteriaList.length} species available
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {filteredBacteria.length === 0 ? (
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <p className="text-gray-500">No bacteria found matching "{search}"</p>
              </div>
            ) : (
              filteredBacteria.map((bacteria) => (
                <button
                  key={bacteria}
                  onClick={() => handleSelect(bacteria)}
                  className={`w-full p-4 rounded-xl text-left flex items-center justify-between transition-all ${
                    selected === bacteria
                      ? 'bg-blue-100 border-2 border-blue-600'
                      : 'bg-white border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="font-medium text-gray-800">{bacteria}</span>
                  {selected === bacteria && <Check className="w-5 h-5 text-blue-600" />}
                </button>
              ))
            )}
          </div>
        )}
      </div>
    </MobileLayout>
  );
}