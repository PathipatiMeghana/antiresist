import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '../../components/MobileLayout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { User, MapPin, Loader2 } from 'lucide-react';
import { api } from '../../api';

export default function PersonalDetails() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    patientName: '',
    patientId: '',
    age: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const [errors, setErrors] = useState({
    patientName: false,
    patientId: false,
    age: false,
    gender: false,
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field as keyof typeof errors]) {
      setErrors({ ...errors, [field]: false });
    }
  };

  const validateForm = () => {
    const newErrors = {
      patientName: !formData.patientName,
      patientId: !formData.patientId,
      age: !formData.age,
      gender: !formData.gender,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleContinue = async () => {
    if (validateForm()) {
      setIsLoading(true);
      setErrorMessage('');
      try {
        const response = await api.createPatient({
          name: formData.patientName,
          patient_id: formData.patientId,
          age: parseInt(formData.age),
          gender: formData.gender,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip_code: formData.zipCode
        });
        console.log('Patient created:', response);
        localStorage.setItem('currentPatientId', response.id || response.patient_id);
        navigate('/hospital-lab-details');
      } catch (error: any) {
        console.error('Error creating patient:', error);
        setErrorMessage(error.message || 'Failed to save patient. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSaveOnly = async () => {
    if (validateForm()) {
      setIsLoading(true);
      setErrorMessage('');
      try {
        await api.createPatient({
          name: formData.patientName,
          patient_id: formData.patientId,
          age: parseInt(formData.age),
          gender: formData.gender,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip_code: formData.zipCode
        });
        navigate('/home');
      } catch (error: any) {
        setErrorMessage(error.message || 'Failed to save patient.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <MobileLayout title="Patient Information">
      <div className="space-y-6">
        {/* Progress Indicator */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">1</span>
              </div>
              <span className="font-semibold text-gray-900 text-xs">Patient</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-gray-600 text-sm font-semibold">2</span>
              </div>
              <span className="text-gray-500 text-xs">Hospital</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-gray-600 text-sm font-semibold">3</span>
              </div>
              <span className="text-gray-500 text-xs">Sample</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '33.33%' }}></div>
          </div>
        </div>

        {/* Step Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <User className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900">Step 1: Patient Information</h3>
              <p className="text-sm text-blue-700 mt-1">Fill in all patient information below</p>
            </div>
          </div>
        </div>

        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-center text-sm">
            {errorMessage}
          </div>
        )}

        {/* Basic Details Section */}
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <div className="flex items-center gap-2 mb-5">
            <User className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Basic Details</h3>
          </div>

          <div className="space-y-4">
            {/* Patient Name */}
            <div>
              <Label htmlFor="patientName" className="text-sm text-gray-700 mb-2 block">
                Patient Name *
              </Label>
              <Input
                id="patientName"
                type="text"
                value={formData.patientName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('patientName', e.target.value)}
                placeholder="Enter full name"
                className={`py-6 rounded-lg ${errors.patientName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.patientName && (
                <p className="text-red-600 text-xs mt-1">Patient name is required</p>
              )}
            </div>

            {/* Patient ID */}
            <div>
              <Label htmlFor="patientId" className="text-sm text-gray-700 mb-2 block">
                Patient ID / MRN *
              </Label>
              <Input
                id="patientId"
                type="text"
                value={formData.patientId}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('patientId', e.target.value)}
                placeholder="Enter patient ID"
                className={`py-6 rounded-lg ${errors.patientId ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.patientId && (
                <p className="text-red-600 text-xs mt-1">Patient ID is required</p>
              )}
            </div>

            {/* Age and Gender */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="age" className="text-sm text-gray-700 mb-2 block">
                  Age *
                </Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('age', e.target.value)}
                  placeholder="Age"
                  className={`py-6 rounded-lg ${errors.age ? 'border-red-500' : 'border-gray-300'}`}
                />
                {errors.age && (
                  <p className="text-red-600 text-xs mt-1">Age is required</p>
                )}
              </div>
              <div>
                <Label htmlFor="gender" className="text-sm text-gray-700 mb-2 block">
                  Gender *
                </Label>
                <Select value={formData.gender} onValueChange={(value: string) => handleChange('gender', value)}>
                  <SelectTrigger className={`py-6 rounded-lg ${errors.gender ? 'border-red-500' : 'border-gray-300'}`}>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && (
                  <p className="text-red-600 text-xs mt-1">Gender is required</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Demographics Section */}
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <div className="flex items-center gap-2 mb-5">
            <MapPin className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Demographics (Optional)</h3>
          </div>

          <div className="space-y-4">
            {/* Address */}
            <div>
              <Label htmlFor="address" className="text-sm text-gray-700 mb-2 block">
                Address
              </Label>
              <Input
                id="address"
                type="text"
                value={formData.address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('address', e.target.value)}
                placeholder="Street address"
                className="py-6 rounded-lg border-gray-300"
              />
            </div>

            {/* City and State */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city" className="text-sm text-gray-700 mb-2 block">
                  City
                </Label>
                <Input
                  id="city"
                  type="text"
                  value={formData.city}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('city', e.target.value)}
                  placeholder="City"
                  className="py-6 rounded-lg border-gray-300"
                />
              </div>
              <div>
                <Label htmlFor="state" className="text-sm text-gray-700 mb-2 block">
                  State
                </Label>
                <Input
                  id="state"
                  type="text"
                  value={formData.state}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('state', e.target.value)}
                  placeholder="State"
                  className="py-6 rounded-lg border-gray-300"
                />
              </div>
            </div>

            {/* ZIP Code */}
            <div>
              <Label htmlFor="zipCode" className="text-sm text-gray-700 mb-2 block">
                ZIP Code
              </Label>
              <Input
                id="zipCode"
                type="text"
                value={formData.zipCode}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange('zipCode', e.target.value)}
                placeholder="ZIP code"
                className="py-6 rounded-lg border-gray-300"
              />
            </div>
          </div>
        </div>

        {/* Info Note */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-sm text-green-800">
            ℹ️ Fields marked with * are required. You can update this information later if needed
          </p>
        </div>

        <div className="flex gap-3 pb-6">
          <Button
            variant="outline"
            onClick={handleSaveOnly}
            disabled={isLoading}
            className="flex-1 py-6 rounded-lg text-base border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Save Only'}
          </Button>
          <Button
            onClick={handleContinue}
            disabled={isLoading}
            className="flex-1 bg-blue-600 hover:bg-blue-700 py-6 rounded-lg text-base"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Saving...
              </>
            ) : (
              'Save & Continue to Sample Info'
            )}
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}