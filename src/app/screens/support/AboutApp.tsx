import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Card } from '@/app/components/ui/card';
import { 
  Info, 
  Heart, 
  Code, 
  Shield, 
  Award,
  ExternalLink,
  FileText,
  Users
} from 'lucide-react';

export default function AboutApp() {
  const navigate = useNavigate();

  const appInfo = [
    { label: 'Version', value: '1.0.0' },
    { label: 'Build', value: '2024.02.001' },
    { label: 'Release Date', value: 'February 2024' },
    { label: 'Platform', value: 'Web Application' }
  ];

  const features = [
    'Comprehensive antibiotic resistance analysis',
    'Patient data management',
    'Real-time test results',
    'Detailed treatment protocols',
    'Role-based access control',
    'Secure data encryption',
    'Export and reporting tools',
    'Offline functionality'
  ];

  const team = [
    { name: 'Development Team', role: 'Figma Make AI', icon: Code },
    { name: 'Medical Advisors', role: 'Healthcare Professionals', icon: Users },
    { name: 'Security Team', role: 'Data Protection Experts', icon: Shield },
    { name: 'Quality Assurance', role: 'Testing & Compliance', icon: Award }
  ];

  return (
    <MobileLayout title="About App" showBack>
      <div className="space-y-4 mt-6">
        {/* App Logo & Info */}
        <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <div className="text-white text-2xl font-bold">AR</div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">AntiResist Analyzer</h2>
          <p className="text-gray-600 mb-3">Antibiotic Resistance Pattern Analysis</p>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <Info className="w-4 h-4" />
            Version 1.0.0
          </div>
        </Card>

        {/* App Details */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3">App Information</h3>
          <div className="space-y-2">
            {appInfo.map((info, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-600">{info.label}</span>
                <span className="text-sm font-medium text-gray-800">{info.value}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Mission Statement */}
        <Card className="p-4">
          <div className="flex items-start gap-3 mb-3">
            <div className="bg-red-100 p-2 rounded-lg">
              <Heart className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Our Mission</h3>
              <p className="text-sm text-gray-600">
                To empower healthcare professionals with accurate, efficient, and secure tools for antibiotic resistance pattern analysis, improving patient outcomes and combating antimicrobial resistance globally.
              </p>
            </div>
          </div>
        </Card>

        {/* Key Features */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Key Features</h3>
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Team */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Our Team</h3>
          <div className="space-y-3">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Legal & Links */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Legal & Support</h3>
          <div className="space-y-2">
            <button
              onClick={() => {}}
              className="w-full py-3 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg px-2"
            >
              <span className="text-sm text-gray-700">Terms of Service</span>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => {}}
              className="w-full py-3 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg px-2"
            >
              <span className="text-sm text-gray-700">Privacy Policy</span>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => {}}
              className="w-full py-3 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg px-2"
            >
              <span className="text-sm text-gray-700">Open Source Licenses</span>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </button>
            <button
              onClick={() => navigate('/support/contact')}
              className="w-full py-3 flex items-center justify-between hover:bg-gray-50 transition-colors rounded-lg px-2"
            >
              <span className="text-sm text-gray-700">Contact Support</span>
              <ExternalLink className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </Card>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 pb-4">
          <p>© 2024 AntiResist Analyzer. All rights reserved.</p>
          <p className="mt-1">Built with ❤️ for healthcare professionals</p>
        </div>
      </div>
    </MobileLayout>
  );
}
