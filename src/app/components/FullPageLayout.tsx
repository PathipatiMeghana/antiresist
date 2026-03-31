import { ReactNode } from 'react';

interface FullPageLayoutProps {
  children: ReactNode;
}

/**
 * Full-page layout for authentication and standalone pages
 * Optimized for both desktop and mobile experiences
 */
export function FullPageLayout({ children }: FullPageLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center p-4 lg:p-8">
      {children}
    </div>
  );
}