import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Card } from '@/app/components/ui/card';
import { Calendar, User, Microscope, ChevronRight, FileText, AlertCircle, CheckCircle, Building2, Search } from 'lucide-react';

interface PatientRecord {
  id: string;
  patientName: string;
  patientId: string;
  age: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  hospitalName: string;
  labName: string;
  testDate: string;
  referringDoctor: string;
  status: string;
  createdAt: string;
  sampleInfo?: {
    sampleTypeLabel: string;
    sampleId: string;
  };
  bacteriaInfo?: {
    name: string;
    gramTypeLabel?: string;
  };
}

export default function PatientHistoryList() {
  const navigate = useNavigate();
  const [patientRecords, setPatientRecords] = useState<PatientRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'week' | 'pending' | 'completed'>('all');

  useEffect(() => {
    // Load patient records from localStorage
    const loadRecords = () => {
      const storedRecords = localStorage.getItem('patientRecords');
      if (storedRecords) {
        setPatientRecords(JSON.parse(storedRecords));
      }
    };
    
    loadRecords();
    
    // Listen for storage changes to update in real-time
    const handleStorageChange = () => loadRecords();
    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom event when records are updated in the same tab
    window.addEventListener('patientRecordsUpdated', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('patientRecordsUpdated', handleStorageChange);
    };
  }, []);

  // Filter records based on search query and active filter
  const filteredRecords = patientRecords.filter(record => {
    // Search filter
    const matchesSearch = record.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.patientId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.hospitalName.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;
    
    // Status/Date filter
    if (activeFilter === 'week') {
      const testDate = new Date(record.testDate);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return testDate >= weekAgo;
    }
    
    if (activeFilter === 'pending') {
      return record.status === 'pending';
    }
    
    if (activeFilter === 'completed') {
      return record.status === 'completed';
    }
    
    return true; // 'all' filter
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      default:
        return <FileText className="w-4 h-4 text-gray-600" />;
    }
  };
  
  return (
    <MobileLayout title="Patient History">
      <div className="space-y-4 mt-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 text-white">
          <p className="text-sm text-blue-100 mb-1">Total Records</p>
          <p className="text-3xl font-bold">{patientRecords.length}</p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, ID, or hospital..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
              activeFilter === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
            onClick={() => setActiveFilter('all')}
          >
            All Records
          </button>
          <button
            className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
              activeFilter === 'week' 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
            onClick={() => setActiveFilter('week')}
          >
            This Week
          </button>
          <button
            className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
              activeFilter === 'pending' 
                ? 'bg-yellow-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
            onClick={() => setActiveFilter('pending')}
          >
            Pending
          </button>
          <button
            className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
              activeFilter === 'completed' 
                ? 'bg-green-600 text-white' 
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
            }`}
            onClick={() => setActiveFilter('completed')}
          >
            Completed
          </button>
        </div>
        
        {filteredRecords.length === 0 ? (
          <Card className="p-8 text-center">
            <FileText className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-800 mb-2">No Records Found</h3>
            <p className="text-gray-500 text-sm mb-4">
              {searchQuery ? 'Try adjusting your search criteria' : 'Start by adding a new patient'}
            </p>
            <button
              onClick={() => navigate('/patient/complete-info')}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
            >
              Add New Patient
            </button>
          </Card>
        ) : (
          filteredRecords.map((record) => (
            <Card 
              key={record.id}
              onClick={() => navigate(`/reports/record/${record.id}`)}
              className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-4 h-4 text-blue-600" />
                    <p className="font-semibold text-gray-800">{record.patientName}</p>
                  </div>
                  
                  <div className="space-y-1.5 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>ID: {record.patientId}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(record.testDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span>{record.hospitalName}</span>
                    </div>
                    
                    {/* Sample Info */}
                    {record.sampleInfo && (
                      <div className="flex items-center gap-2 text-purple-600">
                        <Microscope className="w-4 h-4" />
                        <span className="font-medium">
                          {record.sampleInfo.sampleTypeLabel} - {record.sampleInfo.sampleId}
                        </span>
                      </div>
                    )}
                    
                    {/* Bacteria Info */}
                    {record.bacteriaInfo?.name && (
                      <div className="flex items-center gap-2 text-green-700">
                        <Microscope className="w-4 h-4" />
                        <span className="font-medium">
                          {record.bacteriaInfo.name} 
                          {record.bacteriaInfo.gramTypeLabel && ` (${record.bacteriaInfo.gramTypeLabel})`}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-3 flex items-center gap-2 flex-wrap">
                    {getStatusIcon(record.status)}
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      record.status === 'pending' 
                        ? 'bg-yellow-100 text-yellow-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {record.status === 'pending' ? 'Pending' : 'Completed'}
                    </span>
                    <span className="text-xs text-gray-500">
                      Age: {record.age} • {record.gender}
                    </span>
                  </div>
                </div>
                
                <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2" />
              </div>
            </Card>
          ))
        )}
      </div>
    </MobileLayout>
  );
}