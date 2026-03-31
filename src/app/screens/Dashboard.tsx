import { useNavigate } from 'react-router';
import { MainLayout } from '@/app/components/MainLayout';
import { PlusCircle, FileText, BarChart3, User, FlaskConical, Microscope, TrendingUp, AlertTriangle, Users, Activity } from 'lucide-react';
import { Card } from '@/app/components/ui/card';

export default function Dashboard() {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: 'New Test',
      description: 'Record new antibiotic sensitivity test',
      icon: PlusCircle,
      path: '/patient/basic-details',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Test History',
      description: 'View previous test records',
      icon: FileText,
      path: '/reports/history',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Visualizations',
      description: 'View resistance patterns & charts',
      icon: BarChart3,
      path: '/visualization/bar-chart',
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Profile',
      description: 'Manage your account settings',
      icon: User,
      path: '/user/profile',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const stats = [
    { label: 'Total Tests', value: '24', icon: FlaskConical, color: 'bg-blue-600' },
    { label: 'This Week', value: '8', icon: TrendingUp, color: 'bg-green-600' },
    { label: 'High Resistance', value: '3', icon: AlertTriangle, color: 'bg-orange-600' },
    { label: 'Active Patients', value: '42', icon: Users, color: 'bg-purple-600' },
  ];

  return (
    <MainLayout title="Dashboard" showBack={false}>
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} w-14 h-14 rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-2xl font-semibold mb-2">Welcome Back!</h2>
          <p className="text-blue-100 text-lg">Ready to analyze antibiotic resistance patterns</p>
        </div>

        {/* Main Actions */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Main Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {menuItems.map((item) => (
              <Card
                key={item.title}
                onClick={() => navigate(item.path)}
                className="p-6 cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-blue-100"
              >
                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1.5">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Access</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/bacteria/search')}
              className="w-full bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-50"
            >
              <div className="bg-teal-100 p-2 rounded-lg">
                <Microscope className="w-5 h-5 text-teal-600" />
              </div>
              <div className="text-left">
                <p className="font-medium">Bacteria Database</p>
                <p className="text-sm text-gray-500">Search & select bacteria</p>
              </div>
            </button>

            <button
              onClick={() => navigate('/antibiotic/selection')}
              className="w-full bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 hover:bg-gray-50"
            >
              <div className="bg-pink-100 p-2 rounded-lg">
                <FlaskConical className="w-5 h-5 text-pink-600" />
              </div>
              <div className="text-left">
                <p className="font-medium">Antibiotic Selection</p>
                <p className="text-sm text-gray-500">Browse available antibiotics</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}