import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Card } from '@/app/components/ui/card';
import { Shield, Eye, EyeOff, Lock, Database, UserCheck, Bell } from 'lucide-react';

export default function PrivacySettings() {
  const navigate = useNavigate();
  
  const [settings, setSettings] = useState({
    dataSharing: false,
    analytics: true,
    personalizedAds: false,
    locationTracking: false,
    profileVisibility: true,
    activityLog: true
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <MobileLayout title="Privacy Settings" showBack>
      <div className="space-y-4 mt-6">
        {/* Privacy Overview */}
        <Card className="p-4 bg-blue-50 border-blue-200">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Your Privacy Matters</h3>
              <p className="text-sm text-gray-600">
                Control how your data is collected, used, and shared. All settings are encrypted and secure.
              </p>
            </div>
          </div>
        </Card>

        {/* Data Sharing */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Database className="w-4 h-4" />
            Data Sharing
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div className="flex-1">
                <p className="font-medium text-gray-700 text-sm">Share Data with Partners</p>
                <p className="text-xs text-gray-500">Allow anonymized data sharing for research</p>
              </div>
              <button
                onClick={() => toggleSetting('dataSharing')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.dataSharing ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.dataSharing ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex-1">
                <p className="font-medium text-gray-700 text-sm">Analytics</p>
                <p className="text-xs text-gray-500">Help improve app performance</p>
              </div>
              <button
                onClick={() => toggleSetting('analytics')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.analytics ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.analytics ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex-1">
                <p className="font-medium text-gray-700 text-sm">Personalized Ads</p>
                <p className="text-xs text-gray-500">Show relevant content based on usage</p>
              </div>
              <button
                onClick={() => toggleSetting('personalizedAds')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.personalizedAds ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.personalizedAds ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </Card>

        {/* Account Privacy */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <UserCheck className="w-4 h-4" />
            Account Privacy
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div className="flex-1">
                <p className="font-medium text-gray-700 text-sm">Profile Visibility</p>
                <p className="text-xs text-gray-500">Show profile to other medical professionals</p>
              </div>
              <button
                onClick={() => toggleSetting('profileVisibility')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.profileVisibility ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.profileVisibility ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex-1">
                <p className="font-medium text-gray-700 text-sm">Activity Log</p>
                <p className="text-xs text-gray-500">Track and display your activity history</p>
              </div>
              <button
                onClick={() => toggleSetting('activityLog')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.activityLog ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.activityLog ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex-1">
                <p className="font-medium text-gray-700 text-sm">Location Tracking</p>
                <p className="text-xs text-gray-500">Enable location-based features</p>
              </div>
              <button
                onClick={() => toggleSetting('locationTracking')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.locationTracking ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.locationTracking ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <button
              onClick={() => navigate('/settings/data-management')}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <Database className="w-4 h-4" />
              Manage My Data
            </button>
            <button
              onClick={() => navigate('/settings/security-log')}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              View Security Log
            </button>
          </div>
        </Card>

        {/* Save Button */}
        <button
          onClick={() => {
            localStorage.setItem('privacySettings', JSON.stringify(settings));
            navigate(-1);
          }}
          className="w-full bg-blue-600 text-white font-medium py-4 rounded-xl hover:bg-blue-700 transition-colors"
        >
          Save Privacy Settings
        </button>
      </div>
    </MobileLayout>
  );
}
