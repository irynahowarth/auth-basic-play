import React from 'react'
import { Navigate } from 'react-router-dom';
import useAuth from './context/auth';

export default function PrivateRoute({children}) {
  const isAuthenticated = useAuth()
  return isAuthenticated? children : <Navigate to='/login'/>
}
