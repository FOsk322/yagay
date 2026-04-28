import React, { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { appParams } from '@/lib/app-params'

// простой mock вместо Base44
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
  const [isLoadingAuth, setIsLoadingAuth] = useState(true)
  const [isLoadingPublicSettings, setIsLoadingPublicSettings] = useState(true)
  const [authError, setAuthError] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  const [appPublicSettings, setAppPublicSettings] = useState(null)

  useEffect(() => {
    checkAppState()
  }, [])

  const checkAppState = async () => {
    try {
      setIsLoadingPublicSettings(true)
      setAuthError(null)

      // 🔥 заменили createAxiosClient → axios
      const appClient = axios.create({
        baseURL: /api/apps/public,
        headers: {
          'X-App-Id': appParams.appId
        }
      })

      try {
        const response = await appClient.get(
          /prod/public-settings/by-id/${appParams.appId}
        )

        const publicSettings = response.data
        setAppPublicSettings(publicSettings)

        if (appParams.token) {
          await checkUserAuth()
        } else {
          setIsLoadingAuth(false)
          setIsAuthenticated(false)
          setAuthChecked(true)
        }

        setIsLoadingPublicSettings(false)
      } catch (appError) {
        console.error('App state check failed:', appError)

        setAuthError({
          type: 'unknown',
          message: appError.message  'Failed to load app'
        })

        setIsLoadingPublicSettings(false)
        setIsLoadingAuth(false)
      }
    } catch (error) {
      console.error('Unexpected error:', error)

      setAuthError({
        type: 'unknown',
        message: error.message  'Unexpected error'
      })

      setIsLoadingPublicSettings(false)
      setIsLoadingAuth(false)
    }
  }

  const checkUserAuth = async () => {
    try {
      setIsLoadingAuth(true)

      const currentUser = await db.auth.me()

      setUser(currentUser)
      setIsAuthenticated(true)
      setIsLoadingAuth(false)
      setAuthChecked(true)
    } catch (error) {
      console.error('User auth check failed:', error)

      setIsLoadingAuth(false)
      setIsAuthenticated(false)
      setAuthChecked(true)
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
        navigateToLogin,
        checkUserAuth,
        checkAppState
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