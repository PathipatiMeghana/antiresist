import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { AlertTriangle, Shield, TrendingUp } from 'lucide-react';

export default function HighResistanceAlert() {
  const navigate = useNavigate();
  
  return (
    <MobileLayout title="High Resistance Alert">
      <div className="space-y-6 mt-6">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
          <h3 className="font-semibold text-xl mb-2 text-red-900">High Resistance Detected</h3>
          <p className="text-gray-700">
            This bacteria shows resistance to multiple antibiotics
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-red-100 p-2 rounded-lg">
              <Shield className="w-5 h-5 text-red-600" />
            </div>
            <h4 className="font-semibold">Resistance Profile</h4>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Resistant to 6 out of 8 tested antibiotics</li>
            <li>• Possible multidrug-resistant organism (MDRO)</li>
            <li>• Consider alternative treatment options</li>
            <li>• Consult infectious disease specialist</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-900 mb-1">Next Steps</p>
              <p className="text-sm text-blue-800">
                Review resistance trends and consider sending sample for advanced testing
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Button onClick={() => navigate('/visualization/trend-graph')} variant="outline" className="py-6 rounded-xl">
            View Trends
          </Button>
          <Button onClick={() => navigate('/reports/generate')} className="py-6 rounded-xl bg-blue-600">
            Generate Report
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
