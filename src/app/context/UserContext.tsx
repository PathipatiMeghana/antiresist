import { createContext, useContext, useState, useEffect, useCallback, useMemo, ReactNode } from 'react';

export type UserRole = 'doctor' | 'lab-technician' | 'administrator' | null;

interface UserContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  userName: string;
  setUserName: (name: string) => void;
  clearUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userRole, setUserRoleState] = useState<UserRole>(null);
  const [userName, setUserNameState] = useState<string>('');

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const storedRole = localStorage.getItem('userRole');
      const storedName = localStorage.getItem('userName');
      if (storedRole) setUserRoleState(storedRole as UserRole);
      if (storedName) setUserNameState(storedName);
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    try {
      if (userRole) {
        localStorage.setItem('userRole', userRole);
      } else {
        localStorage.removeItem('userRole');
      }
    } catch (error) {
      console.error('Error saving user role:', error);
    }
  }, [userRole]);

  useEffect(() => {
    try {
      if (userName) {
        localStorage.setItem('userName', userName);
      } else {
        localStorage.removeItem('userName');
      }
    } catch (error) {
      console.error('Error saving user name:', error);
    }
  }, [userName]);

  const setUserRole = useCallback((role: UserRole) => {
    setUserRoleState(role);
  }, []);

  const setUserName = useCallback((name: string) => {
    setUserNameState(name);
  }, []);

  const clearUser = useCallback(() => {
    setUserRoleState(null);
    setUserNameState('');
  }, []);

  const value = useMemo(() => ({
    userRole,
    setUserRole,
    userName,
    setUserName,
    clearUser,
  }), [userRole, userName, setUserRole, setUserName, clearUser]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}