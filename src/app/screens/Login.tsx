import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FullPageLayout } from '@/app/components/FullPageLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { ShieldCheck, Eye, EyeOff, Loader2 } from 'lucide-react';
import { api } from '../api';
import { useUser } from '../context/UserContext';

export default function Login() {
  const navigate = useNavigate();
  const { setUserRole, setUserName } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value && value.length < 8) {
      setPasswordError('Password must contain at least 8 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    // Validate password length
    if (password.length < 8) {
      setPasswordError('Password must contain at least 8 characters');
      return;
    }
    
    setIsLoading(true);
    try {
      // Integration with backend API
      const response = await api.login({ username, password });
      console.log('Login successful:', response);
      
      // Store token if provided
      if (response.token || response.access) {
        localStorage.setItem('authToken', response.token || response.access);
      }
      
      // Update UserContext
      setUserName(response.user?.username || username);
      setUserRole(response.user?.role || 'doctor'); 
      
      // Navigate to dashboard
      navigate('/role-selection');
    } catch (error: any) {
      console.error('Login failed:', error);
      setErrorMessage(error.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FullPageLayout>
      <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 w-full max-w-md">
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center mb-8">
          {/* Logo - Blue circle with white shield */}
          <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg">
            <ShieldCheck className="w-12 h-12 text-white" strokeWidth={2.5} />
          </div>
          
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1 text-center">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 text-center">
            Sign in to access your medical platform
          </p>
          
          {errorMessage && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm text-center">
              {errorMessage}
            </div>
          )}
        </div>

        {/* Form Section */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username" className="text-sm font-medium text-gray-700">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="py-6 rounded-lg border-gray-300"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                className="py-6 rounded-lg border-gray-300 pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {passwordError && (
              <p className="text-red-600 text-sm mt-1">{passwordError}</p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate('/forgot-password')}
              className="text-sm text-blue-600 hover:underline font-medium"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-lg text-lg font-medium"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </Button>

          {/* Sign up link */}
          <div className="pt-4">
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="text-blue-600 font-semibold hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </form>
      </div>
    </FullPageLayout>
  );
}