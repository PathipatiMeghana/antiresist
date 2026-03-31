import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Building2, Calendar, User, Save, CheckCircle2 } from 'lucide-react';

export default function HospitalInfo() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
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
    
    if (!formData.hospitalName.trim()) newErrors.hospitalName = 'Hospital name is required';
    if (!formData.testDate) newErrors.testDate = 'Test date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Get personal info and combine
      const personalInfo = localStorage.getItem('personalInfo');
      if (!personalInfo) {
        alert('Please complete personal information first');
        navigate('/patient/personal-info');
        return;
      }

      const combined = {
        ...JSON.parse(personalInfo),
        ...formData
      };

      // Create patient record
      const newRecord = {
        id: `PAT-${Date.now()}`,
        ...combined,
        status: 'In Progress',
        createdAt: new Date().toISOString()
      };

      // Save to patient records
      const existingRecords = localStorage.getItem('patientRecords');
      const records = existingRecords ? JSON.parse(existingRecords) : [];
      records.unshift(newRecord);
      localStorage.setItem('patientRecords', JSON.stringify(records));
      localStorage.setItem('currentPatientData', JSON.stringify(newRecord));
      
      // Save hospital info separately
      localStorage.setItem('hospitalInfo', JSON.stringify(formData));
      
      // Dispatch event
      window.dispatchEvent(new Event('patientRecordsUpdated'));

      navigate('/sample/basic-info');
    }
  };

  const handleSave = () => {
    if (validate()) {
      localStorage.setItem('hospitalInfo', JSON.stringify(formData));
      setShowSaveConfirmation(true);
      setTimeout(() => setShowSaveConfirmation(false), 3000);
    }
  };

  return (
    <MobileLayout title="Hospital Information">
      <div className="space-y-6 mt-6">
        {/* Progress Indicator */}
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <span className="text-sm text-gray-600">Personal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="font-semibold text-gray-900">Hospital</span>
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
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '66.66%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold text-blue-900">Step 2: Hospital & Lab Information</h3>
              <p className="text-sm text-blue-700 mt-1">Medical facility and test details</p>
            </div>
          </div>
        </div>

        {/* Hospital Details */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-600" />
            Hospital Details
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
                Laboratory Name
              </label>
              <Input
                value={formData.labName}
                onChange={(e) => handleChange('labName', e.target.value)}
                placeholder="Enter lab name (optional)"
              />
              <p className="text-xs text-gray-500 mt-1">
                Leave blank if same as hospital
              </p>
            </div>
          </div>
        </Card>

        {/* Test Details */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-orange-600" />
            Test Information
          </h4>
          <div className="space-y-4">
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Referring Doctor
              </label>
              <Input
                value={formData.referringDoctor}
                onChange={(e) => handleChange('referringDoctor', e.target.value)}
                placeholder="Doctor's name (optional)"
              />
            </div>
          </div>
        </Card>

        {/* Save Confirmation */}
        {showSaveConfirmation && (
          <div className="bg-green-100 border border-green-300 rounded-xl p-4 animate-pulse">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-green-900">Hospital Info Saved!</p>
                <p className="text-sm text-green-700">Information has been recorded.</p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3 pb-6">
          <Button 
            onClick={handleSubmit}
            className="w-full bg-blue-600 py-6 rounded-xl text-lg font-medium hover:bg-blue-700"
          >
            Continue to Sample Info
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
              onClick={() => navigate('/patient/personal-info')}
              variant="outline"
              className="py-5 rounded-xl"
            >
              Back to Personal
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}