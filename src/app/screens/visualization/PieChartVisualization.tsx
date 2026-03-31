import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function PieChartVisualization() {
  const navigate = useNavigate();
  
  const data = [
    { name: 'Sensitive', value: 40 },
    { name: 'Intermediate', value: 20 },
    { name: 'Resistant', value: 40 }
  ];
  
  const COLORS = ['#10b981', '#f59e0b', '#ef4444'];
  
  return (
    <MobileLayout title="Pie Chart - Distribution">
      <div className="space-y-6 mt-6">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <h3 className="font-semibold mb-4">Sensitivity Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-green-100 text-green-700 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">40%</p>
            <p className="text-xs">Sensitive</p>
          </div>
          <div className="bg-yellow-100 text-yellow-700 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">20%</p>
            <p className="text-xs">Intermediate</p>
          </div>
          <div className="bg-red-100 text-red-700 rounded-xl p-3 text-center">
            <p className="text-2xl font-bold">40%</p>
            <p className="text-xs">Resistant</p>
          </div>
        </div>
        
        <Button onClick={() => navigate('/visualization/bar-chart')} className="w-full bg-blue-600 py-6 rounded-xl">
          View Other Charts
        </Button>
      </div>
    </MobileLayout>
  );
}
