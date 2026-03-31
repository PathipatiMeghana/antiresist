import { createBrowserRouter } from "react-router";
import RootLayout from "@/app/layouts/RootLayout";

// Import all screen components
import Splash from "@/app/screens/Splash";
import SplashScreen from "@/app/screens/SplashScreen";
import Welcome from "@/app/screens/Welcome";
import Login from "@/app/screens/Login";
import SimpleLogin from "@/app/screens/SimpleLogin";
import RoleSelection from "@/app/screens/RoleSelection";
import AllScreens from "@/app/screens/AllScreens";
import TestComplete from "@/app/screens/TestComplete";
import AdminLogin from "@/app/screens/AdminLogin";
import LabTechLogin from "@/app/screens/LabTechLogin";
import Registration from "@/app/screens/Registration";
import ForgotPassword from "@/app/screens/ForgotPassword";
import VerifyOTP from "@/app/screens/VerifyOTP";
import NewPassword from "@/app/screens/NewPassword";
import Dashboard from "@/app/screens/Dashboard";
import RecentRuns from "@/app/screens/RecentRuns";
import NotFound from "@/app/screens/NotFound";
import ErrorBoundary from "@/app/screens/ErrorBoundary";

// Main screens with bottom navigation
import Home from "@/app/screens/Home";
import Tests from "@/app/screens/Tests";
import Records from "@/app/screens/Records";
import Profile from "@/app/screens/Profile";

// Patient Information
import PatientBasicDetails from "@/app/screens/patient/PatientBasicDetails";
import PatientDemographics from "@/app/screens/patient/PatientDemographics";
import HospitalLabName from "@/app/screens/patient/HospitalLabName";
import TestDateSelection from "@/app/screens/patient/TestDateSelection";
import PatientInfoComplete from "@/app/screens/patient/PatientInfoComplete";
import PersonalInfo from "@/app/screens/patient/PersonalInfo";
import HospitalInfo from "@/app/screens/patient/HospitalInfo";
import PersonalDetails from "@/app/screens/patient/PersonalDetails";
import HospitalLabDetails from "@/app/screens/patient/HospitalLabDetails";

// Sample Information
import SampleTypeSelection from "@/app/screens/sample/SampleTypeSelection";
import SampleIDEntry from "@/app/screens/sample/SampleIDEntry";
import SampleCollectionDate from "@/app/screens/sample/SampleCollectionDate";
import SampleInfoComplete from "@/app/screens/sample/SampleInfoComplete";
import SampleBasicInfo from "@/app/screens/sample/SampleBasicInfo";
import SampleCollectionInfo from "@/app/screens/sample/SampleCollectionInfo";
import SampleAdditionalDetails from "@/app/screens/sample/SampleAdditionalDetails";
import SampleDetails from "@/app/screens/sample/SampleDetails";

// Bacteria Study
import BacteriaNameEntry from "@/app/screens/bacteria/BacteriaNameEntry";
import BacteriaSearch from "@/app/screens/bacteria/BacteriaSearch";
import GramTypeSelection from "@/app/screens/bacteria/GramTypeSelection";

// Antibiotic Testing
import AntibioticSelection from "@/app/screens/antibiotic/AntibioticSelection";
import AddMultipleAntibiotics from "@/app/screens/antibiotic/AddMultipleAntibiotics";
import AddNewAntibiotic from "@/app/screens/antibiotic/AddNewAntibiotic";
import AntibioticCombinations from "@/app/screens/antibiotic/AntibioticCombinations";
import TestMethodSelection from "@/app/screens/antibiotic/TestMethodSelection";
import ZoneOfInhibition from "@/app/screens/antibiotic/ZoneOfInhibition";
import SensitivityClassification from "@/app/screens/antibiotic/SensitivityClassification";

// Evidence Upload
import ASTPlateImageUpload from "@/app/screens/evidence/ASTPlateImageUpload";
import LabReportUpload from "@/app/screens/evidence/LabReportUpload";
import ImagePreview from "@/app/screens/evidence/ImagePreview";

// Analysis & Processing
import DataReview from "@/app/screens/analysis/DataReview";
import ValidationError from "@/app/screens/analysis/ValidationError";
import ProcessingScreen from "@/app/screens/analysis/ProcessingScreen";

// Results & Insights
import ResistanceResultSummary from "@/app/screens/results/ResistanceResultSummary";
import EffectiveAntibioticRecommendation from "@/app/screens/results/EffectiveAntibioticRecommendation";
import HighResistanceAlert from "@/app/screens/results/HighResistanceAlert";

// Visualization
import BarChartVisualization from "@/app/screens/visualization/BarChartVisualization";
import PieChartVisualization from "@/app/screens/visualization/PieChartVisualization";
import HeatMapVisualization from "@/app/screens/visualization/HeatMapVisualization";
import TrendGraphVisualization from "@/app/screens/visualization/TrendGraphVisualization";

