import { useState } from 'react';
import { useNavigate } from 'react-router';
import { MobileLayout } from '@/app/components/MobileLayout';
import { Card } from '@/app/components/ui/card';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Send,
  Clock,
  MapPin,
  CheckCircle
} from 'lucide-react';

export default function ContactSupport() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'Dr. Robert Chen',
    email: 'robert.chen@hospital.com',
    subject: '',
    category: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      navigate('/profile');
    }, 3000);
  };

  if (submitted) {
    return (
      <MobileLayout title="Contact Support" showBack>
        <div className="flex items-center justify-center min-h-[60vh]">
          <Card className="p-8 text-center max-w-sm">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Message Sent!</h2>
            <p className="text-gray-600 mb-4">
              Thank you for contacting us. Our support team will respond within 24 hours.
            </p>
            <p className="text-sm text-gray-500">
              Ticket ID: #SUP-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </Card>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout title="Contact Support" showBack>
      <div className="space-y-4 mt-6">
        {/* Contact Methods */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-3 text-center">
            <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-xs text-gray-600">Email</p>
          </Card>
          <Card className="p-3 text-center">
            <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Phone className="w-5 h-5 text-green-600" />
            </div>
            <p className="text-xs text-gray-600">Call</p>
          </Card>
          <Card className="p-3 text-center">
            <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <MessageCircle className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-xs text-gray-600">Chat</p>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Contact Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-blue-600" />
              <a href="mailto:support@antiresist.com" className="text-blue-600 hover:underline">
                support@antiresist.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-green-600" />
              <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <Clock className="w-4 h-4 text-orange-600 mt-0.5" />
              <div>
                <p className="text-gray-700 font-medium">Support Hours</p>
                <p className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-purple-600 mt-0.5" />
              <div>
                <p className="text-gray-700 font-medium">Office Location</p>
                <p className="text-gray-600">123 Medical Plaza, Suite 400<br />Boston, MA 02101</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Form */}
        <Card className="p-4">
          <h3 className="font-semibold text-gray-800 mb-4">Send us a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => handleChange('category', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select a category</option>
                <option value="technical">Technical Issue</option>
                <option value="account">Account & Billing</option>
                <option value="feature">Feature Request</option>
                <option value="bug">Bug Report</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                placeholder="Brief description of your issue"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder="Please provide details about your inquiry..."
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </Card>
      </div>
    </MobileLayout>
  );
}
