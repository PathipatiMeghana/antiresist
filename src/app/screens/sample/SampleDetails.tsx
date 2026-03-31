import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '../../components/MobileLayout';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import { Textarea } from '../../components/ui/textarea';
import { TestTube, Droplet, Calendar, FileText, Loader2 } from 'lucide-react';
import { api } from '../../api';

export default function SampleDetails() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    sampleType: '',
    sampleId: '',
    sampleVolume: '',
    volumeUnit: 'ml',
    collectionDate: new Date().toISOString().split('T')[0],
    collectionTime: new Date().toLocaleTimeString('en-US', { hour12: false }).substring(0, 5),
    collectionMethod: '',
    storageConditions: '',
    notes: '',
  });

  const [errors, setErrors] = useState({
    sampleType: false,
    sampleId: false,
    sampleVolume: false,
    collectionDate: false,
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field as keyof typeof errors]) {
      setErrors({ ...errors, [field]: false });
    }
  };

  const validateForm = () => {
    const newErrors = {
      sampleType: !formData.sampleType,
      sampleId: !formData.sampleId,
      sampleVolume: !formData.sampleVolume,
      collectionDate: !formData.collectionDate,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleContinue = async () => {
    if (validateForm()) {
      setIsLoading(true);
      setErrorMessage('');
      try {
        const patientId = localStorage.getItem('currentPatientId');
        if (!patientId) throw new Error('Patient ID not found. Please go back and re-enter patient details.');

        // Create sample in backend
        const sampleResponse = await api.createSample({
          patient: patientId,
          sample_type: formData.sampleType,
          sample_id: formData.sampleId,
          collection_date: formData.collectionDate,
          collection_time: formData.collectionTime,
          collection_site: formData.collectionMethod,
          sample_volume: `${formData.sampleVolume} ${formData.volumeUnit}`,
          additional_notes: formData.notes
        });

        localStorage.setItem('currentSampleId', sampleResponse.id);
        navigate('/bacteria/search');
      } catch (error: any) {
        console.error('Error creating sample:', error);
        setErrorMessage(error.message || 'Failed to save sample details.');
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
        const patientId = localStorage.getItem('currentPatientId');
        await api.createSample({
          patient: patientId,
          sample_type: formData.sampleType,
          sample_id: formData.sampleId,
          collection_date: formData.collectionDate,
          collection_time: formData.collectionTime,
          collection_site: formData.collectionMethod,
          sample_volume: `${formData.sampleVolume} ${formData.volumeUnit}`,
          additional_notes: formData.notes
        });
        navigate('/home');
      } catch (error: any) {
        setErrorMessage(error.message || 'Failed to save sample.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBack = () => {
    navigate('/hospital-lab-details');
  };

  const sampleTypes = [
    'Blood',
    'Urine',
    'Sputum',
    'Wound Swab',
    'Throat Swab',
    'Nasal Swab',
    'Stool',
    'Cerebrospinal Fluid (CSF)',
    'Tissue',
    'Other',
  ];

  return (
    <MobileLayout title="Sample Information">
      <div className="space-y-6">
        {/* Progress Indicator */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">1</span>
              </div>
              <span className="text-gray-500 text-sm">Patient Details</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">2</span>
              </div>
              <span className="font-semibold text-gray-900">Sample Details</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>

        {/* Step Information */}
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl p-4 text-center text-sm">
            {errorMessage}
          </div>
        )}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <TestTube className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900">Step 2: Sample Information</h3>
              <p className="text-sm text-blue-700 mt-1">Enter sample collection and identification details</p>
            </div>
          </div>
        </div>

        {/* Sample Basic Information */}
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <div className="flex items-center gap-2 mb-5">
            <TestTube className="w-5 h-5 text-blue-600" />
            <h3 className="font-semibold text-gray-900">Sample Basic Information</h3>
          </div>

          <div className="space-y-4">
            {/* Sample Type */}
            <div>
              <Label htmlFor="sampleType" className="text-sm text-gray-700 mb-2 block">
                Sample Type *
              </Label>
              <Select value={formData.sampleType} onValueChange={(value) => handleChange('sampleType', value)}>
                <SelectTrigger className={`py-6 rounded-lg ${errors.sampleType ? 'border-red-500' : 'border-gray-300'}`}>
                  <SelectValue placeholder="Select sample type" />
                </SelectTrigger>
                <SelectContent>
                  {sampleTypes.map((type) => (
                    <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, '-')}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.sampleType && (
                <p className="text-red-600 text-xs mt-1">Sample type is required</p>
              )}
            </div>

            {/* Sample ID */}
            <div>
              <Label htmlFor="sampleId" className="text-sm text-gray-700 mb-2 block">
                Sample ID / Lab Number *
              </Label>
              <Input
                id="sampleId"
                type="text"
                value={formData.sampleId}
                onChange={(e) => handleChange('sampleId', e.target.value)}
                placeholder="Enter sample ID"
                className={`py-6 rounded-lg ${errors.sampleId ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.sampleId && (
                <p className="text-red-600 text-xs mt-1">Sample ID is required</p>
              )}
            </div>

            {/* Sample Volume */}
            <div>
              <Label htmlFor="sampleVolume" className="text-sm text-gray-700 mb-2 block">
                Sample Volume *
              </Label>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  id="sampleVolume"
                  type="number"
                  value={formData.sampleVolume}
                  onChange={(e) => handleChange('sampleVolume', e.target.value)}
                  placeholder="Enter volume"
                  className={`py-6 rounded-lg ${errors.sampleVolume ? 'border-red-500' : 'border-gray-300'}`}
                />
                <Select value={formData.volumeUnit} onValueChange={(value) => handleChange('volumeUnit', value)}>
                  <SelectTrigger className="py-6 rounded-lg border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ml">ml</SelectItem>
                    <SelectItem value="μl">μl</SelectItem>
                    <SelectItem value="L">L</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {errors.sampleVolume && (
                <p className="text-red-600 text-xs mt-1">Sample volume is required</p>
              )}
            </div>
          </div>
        </div>

        {/* Collection Information */}
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <div className="flex items-center gap-2 mb-5">
            <Calendar className="w-5 h-5 text-green-600" />
            <h3 className="font-semibold text-gray-900">Collection Information</h3>
          </div>

          <div className="space-y-4">
            {/* Collection Date */}
            <div>
              <Label htmlFor="collectionDate" className="text-sm text-gray-700 mb-2 block">
                Collection Date *
              </Label>
              <Input
                id="collectionDate"
                type="date"
                value={formData.collectionDate}
                onChange={(e) => handleChange('collectionDate', e.target.value)}
                className={`py-6 rounded-lg ${errors.collectionDate ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.collectionDate && (
                <p className="text-red-600 text-xs mt-1">Collection date is required</p>
              )}
            </div>

            {/* Collection Time */}
            <div>
              <Label htmlFor="collectionTime" className="text-sm text-gray-700 mb-2 block">
                Collection Time (Optional)
              </Label>
              <Input
                id="collectionTime"
                type="time"
                value={formData.collectionTime}
                onChange={(e) => handleChange('collectionTime', e.target.value)}
                className="py-6 rounded-lg border-gray-300"
              />
            </div>

            {/* Collection Method */}
            <div>
              <Label htmlFor="collectionMethod" className="text-sm text-gray-700 mb-2 block">
                Collection Method (Optional)
              </Label>
              <Select value={formData.collectionMethod} onValueChange={(value) => handleChange('collectionMethod', value)}>
                <SelectTrigger className="py-6 rounded-lg border-gray-300">
                  <SelectValue placeholder="Select method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sterile-container">Sterile Container</SelectItem>
                  <SelectItem value="swab">Swab</SelectItem>
                  <SelectItem value="needle-aspiration">Needle Aspiration</SelectItem>
                  <SelectItem value="catheter">Catheter</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Storage & Additional Details */}
        <div className="bg-white rounded-xl p-5 border border-gray-200">
          <div className="flex items-center gap-2 mb-5">
            <Droplet className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">Storage & Additional Details</h3>
          </div>

          <div className="space-y-4">
            {/* Storage Conditions */}
            <div>
              <Label htmlFor="storageConditions" className="text-sm text-gray-700 mb-2 block">
                Storage Conditions (Optional)
              </Label>
              <Select value={formData.storageConditions} onValueChange={(value) => handleChange('storageConditions', value)}>
                <SelectTrigger className="py-6 rounded-lg border-gray-300">
                  <SelectValue placeholder="Select storage condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="room-temp">Room Temperature</SelectItem>
                  <SelectItem value="refrigerated">Refrigerated (2-8°C)</SelectItem>
                  <SelectItem value="frozen">Frozen (-20°C)</SelectItem>
                  <SelectItem value="deep-frozen">Deep Frozen (-80°C)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Notes */}
            <div>
              <Label htmlFor="notes" className="text-sm text-gray-700 mb-2 block">
                Additional Notes (Optional)
              </Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                placeholder="Enter any additional notes about the sample..."
                className="rounded-lg border-gray-300 min-h-[100px]"
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

        <div className="space-y-3 pb-6">
          <div className="flex gap-3">
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
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Continue to Bacteria Study'}
            </Button>
          </div>
          <Button
            variant="outline"
            onClick={handleBack}
            className="w-full py-6 rounded-lg text-base border-gray-300 hover:bg-gray-50"
          >
            Back to Hospital Info
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}