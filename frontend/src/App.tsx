import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import useAuth from './hooks/useAuth'

function App() {
  const {
    user,
    theme,
    toggleTheme,
    showLogin,
    showSignUp,
    handleLoginSuccess,
    handleLogout,
    handleSwitchToSignUp,
    handleSwitchToLogin,
    openLogin,
    openSignUp,
    closeLogin,
    closeSignUp,
  } = useAuth()

  return (
    <div className={theme} data-theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Home — public */}
          <Route
            path="/"
            element={
              <div>Home page coming soon</div>
            }
          />

          {/* Settings — protected */}
          <Route
            path="/settings"
            element={
              user
                ? <div>Settings page coming soon</div>
                : <Navigate to="/" replace />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App