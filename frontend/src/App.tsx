import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home     from './pages/Home'
import Settings from './pages/Settings'
import useAuth   from './hooks/useAuth'
import useWallet from './hooks/useWallet'

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

  const {
    wallet,
    loadingWallet,
    recharging,
    walletError,
    setWalletError,
    recharge,
    walletBalance,
  } = useWallet(user)

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                user={user}
                theme={theme}
                showLogin={showLogin}
                showSignUp={showSignUp}
                handleLoginSuccess={handleLoginSuccess}
                handleSwitchToSignUp={handleSwitchToSignUp}
                handleSwitchToLogin={handleSwitchToLogin}
                openLogin={openLogin}
                openSignUp={openSignUp}
                closeLogin={closeLogin}
                closeSignUp={closeSignUp}
                walletBalance={walletBalance}
              />
            }
          />
          <Route
            path="/settings"
            element={
              user
                ? <Settings
                    user={user}
                    onUserUpdate={handleLoginSuccess}
                    onLogout={handleLogout}
                    theme={theme}
                    toggleTheme={toggleTheme}
                    wallet={wallet}
                    loadingWallet={loadingWallet}
                    recharging={recharging}
                    walletError={walletError}
                    setWalletError={setWalletError}
                    recharge={recharge}
                  />
                : <Navigate to="/" replace />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App