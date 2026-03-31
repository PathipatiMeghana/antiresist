import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Calendar, Clock, MapPin, User, Save } from 'lucide-react';

export default function SampleCollectionInfo() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    collectionDate: '',
    collectionTime: '',
    collectionSite: '',
    collectedBy: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Load existing data if available
    const saved = localStorage.getItem('sampleCollectionInfo');
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
    
    if (!formData.collectionDate) newErrors.collectionDate = 'Collection date is required';
    if (!formData.collectionSite.trim()) newErrors.collectionSite = 'Collection site is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      localStorage.setItem('sampleCollectionInfo', JSON.stringify(formData));
      navigate('/sample/additional-details');
    }
  };

  const handleSave = () => {
    if (validate()) {
      localStorage.setItem('sampleCollectionInfo', JSON.stringify(formData));
      alert('Collection info saved!');
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
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="font-semibold text-gray-900">Collection</span>
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
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '66.66%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-6 h-6 text-blue-600" />
            <div>
              <h3 className="font-semibold text-blue-900">Step 2: Collection Information</h3>
              <p className="text-sm text-blue-700 mt-1">When, where, and by whom sample was collected</p>
            </div>
          </div>
        </div>

        {/* Date & Time */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-orange-600" />
            Date & Time
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
              <p className="text-xs text-gray-500 mt-1">
                Optional: When the sample was collected
              </p>
            </div>
          </div>
        </Card>

        {/* Location & Personnel */}
        <Card className="p-5">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-green-600" />
            Location & Personnel
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Collection Site *
              </label>
              <Input
                value={formData.collectionSite}
                onChange={(e) => handleChange('collectionSite', e.target.value)}
                placeholder="e.g., Left arm, throat, wound site"
                className={errors.collectionSite ? 'border-red-500' : ''}
              />
              {errors.collectionSite && (
                <p className="text-xs text-red-600 mt-1">{errors.collectionSite}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                Anatomical location where sample was taken
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Collected By
              </label>
              <Input
                value={formData.collectedBy}
                onChange={(e) => handleChange('collectedBy', e.target.value)}
                placeholder="Name of person who collected the sample"
              />
              <p className="text-xs text-gray-500 mt-1">
                Optional: Technician or nurse name
              </p>
            </div>
          </div>
        </Card>

        <div className="space-y-3 pb-6">
          <Button 
            onClick={handleSubmit}
            className="w-full bg-blue-600 py-6 rounded-xl text-lg font-medium hover:bg-blue-700"
          >
            Continue to Additional Details
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
              onClick={() => navigate('/sample/basic-info')}
              variant="outline"
              className="py-5 rounded-xl"
            >
              Back to Basic
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