// Reports & History
import GenerateReport from "@/app/screens/reports/GenerateReport";
import ReportPreview from "@/app/screens/reports/ReportPreview";
import PatientHistoryList from "@/app/screens/reports/PatientHistoryList";
import PreviousRecordDetails from "@/app/screens/reports/PreviousRecordDetails";

// User & Exit
import UserProfile from "@/app/screens/user/UserProfile";
import EditProfile from "@/app/screens/user/EditProfile";
import Logout from "@/app/screens/user/Logout";

// Guidance
import AntibioticConcerns from "@/app/screens/guidance/AntibioticConcerns";
import AntibioticAllergy from "@/app/screens/guidance/AntibioticAllergy";
import NotResponding from "@/app/screens/guidance/NotResponding";
import AlternativeTreatments from "@/app/screens/guidance/AlternativeTreatments";
import SideEffects from "@/app/screens/guidance/SideEffects";
import Emergency from "@/app/screens/guidance/Emergency";
import FearOfAntibiotics from "@/app/screens/guidance/FearOfAntibiotics";
import SkinAllergyAlternatives from "@/app/screens/guidance/SkinAllergyAlternatives";
import PatientGuideDownload from "@/app/screens/guidance/PatientGuideDownload";
import TreatmentProtocol from "@/app/screens/guidance/TreatmentProtocol";
import SkinInfectionTreatment from "@/app/screens/guidance/SkinInfectionTreatment";
import RespiratoryTreatment from "@/app/screens/guidance/RespiratoryTreatment";
import UTITreatment from "@/app/screens/guidance/UTITreatment";

// Settings
import PrivacySettings from "@/app/screens/settings/PrivacySettings";
import DataManagement from "@/app/screens/settings/DataManagement";
import SecurityLog from "@/app/screens/settings/SecurityLog";
import NotificationPreferences from "@/app/screens/settings/NotificationPreferences";

