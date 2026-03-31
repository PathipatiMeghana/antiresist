import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MainLayout } from '@/app/components/MainLayout';
import { Search, Filter, Calendar, FileText, TrendingUp, AlertCircle, CheckCircle, XCircle, Microscope, TestTube } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

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
    sampleType: string;
    sampleTypeLabel: string;
    sampleId: string;
    collectionDate: string;
    collectionTime: string;
    collectionSite: string;
    sampleVolume: string;
    collectedBy: string;
    additionalNotes: string;
  };
  bacteriaInfo?: {
    name: string;
    gramType: string;
    gramTypeLabel: string;
  };
}

export default function Records() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [patientRecords, setPatientRecords] = useState<PatientRecord[]>([]);
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
      record.patientId.toLowerCase().includes(searchQuery.toLowerCase());
    
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
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <MainLayout title="Records">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">Patient Records</h2>
          <p className="text-green-100">View and manage test history</p>
          <div className="flex gap-8 mt-4">
            <div>
              <p className="text-2xl font-bold">{patientRecords.length}</p>
              <p className="text-sm text-green-100">Total Records</p>
            </div>
            <div>
              <p className="text-2xl font-bold">{patientRecords.filter(r => {
                const testDate = new Date(r.testDate);
                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);
                return testDate >= weekAgo;
              }).length}</p>
              <p className="text-sm text-green-100">This Week</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by patient name or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="bg-white border border-gray-300 rounded-xl px-4 flex items-center gap-2 hover:bg-gray-50">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredRecords.map((record) => (
              <Card
                key={record.id}
                onClick={() => navigate(`/reports/record/${record.id}`)}
                className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {getStatusIcon(record.status)}
                      <h3 className="font-semibold text-gray-800">{record.patientName}</h3>
                    </div>
                    <p className="text-sm text-gray-500">ID: {record.patientId}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${ 
                    record.status === 'pending' 
                      ? 'bg-yellow-100 text-yellow-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {record.status === 'pending' ? 'Pending' : 'Completed'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(record.testDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FileText className="w-4 h-4" />
                    <span>Age: {record.age}</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-gray-700">Hospital:</span>
                    <span className="text-gray-600">{record.hospitalName}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}