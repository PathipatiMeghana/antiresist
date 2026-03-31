import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function TrendGraphVisualization() {
  const navigate = useNavigate();
  
  const data = [
    { month: 'Jan', resistance: 35 },
    { month: 'Feb', resistance: 38 },
    { month: 'Mar', resistance: 42 },
    { month: 'Apr', resistance: 45 },
    { month: 'May', resistance: 48 },
    { month: 'Jun', resistance: 52 }
  ];
  
  return (
    <MobileLayout title="Trend Graph">
      <div className="space-y-6 mt-6">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <h3 className="font-semibold mb-4">Resistance Trend Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="resistance" 
                stroke="#ef4444" 
                strokeWidth={3}
                name="Resistance Rate (%)"
                dot={{ fill: '#ef4444', r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-xl p-4">
          <p className="text-sm text-red-800 font-medium mb-1">⚠️ Rising Trend Detected</p>
          <p className="text-sm text-red-700">
            Resistance rates have increased by 17% over the last 6 months
          </p>
        </div>
        
        <Button onClick={() => navigate('/reports/history')} className="w-full bg-blue-600 py-6 rounded-xl">
          View Historical Data
        </Button>
      </div>
    </MobileLayout>
  );
}
