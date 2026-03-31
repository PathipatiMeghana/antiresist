import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Card } from '@/app/components/ui/card';
import { Bell, Mail, Smartphone, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export default function NotificationPreferences() {
  const navigate = useNavigate();
  
  const [notifications, setNotifications] = useState({
    pushNotifications: true,
    emailNotifications: true,
    smsNotifications: false,
    testResults: true,
    patientUpdates: true,
    systemAlerts: true,
    weeklyReports: false,
    criticalAlerts: true,
    newFeatures: true
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <MobileLayout title="Notification Preferences" showBack>
      <div className="space-y-4 mt-6">
        {/* Overview */}
        <Card className="p-4 bg-blue-50 border-blue-200">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Bell className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Stay Informed</h3>
              <p className="text-sm text-gray-600">
                Customize how and when you receive notifications about your tests, patients, and system updates.
              </p>
            </div>
          </div>
        </Card>

        {/* Notification Channels */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Smartphone className="w-4 h-4" />
            Notification Channels
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Bell className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-700 text-sm">Push Notifications</p>
                  <p className="text-xs text-gray-500">Receive alerts on your device</p>
                </div>
              </div>
              <button
                onClick={() => toggleNotification('pushNotifications')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  notifications.pushNotifications ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.pushNotifications ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-700 text-sm">Email Notifications</p>
                  <p className="text-xs text-gray-500">Send updates to your email</p>
                </div>
              </div>
              <button
                onClick={() => toggleNotification('emailNotifications')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  notifications.emailNotifications ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.emailNotifications ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Smartphone className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-700 text-sm">SMS Notifications</p>
                  <p className="text-xs text-gray-500">Text message alerts</p>
                </div>
              </div>
              <button
                onClick={() => toggleNotification('smsNotifications')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  notifications.smsNotifications ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.smsNotifications ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </Card>

        {/* Notification Types */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Notification Types
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2">
              <div className="flex-1">
                <p className="font-medium text-gray-700 text-sm">Test Results Ready</p>
                <p className="text-xs text-gray-500">When analysis is complete</p>
              </div>
              <button
                onClick={() => toggleNotification('testResults')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  notifications.testResults ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.testResults ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex-1">
                <p className="font-medium text-gray-700 text-sm">Patient Updates</p>
                <p className="text-xs text-gray-500">Changes to patient records</p>
              </div>
              <button
                onClick={() => toggleNotification('patientUpdates')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  notifications.patientUpdates ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.patientUpdates ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex-1">
                <p className="font-medium text-gray-700 text-sm">Critical Alerts</p>
                <p className="text-xs text-gray-500">High resistance patterns detected</p>
              </div>
              <button
                onClick={() => toggleNotification('criticalAlerts')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  notifications.criticalAlerts ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.criticalAlerts ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex-1">
                <p className="font-medium text-gray-700 text-sm">System Alerts</p>
                <p className="text-xs text-gray-500">App updates and maintenance</p>
              </div>
              <button
                onClick={() => toggleNotification('systemAlerts')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  notifications.systemAlerts ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.systemAlerts ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex-1">
                <p className="font-medium text-gray-700 text-sm">Weekly Reports</p>
                <p className="text-xs text-gray-500">Summary of your activity</p>
              </div>
              <button
                onClick={() => toggleNotification('weeklyReports')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  notifications.weeklyReports ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.weeklyReports ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between py-2">
              <div className="flex-1">
                <p className="font-medium text-gray-700 text-sm">New Features</p>
                <p className="text-xs text-gray-500">Updates about new functionality</p>
              </div>
              <button
                onClick={() => toggleNotification('newFeatures')}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  notifications.newFeatures ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications.newFeatures ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>
        </Card>

        {/* Save Button */}
        <button
          onClick={() => {
            localStorage.setItem('notificationPreferences', JSON.stringify(notifications));
            navigate(-1);
          }}
          className="w-full bg-blue-600 text-white font-medium py-4 rounded-xl hover:bg-blue-700 transition-colors"
        >
          Save Preferences
        </button>
      </div>
    </MobileLayout>
  );
}
