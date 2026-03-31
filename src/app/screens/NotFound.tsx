import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <MobileLayout title="Page Not Found">
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
        <div className="text-center space-y-6">
          <div className="text-8xl font-bold text-blue-600">404</div>
          <h2 className="text-2xl font-bold text-gray-800">Page Not Found</h2>
          <p className="text-gray-600 max-w-md">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col gap-3 pt-4">
            <Button 
              onClick={() => navigate('/home')}
              className="bg-blue-600 py-6 rounded-xl flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go to Home
            </Button>
            <Button 
              onClick={() => navigate(-1)}
              variant="outline"
              className="py-6 rounded-xl flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
