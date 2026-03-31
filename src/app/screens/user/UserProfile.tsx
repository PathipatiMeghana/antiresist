import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Card } from '@/app/components/ui/card';
import { User, Mail, Phone, Building2, Briefcase, Calendar, Edit, LogOut, RefreshCw } from 'lucide-react';

export default function UserProfile() {
  const navigate = useNavigate();
  
  const userProfile = {
    name: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@hospital.com',
    phone: '+1 (555) 123-4567',
    role: 'Microbiologist',
    hospital: 'City General Hospital',
    department: 'Clinical Microbiology',
    joinDate: 'January 2020',
    licenseNumber: 'ML-2020-456789'
  };
  
  return (
    <MobileLayout title="User Profile">
      <div className="space-y-4 mt-6">
        {/* Profile Header */}
        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <User className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold mb-1">{userProfile.name}</h2>
            <p className="text-gray-500 mb-4">{userProfile.role}</p>
            <button 
              onClick={() => navigate('/user/edit-profile')}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-colors"
            >
              <Edit className="w-4 h-4" />
              Edit Profile
            </button>
          </div>
        </Card>
        
        {/* Contact Information */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-medium">{userProfile.email}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="font-medium">{userProfile.phone}</p>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Professional Information */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">Professional Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Hospital</p>
                <p className="font-medium">{userProfile.hospital}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Department</p>
                <p className="font-medium">{userProfile.department}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Member Since</p>
                <p className="font-medium">{userProfile.joinDate}</p>
              </div>
            </div>
          </div>
        </Card>
        
        {/* License Information */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">License Information</h3>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">License Number</p>
            <p className="font-medium font-mono">{userProfile.licenseNumber}</p>
          </div>
        </Card>
        
        {/* Account Actions */}
        <Card className="p-4">
          <h3 className="font-semibold mb-3">Account Actions</h3>
          <div className="space-y-2">
            <button 
              onClick={() => navigate('/forgot-password')}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Change Password
            </button>
            <button 
              onClick={() => navigate('/role-selection')}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Switch Role
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors">
              Privacy Settings
            </button>
            <button 
              onClick={() => navigate('/logout')}
              className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl hover:bg-red-100 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </Card>
      </div>
    </MobileLayout>
  );
}