import { useNavigate, useParams } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Card } from '@/app/components/ui/card';
import { User, Calendar, Microscope, TestTube, FileText, Download, Share2 } from 'lucide-react';

export default function PreviousRecordDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Mock data - in a real app, this would be fetched based on the ID
  const record = {
    id: id || '1',
    patient: {
      name: 'John Doe',
      age: 45,
      gender: 'Male',
      patientId: 'P-2026-001'
    },
    testDate: '2026-01-27',
    hospital: 'City General Hospital',
    sampleType: 'Blood',
    sampleId: 'S-001234',
    bacteria: {
      name: 'Escherichia coli',
      gramType: 'Gram-negative'
    },
    antibiotics: [
      { name: 'Amoxicillin', zone: '12mm', result: 'Resistant' },
      { name: 'Ciprofloxacin', zone: '28mm', result: 'Sensitive' },
      { name: 'Gentamicin', zone: '18mm', result: 'Intermediate' },
      { name: 'Ceftriaxone', zone: '25mm', result: 'Sensitive' },
      { name: 'Tetracycline', zone: '10mm', result: 'Resistant' }
    ]
  };
  
  const getResultColor = (result: string) => {
    switch (result) {
      case 'Sensitive':
        return 'bg-green-100 text-green-700';
      case 'Resistant':
        return 'bg-red-100 text-red-700';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  
  return (
    <MobileLayout title="Test Record Details">
      <div className="space-y-4 mt-6">
        {/* Patient Information */}
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <User className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold">Patient Information</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Name:</span>
              <span className="font-medium">{record.patient.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Patient ID:</span>
              <span className="font-medium">{record.patient.patientId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Age:</span>
              <span className="font-medium">{record.patient.age} years</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Gender:</span>
              <span className="font-medium">{record.patient.gender}</span>
            </div>
          </div>
        </Card>
        
        {/* Test Information */}
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold">Test Information</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Test Date:</span>
              <span className="font-medium">{record.testDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Hospital:</span>
              <span className="font-medium">{record.hospital}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sample Type:</span>
              <span className="font-medium">{record.sampleType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sample ID:</span>
              <span className="font-medium">{record.sampleId}</span>
            </div>
          </div>
        </Card>
        
        {/* Bacteria Information */}
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Microscope className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold">Bacteria Identified</h3>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Bacteria:</span>
              <span className="font-medium">{record.bacteria.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Gram Type:</span>
              <span className="font-medium">{record.bacteria.gramType}</span>
            </div>
          </div>
        </Card>
        
        {/* Antibiotic Sensitivity Results */}
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <TestTube className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold">Antibiotic Sensitivity Results</h3>
          </div>
          <div className="space-y-2">
            {record.antibiotics.map((antibiotic, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">{antibiotic.name}</p>
                  <p className="text-xs text-gray-500">Zone: {antibiotic.zone}</p>
                </div>
                <span className={`text-xs px-3 py-1 rounded-full ${getResultColor(antibiotic.result)}`}>
                  {antibiotic.result}
                </span>
              </div>
            ))}
          </div>
        </Card>
        
        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => navigate('/reports/preview')}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            <FileText className="w-5 h-5" />
            View Report
          </button>
          <button
            className="flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download
          </button>
        </div>
        
        <button
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-colors"
        >
          <Share2 className="w-5 h-5" />
          Share Report
        </button>
      </div>
    </MobileLayout>
  );
}
