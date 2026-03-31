import { Outlet } from 'react-router';
import { UserProvider } from '@/app/context/UserContext';
import { AntibioticProvider } from '@/app/context/AntibioticContext';

export default function RootLayout() {
  return (
    <UserProvider>
      <AntibioticProvider>
        <div className="min-h-screen bg-gray-50">
          <Outlet />
        </div>
      </AntibioticProvider>
    </UserProvider>
  );
}