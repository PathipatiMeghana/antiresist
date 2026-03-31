import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '../components/MobileLayout';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { 
  Clock, 
  Search, 
  Calendar, 
  User, 
  FlaskConical, 
  ChevronRight,
  Filter,
  Play,
  Loader2
} from 'lucide-react';
import { api } from '../api';

interface TestRun {
  id: string;
  patientName: string;
  patientId: string;
  date: string;
  time: string;
  bacteria: string;
  sampleType: string;
  antibioticsTested: number;
  status: 'completed' | 'in-progress' | 'pending';
  resistanceLevel: 'high' | 'moderate' | 'low';
}

export default function RecentRuns() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'completed' | 'in-progress' | 'pending'>('all');
  const [runs, setRuns] = useState<TestRun[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRuns = async () => {
      setIsLoading(true);
      try {
        const data = await api.getRecentTests();
        if (Array.isArray(data)) {
          const mappedRuns: TestRun[] = data.map((item: any) => ({
            id: item.id || `RUN-${item.test_id || '000'}`,
            patientName: item.patient_name || item.patient?.name || 'Unknown',
            patientId: item.patient_id || item.patient?.id || 'N/A',
            date: item.date_created?.split('T')[0] || item.date || 'N/A',
            time: item.date_created?.split('T')[1]?.substring(0, 5) || item.time || 'N/A',
            bacteria: item.bacteria_name || 'Generic',
            sampleType: item.sample_type || 'Generic',
            antibioticsTested: item.antibiotics_tested || 0,
            status: item.status || 'completed',
            resistanceLevel: item.resistance_level?.toLowerCase() || 'moderate'
          }));
          setRuns(mappedRuns);
        }
      } catch (error) {
        console.error('Error fetching recent tests:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRuns();
  }, []);

  const filteredRuns = runs.filter(run => {
    const matchesSearch = 
      run.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      run.patientId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      run.bacteria.toLowerCase().includes(searchQuery.toLowerCase()) ||
      run.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filterStatus === 'all' || run.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700';
      case 'in-progress': return 'bg-blue-100 text-blue-700';
      case 'pending': return 'bg-amber-100 text-amber-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getResistanceColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-red-100 text-red-700 border-red-300';
      case 'moderate': return 'bg-amber-100 text-amber-700 border-amber-300';
      case 'low': return 'bg-green-100 text-green-700 border-green-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const handleRunApp = () => {
    navigate('/patient/basic-details');
  };

  return (
    <MobileLayout title="Recent Test Runs">
      <div className="space-y-6 mt-6">
        {/* Header with Run App Button */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-lg font-bold">Start New Analysis</h2>
              <p className="text-sm text-blue-100">Begin a new resistance test</p>
            </div>
            <Play className="w-8 h-8" />
          </div>
          <Button
            onClick={handleRunApp}
            className="w-full bg-white text-blue-600 hover:bg-blue-50 py-4 rounded-lg font-semibold"
          >
            <Play className="w-5 h-5 mr-2" />
            Run App
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              placeholder="Search by patient, ID, bacteria..."
              className="pl-10 py-6 rounded-xl"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {['all', 'completed', 'in-progress', 'pending'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status as any)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  filterStatus === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            {filteredRuns.length} test run{filteredRuns.length !== 1 ? 's' : ''} found
          </p>
          <button className="text-sm text-blue-600 font-medium flex items-center gap-1">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>

        <div className="space-y-3">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="w-10 h-10 animate-spin text-blue-600 mb-4" />
              <p className="text-gray-500">Fetching latest test runs...</p>
            </div>
          ) : filteredRuns.length > 0 ? (
            filteredRuns.map((run) => (
              <div
                key={run.id}
                onClick={() => navigate(`/reports/record/${run.id}`)}
                className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900">{run.patientName}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(run.status)}`}>
                        {run.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{run.patientId}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">{run.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">{run.time}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <FlaskConical className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-900">{run.bacteria}</span>
                  <span className="text-xs text-gray-500">• {run.sampleType}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">
                    {run.antibioticsTested} antibiotics tested
                  </span>
                  <div className={`text-xs px-3 py-1 rounded-full border ${getResistanceColor(run.resistanceLevel)}`}>
                    {run.resistanceLevel.toUpperCase()} resistance
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500">Run ID: {run.id}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">No Results Found</h3>
              <p className="text-sm text-gray-600">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </MobileLayout>
  );
}
