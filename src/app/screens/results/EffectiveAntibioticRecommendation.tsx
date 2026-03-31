import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { CheckCircle2, Star, Pill } from 'lucide-react';

export default function EffectiveAntibioticRecommendation() {
  const navigate = useNavigate();
  
  const recommendations = [
    { name: 'Ciprofloxacin', score: 98, category: 'First Choice', desc: 'Highly effective' },
    { name: 'Gentamicin', score: 95, category: 'First Choice', desc: 'Excellent sensitivity' },
    { name: 'Levofloxacin', score: 92, category: 'Alternative', desc: 'Good option' }
  ];
  
  return (
    <MobileLayout title="Recommendations">
      <div className="space-y-6 mt-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3">
          <CheckCircle2 className="w-6 h-6 text-green-600" />
          <div>
            <p className="font-semibold text-green-800">3 Effective Options Found</p>
            <p className="text-sm text-green-700">Based on sensitivity analysis</p>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Recommended Antibiotics</h4>
          <div className="space-y-3">
            {recommendations.map((rec, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Pill className="w-5 h-5 text-blue-600" />
                    <p className="font-semibold">{rec.name}</p>
                  </div>
                  {i === 0 && <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                      {rec.category}
                    </span>
                    <p className="text-sm text-gray-600 mt-1">{rec.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">{rec.score}%</p>
                    <p className="text-xs text-gray-500">Effectiveness</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <Button onClick={() => navigate('/reports/generate')} className="w-full bg-blue-600 py-6 rounded-xl">
          Generate Report
        </Button>
        
        <Button 
          onClick={() => navigate('/home')} 
          variant="outline" 
          className="w-full py-6 rounded-xl border-2 border-gray-300 hover:bg-gray-50"
        >
          Complete & Return to Home
        </Button>
      </div>
    </MobileLayout>
  );
}