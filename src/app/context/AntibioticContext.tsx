import { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
import { api } from '../api';

export interface Antibiotic {
  id: string;
  name: string;
  class?: string;
  mechanism?: string;
  isCustom?: boolean;
}

interface AntibioticContextType {
  customAntibiotics: Antibiotic[];
  backendAntibiotics: Antibiotic[];
  isLoading: boolean;
  addCustomAntibiotic: (antibiotic: Omit<Antibiotic, 'id' | 'isCustom'>) => void;
  removeCustomAntibiotic: (id: string) => void;
  getAllAntibiotics: () => Antibiotic[];
}

const AntibioticContext = createContext<AntibioticContextType | undefined>(undefined);

const defaultAntibiotics: Antibiotic[] = [
  { id: '1', name: 'Amoxicillin', class: 'Penicillin', mechanism: 'Cell wall synthesis inhibitor' },
  { id: '2', name: 'Ciprofloxacin', class: 'Fluoroquinolone', mechanism: 'DNA synthesis inhibitor' },
  { id: '3', name: 'Azithromycin', class: 'Macrolide', mechanism: 'Protein synthesis inhibitor' },
  { id: '4', name: 'Ceftriaxone', class: 'Cephalosporin', mechanism: 'Cell wall synthesis inhibitor' },
  { id: '5', name: 'Doxycycline', class: 'Tetracycline', mechanism: 'Protein synthesis inhibitor' },
  { id: '6', name: 'Vancomycin', class: 'Glycopeptide', mechanism: 'Cell wall synthesis inhibitor' },
  { id: '7', name: 'Metronidazole', class: 'Nitroimidazole', mechanism: 'DNA damage' },
  { id: '8', name: 'Gentamicin', class: 'Aminoglycoside', mechanism: 'Protein synthesis inhibitor' },
  { id: '9', name: 'Levofloxacin', class: 'Fluoroquinolone', mechanism: 'DNA synthesis inhibitor' },
  { id: '10', name: 'Clindamycin', class: 'Lincosamide', mechanism: 'Protein synthesis inhibitor' },
  { id: '11', name: 'Trimethoprim-Sulfamethoxazole', class: 'Sulfonamide', mechanism: 'Folate synthesis inhibitor' },
  { id: '12', name: 'Cefuroxime', class: 'Cephalosporin', mechanism: 'Cell wall synthesis inhibitor' },
  { id: '13', name: 'Meropenem', class: 'Carbapenem', mechanism: 'Cell wall synthesis inhibitor' },
  { id: '14', name: 'Linezolid', class: 'Oxazolidinone', mechanism: 'Protein synthesis inhibitor' },
  { id: '15', name: 'Piperacillin-Tazobactam', class: 'Penicillin + β-lactamase inhibitor', mechanism: 'Cell wall synthesis inhibitor' },
];

export function AntibioticProvider({ children }: { children: ReactNode }) {
  const [customAntibiotics, setCustomAntibiotics] = useState<Antibiotic[]>([]);
  const [backendAntibiotics, setBackendAntibiotics] = useState<Antibiotic[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load from localStorage on mount and fetch from backend
  useEffect(() => {
    try {
      const stored = localStorage.getItem('customAntibiotics');
      if (stored) {
        setCustomAntibiotics(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading custom antibiotics:', error);
    }

    const fetchAntibiotics = async () => {
      setIsLoading(true);
      try {
        const data = await api.getAntibiotics();
        if (Array.isArray(data)) {
          const mapped = data.map((item: any) => ({
            id: item.id.toString(),
            name: item.name,
            isCustom: false
          }));
          setBackendAntibiotics(mapped);
        }
      } catch (error) {
        console.error('Error fetching antibiotics:', error);
        setBackendAntibiotics(defaultAntibiotics);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAntibiotics();
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    try {
      localStorage.setItem('customAntibiotics', JSON.stringify(customAntibiotics));
    } catch (error) {
      console.error('Error saving custom antibiotics:', error);
    }
  }, [customAntibiotics]);

  const addCustomAntibiotic = useCallback((antibiotic: Omit<Antibiotic, 'id' | 'isCustom'>) => {
    const newAntibiotic: Antibiotic = {
      ...antibiotic,
      id: `custom-${Date.now()}`,
      isCustom: true,
    };
    setCustomAntibiotics(prev => [...prev, newAntibiotic]);
  }, []);

  const removeCustomAntibiotic = useCallback((id: string) => {
    setCustomAntibiotics(prev => prev.filter(ab => ab.id !== id));
  }, []);

  const getAllAntibiotics = useCallback(() => {
    const list = backendAntibiotics.length > 0 ? backendAntibiotics : defaultAntibiotics;
    return [...list, ...customAntibiotics];
  }, [backendAntibiotics, customAntibiotics]);

  const value = useMemo(() => ({
    customAntibiotics,
    backendAntibiotics,
    isLoading,
    addCustomAntibiotic,
    removeCustomAntibiotic,
    getAllAntibiotics,
  }), [customAntibiotics, backendAntibiotics, isLoading, addCustomAntibiotic, removeCustomAntibiotic, getAllAntibiotics]);

  return (
    <AntibioticContext.Provider value={value}>
      {children}
    </AntibioticContext.Provider>
  );
}

export function useAntibiotics() {
  const context = useContext(AntibioticContext);
  if (context === undefined) {
    throw new Error('useAntibiotics must be used within an AntibioticProvider');
  }
  return context;
}