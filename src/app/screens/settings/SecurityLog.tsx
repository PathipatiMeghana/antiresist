import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Card } from '@/app/components/ui/card';
import { Shield, CheckCircle, AlertTriangle, Monitor, Smartphone, Lock, Eye } from 'lucide-react';

export default function SecurityLog() {
  const navigate = useNavigate();

  const securityEvents = [
    {
      id: 1,
      type: 'success',
      title: 'Successful Login',
      description: 'Login from Chrome on Windows',
      timestamp: '2 minutes ago',
      icon: CheckCircle,
      color: 'green'
    },
    {
      id: 2,
      type: 'info',
      title: 'Password Changed',
      description: 'Password was successfully updated',
      timestamp: '2 days ago',
      icon: Lock,
      color: 'blue'
    },
    {
      id: 3,
      type: 'success',
      title: 'Profile Updated',
      description: 'Contact information modified',
      timestamp: '3 days ago',
      icon: Eye,
      color: 'green'
    },
    {
      id: 4,
      type: 'success',
      title: 'Successful Login',
      description: 'Login from Mobile App on Android',
      timestamp: '5 days ago',
      icon: Smartphone,
      color: 'green'
    },
    {
      id: 5,
      type: 'warning',
      title: 'Failed Login Attempt',
      description: 'Incorrect password from unknown device',
      timestamp: '1 week ago',
      icon: AlertTriangle,
      color: 'orange'
    },
    {
      id: 6,
      type: 'success',
      title: 'Successful Login',
      description: 'Login from Chrome on macOS',
      timestamp: '1 week ago',
      icon: Monitor,
      color: 'green'
    },
    {
      id: 7,
      type: 'info',
      title: 'Security Settings Updated',
      description: 'Two-factor authentication enabled',
      timestamp: '2 weeks ago',
      icon: Shield,
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' };
      case 'blue':
        return { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' };
      case 'orange':
        return { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200' };
    }
  };

  return (
    <MobileLayout title="Security Log" showBack>
      <div className="space-y-4 mt-6">
        {/* Security Overview */}
        <Card className="p-4 bg-green-50 border-green-200">
          <div className="flex items-start gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Account Secure</h3>
              <p className="text-sm text-gray-600">
                No suspicious activity detected. All recent logins are from recognized devices.
              </p>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-3 text-center">
            <p className="text-xs text-gray-500 mb-1">Total Events</p>
            <p className="text-xl font-bold text-blue-600">{securityEvents.length}</p>
          </Card>
          <Card className="p-3 text-center">
            <p className="text-xs text-gray-500 mb-1">Successful</p>
            <p className="text-xl font-bold text-green-600">
              {securityEvents.filter(e => e.type === 'success').length}
            </p>
          </Card>
          <Card className="p-3 text-center">
            <p className="text-xs text-gray-500 mb-1">Warnings</p>
            <p className="text-xl font-bold text-orange-600">
              {securityEvents.filter(e => e.type === 'warning').length}
            </p>
          </Card>
        </div>

        {/* Security Events List */}
        <Card className="overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <h3 className="font-semibold text-gray-800">Recent Activity</h3>
          </div>
          <div className="divide-y divide-gray-100">
            {securityEvents.map((event) => {
              const colors = getColorClasses(event.color);
              const Icon = event.icon;
              
              return (
                <div key={event.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className={`${colors.bg} p-2 rounded-lg`}>
                      <Icon className={`w-4 h-4 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-semibold text-gray-800 text-sm">{event.title}</h4>
                        <span className="text-xs text-gray-500">{event.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Actions */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Security Actions</h3>
          <div className="space-y-2">
            <button
              onClick={() => navigate('/settings/privacy-settings')}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Privacy Settings
            </button>
            <button
              onClick={() => navigate('/forgot-password')}
              className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Change Password
            </button>
            <button
              onClick={() => {
                alert('All sessions have been terminated. Please log in again.');
                navigate('/login');
              }}
              className="w-full bg-red-50 text-red-600 py-3 rounded-xl hover:bg-red-100 transition-colors"
            >
              End All Sessions
            </button>
          </div>
        </Card>
      </div>
    </MobileLayout>
  );
}
