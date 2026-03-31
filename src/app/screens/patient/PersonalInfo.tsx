import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { User, Calendar, MapPin, Save } from 'lucide-react';

export default function PersonalInfo() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    age: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

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
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Save to localStorage
      localStorage.setItem('personalInfo', JSON.stringify(formData));
      navigate('/patient/hospital-info');
    }
  };

  const handleSave = () => {
    if (validate()) {
      localStorage.setItem('personalInfo', JSON.stringify(formData));
      alert('Personal information saved!');
    }
  };

  return (
    <MobileLayout title="Personal Information">
      <div className="space-y-6 mt-6">
        {/* Progress Indicator */}
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="font-semibold text-gray-900">Personal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="text-sm text-gray-500">Hospital</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="text-sm text-gray-500">Sample</span>
            </div>
          </div>
          <div className="relative">
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '33.33%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <User className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold text-blue-900">Step 1: Personal Information</h3>
              <p className="text-sm text-blue-700 mt-1">Patient demographics and contact details</p>
            </div>
          </div>
        </div>

        {/* Basic Details Section */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />
            Patient Details
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
                Patient ID *
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

            <div className="grid grid-cols-2 gap-4">
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

        {/* Address Section */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-green-600" />
            Address Information
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

            <div className="grid grid-cols-2 gap-4">
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

        <div className="space-y-3 pb-6">
          <Button 
            onClick={handleSubmit}
            className="w-full bg-blue-600 py-6 rounded-xl text-lg font-medium hover:bg-blue-700"
          >
            Continue to Hospital Info
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
