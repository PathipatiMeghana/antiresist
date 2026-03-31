import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '../../components/MobileLayout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Building2, Calendar, User, Loader2 } from 'lucide-react';
import { api } from '../../api';

export default function HospitalLabDetails() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    hospitalName: localStorage.getItem('hospitalName') || '',
    labName: localStorage.getItem('labName') || '',
    referringDoctor: localStorage.getItem('referringDoctor') || '',
    department: localStorage.getItem('department') || '',
    testDate: localStorage.getItem('testDate') || new Date().toISOString().split('T')[0],
  });

  const [errors, setErrors] = useState({
    hospitalName: false,
    testDate: false,
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field as keyof typeof errors]) {
      setErrors({ ...errors, [field]: false });
    }
  };

  const validateForm = () => {
    const newErrors = {
      hospitalName: !formData.hospitalName,
      testDate: !formData.testDate,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleContinue = () => {
    if (validateForm()) {
      // Save data to localStorage for the final sample creation
      localStorage.setItem('hospitalName', formData.hospitalName);
      localStorage.setItem('labName', formData.labName);
      localStorage.setItem('referringDoctor', formData.referringDoctor);
      localStorage.setItem('department', formData.department);
      localStorage.setItem('testDate', formData.testDate);
      navigate('/sample-details');
    }
  };

  const handleSaveOnly = () => {
    if (validateForm()) {
      localStorage.setItem('hospitalName', formData.hospitalName);
      localStorage.setItem('labName', formData.labName);
      localStorage.setItem('referringDoctor', formData.referringDoctor);
      localStorage.setItem('department', formData.department);
      localStorage.setItem('testDate', formData.testDate);
      navigate('/home');
    }
  };

  const handleBack = () => {
    navigate('/personal-details');
  };

  return (
    <MobileLayout title="Hospital & Lab Information">
      <div className="space-y-6">
        {/* Progress Indicator */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">1</span>
              </div>
              <span className="text-gray-500 text-xs">Patient</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">2</span>
              </div>
              <span className="font-semibold text-gray-900 text-xs">Hospital</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-gray-600 text-sm font-semibold">3</span>
              </div>
              <span className="text-gray-500 text-xs">Sample</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '66.66%' }}></div>
          </div>
        </div>

        {/* Step Information */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Building2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-purple-900">Step 2: Hospital & Lab Information</h3>
              <p className="text-sm text-purple-700 mt-1">Enter facility and test details</p>
            </div>
          </div>
        </div>

        {/* Hospital Information */}
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <div className="flex items-center gap-2 mb-5">
            <Building2 className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Hospital Information</h3>
          </div>

          <div className="space-y-4">
            {/* Hospital Name */}
            <div>
              <Label htmlFor="hospitalName" className="text-sm text-gray-700 mb-2 block">
                Hospital Name *
              </Label>
              <Input
                id="hospitalName"
                type="text"
                value={formData.hospitalName}
                onChange={(e) => handleChange('hospitalName', e.target.value)}
                placeholder="Enter hospital name"
                className={`py-6 rounded-lg ${errors.hospitalName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.hospitalName && (
                <p className="text-red-600 text-xs mt-1">Hospital name is required</p>
              )}
            </div>

            {/* Department */}
            <div>
              <Label htmlFor="department" className="text-sm text-gray-700 mb-2 block">
                Department (Optional)
              </Label>
              <Input
                id="department"
                type="text"
                value={formData.department}
                onChange={(e) => handleChange('department', e.target.value)}
                placeholder="e.g., Internal Medicine, Pediatrics"
                className="py-6 rounded-lg border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Lab Information */}
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <div className="flex items-center gap-2 mb-5">
            <Building2 className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Laboratory Information</h3>
          </div>

          <div className="space-y-4">
            {/* Lab Name */}
            <div>
              <Label htmlFor="labName" className="text-sm text-gray-700 mb-2 block">
                Lab Name (Optional)
              </Label>
              <Input
                id="labName"
                type="text"
                value={formData.labName}
                onChange={(e) => handleChange('labName', e.target.value)}
                placeholder="Enter lab name"
                className="py-6 rounded-lg border-gray-300"
              />
            </div>

            {/* Referring Doctor */}
            <div>
              <Label htmlFor="referringDoctor" className="text-sm text-gray-700 mb-2 block">
                Referring Doctor (Optional)
              </Label>
              <Input
                id="referringDoctor"
                type="text"
                value={formData.referringDoctor}
                onChange={(e) => handleChange('referringDoctor', e.target.value)}
                placeholder="Doctor's full name"
                className="py-6 rounded-lg border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Test Date */}
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <div className="flex items-center gap-2 mb-5">
            <Calendar className="w-5 h-5 text-orange-600" />
            <h3 className="font-semibold text-gray-900">Test Date</h3>
          </div>

          <div>
            <Label htmlFor="testDate" className="text-sm text-gray-700 mb-2 block">
              Test Date *
            </Label>
            <Input
              id="testDate"
              type="date"
              value={formData.testDate}
              onChange={(e) => handleChange('testDate', e.target.value)}
              className={`py-6 rounded-lg ${errors.testDate ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.testDate && (
              <p className="text-red-600 text-xs mt-1">Test date is required</p>
            )}
          </div>
        </div>

        {/* Info Note */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <p className="text-sm text-purple-800">
            ℹ️ Hospital name and test date are required. Other fields can be added later if needed
          </p>
        </div>

        <div className="space-y-3 pb-6">
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleSaveOnly}
              disabled={isLoading}
              className="flex-1 py-6 rounded-lg text-base border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Save Only'}
            </Button>
            <Button
              onClick={handleContinue}
              disabled={isLoading}
              className="flex-1 bg-purple-600 hover:bg-purple-700 py-6 rounded-lg text-base"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Continue to Sample Info'}
            </Button>
          </div>
          <Button
            variant="outline"
            onClick={handleBack}
            className="w-full py-6 rounded-lg text-base border-gray-300 hover:bg-gray-50"
          >
            Back to Patient Details
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
