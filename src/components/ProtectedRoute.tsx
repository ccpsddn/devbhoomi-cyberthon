import { Navigate } from 'react-router-dom'
import { isAdminAuthenticated } from '@/utils/auth'

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!isAdminAuthenticated()) {
    return <Navigate to="/admin/login" replace />
  }
  
  return <>{children}</>
}

