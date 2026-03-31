import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Mail, Lock, FlaskConical, Microscope, Eye, EyeOff } from 'lucide-react';

export default function LabTechLogin() {
  const navigate = useNavigate();
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [labCode, setLabCode] = useState('');
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
    
    // Mock lab tech login
    navigate('/home');
  };

  return (
    <MobileLayout title="Lab Technician Login" showBack={true}>
      <div className="flex flex-col items-center mt-8 mb-6">
        <div className="bg-gradient-to-br from-teal-600 to-blue-600 p-4 rounded-2xl mb-4">
          <FlaskConical className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">AntiResist Analyzer</h2>
        <p className="text-sm text-teal-600 font-semibold mt-1">Lab Technician Portal</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6 mt-8">
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Microscope className="w-5 h-5 text-teal-600 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-teal-900">Lab Technician Portal</p>
              <p className="text-xs text-teal-700 mt-1">
                Access for sample testing and analysis entry
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="employee-id">Employee ID</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="employee-id"
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="LAB-12345"
              className="pl-10 py-6 rounded-xl uppercase"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="lab-password">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
            <Input
              id="lab-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
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
          <Label htmlFor="lab-code">Laboratory Code</Label>
          <div className="relative">
            <FlaskConical className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              id="lab-code"
              type="text"
              value={labCode}
              onChange={(e) => setLabCode(e.target.value)}
              placeholder="Lab facility code"
              className="pl-10 py-6 rounded-xl uppercase"
              required
            />
          </div>
          <p className="text-xs text-gray-500">
            Enter your assigned laboratory facility code
          </p>
        </div>

        <div className="flex justify-between items-center">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
            <span className="text-sm text-gray-700">Remember me</span>
          </label>
          <button
            type="button"
            onClick={() => navigate('/forgot-password')}
            className="text-sm text-teal-600 hover:underline font-medium"
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 py-6 rounded-xl text-lg"
        >
          <FlaskConical className="w-5 h-5 mr-2" />
          Lab Tech Login
        </Button>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500">Other Login Options</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            onClick={() => navigate('/login')}
            variant="outline"
            className="py-6 rounded-xl border-2"
          >
            Doctor Login
          </Button>
          <Button
            type="button"
            onClick={() => navigate('/admin-login')}
            variant="outline"
            className="py-6 rounded-xl border-2"
          >
            Admin Login
          </Button>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
          <p className="text-xs text-blue-800">
            <strong>Lab Technician Access:</strong> Run tests, enter results, upload evidence,
            and manage sample processing workflows.
          </p>
        </div>
      </form>
    </MobileLayout>
  );
}