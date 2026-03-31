import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Droplet, FileText, Save, CheckCircle2 } from 'lucide-react';

export default function SampleAdditionalDetails() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    sampleVolume: '',
    additionalNotes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);

  useEffect(() => {
    // Load existing data if available
    const saved = localStorage.getItem('sampleAdditionalDetails');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.sampleVolume.trim()) newErrors.sampleVolume = 'Sample volume is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Combine all sample data
      const basicInfo = JSON.parse(localStorage.getItem('sampleBasicInfo') || '{}');
      const collectionInfo = JSON.parse(localStorage.getItem('sampleCollectionInfo') || '{}');
      
      const completeSampleData = {
        ...basicInfo,
        ...collectionInfo,
        ...formData
      };

      // Get current patient data
      const currentPatient = localStorage.getItem('currentPatientData');
      if (currentPatient) {
        const patientData = JSON.parse(currentPatient);
        
        // Add sample data to patient record
        const updatedRecord = {
          ...patientData,
          sampleInfo: completeSampleData,
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
        
        // Dispatch event
        window.dispatchEvent(new Event('patientRecordsUpdated'));
      }

      // Save to localStorage
      localStorage.setItem('sampleAdditionalDetails', JSON.stringify(formData));
      
      // Navigate to bacteria study
      navigate('/bacteria/search');
    }
  };

  const handleSave = () => {
    if (validate()) {
      localStorage.setItem('sampleAdditionalDetails', JSON.stringify(formData));
      setShowSaveConfirmation(true);
      setTimeout(() => setShowSaveConfirmation(false), 3000);
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
              <span className="text-sm text-gray-600">Basic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <span className="text-sm text-gray-600">Collection</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="font-semibold text-gray-900">Details</span>
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
              <h3 className="font-semibold text-blue-900">Step 3: Additional Details</h3>
              <p className="text-sm text-blue-700 mt-1">Volume and any special notes</p>
            </div>
          </div>
        </div>

        {/* Volume */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Droplet className="w-5 h-5 text-blue-600" />
            Sample Volume
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Volume / Quantity *
              </label>
              <Input
                value={formData.sampleVolume}
                onChange={(e) => handleChange('sampleVolume', e.target.value)}
                placeholder="e.g., 5ml, 10ml, Small amount"
                className={errors.sampleVolume ? 'border-red-500' : ''}
              />
              {errors.sampleVolume && (
                <p className="text-xs text-red-600 mt-1">{errors.sampleVolume}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Amount of sample collected
              </p>
            </div>
          </div>
        </Card>

        {/* Additional Notes */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-600" />
            Additional Notes
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes / Comments
              </label>
              <textarea
                value={formData.additionalNotes}
                onChange={(e) => handleChange('additionalNotes', e.target.value)}
                placeholder="Any additional information about the sample..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px] resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                Optional: Sample appearance, special handling, etc.
              </p>
            </div>
          </div>
        </Card>

        {/* Save Confirmation */}
        {showSaveConfirmation && (
          <div className="bg-green-100 border border-green-300 rounded-xl p-4 animate-pulse">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-green-900">Sample Details Saved!</p>
                <p className="text-sm text-green-700">All information has been recorded.</p>
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
              onClick={() => navigate('/sample/collection-info')}
              variant="outline"
              className="py-5 rounded-xl"
            >
              Back to Collection
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}