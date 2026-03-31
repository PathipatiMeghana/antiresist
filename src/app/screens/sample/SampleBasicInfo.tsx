import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { TestTube, Hash, Save } from 'lucide-react';

export default function SampleBasicInfo() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    sampleType: '',
    sampleId: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

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

  useEffect(() => {
    // Load existing data if available
    const saved = localStorage.getItem('sampleBasicInfo');
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
    
    if (!formData.sampleType) newErrors.sampleType = 'Sample type is required';
    if (!formData.sampleId.trim()) newErrors.sampleId = 'Sample ID is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      localStorage.setItem('sampleBasicInfo', JSON.stringify(formData));
      navigate('/sample/collection-info');
    }
  };

  const handleSave = () => {
    if (validate()) {
      localStorage.setItem('sampleBasicInfo', JSON.stringify(formData));
      alert('Sample basic info saved!');
    }
  };

  return (
    <MobileLayout title="Sample Information">
      <div className="space-y-6 mt-6">
        {/* Progress Indicator */}
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="font-semibold text-gray-900">Basic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="text-sm text-gray-500">Collection</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="text-sm text-gray-500">Details</span>
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
            <TestTube className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold text-blue-900">Step 1: Sample Identification</h3>
              <p className="text-sm text-blue-700 mt-1">Select sample type and enter ID</p>
            </div>
          </div>
        </div>

        {/* Sample Type Selection */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <TestTube className="w-5 h-5 text-blue-600" />
            Sample Type *
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {sampleTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => handleChange('sampleType', type.value)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  formData.sampleType === type.value
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="text-3xl mb-2">{type.icon}</div>
                <p className="text-sm font-medium text-gray-800">{type.label}</p>
              </button>
            ))}
          </div>
          {errors.sampleType && (
            <p className="text-xs text-red-600 mt-2">{errors.sampleType}</p>
          )}
        </Card>

        {/* Sample ID */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Hash className="w-5 h-5 text-purple-600" />
            Sample ID
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sample ID / Barcode *
              </label>
              <Input
                value={formData.sampleId}
                onChange={(e) => handleChange('sampleId', e.target.value)}
                placeholder="Enter sample ID or scan barcode"
                className={errors.sampleId ? 'border-red-500' : ''}
              />
              {errors.sampleId && (
                <p className="text-xs text-red-600 mt-1">{errors.sampleId}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Unique identifier for this sample
              </p>
            </div>
          </div>
        </Card>

        <div className="space-y-3 pb-6">
          <Button 
            onClick={handleSubmit}
            className="w-full bg-blue-600 py-6 rounded-xl text-lg font-medium hover:bg-blue-700"
          >
            Continue to Collection Info
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
              onClick={() => navigate('/patient/hospital-info')}
              variant="outline"
              className="py-5 rounded-xl"
            >
              Back to Hospital
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
