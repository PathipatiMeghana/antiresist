import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Mail } from 'lucide-react';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => navigate('/verify-otp', { state: { email } }), 2000);
  };

  return (
    <MobileLayout title="Forgot Password" showBack={true}>
      <div className="mt-8">
        {!sent ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-gray-600 text-center">
              Enter your email address and we'll send you a 6-digit OTP to reset your password.
            </p>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="doctor@hospital.com"
                  className="pl-10 py-6 rounded-xl"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-xl text-lg"
            >
              Send OTP
            </Button>
          </form>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">OTP Sent!</h3>
            <p className="text-gray-600 mb-6">
              A 6-digit OTP has been sent to your email. Please check your inbox.
            </p>
          </div>
        )}
      </div>
    </MobileLayout>
  );
}