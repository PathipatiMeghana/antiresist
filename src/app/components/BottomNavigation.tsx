import { useNavigate, useLocation } from 'react-router';
import { Home, FlaskConical, FileText, User } from 'lucide-react';

/**
 * Bottom navigation bar - hidden by default for website design
 * Can be optionally shown on very small mobile screens if needed
 */
export function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
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
      activePattern: /^\/tests/
    },
    {
      label: 'Records',
      icon: FileText,
      path: '/records',
      activePattern: /^\/records/
    },
    {
      label: 'Profile',
      icon: User,
      path: '/profile',
      activePattern: /^\/(profile|user)/
    }
  ];

  const isActive = (pattern: RegExp) => {
    return pattern.test(location.pathname);
  };

  // Bottom navigation is hidden - website uses sidebar navigation only
  return null;

  /* Uncomment if you want bottom nav on very small screens
  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const active = isActive(item.activePattern);
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                active ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              <item.icon className={`w-6 h-6 mb-1 ${active ? 'stroke-[2.5]' : 'stroke-2'}`} />
              <span className={`text-xs ${active ? 'font-semibold' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
  */
}