// API Configuration
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export const API_ENDPOINTS = {
  adminLogin: `${API_URL}/api/admin/login`,
  register: `${API_URL}/api/register`,
  registrations: `${API_URL}/api/registrations`,
  stats: `${API_URL}/api/stats`,
}

