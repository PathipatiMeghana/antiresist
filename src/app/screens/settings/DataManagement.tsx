import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Card } from '@/app/components/ui/card';
import { Database, Download, Trash2, Archive, HardDrive, AlertTriangle } from 'lucide-react';

export default function DataManagement() {
  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const dataStats = [
    { label: 'Total Tests', value: '156', size: '12.4 MB' },
    { label: 'Patient Records', value: '89', size: '8.2 MB' },
    { label: 'Reports Generated', value: '134', size: '15.7 MB' },
    { label: 'Cache Data', value: '-', size: '3.1 MB' }
  ];

  const handleExportData = () => {
    // Mock data export
    const data = {
      exportDate: new Date().toISOString(),
      userData: {
        name: 'Dr. Robert Chen',
        email: 'robert.chen@hospital.com',
        role: 'Microbiologist'
      },
      stats: dataStats
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `antiresist-data-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleDeleteAllData = () => {
    if (showDeleteConfirm) {
      // Clear all localStorage data
      localStorage.clear();
      alert('All data has been deleted');
      navigate('/login');
    } else {
      setShowDeleteConfirm(true);
    }
  };

  return (
    <MobileLayout title="Data Management" showBack>
      <div className="space-y-4 mt-6">
        {/* Storage Overview */}
        <Card className="p-4 bg-blue-50 border-blue-200">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <HardDrive className="w-5 h-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-1">Storage Usage</h3>
              <p className="text-2xl font-bold text-blue-600 mb-1">39.4 MB</p>
              <p className="text-sm text-gray-600">Total data stored on device</p>
            </div>
          </div>
        </Card>

        {/* Data Breakdown */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Database className="w-4 h-4" />
            Data Breakdown
          </h3>
          <div className="space-y-3">
            {dataStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div>
                  <p className="font-medium text-gray-700 text-sm">{stat.label}</p>
                  <p className="text-xs text-gray-500">{stat.value} items</p>
                </div>
                <p className="font-semibold text-gray-800">{stat.size}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Data Export */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Export Your Data</h3>
          <p className="text-sm text-gray-600 mb-4">
            Download a copy of all your data in JSON format. This includes your profile, test results, and patient records.
          </p>
          <button
            onClick={handleExportData}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export All Data
          </button>
        </Card>

        {/* Clear Cache */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Clear Cache</h3>
          <p className="text-sm text-gray-600 mb-4">
            Free up space by clearing temporary files and cached data. Your important data will be preserved.
          </p>
          <button
            onClick={() => {
              localStorage.removeItem('cache');
              alert('Cache cleared successfully');
            }}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <Archive className="w-4 h-4" />
            Clear Cache (3.1 MB)
          </button>
        </Card>

        {/* Danger Zone */}
        <Card className="p-4 border-red-200 bg-red-50">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h3 className="font-semibold text-red-800">Danger Zone</h3>
          </div>
          <p className="text-sm text-red-700 mb-4">
            {showDeleteConfirm 
              ? 'Are you absolutely sure? This action cannot be undone. All your data will be permanently deleted.'
              : 'Permanently delete all your data from this device. This action cannot be undone.'
            }
          </p>
          <div className="flex gap-2">
            {showDeleteConfirm && (
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
            )}
            <button
              onClick={handleDeleteAllData}
              className={`${showDeleteConfirm ? 'flex-1' : 'w-full'} bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2`}
            >
              <Trash2 className="w-4 h-4" />
              {showDeleteConfirm ? 'Confirm Delete' : 'Delete All Data'}
            </button>
          </div>
        </Card>
      </div>
    </MobileLayout>
  );
}
