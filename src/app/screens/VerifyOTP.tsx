import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Shield, CheckCircle2 } from 'lucide-react';

export default function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || 'your email';
  
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [verified, setVerified] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newOtp = [...otp];
    
    for (let i = 0; i < pastedData.length; i++) {
      if (/^\d$/.test(pastedData[i])) {
        newOtp[i] = pastedData[i];
      }
    }
    
    setOtp(newOtp);
    const lastFilledIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastFilledIndex]?.focus();
  };

  const handleVerify = () => {
    const otpValue = otp.join('');
    if (otpValue.length === 6) {
      setVerified(true);
      setTimeout(() => navigate('/new-password', { state: { email } }), 2000);
    }
  };

  const handleResend = () => {
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
    // Here you would trigger the API to resend OTP
  };

  const isComplete = otp.every(digit => digit !== '');

  if (verified) {
    return (
      <MobileLayout title="Verify OTP" showBack={false}>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">OTP Verified Successfully!</h2>
            <p className="text-gray-600">
              Redirecting to create new password...
            </p>
          </div>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout title="Verify OTP" showBack={true}>
      <div className="mt-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Enter Verification Code</h2>
          <p className="text-gray-600 text-sm">
            We've sent a 6-digit OTP to<br />
            <span className="font-semibold text-gray-800">{email}</span>
          </p>
        </div>

        <div className="space-y-8">
          {/* OTP Input Fields */}
          <div>
            <div className="flex gap-2 justify-center mb-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-14 text-center text-2xl font-semibold border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                />
              ))}
            </div>
          </div>

          {/* Verify Button */}
          <Button
            onClick={handleVerify}
            disabled={!isComplete}
            className="w-full bg-blue-600 hover:bg-blue-700 py-6 rounded-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Verify OTP
          </Button>

          {/* Resend OTP */}
          <div className="text-center">
            <p className="text-gray-600 text-sm mb-3">Didn't receive the code?</p>
            <Button
              onClick={handleResend}
              variant="link"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              Resend OTP
            </Button>
          </div>

          {/* Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-6">
            <p className="text-sm text-blue-800 text-center">
              🔒 Your OTP is valid for 10 minutes
            </p>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
