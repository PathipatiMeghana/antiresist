import { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Sidebar } from '@/app/components/Sidebar';

interface WebsiteLayoutProps {
  children: ReactNode;
  title: string;
  showBack?: boolean;
  hideHeader?: boolean;
}

export function WebsiteLayout({ children, title, showBack = true, hideHeader = false }: WebsiteLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar - always visible on desktop, responsive on mobile */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {!hideHeader && (
          <header className="bg-white border-b border-gray-200 px-6 lg:px-8 py-4 flex-shrink-0 sticky top-0 z-30 shadow-sm">
            <div className="flex items-center gap-4">
              {showBack && (
                <button
                  onClick={() => navigate(-1)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Go back"
                >
                  <ArrowLeft className="w-5 h-5 text-gray-700" />
                </button>
              )}
              <h1 className="text-xl lg:text-2xl font-semibold text-gray-900 flex-1">{title}</h1>
            </div>
          </header>
        )}
        
        {/* Scrollable content area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 lg:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
