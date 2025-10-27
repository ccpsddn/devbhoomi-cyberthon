export const isAdminAuthenticated = (): boolean => {
  const token = localStorage.getItem('adminToken')
  return !!token
}

export const getAuthToken = (): string | null => {
  return localStorage.getItem('adminToken')
}

export const logout = () => {
  localStorage.removeItem('adminToken')
  window.location.href = '/admin/login'
}

