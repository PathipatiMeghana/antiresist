import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Card } from '@/app/components/ui/card';
import { 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Briefcase, 
  Save,
  Camera,
  X
} from 'lucide-react';

export default function EditProfile() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@hospital.com',
    phone: '+1 (555) 123-4567',
    role: 'Microbiologist',
    hospital: 'City General Hospital',
    department: 'Clinical Microbiology',
    licenseNumber: 'ML-2020-456789'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!formData.hospital.trim()) {
      newErrors.hospital = 'Hospital is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      // Save logic here (localStorage, API call, etc.)
      localStorage.setItem('userProfile', JSON.stringify(formData));
      navigate('/user/profile');
    }
  };

  return (
    <MobileLayout title="Edit Profile">
      <div className="space-y-4 mt-6">
        {/* Profile Picture */}
        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {formData.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <button className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 shadow-lg hover:bg-blue-700">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-3">Tap to change profile picture</p>
          </div>
        </Card>

        {/* Personal Information */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4 text-gray-800">Personal Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className={`w-full pl-11 pr-4 py-3 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Role/Specialization *
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Briefcase className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => handleChange('role', e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Microbiologist"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Information */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4 text-gray-800">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`w-full pl-11 pr-4 py-3 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="your.email@hospital.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Phone className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={`w-full pl-11 pr-4 py-3 border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>
        </Card>

        {/* Professional Information */}
        <Card className="p-4">
          <h3 className="font-semibold mb-4 text-gray-800">Professional Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hospital/Lab Name *
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Building2 className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.hospital}
                  onChange={(e) => handleChange('hospital', e.target.value)}
                  className={`w-full pl-11 pr-4 py-3 border ${
                    errors.hospital ? 'border-red-500' : 'border-gray-300'
                  } rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="City General Hospital"
                />
              </div>
              {errors.hospital && (
                <p className="text-red-500 text-xs mt-1">{errors.hospital}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Briefcase className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.department}
                  onChange={(e) => handleChange('department', e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Clinical Microbiology"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                License Number
              </label>
              <input
                type="text"
                value={formData.licenseNumber}
                onChange={(e) => handleChange('licenseNumber', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono"
                placeholder="ML-2020-456789"
              />
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-3 pb-6">
          <button
            onClick={() => navigate('/user/profile')}
            className="flex-1 bg-gray-100 text-gray-700 font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 bg-blue-600 text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </div>
      </div>
    </MobileLayout>
  );
}
