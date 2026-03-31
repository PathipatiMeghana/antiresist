export const API_BASE_URL = '/api';

export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('authToken');
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    // Check if the token is already a Bearer token or needs the prefix
    headers['Authorization'] = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || errorData.message || 'An error occurred');
  }

  return response.json();
};

export const api = {
  // Auth
  login: (credentials: any) => apiFetch('/login/', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
  register: (userData: any) => apiFetch('/register/', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  forgotPassword: (email: string) => apiFetch('/forgot-password/', {
    method: 'POST',
    body: JSON.stringify({ email }),
  }),
  verifyOTP: (data: any) => apiFetch('/verify-otp/', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  resetPassword: (data: any) => apiFetch('/reset-password/', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  // User Profile
  getProfile: () => apiFetch('/profile/'),
  updateProfile: (userData: any) => apiFetch('/profile/update/', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),

  // Dashboards
  getAdminDashboard: () => apiFetch('/admin-dashboard/'),
  getDoctorDashboard: () => apiFetch('/doctor-dashboard/'),
  getLabDashboard: () => apiFetch('/lab-dashboard/'),

  // Patients
  createPatient: (patientData: any) => apiFetch('/register-patient/', {
    method: 'POST',
    body: JSON.stringify(patientData),
  }),
  getRecentTests: () => apiFetch('/test-history/'),

  // Samples & Tests
  createSample: (sampleData: any) => apiFetch('/create-sample/', {
    method: 'POST',
    body: JSON.stringify(sampleData),
  }),
  updateCollection: (id: number, data: any) => apiFetch(`/update-collection/${id}/`, {
    method: 'POST', // Django views usually use POST for updates in this specific backend
    body: JSON.stringify(data),
  }),
  recordTest: (testData: any) => apiFetch('/record-test/', {
    method: 'POST',
    body: JSON.stringify(testData),
  }),

  // Bacteria & Antibiotics
  getBacteria: () => apiFetch('/bacteria/'),
  getAntibiotics: () => apiFetch('/auth/antibiotics/'),

  // New Testing Endpoints
  createTest: (testData: any) => apiFetch('/create-test/', {
    method: 'POST',
    body: JSON.stringify(testData),
  }),
  listTests: () => apiFetch('/list-tests/'),
  
  // Prediction
  getHybridPrediction: (age: number, gender: string, bacteria: string, antibiotic: string) => 
    apiFetch(`/hybrid-prediction/?age=${age}&gender=${gender}&bacteria=${bacteria}&antibiotic=${antibiotic}`),
};
