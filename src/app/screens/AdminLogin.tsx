import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Mail, Lock, Shield, UserCog, Eye, EyeOff } from 'lucide-react';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value && value.length < 8) {
      setPasswordError('Password must contain at least 8 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate password length
    if (password.length < 8) {
      setPasswordError('Password must contain at least 8 characters');
      return;
    }
    
    // Mock admin login - would validate admin credentials
    navigate('/home');
  };

  return (
    <MobileLayout title="Admin Login" showBack={true}>
      <div className="flex flex-col items-center mt-8 mb-6">
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-4 rounded-2xl mb-4">
          <Shield className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">AntiResist Analyzer</h2>
        <p className="text-sm text-purple-600 font-semibold mt-1">Administrator Access</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6 mt-8">
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <UserCog className="w-5 h-5 text-purple-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-purple-900">Administrator Login</p>
              <p className="text-xs text-purple-700 mt-1">
                This area is restricted to authorized personnel only
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="admin-email">Admin Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@hospital.com"
              className="pl-10 py-6 rounded-xl"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="admin-password">Admin Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
            <Input
              id="admin-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter admin password"
              className="pl-10 pr-12 py-6 rounded-xl"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {passwordError && (
            <p className="text-red-600 text-sm">{passwordError}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="access-code">Security Access Code</Label>
          <div className="relative">
            <Shield className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="access-code"
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              placeholder="6-digit code"
              className="pl-10 py-6 rounded-xl tracking-widest"
              maxLength={6}
              required
            />
          </div>
          <p className="text-xs text-gray-500">
            Enter the 6-digit security code from your authenticator app
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => navigate('/forgot-password')}
            className="text-sm text-purple-600 hover:underline font-medium"
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-6 rounded-xl text-lg"
        >
          <Shield className="w-5 h-5 mr-2" />
          Admin Login
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">Or</span>
          </div>
        </div>

        <Button
          type="button"
          onClick={() => navigate('/login')}
          variant="outline"
          className="w-full py-6 rounded-xl border-2"
        >
          Regular User Login
        </Button>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
          <p className="text-xs text-amber-800">
            <strong>Note:</strong> Administrator access provides additional capabilities including:
            user management, system configuration, database management, and audit logs.
          </p>
        </div>
      </form>
    </MobileLayout>
  );
}