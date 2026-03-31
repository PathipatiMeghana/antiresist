import { useNavigate } from 'react-router';
import { FullPageLayout } from '@/app/components/FullPageLayout';
import { Button } from '@/app/components/ui/button';
import { UserCircle, Microscope, Shield, ChevronRight, ArrowLeft } from 'lucide-react';
import { useUser } from '@/app/context/UserContext';

export default function RoleSelection() {
  const navigate = useNavigate();
  const { setUserRole } = useUser();

  const handleRoleSelect = (role: 'doctor' | 'lab-technician' | 'administrator') => {
    setUserRole(role);
    navigate('/home');
  };

  const roles = [
    {
      id: 'doctor',
      title: 'Doctor',
      description: 'Patient assessment, diagnosis, and treatment protocols',
      icon: UserCircle,
      color: 'blue',
      features: [
        'Patient registration',
        'View test results',
        'Treatment recommendations',
        'Medical history access',
      ],
    },
    {
      id: 'lab-technician',
      title: 'Lab Technician',
      description: 'Sample collection, testing, and result entry',
      icon: Microscope,
      color: 'green',
      features: [
        'Sample registration',
        'Bacteria identification',
        'Antibiotic sensitivity testing',
        'Result documentation',
      ],
    },
    {
      id: 'administrator',
      title: 'Administrator',
      description: 'System management and data oversight',
      icon: Shield,
      color: 'purple',
      features: [
        'User management',
        'Report generation',
        'Data analytics',
        'System configuration',
      ],
    },
  ];

  return (
    <FullPageLayout>
      <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 max-w-4xl w-full mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Select Your Role</h1>
            <p className="text-gray-600 mt-1">Choose your role to access relevant features and workflows</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            const colorClasses = {
              blue: {
                bg: 'bg-blue-50',
                border: 'border-blue-300',
                icon: 'bg-blue-600',
                hover: 'hover:border-blue-500 hover:shadow-xl',
              },
              green: {
                bg: 'bg-green-50',
                border: 'border-green-300',
                icon: 'bg-green-600',
                hover: 'hover:border-green-500 hover:shadow-xl',
              },
              purple: {
                bg: 'bg-purple-50',
                border: 'border-purple-300',
                icon: 'bg-purple-600',
                hover: 'hover:border-purple-500 hover:shadow-xl',
              },
            }[role.color];

            return (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role.id as any)}
                className={`${colorClasses.bg} border-2 ${colorClasses.border} ${colorClasses.hover} rounded-2xl p-6 transition-all text-left group`}
              >
                <div className="flex flex-col h-full">
                  <div className={`${colorClasses.icon} w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">{role.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{role.description}</p>
                  <div className="space-y-2 mt-auto">
                    {role.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center mt-4 text-gray-500 group-hover:text-gray-700">
                    <span className="text-sm font-medium">Select</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mt-8">
          <p className="text-sm text-gray-600 text-center">
            Your role determines which features and workflows are available to you.
            You can change your role anytime from the settings menu.
          </p>
        </div>
      </div>
    </FullPageLayout>
  );
}