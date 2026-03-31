import { useNavigate, useLocation } from 'react-router';
import { 
  Home, 
  FlaskConical, 
  FileText, 
  User, 
  BarChart3, 
  Users, 
  Microscope, 
  Settings, 
  HelpCircle,
  LogOut,
  Menu,
  X,
  Activity,
  FileBarChart,
  Shield,
  AlertCircle
} from 'lucide-react';
import { useUser } from '@/app/context/UserContext';
import { useState } from 'react';

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userRole, userName } = useUser();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getRoleDisplay = () => {
    switch (userRole) {
      case 'doctor':
        return { name: 'Doctor', color: 'blue', icon: Activity };
      case 'lab-technician':
        return { name: 'Lab Technician', color: 'green', icon: Microscope };
      case 'administrator':
        return { name: 'Administrator', color: 'purple', icon: Shield };
      default:
        return { name: 'User', color: 'gray', icon: User };
    }
  };

  const roleInfo = getRoleDisplay();

  // Main navigation items
  const mainNavItems = [
    {
      label: 'Home',
      icon: Home,
      path: '/home',
      activePattern: /^\/home$/
    },
    {
      label: 'Tests',
      icon: FlaskConical,
      path: '/tests',
      activePattern: /^\/(tests|sample|bacteria|antibiotic|evidence)/
    },
    {
      label: 'Records',
      icon: FileText,
      path: '/records',
      activePattern: /^\/records$/
    },
    {
      label: 'Results & Analysis',
      icon: BarChart3,
      path: '/visualization/bar-chart',
      activePattern: /^\/(results|visualization|analysis)/
    },
    {
      label: 'Reports',
      icon: FileBarChart,
      path: '/reports/history',
      activePattern: /^\/reports/
    },
    {
      label: 'Guidance',
      icon: AlertCircle,
      path: '/guidance/antibiotic-concerns',
      activePattern: /^\/guidance/
    }
  ];

  // Bottom navigation items
  const bottomNavItems = [
    {
      label: 'Profile',
      icon: User,
      path: '/profile',
      activePattern: /^\/(profile|user)/
    },
    {
      label: 'Settings',
      icon: Settings,
      path: '/settings/privacy',
      activePattern: /^\/settings/
    },
    {
      label: 'Help',
      icon: HelpCircle,
      path: '/support/help-center',
      activePattern: /^\/support/
    },
    {
      label: 'Logout',
      icon: LogOut,
      path: '/logout',
      activePattern: /^\/logout$/
    }
  ];

  const isActive = (pattern: RegExp) => {
    return pattern.test(location.pathname);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-gray-200 transition-all duration-300 ${
          isCollapsed ? 'w-20' : 'w-72'
        } ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-900">ARP Analysis</h1>
                <p className="text-xs text-gray-500">Medical Platform</p>
              </div>
            </div>
          )}
          {/* Close button for mobile, collapse button for desktop */}
          <button
            onClick={() => {
              if (window.innerWidth < 1024) {
                setIsMobileMenuOpen(false);
              } else {
                setIsCollapsed(!isCollapsed);
              }
            }}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Toggle sidebar'}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : isCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>

        {/* User Info */}
        {!isCollapsed && (
          <div className="p-4 border-b border-gray-200">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 bg-${roleInfo.color}-600 rounded-full flex items-center justify-center`}>
                  <roleInfo.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-900 truncate">{userName || 'User'}</p>
                  <p className="text-xs text-gray-600">{roleInfo.name}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  navigate('/role-selection');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-xs bg-white hover:bg-gray-50 text-gray-700 py-2 px-3 rounded-lg transition-colors"
              >
                Switch Role
              </button>
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {mainNavItems.map((item) => {
            const active = isActive(item.activePattern);
            return (
              <button
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  active
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-gray-700 hover:bg-gray-100'
                } ${isCollapsed ? 'justify-center' : ''}`}
                title={isCollapsed ? item.label : ''}
              >
                <item.icon className={`w-5 h-5 flex-shrink-0 ${active ? 'stroke-[2.5]' : ''}`} />
                {!isCollapsed && (
                  <span className={`font-medium ${active ? 'font-semibold' : ''}`}>
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Navigation */}
        <div className="p-4 border-t border-gray-200 space-y-1">
          {bottomNavItems.map((item) => {
            const active = isActive(item.activePattern);
            return (
              <button
                key={item.label}
                onClick={() => {
                  navigate(item.path);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  active
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50'
                } ${isCollapsed ? 'justify-center' : ''}`}
                title={isCollapsed ? item.label : ''}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {!isCollapsed && <span className="font-medium">{item.label}</span>}
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
}