// Support
import HelpCenter from "@/app/screens/support/HelpCenter";
import ContactSupport from "@/app/screens/support/ContactSupport";
import AboutApp from "@/app/screens/support/AboutApp";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <SplashScreen />,
      },
      {
        path: "/splash",
        element: <Splash />,
      },
      {
        path: "/splash-screen",
        element: <SplashScreen />,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/simple-login",
        element: <SimpleLogin />,
      },
      {
        path: "/role-selection",
        element: <RoleSelection />,
      },
      {
        path: "/all-screens",
        element: <AllScreens />,
      },
      {
        path: "/test-complete",
        element: <TestComplete />,
      },
      {
        path: "/admin-login",
        element: <AdminLogin />,
      },
      {
        path: "/lab-tech-login",
        element: <LabTechLogin />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/verify-otp",
        element: <VerifyOTP />,
      },
      {
        path: "/new-password",
        element: <NewPassword />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/recent-runs",
        element: <RecentRuns />,
      },
      // Main screens with bottom navigation
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/tests",
        element: <Tests />,
      },
      {
        path: "/records",
        element: <Records />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      // Patient Information
      {
        path: "/patient/basic-details",
        element: <PatientBasicDetails />,
      },
      {
        path: "/patient/demographics",
        element: <PatientDemographics />,
      },
      {
        path: "/patient/hospital-lab",
        element: <HospitalLabName />,
      },
      {
        path: "/patient/test-date",
        element: <TestDateSelection />,
      },
      {
        path: "/patient/complete-info",
        element: <PatientInfoComplete />,
      },
      {
        path: "/patient/personal-info",
        element: <PersonalInfo />,
      },
      {
        path: "/patient/hospital-info",
        element: <HospitalInfo />,
      },
      {
        path: "/patient/personal-details",
        element: <PersonalDetails />,
      },
      {
        path: "/personal-details",
        element: <PersonalDetails />,
      },
      {
        path: "/patient/hospital-lab-details",
        element: <HospitalLabDetails />,
      },
      {
        path: "/hospital-lab-details",
        element: <HospitalLabDetails />,
      },
      // Sample Information
      {
        path: "/sample/type",
        element: <SampleTypeSelection />,
      },
      {
        path: "/sample/id",
        element: <SampleIDEntry />,
      },
      {
        path: "/sample/collection-date",
        element: <SampleCollectionDate />,
      },
      {
        path: "/sample/complete-info",
        element: <SampleInfoComplete />,
      },
      {
        path: "/sample/basic-info",
        element: <SampleBasicInfo />,
      },
      {
        path: "/sample/collection-info",
        element: <SampleCollectionInfo />,
      },
      {
        path: "/sample/additional-details",
        element: <SampleAdditionalDetails />,
      },
      {
        path: "/sample/details",
        element: <SampleDetails />,
      },
      {
        path: "/sample-details",
        element: <SampleDetails />,
      },
      // Bacteria Study
      {
        path: "/bacteria/name",
        element: <BacteriaNameEntry />,
      },
      {
        path: "/bacteria/search",
        element: <BacteriaSearch />,
      },
      {
        path: "/bacteria/gram-type",
        element: <GramTypeSelection />,
      },
      // Antibiotic Testing
      {
        path: "/antibiotic/selection",
        element: <AntibioticSelection />,
      },
      {
        path: "/antibiotic/add-multiple",
        element: <AddMultipleAntibiotics />,
      },
      {
        path: "/antibiotic/add-new",
        element: <AddNewAntibiotic />,
      },
      {
        path: "/antibiotic/combinations",
        element: <AntibioticCombinations />,
      },
      {
        path: "/antibiotic/test-method",
        element: <TestMethodSelection />,
      },
      {
        path: "/antibiotic/zone-inhibition",
        element: <ZoneOfInhibition />,
      },
      {
        path: "/antibiotic/sensitivity",
        element: <SensitivityClassification />,
      },
      // Evidence Upload
      {
        path: "/evidence/ast-image",
        element: <ASTPlateImageUpload />,
      },
      {
        path: "/evidence/lab-report",
        element: <LabReportUpload />,
      },
      {
        path: "/evidence/preview",
        element: <ImagePreview />,
      },
      // Analysis & Processing
      {
        path: "/analysis/review",
        element: <DataReview />,
      },
      {
        path: "/analysis/validation-error",
        element: <ValidationError />,
      },
      {
        path: "/analysis/processing",
        element: <ProcessingScreen />,
      },
      // Results & Insights
      {
        path: "/results/summary",
        element: <ResistanceResultSummary />,
      },
      {
        path: "/results/recommendations",
        element: <EffectiveAntibioticRecommendation />,
      },
      {
        path: "/results/high-resistance-alert",
        element: <HighResistanceAlert />,
      },
      // Visualization
      {
        path: "/visualization/bar-chart",
        element: <BarChartVisualization />,
      },
      {
        path: "/visualization/pie-chart",
        element: <PieChartVisualization />,
      },
      {
        path: "/visualization/heat-map",
        element: <HeatMapVisualization />,
      },
      {
        path: "/visualization/trend-graph",
        element: <TrendGraphVisualization />,
      },
      // Reports & History
      {
        path: "/reports/generate",
        element: <GenerateReport />,
      },
      {
        path: "/reports/preview",
        element: <ReportPreview />,
      },
      {
        path: "/reports/history",
        element: <PatientHistoryList />,
      },
      {
        path: "/reports/record/:id",
        element: <PreviousRecordDetails />,
      },
      // User & Exit
      {
        path: "/user/profile",
        element: <UserProfile />,
      },
      {
        path: "/user/edit-profile",
        element: <EditProfile />,
      },
      {
        path: "/user/logout",
        element: <Logout />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      // Guidance
      {
        path: "/guidance/antibiotic-concerns",
        element: <AntibioticConcerns />,
      },
      {
        path: "/guidance/antibiotic-allergy",
        element: <AntibioticAllergy />,
      },
      {
        path: "/guidance/not-responding",
        element: <NotResponding />,
      },
      {
        path: "/guidance/alternative-treatments",
        element: <AlternativeTreatments />,
      },
      {
        path: "/guidance/side-effects",
        element: <SideEffects />,
      },
      {
        path: "/guidance/emergency",
        element: <Emergency />,
      },
      {
        path: "/guidance/fear-of-antibiotics",
        element: <FearOfAntibiotics />,
      },
      {
        path: "/guidance/skin-allergy-alternatives",
        element: <SkinAllergyAlternatives />,
      },
      {
        path: "/guidance/patient-guide-download",
        element: <PatientGuideDownload />,
      },
      {
        path: "/guidance/treatment-protocol",
        element: <TreatmentProtocol />,
      },
      {
        path: "/guidance/skin-infection-treatment",
        element: <SkinInfectionTreatment />,
      },
      {
        path: "/guidance/respiratory-treatment",
        element: <RespiratoryTreatment />,
      },
      {
        path: "/guidance/uti-treatment",
        element: <UTITreatment />,
      },
      // Settings
      {
        path: "/settings/privacy",
        element: <PrivacySettings />,
      },
      {
        path: "/settings/data-management",
        element: <DataManagement />,
      },
      {
        path: "/settings/security-log",
        element: <SecurityLog />,
      },
      {
        path: "/settings/notification-preferences",
        element: <NotificationPreferences />,
      },
      // Support
      {
        path: "/support/help-center",
        element: <HelpCenter />,
      },
      {
        path: "/support/contact-support",
        element: <ContactSupport />,
      },
      {
        path: "/support/about-app",
        element: <AboutApp />,
      },
      // Catch-all 404 route - must be last
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);