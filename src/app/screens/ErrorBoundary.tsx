import { useRouteError, useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

export default function ErrorBoundary() {
  const error = useRouteError() as Error;
  const navigate = useNavigate();

  return (
    <MobileLayout title="Error">
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="bg-red-100 rounded-full p-6">
              <AlertTriangle className="w-16 h-16 text-red-600" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800">Oops! Something went wrong</h2>
          <p className="text-gray-600 max-w-md">
            We encountered an unexpected error. Please try refreshing the page or going back to home.
          </p>
          
          {error?.message && (
            <div className="bg-gray-100 rounded-lg p-4 max-w-md">
              <p className="text-xs text-gray-600 font-mono break-all">
                {error.message}
              </p>
            </div>
          )}
          
          <div className="flex flex-col gap-3 pt-4">
            <Button 
              onClick={() => window.location.reload()}
              className="bg-blue-600 py-6 rounded-xl flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Refresh Page
            </Button>
            <Button 
              onClick={() => navigate('/home')}
              variant="outline"
              className="py-6 rounded-xl flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go to Home
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
