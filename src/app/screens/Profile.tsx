import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { MainLayout } from '../components/MainLayout';
import { Card } from '../components/ui/card';
import { 
  User, 
  Mail, 
  Phone, 
  Building2, 
  Settings, 
  Bell, 
  Shield, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Camera,
  FileText,
  Edit2,
  Lock,
  RefreshCw,
  Database,
  FileSearch,
  Headphones,
  Info,
  BookOpen,
  AlertCircle,
  ShieldAlert,
  Loader2
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { api } from '../api';

interface UserProfile {
  name: string;
  role: string;
  email: string;
  experience_years: number;
  total_tests: number;
  accuracy: number;
}

export default function Profile() {
  const navigate = useNavigate();
  const { userRole } = useUser();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        const data = await api.getProfile();
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const getRoleDisplay = () => {
    const role = profile?.role || userRole;
    switch (role) {
      case 'doctor':
        return { name: 'Doctor', color: 'blue', bgColor: 'bg-blue-100', textColor: 'text-blue-600' };
      case 'lab-technician':
      case 'lab':
        return { name: 'Lab Technician', color: 'green', bgColor: 'bg-green-100', textColor: 'text-green-600' };
      case 'administrator':
      case 'admin':
        return { name: 'Administrator', color: 'purple', bgColor: 'bg-purple-100', textColor: 'text-purple-600' };
      default:
        return { name: role || 'User', color: 'gray', bgColor: 'bg-gray-100', textColor: 'text-gray-600' };
    }
  };

  const roleInfo = getRoleDisplay();

  if (isLoading) {
    return (
      <MainLayout title="Profile">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
          <p className="mt-4 text-gray-500">Loading profile...</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout title="Profile">
      <div className="space-y-4">
        {/* Profile Header Card */}
        <Card className="p-6 bg-white">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg uppercase">
                  {profile?.name?.substring(0, 2) || 'US'}
                </div>
                <button 
                  onClick={() => navigate('/user/edit-profile')}
                  className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1.5 shadow-lg hover:bg-blue-700 transition-colors"
                >
                  <Camera className="w-3 h-3" />
                </button>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-0.5">{profile?.name || 'User Name'}</h2>
                <p className="text-gray-600 text-sm mb-1">{roleInfo.name}</p>
                <p className="text-xs text-blue-600 font-medium">ID: {profile?.email.split('@')[0] || '1234'}</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/user/edit-profile')}
              className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1.5 text-sm font-medium"
            >
              <Edit2 className="w-3.5 h-3.5" />
              Edit
            </button>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Mail className="w-4 h-4" />
              <span>{profile?.email || 'email@example.com'}</span>
            </div>
            {/* Phone and Hospital fields might follow if available in profile */}
          </div>
        </Card>

        {/* Current Role Badge */}
        <Card className="p-4 bg-green-50 border-green-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2.5 rounded-lg">
                <User className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-0.5">Current Role</p>
                <p className="font-semibold text-gray-800">{roleInfo.name}</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/role-selection')}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              Switch
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3">
          <Card className="p-3 text-center">
            <p className="text-xs text-gray-500 mb-1">Total Tests</p>
            <p className="text-2xl font-bold text-blue-600">{profile?.total_tests || 0}</p>
          </Card>
          <Card className="p-3 text-center">
            <p className="text-xs text-gray-500 mb-1">Accuracy</p>
            <p className="text-2xl font-bold text-green-600">{profile?.accuracy || 0}%</p>
          </Card>
          <Card className="p-3 text-center">
            <p className="text-xs text-gray-500 mb-1">Experience</p>
            <p className="text-2xl font-bold text-purple-600">{profile?.experience_years || 0}y</p>
          </Card>
        </div>

        {/* Account Settings & Security grouped for desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Account Settings */}
          <Card className="overflow-hidden">
            <div className="flex items-center gap-2.5 p-3.5 bg-gray-50 border-b">
              <Settings className="w-4.5 h-4.5 text-gray-600" />
              <h3 className="font-semibold text-gray-800 text-sm">Account Settings</h3>
            </div>
            <div className="divide-y divide-gray-100">
              <button
                onClick={() => navigate('/user/edit-profile')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Edit2 className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">Edit Profile</span>
                </div>
                <ChevronRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </button>
              <button
                onClick={() => navigate('/forgot-password')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Lock className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">Change Password</span>
                </div>
                <ChevronRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </button>
              <button
                onClick={() => navigate('/role-selection')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">Switch Role</span>
                </div>
                <ChevronRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </button>
              <button
                onClick={() => navigate('/settings/notification-preferences')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Bell className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">Notification Preferences</span>
                </div>
                <ChevronRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </button>
            </div>
          </Card>

          {/* Security & Privacy */}
          <Card className="overflow-hidden">
            <div className="flex items-center gap-2.5 p-3.5 bg-gray-50 border-b">
              <Shield className="w-4.5 h-4.5 text-gray-600" />
              <h3 className="font-semibold text-gray-800 text-sm">Security & Privacy</h3>
            </div>
            <div className="divide-y divide-gray-100">
              <button
                onClick={() => navigate('/settings/privacy')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">Privacy Settings</span>
                </div>
                <ChevronRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </button>
              <button
                onClick={() => navigate('/settings/data-management')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Database className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">Data Management</span>
                </div>
                <ChevronRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </button>
              <button
                onClick={() => navigate('/settings/security-log')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <FileSearch className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">Security Log</span>
                </div>
                <ChevronRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </button>
            </div>
          </Card>
        </div>

        {/* Support & Resources grouped for desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Support */}
          <Card className="overflow-hidden">
            <div className="flex items-center gap-2.5 p-3.5 bg-gray-50 border-b">
              <HelpCircle className="w-4.5 h-4.5 text-gray-600" />
              <h3 className="font-semibold text-gray-800 text-sm">Support</h3>
            </div>
            <div className="divide-y divide-gray-100">
              <button
                onClick={() => navigate('/support/help-center')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">Help Center</span>
                </div>
                <ChevronRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </button>
              <button
                onClick={() => navigate('/support/contact-support')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Headphones className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">Contact Support</span>
                </div>
                <ChevronRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </button>
              <button
                onClick={() => navigate('/support/about-app')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Info className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">About App</span>
                </div>
                <ChevronRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </button>
            </div>
          </Card>

          {/* Patient Resources */}
          <Card className="overflow-hidden">
            <div className="flex items-center gap-2.5 p-3.5 bg-gray-50 border-b">
              <FileText className="w-4.5 h-4.5 text-gray-600" />
              <h3 className="font-semibold text-gray-800 text-sm">Patient Resources</h3>
            </div>
            <div className="divide-y divide-gray-100">
              <button
                onClick={() => navigate('/guidance/patient-guide-download')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">Patient Education Guide</span>
                </div>
                <ChevronRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </button>
              <button
                onClick={() => navigate('/guidance/antibiotic-concerns')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">Antibiotic Concerns Help</span>
                </div>
                <ChevronRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </button>
              <button
                onClick={() => navigate('/guidance/emergency')}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <ShieldAlert className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  <span className="text-sm text-gray-700 group-hover:text-gray-900">Emergency Guidelines</span>
                </div>
                <ChevronRight className="w-4.5 h-4.5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </button>
            </div>
          </Card>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => navigate('/logout')}
          className="w-full bg-red-50 text-red-600 font-medium py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-red-100 transition-colors border border-red-200"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>

        {/* Footer */}
        <div className="text-center text-xs text-gray-400 pb-4">
          <p>Antibiotic Resistance Pattern Analysis</p>
          <p className="mt-0.5">Version 1.0.0</p>
        </div>
      </div>
    </MainLayout>
  );
}