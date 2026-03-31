import { useNavigate } from 'react-router';
import { Activity, FlaskConical, BarChart3, Clock, UserCog, Microscope, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header/Navigation */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-gray-900">ARP Analysis</h1>
              <p className="text-xs text-gray-500">Medical Platform</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => navigate('/login')}
              variant="outline"
              className="hidden sm:inline-flex"
            >
              Sign In
            </Button>
            <Button
              onClick={() => navigate('/register')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Medical Platform for Healthcare Professionals
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Antibiotic Resistance Pattern Analysis
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8">
              Comprehensive platform for recording bacterial infections, tracking antibiotic sensitivity, and analyzing resistance patterns to improve patient outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => navigate('/login')}
                className="bg-blue-600 hover:bg-blue-700 text-white py-6 px-8 text-lg"
              >
                Doctor Login
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => navigate('/register')}
                variant="outline"
                className="py-6 px-8 text-lg border-2"
              >
                Create Account
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <FlaskConical className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Record Tests</h3>
              <p className="text-sm text-gray-600">
                Document bacterial infections and antibiotic sensitivity
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow mt-8">
              <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Analyze Patterns</h3>
              <p className="text-sm text-gray-600">
                Track resistance trends and get recommendations
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Microscope className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Lab Testing</h3>
              <p className="text-sm text-gray-600">
                Complete antibiotic sensitivity testing workflows
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow mt-8">
              <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Track History</h3>
              <p className="text-sm text-gray-600">
                View and continue previous test runs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection Section */}
      <section className="bg-white border-t border-gray-200 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Role
            </h2>
            <p className="text-lg text-gray-600">
              Access role-specific features tailored to your workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <button
              onClick={() => navigate('/login')}
              className="bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-300 transition-all text-left group"
            >
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Doctor</h3>
              <p className="text-gray-600 mb-4">
                Patient management, treatment protocols, and clinical insights
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                Access Portal
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <button
              onClick={() => navigate('/lab-tech-login')}
              className="bg-gradient-to-br from-teal-50 to-teal-100 hover:from-teal-100 hover:to-teal-200 p-8 rounded-2xl border-2 border-teal-200 hover:border-teal-300 transition-all text-left group"
            >
              <div className="bg-teal-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Microscope className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lab Technician</h3>
              <p className="text-gray-600 mb-4">
                Sample testing, bacteria identification, and sensitivity analysis
              </p>
              <div className="flex items-center text-teal-600 font-medium">
                Access Portal
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <button
              onClick={() => navigate('/admin-login')}
              className="bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-300 transition-all text-left group"
            >
              <div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <UserCog className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Administrator</h3>
              <p className="text-gray-600 mb-4">
                System analytics, reporting, and comprehensive data management
              </p>
              <div className="flex items-center text-purple-600 font-medium">
                Access Portal
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2026 ARP Analysis. Medical Platform for Healthcare Professionals.</p>
        </div>
      </footer>
    </div>
  );
}