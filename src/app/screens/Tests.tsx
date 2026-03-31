import { useNavigate } from 'react-router';
import { MainLayout } from '@/app/components/MainLayout';
import { PlusCircle, FlaskConical, Microscope, TestTube, CircleDot, FileCheck, Upload, Settings } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

export default function Tests() {
  const navigate = useNavigate();

  const testCategories = [
    {
      title: 'New Test',
      description: 'Start new sensitivity test',
      icon: PlusCircle,
      path: '/patient/basic-details',
      color: 'bg-blue-500',
      textColor: 'text-white'
    },
    {
      title: 'Sample Collection',
      description: 'Record sample information',
      icon: TestTube,
      path: '/sample/type',
      color: 'bg-purple-100',
      textColor: 'text-purple-600'
    },
    {
      title: 'Bacteria Study',
      description: 'Identify bacteria type',
      icon: Microscope,
      path: '/bacteria/search',
      color: 'bg-teal-100',
      textColor: 'text-teal-600'
    },
    {
      title: 'Antibiotic Testing',
      description: 'Select antibiotics for testing',
      icon: FlaskConical,
      path: '/antibiotic/selection',
      color: 'bg-pink-100',
      textColor: 'text-pink-600'
    },
    {
      title: 'Zone of Inhibition',
      description: 'Record inhibition zones',
      icon: CircleDot,
      path: '/antibiotic/zone-inhibition',
      color: 'bg-orange-100',
      textColor: 'text-orange-600'
    },
    {
      title: 'Sensitivity Classification',
      description: 'Classify test results',
      icon: FileCheck,
      path: '/antibiotic/sensitivity',
      color: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      title: 'Upload Evidence',
      description: 'AST plate images & reports',
      icon: Upload,
      path: '/evidence/ast-image',
      color: 'bg-indigo-100',
      textColor: 'text-indigo-600'
    },
    {
      title: 'Manage Antibiotics',
      description: 'Add & configure antibiotics',
      icon: Settings,
      path: '/antibiotic/add-new',
      color: 'bg-gray-100',
      textColor: 'text-gray-600'
    }
  ];

  return (
    <MainLayout title="Tests">
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">Antibiotic Testing</h2>
          <p className="text-purple-100">Complete workflow for resistance pattern analysis</p>
        </div>

        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {testCategories.map((item) => (
              <Card
                key={item.title}
                onClick={() => navigate(item.path)}
                className="p-4 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-3`}>
                  <item.icon className={`w-6 h-6 ${item.textColor}`} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <h3 className="font-semibold text-blue-900 mb-2">Testing Workflow</h3>
          <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
            <li>Enter patient & sample details</li>
            <li>Identify bacteria type</li>
            <li>Select antibiotics for testing</li>
            <li>Record zone of inhibition measurements</li>
            <li>Upload AST plate images</li>
            <li>Review and submit for analysis</li>
          </ol>
        </div>
      </div>
    </MainLayout>
  );
}