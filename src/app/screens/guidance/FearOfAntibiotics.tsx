import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Heart, Droplet, Apple, Sun, Shield, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function FearOfAntibiotics() {
  const navigate = useNavigate();
  
  const supportiveCare = [
    {
      icon: Droplet,
      title: 'Hydration Therapy',
      desc: 'Drink 8-10 glasses of water daily',
      details: 'Helps flush out toxins and bacteria naturally. Add electrolytes if needed.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Apple,
      title: 'Immune-Boosting Foods',
      desc: 'Vitamin C, Zinc, and Probiotics',
      details: 'Citrus fruits, yogurt, garlic, ginger, honey. Support natural defenses.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Sun,
      title: 'Rest & Recovery',
      desc: '8-10 hours of sleep daily',
      details: 'Body fights infection better when well-rested. Avoid stress and exertion.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Shield,
      title: 'Antiseptic Care',
      desc: 'External wound cleaning',
      details: 'Use antiseptic solutions, keep wounds clean and covered. Regular dressing changes.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];
  
  const naturalOptions = [
    { name: 'Honey (Medical grade)', benefit: 'Antimicrobial properties for wound healing' },
    { name: 'Turmeric', benefit: 'Anti-inflammatory, boosts immunity' },
    { name: 'Garlic extract', benefit: 'Natural antimicrobial properties' },
    { name: 'Ginger tea', benefit: 'Anti-inflammatory, aids digestion' },
    { name: 'Probiotics', benefit: 'Supports gut health and immunity' },
    { name: 'Vitamin D supplements', benefit: 'Strengthens immune system' },
    { name: 'Warm salt water gargle', benefit: 'For throat infections' },
    { name: 'Steam inhalation', benefit: 'For respiratory infections' }
  ];
  
  const whenAntibioticsNeeded = [
    'Severe bacterial infections (pneumonia, sepsis)',
    'Life-threatening conditions',
    'Infections spreading rapidly',
    'Immunocompromised patients',
    'Post-surgical infection prevention',
    'Chronic or recurring infections'
  ];
  
  return (
    <MobileLayout title="Fear of Antibiotics">
      <div className="space-y-6 mt-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Heart className="w-6 h-6 text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-2">Your Concerns Are Valid</h3>
              <p className="text-sm text-green-700">
                Not all infections require antibiotics. Many mild infections can be managed with supportive care.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Supportive Care Options</h4>
          <div className="space-y-3">
            {supportiveCare.map((care, i) => (
              <Card key={i} className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-xl ${care.color} flex items-center justify-center flex-shrink-0`}>
                    <care.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{care.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{care.desc}</p>
                    <p className="text-xs text-gray-500 mt-2 italic">{care.details}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-3">Natural Remedies & Supplements</h4>
          <Card className="p-4">
            <p className="text-xs text-gray-500 mb-3 italic">
              ⚠️ Consult doctor before using. Not replacements for antibiotics in serious infections.
            </p>
            <div className="space-y-3">
              {naturalOptions.map((option, i) => (
                <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm text-gray-800">{option.name}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{option.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-orange-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-orange-900 mb-2">When Antibiotics Are Necessary</p>
              <div className="space-y-1">
                {whenAntibioticsNeeded.map((condition, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-1.5 flex-shrink-0" />
                    <p className="text-sm text-orange-800">{condition}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-orange-700 mt-3 font-medium">
                Delaying antibiotics in serious cases can be life-threatening. Trust your doctor's judgment.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-900 font-semibold mb-2">
            💡 Did You Know?
          </p>
          <p className="text-sm text-blue-700">
            This app helps identify the SAFEST and MOST EFFECTIVE antibiotic for your specific infection, minimizing side effects and maximizing success.
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button 
            onClick={() => navigate('/guidance/skin-allergy-alternatives')}
            className="flex-1 bg-blue-600 py-6 rounded-xl"
          >
            Skin Allergy Options
          </Button>
          <Button 
            onClick={() => navigate('/guidance/antibiotic-concerns')}
            variant="outline"
            className="flex-1 py-6 rounded-xl"
          >
            Back
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
}
