import { useNavigate } from 'react-router';
import { MainLayout } from '@/app/components/MainLayout';
import { ChevronRight } from 'lucide-react';

export default function AllScreens() {
  const navigate = useNavigate();

  const screenCategories = [
    {
      category: 'App Access & Navigation',
      screens: [
        { name: 'Splash Screen', path: '/splash' },
        { name: 'Welcome Screen', path: '/welcome' },
        { name: 'Login Screen', path: '/login' },
        { name: 'Simple Login', path: '/simple-login' },
        { name: 'Registration Screen', path: '/register' },
        { name: 'Forgot Password', path: '/forgot-password' },
        { name: 'Verify OTP', path: '/verify-otp' },
        { name: 'New Password', path: '/new-password' },
        { name: 'Home Dashboard', path: '/home' },
        { name: 'Admin Login', path: '/admin-login' },
        { name: 'Lab Tech Login', path: '/lab-tech-login' },
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Recent Runs', path: '/recent-runs' },
      ],
    },
    {
      category: 'Patient Information Entry',
      screens: [
        { name: 'Patient Complete Info (All-in-One)', path: '/patient/complete-info' },
        { name: 'Personal Details (NEW - Step 1)', path: '/personal-details' },
        { name: 'Hospital & Lab Details (NEW - Step 2)', path: '/hospital-lab-details' },
        { name: 'Patient Basic Details', path: '/patient/basic-details' },
        { name: 'Patient Demographics', path: '/patient/demographics' },
        { name: 'Hospital/Lab Name', path: '/patient/hospital-lab' },
        { name: 'Test Date Selection', path: '/patient/test-date' },
      ],
    },
    {
      category: 'Sample Information Entry',
      screens: [
        { name: 'Sample Complete Info (All-in-One)', path: '/sample/complete-info' },
        { name: 'Sample Details (NEW - Step 3)', path: '/sample-details' },
        { name: 'Sample Type Selection', path: '/sample/type' },
        { name: 'Sample ID Entry', path: '/sample/id' },
        { name: 'Sample Collection Date', path: '/sample/collection-date' },
      ],
    },
    {
      category: 'Bacteria Study',
      screens: [
        { name: 'Bacteria Name Entry', path: '/bacteria/name' },
        { name: 'Bacteria Search & Selection', path: '/bacteria/search' },
        { name: 'Gram Type Selection', path: '/bacteria/gram-type' },
      ],
    },
    {
      category: 'Antibiotic Testing',
      screens: [
        { name: 'Antibiotic Selection', path: '/antibiotic/selection' },
        { name: 'Add Multiple Antibiotics', path: '/antibiotic/add-multiple' },
        { name: 'Add New Antibiotic', path: '/antibiotic/add-new' },
        { name: 'Antibiotic Combinations', path: '/antibiotic/combinations' },
        { name: 'Test Method Selection', path: '/antibiotic/test-method' },
        { name: 'Zone of Inhibition', path: '/antibiotic/zone-inhibition' },
        { name: 'Sensitivity Classification', path: '/antibiotic/sensitivity' },
      ],
    },
    {
      category: 'Evidence Upload',
      screens: [
        { name: 'AST Plate Image Upload', path: '/evidence/ast-image' },
        { name: 'Lab Report Upload', path: '/evidence/lab-report' },
        { name: 'Image Preview', path: '/evidence/preview' },
      ],
    },
    {
      category: 'Analysis & Processing',
      screens: [
        { name: 'Data Review & Edit', path: '/analysis/review' },
        { name: 'Validation Error', path: '/analysis/validation-error' },
        { name: 'Processing Screen', path: '/analysis/processing' },
      ],
    },
    {
      category: 'Results & Insights',
      screens: [
        { name: 'Resistance Result Summary', path: '/results/summary' },
        { name: 'Effective Antibiotic Recommendation', path: '/results/recommendations' },
        { name: 'High Resistance Alert', path: '/results/high-resistance-alert' },
      ],
    },
    {
      category: 'Visualization',
      screens: [
        { name: 'Bar Chart - Resistance', path: '/visualization/bar-chart' },
        { name: 'Pie Chart - Sensitivity', path: '/visualization/pie-chart' },
        { name: 'Heat Map - Bacteria vs Antibiotic', path: '/visualization/heat-map' },
        { name: 'Trend Graph - Over Time', path: '/visualization/trend-graph' },
      ],
    },
    {
      category: 'Reports & History',
      screens: [
        { name: 'Generate Report', path: '/reports/generate' },
        { name: 'Report Preview', path: '/reports/preview' },
        { name: 'Patient History List', path: '/reports/history' },
        { name: 'Previous Record Details', path: '/reports/record/123' },
      ],
    },
    {
      category: 'User & Exit',
      screens: [
        { name: 'User Profile', path: '/user/profile' },
        { name: 'Edit Profile', path: '/user/edit-profile' },
        { name: 'Logout', path: '/user/logout' },
        { name: 'Error Boundary', path: '/error-boundary' },
        { name: '404 Not Found', path: '/not-found-test-page' },
      ],
    },
    {
      category: 'Settings',
      screens: [
        { name: 'Privacy Settings', path: '/settings/privacy' },
        { name: 'Data Management', path: '/settings/data-management' },
        { name: 'Security Log', path: '/settings/security-log' },
        { name: 'Notification Preferences', path: '/settings/notification-preferences' },
      ],
    },
    {
      category: 'Support',
      screens: [
        { name: 'Help Center', path: '/support/help-center' },
        { name: 'Contact Support', path: '/support/contact-support' },
        { name: 'About App', path: '/support/about-app' },
      ],
    },
    {
      category: 'Guidance & Help',
      screens: [
        { name: 'Antibiotic Concerns Hub', path: '/guidance/antibiotic-concerns' },
        { name: 'Antibiotic Allergy', path: '/guidance/antibiotic-allergy' },
        { name: 'Not Responding to Treatment', path: '/guidance/not-responding' },
        { name: 'Alternative Treatments', path: '/guidance/alternative-treatments' },
        { name: 'Side Effects & Safety', path: '/guidance/side-effects' },
        { name: 'Fear of Antibiotics', path: '/guidance/fear-of-antibiotics' },
        { name: 'Skin Allergy Alternatives', path: '/guidance/skin-allergy-alternatives' },
        { name: 'Patient Guide Download', path: '/guidance/patient-guide-download' },
        { name: 'Emergency Guidelines', path: '/guidance/emergency' },
      ],
    },
    {
      category: 'Treatment Protocols',
      screens: [
        { name: 'Treatment Protocol Hub', path: '/guidance/treatment-protocol' },
        { name: 'Skin Infection Treatment', path: '/guidance/skin-infection-treatment' },
        { name: 'Respiratory Treatment', path: '/guidance/respiratory-treatment' },
        { name: 'UTI Treatment', path: '/guidance/uti-treatment' },
      ],
    },
  ];

  return (
    <MainLayout title="All Screens" showBack={true}>
      <div className="space-y-6 pb-8">
        <div className="bg-blue-600 rounded-xl p-4 text-white">
          <h2 className="font-semibold text-lg">Screen Navigator</h2>
          <p className="text-sm text-blue-100 mt-1">
            {screenCategories.reduce((sum, cat) => sum + cat.screens.length, 0)} screens total
          </p>
        </div>

        {screenCategories.map((category) => (
          <div key={category.category} className="space-y-2">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide px-1">
              {category.category}
            </h3>
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
              {category.screens.map((screen, index) => (
                <button
                  key={screen.path}
                  onClick={() => navigate(screen.path)}
                  className={`w-full px-4 py-3 flex items-center justify-between hover:bg-blue-50 transition-colors ${
                    index !== category.screens.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <span className="text-sm text-gray-800">{screen.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}