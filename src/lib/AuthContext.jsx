import React, { createContext, useState, useContext, useEffect } from 'react'

// простой mock (без Base44)
const db = {
  auth: {
    isAuthenticated: async () => false,
    me: async () => null,
    logout: () => {},
    redirectToLogin: () => {},
  }
}

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoadingAuth, setIsLoadingAuth] = useState(false)
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(false)
  const [authError, setAuthError] = useState(null)
  const [authChecked, setAuthChecked] = useState(true)
  const [appPublicSettings, setAppPublicSettings] = useState(null)

  useEffect(() => {
    init()
  }, [])

  // 🔥 полностью убрали API (оно у тебя не существует)
  const init = async () => {
    try {
      setIsLoadingAuth(true)

      const currentUser = await db.auth.me()

      setUser(currentUser)
      setIsAuthenticated(!!currentUser)
      setAuthChecked(true)
      setIsLoadingAuth(false)
    } catch (error) {
      console.error('Auth init error:', error)

      setIsAuthenticated(false)
      setAuthChecked(true)
      setIsLoadingAuth(false)
      setAuthError({
        type: 'unknown',
        message: error.message || 'Unexpected error'
      })
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  const navigateToLogin = () => {
    console.log('Login redirect (stub)')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoadingAuth,
        isLoadingPublicSettings,
        authError,
        appPublicSettings,
        authChecked,
        logout,
        navigateToLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}
