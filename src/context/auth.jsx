import React from 'react'

export const AuthContext = React.createContext();

export default function useAuth() {
  return (
    React.useContext(AuthContext)
  )
}
