import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { User, Microscope, Pill, Edit } from 'lucide-react';

export default function DataReview() {
  const navigate = useNavigate();
  
  const reviewData = [
    { label: 'Patient', value: 'John Doe (P-2024-001)', icon: User },
    { label: 'Bacteria', value: 'Escherichia coli (Gram Negative)', icon: Microscope },
    { label: 'Antibiotics Tested', value: '8 antibiotics', icon: Pill }
  ];
  
  return (
    <MobileLayout title="Review Data">
      <div className="space-y-4 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-800">
            Review all entered data before processing
          </p>
        </div>
        
        {reviewData.map((item, i) => (
          <Card key={i} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">{item.label}</p>
                  <p className="font-semibold">{item.value}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <Edit className="w-5 h-5 text-gray-400" />
              </Button>
            </div>
          </Card>
        ))}
        
        <div className="flex gap-3 mt-8">
          <Button 
            onClick={() => navigate('/patient/basic-details')} 
            variant="outline"
            className="flex-1 py-6 rounded-xl"
          >
            Edit
          </Button>
          <Button 
            onClick={() => navigate('/analysis/processing')} 
            className="flex-1 bg-blue-600 py-6 rounded-xl"
          >
            Confirm & Analyze
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
