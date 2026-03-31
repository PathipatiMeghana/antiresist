import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '../../components/MobileLayout';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { CheckCircle2, AlertCircle, XCircle, TrendingUp, Loader2 } from 'lucide-react';
import { api } from '../../api';

interface TestResult {
  antibiotic: string;
  status: 'resistant' | 'sensitive' | 'intermediate';
  color: string;
  icon: any;
  probability: number;
}

export default function ResistanceResultSummary() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState<TestResult[]>([]);
  const [resistanceRate, setResistanceRate] = useState(0);
  const [effectiveCount, setEffectiveCount] = useState(0);

  useEffect(() => {
    const processResults = async () => {
      setIsLoading(true);
      try {
        const selected = JSON.parse(localStorage.getItem('selectedAntibiotics') || '[]');
        const patientDataStr = localStorage.getItem('currentPatientData');
        const patientId = localStorage.getItem('currentPatientId');
        const sampleId = localStorage.getItem('currentSampleId');
        
        if (!patientDataStr || !selected.length) {
          throw new Error('Incomplete data');
        }

        const patientData = JSON.parse(patientDataStr);
        const bacteriaName = patientData.bacteriaInfo?.name || 'Escherichia coli';
        const age = patientData.age || 30;
        const gender = patientData.gender?.toLowerCase() || 'male';

        const fetchedResults: TestResult[] = [];
        let resistantCount = 0;

        for (const drug of selected) {
          const prediction = await api.getHybridPrediction(age, gender, bacteriaName, drug);
          const status = prediction.prediction.toLowerCase() as TestResult['status'];
          
          let color = 'text-green-600';
          let icon = CheckCircle2;
          
          if (status === 'resistant') {
            color = 'text-red-600';
            icon = XCircle;
            resistantCount++;
          } else if (status === 'intermediate') {
            color = 'text-yellow-600';
            icon = AlertCircle;
          }

          fetchedResults.push({
            antibiotic: drug,
            status: status,
            color: color,
            icon: icon,
            probability: prediction.final_probability
          });
        }

        setResults(fetchedResults);
        setResistanceRate(Math.round((resistantCount / selected.length) * 100));
        setEffectiveCount(selected.length - resistantCount);

        // Auto-save to backend
        const recordData = fetchedResults.map(res => ({
          patient: parseInt(patientId || '0'),
          sample: parseInt(sampleId || '0'),
          bacteria: bacteriaName,
          antibiotic: res.antibiotic,
          prediction: res.status.charAt(0).toUpperCase() + res.status.slice(1),
          is_correct: true // Defaulted as true for now
        }));

        await api.recordTest({ results: recordData });

      } catch (error) {
        console.error('Error processing results:', error);
      } finally {
        setIsLoading(false);
      }
    };

    processResults();
  }, []);

  if (isLoading) {
    return (
      <MobileLayout title="Analyzing Results">
        <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
          <p className="text-gray-500">Wait, processing {results.length} tests...</p>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout title="Test Results">
      <div className="space-y-6 mt-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Analysis Complete</h3>
          <div className="flex gap-6 mt-4">
            <div>
              <p className="text-3xl font-bold">{resistanceRate}%</p>
              <p className="text-sm text-blue-100">Resistance Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{effectiveCount}/{results.length}</p>
              <p className="text-sm text-blue-100">Effective Options</p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Antibiotic Results</h4>
          <div className="space-y-2">
            {results.map((result, i) => (
              <Card key={i} className="p-4 flex items-center justify-between border-gray-100 hover:border-blue-200 transition-all">
                <div className="flex items-center gap-3">
                  <result.icon className={`w-6 h-6 ${result.color}`} />
                  <div>
                    <p className="font-medium">{result.antibiotic}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-500 capitalize">{result.status}</p>
                      <span className="text-[10px] bg-gray-100 text-gray-600 px-2 rounded-full">
                        {Math.round(result.probability * 100)}% prob
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Button onClick={() => navigate('/results/recommendations')} variant="outline" className="py-6 rounded-xl border-gray-200">
            Recommendations
          </Button>
          <Button onClick={() => navigate('/visualization/bar-chart')} className="py-6 rounded-xl bg-blue-600">
            <TrendingUp className="w-5 h-5 mr-2" />
            Visualize
          </Button>
        </div>
        
        <Button 
          onClick={() => navigate('/home')} 
          variant="outline" 
          className="w-full py-6 rounded-xl border-2 border-gray-300 hover:bg-gray-50"
        >
          Complete & Return to Home
        </Button>
      </div>
    </MobileLayout>
  );
}