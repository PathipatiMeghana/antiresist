import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';

export default function HeatMapVisualization() {
  const navigate = useNavigate();
  
  const bacteria = ['E. coli', 'S. aureus', 'K. pneumoniae', 'P. aeruginosa'];
  const antibiotics = ['Amoxicillin', 'Ciprofloxacin', 'Ceftriaxone', 'Gentamicin'];
  
  // Mock resistance data: 0 = sensitive (green), 1 = intermediate (yellow), 2 = resistant (red)
  const heatmapData = [
    [0, 1, 0, 0],
    [2, 0, 1, 0],
    [2, 2, 1, 0],
    [1, 0, 0, 0]
  ];
  
  const getColor = (value: number) => {
    if (value === 0) return 'bg-green-500';
    if (value === 1) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <MobileLayout title="Heat Map">
      <div className="space-y-6 mt-6">
        <div className="bg-white rounded-xl border border-gray-200 p-4 overflow-x-auto">
          <h3 className="font-semibold mb-4">Bacteria vs Antibiotic Matrix</h3>
          <div className="min-w-max">
            <div className="flex gap-2 mb-2 ml-32">
              {antibiotics.map((ab, i) => (
                <div key={i} className="w-16 text-xs text-center font-medium transform -rotate-45 origin-left">
                  {ab.substring(0, 8)}
                </div>
              ))}
            </div>
            {bacteria.map((bacterium, i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <div className="w-28 text-xs font-medium text-right">{bacterium}</div>
                {heatmapData[i].map((value, j) => (
                  <div 
                    key={j} 
                    className={`w-16 h-12 ${getColor(value)} rounded-lg flex items-center justify-center text-white text-xs font-semibold`}
                  >
                    {value === 0 ? 'S' : value === 1 ? 'I' : 'R'}
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          <div className="flex gap-4 mt-4 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span>Sensitive</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <span>Intermediate</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span>Resistant</span>
            </div>
          </div>
        </div>
        
        <Button onClick={() => navigate(-1)} className="w-full bg-blue-600 py-6 rounded-xl">
          Back to Previous
        </Button>
      </div>
    </MobileLayout>
  );
}