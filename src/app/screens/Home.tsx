import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { MainLayout } from '../components/MainLayout';
import { PlusCircle, Clock, BarChart3, FlaskConical, Microscope, Menu, AlertCircle, UserCircle, Settings, Loader2 } from 'lucide-react';
import { Card } from '../components/ui/card';
import { useUser } from '../context/UserContext';
import { api } from '../api';

export default function Home() {
  const navigate = useNavigate();
  const { userRole, userName } = useUser();
  const [stats, setStats] = useState({
    totalTests: 0,
    thisWeek: 0,
    totalRecords: 0,
    reports: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setIsLoading(true);
      try {
        let data;
        if (userRole === 'administrator') {
          data = await api.getAdminDashboard();
        } else if (userRole === 'lab-technician') {
          data = await api.getLabDashboard();
        } else {
          data = await api.getDoctorDashboard();
        }
        
        if (data) {
          setStats({
            totalTests: data.total_tests || data.total_records || 0,
            thisWeek: data.weekly_tests || 0,
            totalRecords: data.total_records || 0,
            reports: data.reports_count || 0
          });
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (userRole) {
      fetchDashboardData();
    }
  }, [userRole]);

  const getRoleDisplay = () => {
    switch (userRole) {
      case 'doctor':
        return { name: 'Doctor', color: 'blue' };
      case 'lab-technician':
        return { name: 'Lab Technician', color: 'green' };
      case 'administrator':
        return { name: 'Administrator', color: 'purple' };
      default:
        return { name: 'User', color: 'gray' };
    }
  };

  const roleInfo = getRoleDisplay();

  // Role-specific quick actions
  const getQuickActions = () => {
    if (userRole === 'doctor') {
      return [
        {
          title: 'New Patient',
          description: 'Register new patient',
          icon: PlusCircle,
          path: '/patient/personal-info',
          color: 'bg-blue-100 text-blue-600'
        },
        {
          title: 'View Results',
          description: 'Check test results',
          icon: BarChart3,
          path: '/results/summary',
          color: 'bg-green-100 text-green-600'
        },
        {
          title: 'Treatment Guide',
          description: 'Treatment protocols',
          icon: AlertCircle,
          path: '/guidance/treatment-protocol',
          color: 'bg-orange-100 text-orange-600'
        },
        {
          title: 'Patient History',
          description: 'View patient records',
          icon: Clock,
          path: '/reports/history',
          color: 'bg-purple-100 text-purple-600'
        }
      ];
    } else if (userRole === 'lab-technician') {
      return [
        {
          title: 'New Sample',
          description: 'Register sample',
          icon: FlaskConical,
          path: '/sample/complete-info',
          color: 'bg-blue-100 text-blue-600'
        },
        {
          title: 'Bacteria ID',
          description: 'Identify bacteria',
          icon: Microscope,
          path: '/bacteria/search',
          color: 'bg-green-100 text-green-600'
        },
        {
          title: 'AST Testing',
          description: 'Antibiotic sensitivity',
          icon: PlusCircle,
          path: '/antibiotic/selection',
          color: 'bg-purple-100 text-purple-600'
        },
        {
          title: 'Recent Tests',
          description: 'View recent runs',
          icon: Clock,
          path: '/recent-runs',
          color: 'bg-orange-100 text-orange-600'
        }
      ];
    } else if (userRole === 'administrator') {
      return [
        {
          title: 'Dashboard',
          description: 'System overview',
          icon: BarChart3,
          path: '/dashboard',
          color: 'bg-blue-100 text-blue-600'
        },
        {
          title: 'Analytics',
          description: 'Resistance patterns',
          icon: BarChart3,
          path: '/visualization/bar-chart',
          color: 'bg-purple-100 text-purple-600'
        },
        {
          title: 'Reports',
          description: 'Generate reports',
          icon: Clock,
          path: '/reports/generate',
          color: 'bg-green-100 text-green-600'
        },
        {
          title: 'All Data',
          description: 'Browse all records',
          icon: Menu,
          path: '/records',
          color: 'bg-orange-100 text-orange-600'
        }
      ];
    }
    
    // Default actions
    return [
      {
        title: 'New Test',
        description: 'Start antibiotic sensitivity test',
        icon: PlusCircle,
        path: '/patient/complete-info',
        color: 'bg-blue-100 text-blue-600'
      },
      {
        title: 'Recent Runs',
        description: 'View recent test runs',
        icon: Clock,
        path: '/recent-runs',
        color: 'bg-purple-100 text-purple-600'
      },
      {
        title: 'Analysis',
        description: 'View resistance patterns',
        icon: BarChart3,
        path: '/visualization/bar-chart',
        color: 'bg-green-100 text-green-600'
      },
      {
        title: 'Dashboard',
        description: 'View full dashboard',
        icon: BarChart3,
        path: '/dashboard',
        color: 'bg-orange-100 text-orange-600'
      }
    ];
  };

  const quickActions = getQuickActions();

  return (
    <MainLayout title="Home">
      <div className="space-y-6">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl lg:text-3xl font-semibold">Welcome Back{userName ? `, ${userName}` : ''}!</h2>
            <button
              onClick={() => navigate('/role-selection')}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
              title="Change role"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <UserCircle className="w-5 h-5 text-blue-200" />
            <p className="text-blue-100">{roleInfo.name}</p>
          </div>
          <p className="text-blue-100 text-lg mb-6">Ready to analyze antibiotic resistance patterns</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {isLoading ? (
              <div className="col-span-4 flex justify-center py-4">
                <Loader2 className="w-8 h-8 animate-spin text-blue-200" />
              </div>
            ) : (
              <>
                <button
                  onClick={() => navigate('/tests')}
                  className="text-left hover:bg-white/10 rounded-lg p-4 transition-colors"
                >
                  <p className="text-3xl lg:text-4xl font-bold">{stats.totalTests}</p>
                  <p className="text-sm text-blue-100 mt-1">Total Tests</p>
                </button>
                <button
                  onClick={() => navigate('/recent-runs')}
                  className="text-left hover:bg-white/10 rounded-lg p-4 transition-colors"
                >
                  <p className="text-3xl lg:text-4xl font-bold">{stats.thisWeek}</p>
                  <p className="text-sm text-blue-100 mt-1">This Week</p>
                </button>
                <button
                  onClick={() => navigate('/records')}
                  className="text-left hover:bg-white/10 rounded-lg p-4 transition-colors"
                >
                  <p className="text-3xl lg:text-4xl font-bold">{stats.totalRecords}</p>
                  <p className="text-sm text-blue-100 mt-1">Total Records</p>
                </button>
                <button
                  onClick={() => navigate('/visualization/bar-chart')}
                  className="text-left hover:bg-white/10 rounded-lg p-4 transition-colors"
                >
                  <p className="text-3xl lg:text-4xl font-bold">{stats.reports}</p>
                  <p className="text-sm text-blue-100 mt-1">Reports</p>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Actions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((item) => (
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

        {/* Quick Access */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Access</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/all-screens')}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-4 flex items-center gap-3 hover:from-indigo-700 hover:to-purple-700 text-white"
            >
              <div className="bg-white/20 p-2 rounded-lg">
                <Menu className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="font-medium">All Screens Navigator</p>
                <p className="text-sm text-indigo-100">Browse all 40+ screens</p>
              </div>
            </button>

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
            
            <button
              onClick={() => navigate('/guidance/antibiotic-concerns')}
              className="w-full bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-center gap-3 hover:bg-orange-100"
            >
              <div className="bg-orange-100 p-2 rounded-lg">
                <AlertCircle className="w-5 h-5 text-orange-600" />
              </div>
              <div className="text-left">
                <p className="font-medium">Antibiotic Concerns & Help</p>
                <p className="text-sm text-orange-700">Allergies, side effects, alternatives</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}