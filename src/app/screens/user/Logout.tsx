import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { LogOut, CheckCircle } from 'lucide-react';
import { useUser } from '@/app/context/UserContext';

export default function Logout() {
  const navigate = useNavigate();
  const { clearUser } = useUser();
  
  useEffect(() => {
    // Clear user role and data
    clearUser();
    
    // Simulate logout process
    const timer = setTimeout(() => {
      // Navigate to login page
      navigate('/simple-login');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [navigate, clearUser]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-md mx-auto text-center">
        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6">
          {/* Logout Icon Animation */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                <LogOut className="w-12 h-12 text-blue-600" />
              </div>
              <div className="absolute -top-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Logging Out...
            </h2>
            <p className="text-gray-600">
              Thank you for using the Antibiotic Resistance Pattern Analysis app
            </p>
          </div>
          
          {/* Loading Indicator */}
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-800">
              Your session is being securely terminated
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}