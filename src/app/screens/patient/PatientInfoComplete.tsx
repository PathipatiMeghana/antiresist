import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { User, Calendar, MapPin, Building2, CheckCircle2, Save } from 'lucide-react';

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
}

export default function PatientInfoComplete() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    age: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    hospitalName: '',
    labName: '',
    testDate: '',
    referringDoctor: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.patientName.trim()) newErrors.patientName = 'Patient name is required';
    if (!formData.patientId.trim()) newErrors.patientId = 'Patient ID is required';
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.hospitalName.trim()) newErrors.hospitalName = 'Hospital name is required';
    if (!formData.testDate) newErrors.testDate = 'Test date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Save patient data to localStorage
      savePatientData();
      navigate('/sample/complete-info');
    }
  };

  const handleSave = () => {
    if (validate()) {
      // Save patient data to localStorage
      savePatientData();
      setShowSaveConfirmation(true);
      
      // Hide confirmation after 3 seconds
      setTimeout(() => {
        setShowSaveConfirmation(false);
      }, 3000);
    }
  };

  const savePatientData = () => {
    // Get existing patient records from localStorage
    const existingRecords = localStorage.getItem('patientRecords');
    const records: PatientRecord[] = existingRecords ? JSON.parse(existingRecords) : [];
    
    // Create new record
    const newRecord: PatientRecord = {
      id: `REC-${Date.now()}`,
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    // Add to records array
    records.unshift(newRecord); // Add to beginning of array
    
    // Save back to localStorage
    localStorage.setItem('patientRecords', JSON.stringify(records));
    
    // Also save the current patient data separately for workflow continuation
    localStorage.setItem('currentPatientData', JSON.stringify(newRecord));
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event('patientRecordsUpdated'));
  };

  return (
    <MobileLayout title="Patient Information">
      <div className="space-y-6 mt-6">
        {/* Progress Indicator */}
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="font-semibold text-gray-900">Patient Details</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="text-sm text-gray-500">Sample Details</span>
            </div>
          </div>
          <div className="relative">
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold text-blue-900">Step 1: Patient Information</h3>
              <p className="text-sm text-blue-700 mt-1">Fill in all patient information below</p>
            </div>
          </div>
        </div>

        {/* Basic Details Section */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />
            Basic Details
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Patient Name *
              </label>
              <Input
                value={formData.patientName}
                onChange={(e) => handleChange('patientName', e.target.value)}
                placeholder="Enter full name"
                className={errors.patientName ? 'border-red-500' : ''}
              />
              {errors.patientName && (
                <p className="text-xs text-red-600 mt-1">{errors.patientName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Patient ID / MRN *
              </label>
              <Input
                value={formData.patientId}
                onChange={(e) => handleChange('patientId', e.target.value)}
                placeholder="Enter patient ID"
                className={errors.patientId ? 'border-red-500' : ''}
              />
              {errors.patientId && (
                <p className="text-xs text-red-600 mt-1">{errors.patientId}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age *
                </label>
                <Input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleChange('age', e.target.value)}
                  placeholder="Age"
                  className={errors.age ? 'border-red-500' : ''}
                />
                {errors.age && (
                  <p className="text-xs text-red-600 mt-1">{errors.age}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender *
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleChange('gender', e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-lg border ${
                    errors.gender ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <p className="text-xs text-red-600 mt-1">{errors.gender}</p>
                )}
              </div>
            </div>
          </div>
        </Card>

        {/* Demographics Section */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-green-600" />
            Demographics (Optional)
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <Input
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                placeholder="Street address"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <Input
                  value={formData.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  placeholder="City"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <Input
                  value={formData.state}
                  onChange={(e) => handleChange('state', e.target.value)}
                  placeholder="State"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ZIP Code
              </label>
              <Input
                value={formData.zipCode}
                onChange={(e) => handleChange('zipCode', e.target.value)}
                placeholder="ZIP code"
              />
            </div>
          </div>
        </Card>

        {/* Hospital/Lab Information */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-purple-600" />
            Hospital & Lab Information
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hospital Name *
              </label>
              <Input
                value={formData.hospitalName}
                onChange={(e) => handleChange('hospitalName', e.target.value)}
                placeholder="Enter hospital name"
                className={errors.hospitalName ? 'border-red-500' : ''}
              />
              {errors.hospitalName && (
                <p className="text-xs text-red-600 mt-1">{errors.hospitalName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lab Name (Optional)
              </label>
              <Input
                value={formData.labName}
                onChange={(e) => handleChange('labName', e.target.value)}
                placeholder="Enter lab name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Referring Doctor
              </label>
              <Input
                value={formData.referringDoctor}
                onChange={(e) => handleChange('referringDoctor', e.target.value)}
                placeholder="Doctor's name"
              />
            </div>
          </div>
        </Card>

        {/* Test Date */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-orange-600" />
            Test Date
          </h4>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Test Date *
            </label>
            <Input
              type="date"
              value={formData.testDate}
              onChange={(e) => handleChange('testDate', e.target.value)}
              className={errors.testDate ? 'border-red-500' : ''}
            />
            {errors.testDate && (
              <p className="text-xs text-red-600 mt-1">{errors.testDate}</p>
            )}
          </div>
        </Card>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <p className="text-sm text-green-800">
                Fields marked with * are required. You can update this information later if needed.
              </p>
            </div>
          </div>
        </div>

        {showSaveConfirmation && (
          <div className="bg-green-100 border border-green-300 rounded-xl p-4 animate-pulse">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-green-900">Patient Saved Successfully!</p>
                <p className="text-sm text-green-700">You can find this record in your history.</p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3 pb-6">
          <Button 
            onClick={handleSubmit}
            className="w-full bg-blue-600 py-6 rounded-xl text-lg font-medium hover:bg-blue-700"
          >
            Save & Continue to Sample Info
          </Button>
          
          <div className="grid grid-cols-2 gap-3">
            <Button 
              onClick={handleSave}
              variant="outline"
              className="py-5 rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Save className="w-5 h-5 mr-2" />
              Save Only
            </Button>
            <Button 
              onClick={() => navigate('/home')}
              variant="outline"
              className="py-5 rounded-xl"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}