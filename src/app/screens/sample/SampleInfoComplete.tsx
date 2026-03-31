import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Droplet, Calendar, Hash, CheckCircle2, TestTube, Save } from 'lucide-react';

export default function SampleInfoComplete() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    sampleType: '',
    sampleId: '',
    collectionDate: '',
    collectionTime: '',
    collectionSite: '',
    sampleVolume: '',
    collectedBy: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);

  const sampleTypes = [
    { value: 'blood', label: 'Blood', icon: '🩸' },
    { value: 'urine', label: 'Urine', icon: '💧' },
    { value: 'sputum', label: 'Sputum', icon: '🫁' },
    { value: 'wound_swab', label: 'Wound Swab', icon: '🩹' },
    { value: 'throat_swab', label: 'Throat Swab', icon: '👄' },
    { value: 'stool', label: 'Stool', icon: '💩' },
    { value: 'csf', label: 'CSF (Cerebrospinal Fluid)', icon: '🧠' },
    { value: 'tissue', label: 'Tissue', icon: '🔬' },
    { value: 'pus', label: 'Pus', icon: '💛' },
    { value: 'other', label: 'Other', icon: '📋' }
  ];

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.sampleType) newErrors.sampleType = 'Sample type is required';
    if (!formData.sampleId.trim()) newErrors.sampleId = 'Sample ID is required';
    if (!formData.collectionDate) newErrors.collectionDate = 'Collection date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      saveSampleData();
      navigate('/bacteria/name');
    }
  };

  const handleSave = () => {
    if (validate()) {
      saveSampleData();
      setShowSaveConfirmation(true);
      
      setTimeout(() => {
        setShowSaveConfirmation(false);
      }, 3000);
    }
  };

  const saveSampleData = () => {
    // Get current patient data
    const currentPatient = localStorage.getItem('currentPatientData');
    if (currentPatient) {
      const patientData = JSON.parse(currentPatient);
      
      // Add sample data to patient record
      const updatedRecord = {
        ...patientData,
        sampleInfo: {
          ...formData,
          sampleTypeLabel: sampleTypes.find(t => t.value === formData.sampleType)?.label || formData.sampleType
        },
        lastUpdated: new Date().toISOString()
      };
      
      // Update current patient data
      localStorage.setItem('currentPatientData', JSON.stringify(updatedRecord));
      
      // Update in patient records array
      const existingRecords = localStorage.getItem('patientRecords');
      const records = existingRecords ? JSON.parse(existingRecords) : [];
      const updatedRecords = records.map((rec: any) => 
        rec.id === patientData.id ? updatedRecord : rec
      );
      
      localStorage.setItem('patientRecords', JSON.stringify(updatedRecords));
      
      // Dispatch event to notify other components
      window.dispatchEvent(new Event('patientRecordsUpdated'));
    }
  };

  return (
    <MobileLayout title="Sample Information">
      <div className="space-y-6 mt-6">
        {/* Progress Indicator */}
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <span className="text-sm text-gray-600">Patient Details</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="font-semibold text-gray-900">Sample Details</span>
            </div>
          </div>
          <div className="relative">
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <Droplet className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold text-blue-900">Step 2: Sample Information</h3>
              <p className="text-sm text-blue-700 mt-1">Fill in all sample details below</p>
            </div>
          </div>
        </div>

        {/* Sample Type Selection */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Droplet className="w-5 h-5 text-blue-600" />
            Sample Type *
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {sampleTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => handleChange('sampleType', type.value)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  formData.sampleType === type.value
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="text-2xl mb-2">{type.icon}</div>
                <p className="text-sm font-medium text-gray-800">{type.label}</p>
              </button>
            ))}
          </div>
          {errors.sampleType && (
            <p className="text-xs text-red-600 mt-2">{errors.sampleType}</p>
          )}
        </Card>

        {/* Sample Identification */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Hash className="w-5 h-5 text-green-600" />
            Sample Identification
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sample ID / Lab Number *
              </label>
              <Input
                value={formData.sampleId}
                onChange={(e) => handleChange('sampleId', e.target.value)}
                placeholder="Enter sample ID"
                className={errors.sampleId ? 'border-red-500' : ''}
              />
              {errors.sampleId && (
                <p className="text-xs text-red-600 mt-1">{errors.sampleId}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Unique identifier for this sample
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Collection Site
              </label>
              <Input
                value={formData.collectionSite}
                onChange={(e) => handleChange('collectionSite', e.target.value)}
                placeholder="e.g., Left arm, throat, wound location"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sample Volume
              </label>
              <Input
                value={formData.sampleVolume}
                onChange={(e) => handleChange('sampleVolume', e.target.value)}
                placeholder="e.g., 5ml, 2 swabs"
              />
            </div>
          </div>
        </Card>

        {/* Collection Date & Time */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-orange-600" />
            Collection Date & Time
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Collection Date *
              </label>
              <Input
                type="date"
                value={formData.collectionDate}
                onChange={(e) => handleChange('collectionDate', e.target.value)}
                className={errors.collectionDate ? 'border-red-500' : ''}
              />
              {errors.collectionDate && (
                <p className="text-xs text-red-600 mt-1">{errors.collectionDate}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Collection Time
              </label>
              <Input
                type="time"
                value={formData.collectionTime}
                onChange={(e) => handleChange('collectionTime', e.target.value)}
              />
            </div>
          </div>
        </Card>

        {/* Additional Information */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-purple-600" />
            Additional Information
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Collected By
              </label>
              <Input
                value={formData.collectedBy}
                onChange={(e) => handleChange('collectedBy', e.target.value)}
                placeholder="Name of person who collected sample"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes
              </label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) => handleChange('additionalNotes', e.target.value)}
                placeholder="Any additional information about the sample"
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
          </div>
        </Card>

        {/* Sample Type Info Display */}
        {formData.sampleType && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm font-medium text-blue-900 mb-1">Selected Sample Type:</p>
            <p className="text-lg font-semibold text-blue-700">
              {sampleTypes.find(t => t.value === formData.sampleType)?.label}
            </p>
          </div>
        )}

        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
            <div>
              <p className="text-sm text-green-800">
                Fields marked with * are required. Ensure sample ID is unique for proper tracking.
              </p>
            </div>
          </div>
        </div>

        {/* Save Confirmation */}
        {showSaveConfirmation && (
          <div className="bg-green-100 border border-green-300 rounded-xl p-4 animate-pulse">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-green-900">Sample Saved Successfully!</p>
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
            Save & Continue to Bacteria Study
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
              onClick={() => navigate('/patient/complete-info')}
              variant="outline"
              className="py-5 rounded-xl"
            >
              Back to Patient
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}