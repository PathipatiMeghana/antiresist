import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Card } from '@/app/components/ui/card';
import { 
  HelpCircle, 
  Search, 
  Book, 
  Video, 
  FileText, 
  MessageCircle,
  ChevronRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function HelpCenter() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const quickLinks = [
    { title: 'Getting Started Guide', icon: Book, path: '#', color: 'blue' },
    { title: 'Video Tutorials', icon: Video, path: '#', color: 'purple' },
    { title: 'User Manual', icon: FileText, path: '#', color: 'green' },
    { title: 'Contact Support', icon: MessageCircle, path: '/support/contact', color: 'orange' }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I add a new patient record?',
      answer: 'Navigate to the Tests section and tap "New Test". Enter patient information and follow the step-by-step workflow to complete the antibiotic resistance analysis.'
    },
    {
      id: 2,
      question: 'What antibiotic databases are supported?',
      answer: 'The app includes a comprehensive database of common antibiotics including Penicillins, Cephalosporins, Fluoroquinolones, Macrolides, and many more. You can also add custom antibiotics in Settings.'
    },
    {
      id: 3,
      question: 'How do I interpret resistance patterns?',
      answer: 'Resistance patterns are color-coded: Green (Sensitive), Yellow (Intermediate), Red (Resistant). Detailed reports provide treatment recommendations based on the sensitivity results.'
    },
    {
      id: 4,
      question: 'Can I export test results?',
      answer: 'Yes! Go to the Records section, select a test, and tap the export button. You can export as PDF, Excel, or share directly via email.'
    },
    {
      id: 5,
      question: 'How do I switch between user roles?',
      answer: 'Go to Profile > Switch Role. You can choose between Doctor, Lab Technician, and Administrator roles, each with specialized features.'
    },
    {
      id: 6,
      question: 'Is my patient data secure?',
      answer: 'Absolutely! All data is encrypted and stored locally on your device. We comply with HIPAA and medical data privacy regulations.'
    },
    {
      id: 7,
      question: 'How do I update the antibiotic list?',
      answer: 'Navigate to Settings > Antibiotic Management. You can add, edit, or remove antibiotics from your database.'
    },
    {
      id: 8,
      question: 'What if a patient has antibiotic allergies?',
      answer: 'Access the Guidance section from Profile > Patient Resources > Antibiotic Concerns Help for detailed protocols on handling allergies and alternative treatments.'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return { bg: 'bg-blue-100', text: 'text-blue-600' };
      case 'purple':
        return { bg: 'bg-purple-100', text: 'text-purple-600' };
      case 'green':
        return { bg: 'bg-green-100', text: 'text-green-600' };
      case 'orange':
        return { bg: 'bg-orange-100', text: 'text-orange-600' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-600' };
    }
  };

  return (
    <MobileLayout title="Help Center" showBack>
      <div className="space-y-4 mt-6">
        {/* Search Bar */}
        <Card className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help..."
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </Card>

        {/* Quick Links */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Quick Links</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map((link, index) => {
              const colors = getColorClasses(link.color);
              const Icon = link.icon;
              
              return (
                <button
                  key={index}
                  onClick={() => link.path !== '#' && navigate(link.path)}
                  className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-center"
                >
                  <div className={`${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{link.title}</p>
                </button>
              );
            })}
          </div>
        </Card>

        {/* FAQs */}
        <Card className="overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              Frequently Asked Questions
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {filteredFaqs.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No results found for "{searchQuery}"
              </div>
            ) : (
              filteredFaqs.map((faq) => (
                <div key={faq.id}>
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-medium text-gray-800 pr-2">{faq.question}</span>
                    {expandedFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="px-4 pb-4 text-sm text-gray-600 bg-gray-50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </Card>

        {/* Still Need Help */}
        <Card className="p-4 bg-blue-50 border-blue-200">
          <h3 className="font-semibold text-gray-800 mb-2">Still Need Help?</h3>
          <p className="text-sm text-gray-600 mb-3">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <button
            onClick={() => navigate('/support/contact')}
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Support
          </button>
        </Card>
      </div>
    </MobileLayout>
  );
}
