import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  User, Lock, Zap, Monitor, CreditCard,
  Shield, LogOut, ArrowLeft, ChevronDown,
  CheckCircle, AlertCircle, Trash2, X, Bus,
} from 'lucide-react'
import useSettings from '../hooks/useSettings'
import WalletCard from '../components/WalletCard'
import type { User as UserType, Wallet } from '../lib/types'

 

interface SettingsProps {
  user: UserType | null
  onUserUpdate: (user: UserType) => void
  onLogout: () => void
  theme: string
  toggleTheme: () => void
  wallet: Wallet | null
  loadingWallet: boolean
  recharging: boolean
  walletError: string | null
  setWalletError: (e: string | null) => void
  recharge: (amount: number) => Promise<boolean>
}
 

const Accordion = ({
  icon: Icon,
  title,
  hint,
  children,
}: {
  icon: React.ElementType
  title: string
  hint: string
  children: React.ReactNode
}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border)] overflow-hidden">
      <button
        className="w-full flex items-center gap-4 px-5 py-[18px] bg-transparent border-none cursor-pointer text-left"
        onClick={() => setOpen(v => !v)}
      >
        <div className="w-9 h-9 rounded-[10px] bg-[var(--border)] flex items-center justify-center text-[var(--text-primary)] shrink-0">
          <Icon size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-['Syne'] text-sm font-bold text-[var(--text-primary)] m-0">{title}</p>
          <p className="text-xs text-[var(--text-muted)] m-0">{hint}</p>
        </div>
        <ChevronDown
          size={16}
          className="text-[var(--text-muted)] transition-transform duration-250 shrink-0"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-400 ease-in-out"
        style={{ maxHeight: open ? '1500px' : '0px' }}
      >
        <div className="px-5 pt-2.5 pb-8 border-t border-[var(--border)]">
          {children}
        </div>
      </div>
    </div>
  )
}

//  confirm modal

const ConfirmModal = ({
  title,
  message,
  onConfirm,
  onCancel,
  requirePassword,
}: {
  title: string
  message: string
  onConfirm: (password: string) => void
  onCancel: () => void
  requirePassword?: boolean
}) => {
  const [password, setPassword] = useState('')
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000]">
      <div className="bg-[var(--bg-card)] p-8 rounded-2xl max-w-[400px] w-[90%] relative">
        <button
          className="absolute top-3.5 right-3.5 bg-[var(--bg-page)] border-none rounded-md w-[26px] h-[26px] flex items-center justify-center cursor-pointer text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          onClick={onCancel}
        >
          <X size={13} />
        </button>
        <h3 className="font-['Syne'] text-base font-bold text-[var(--text-primary)] m-0 mb-2">{title}</h3>
        <p className="text-[13px] text-[var(--text-secondary)] m-0 mb-4 leading-relaxed">{message}</p>
        {requirePassword && (
          <input
            type="password"
            placeholder="Enter your password to confirm"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-3.5 py-[11px] border-2 border-[var(--border)] rounded-[10px] text-sm bg-[var(--bg-input)] text-[var(--text-primary)] outline-none"
            autoFocus
          />
        )}
        <div className="flex gap-2.5 justify-end mt-5">
          <button
            className="px-[18px] py-[9px] border border-[var(--border)] rounded-lg bg-transparent cursor-pointer font-['DM_Sans'] text-[13px] font-semibold text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] transition-all duration-200"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-[18px] py-[9px] border-none rounded-lg bg-[var(--error)] cursor-pointer font-['DM_Sans'] text-[13px] font-bold text-white transition-all duration-200 hover:opacity-85 disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={() => onConfirm(password)}
            disabled={requirePassword && !password}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

//  settings page

const Settings = ({
  user,
  onUserUpdate,
  onLogout,
  theme,
  toggleTheme,
  wallet,
  loadingWallet,
  recharging,
  walletError,
  setWalletError,
  recharge,
}: SettingsProps) => {
  const navigate = useNavigate()

  const {
    saving, success, error, clearFeedback,
    updateProfile, changePassword, updatePreferences,
    clearSavedRoutes, deleteAccount,
  } = useSettings(user, onUserUpdate, onLogout)

  const [name,      setName]      = useState(user?.name  || '')
  const [email,     setEmail]     = useState(user?.email || '')
  const [phone,     setPhone]     = useState(user?.phone || '')
  const [currentPw, setCurrentPw] = useState('')
  const [newPw,     setNewPw]     = useState('')
  const [confirmPw, setConfirmPw] = useState('')
  const [pwError,   setPwError]   = useState('')

  // ✅ user prefeerences
  const [optimization, setOptimization] = useState(user?.preferences?.optimization || 'fastest')

  const [confirm, setConfirm] = useState<{ type: 'clearRoutes' | 'deleteAccount' } | null>(null)

  useEffect(() => {
    setOptimization(user?.preferences?.optimization || 'fastest')
  }, [user?.preferences?.optimization])

  useEffect(() => {
    if (user) {
      setName(user.name || '')
      setEmail(user.email || '')
      setPhone(user.phone || '')
    }
  }, [user])

  useEffect(() => {
    if (!success && !error) return
    const timer = setTimeout(clearFeedback, 4000)
    return () => clearTimeout(timer)
  }, [success, error])

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault()
    updateProfile({ name, email, phone })
  }

  const handlePasswordSave = (e: React.FormEvent) => {
    e.preventDefault()
    setPwError('')
    if (newPw !== confirmPw) { setPwError('Passwords do not match.'); return }
    if (newPw.length < 6)    { setPwError('Password must be at least 6 characters.'); return }
    changePassword({ currentPassword: currentPw, newPassword: newPw })
    setCurrentPw(''); setNewPw(''); setConfirmPw('')
  }

  const handleConfirm = async (password: string) => {
    if (confirm?.type === 'clearRoutes')   await clearSavedRoutes()
    if (confirm?.type === 'deleteAccount') await deleteAccount(password)
    setConfirm(null)
  }

  //  shared class settings

  const inputCls = 'w-full px-3.5 py-[11px] border-2 border-[var(--border)] rounded-[10px] text-sm bg-[var(--bg-input)] text-[var(--text-primary)] outline-none'
  const labelCls = 'text-[11px] font-bold text-[var(--text-secondary)] uppercase tracking-wide'
  const saveBtnCls = 'px-6 py-3 bg-[var(--navbar-bg)] text-white border-none rounded-[10px] font-["DM_Sans"] text-[13px] font-bold cursor-pointer mt-2.5 self-start transition-all duration-200 hover:bg-[var(--gold)] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed'

  return (
    <div className="h-screen bg-[var(--bg-page)] font-['DM_Sans'] flex flex-col overflow-hidden">

     
      <div className="h-[52px] bg-[var(--navbar-bg)] border-b border-[var(--navbar-border)] flex items-center px-6 gap-3.5 shrink-0 z-20">
        <button
          className="flex items-center gap-1.5 bg-transparent border border-white/10 text-[var(--text-muted)] px-3.5 py-1.5 rounded-lg font-['DM_Sans'] text-[13px] cursor-pointer transition-all duration-200 hover:bg-white/5 hover:text-white"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={14} /> Back
        </button>
        <Bus size={15} color="#f0a500" />
        <span className="font-['Syne'] text-[15px] font-bold text-white">Settings</span>
      </div>

    
      <div className="max-w-[600px] w-full mx-auto px-5 pt-5 pb-28 flex flex-col gap-3 flex-1 overflow-y-auto [scrollbar-width:thin] [scrollbar-color:var(--border)_transparent]">

      
        {(success || error) && (
          <div className={`flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-[13px] font-medium ${
            error
              ? 'bg-[rgba(255,77,109,0.08)] border border-[rgba(255,77,109,0.25)] text-[var(--error)]'
              : 'bg-[rgba(0,201,167,0.08)] border border-[rgba(0,201,167,0.25)] text-[var(--teal)]'
          }`}>
            {error ? <AlertCircle size={13} /> : <CheckCircle size={13} />}
            <span>{error || success}</span>
          </div>
        )}

        {/*  profile  */}
        <Accordion icon={User} title="Profile" hint="Update your name, email and phone">
          <form onSubmit={handleProfileSave} className="flex flex-col gap-3.5">
            <div className="grid grid-cols-2 gap-3.5 max-sm:grid-cols-1">
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Full Name</label>
                <input className={inputCls} value={name} onChange={e => setName(e.target.value)} placeholder="Your name" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Phone</label>
                <input className={inputCls} value={phone} onChange={e => setPhone(e.target.value)} placeholder="+971 50 000 0000" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className={labelCls}>Email Address</label>
              <input className={inputCls} type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@email.com" />
            </div>
            <button type="submit" className={saveBtnCls} disabled={saving}>
              {saving ? 'Saving…' : 'Save Changes'}
            </button>
          </form>
        </Accordion>

        {/* password */}
        <Accordion icon={Lock} title="Change Password" hint="Update your account password">
          <form onSubmit={handlePasswordSave} className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-1.5">
              <label className={labelCls}>Current Password</label>
              <input className={inputCls} type="password" autoComplete="current-password" value={currentPw} onChange={e => setCurrentPw(e.target.value)} placeholder="••••••••" />
            </div>
            <div className="grid grid-cols-2 gap-3.5 max-sm:grid-cols-1">
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>New Password</label>
                <input className={inputCls} type="password" autoComplete="new-password" value={newPw} onChange={e => setNewPw(e.target.value)} placeholder="••••••••" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className={labelCls}>Confirm Password</label>
                <input className={inputCls} type="password" autoComplete="new-password" value={confirmPw} onChange={e => setConfirmPw(e.target.value)} placeholder="••••••••" />
              </div>
            </div>
            {pwError && (
              <p className="flex items-center gap-1.5 text-xs text-[var(--error)] m-0">
                <AlertCircle size={12} /> {pwError}
              </p>
            )}
            <button type="submit" className={saveBtnCls} disabled={saving || !currentPw || !newPw || !confirmPw}>
              {saving ? 'Updating…' : 'Update Password'}
            </button>
          </form>
        </Accordion>

        {/*  preferences */}
        <Accordion icon={Zap} title="Preferences" hint="Optimise your route results">
          <div className="flex flex-col gap-3.5">
            <div className="flex flex-col gap-1.5">
              <label className={labelCls}>Optimise For</label>
              <select
                className={inputCls}
                value={optimization}
                onChange={e => setOptimization(e.target.value)}
              >
                <option value="fastest">Fastest route</option>
                <option value="cheapest">Cheapest fare</option>
                <option value="less_walking">Less walking</option>
                <option value="fewest_transfers">Fewest transfers</option>
              </select>
            </div>
            <button
              className={saveBtnCls}
              style={{ marginTop: 8 }}
              onClick={() => updatePreferences(optimization)}
              disabled={saving}
            >
              {saving ? 'Saving…' : 'Save Preferences'}
            </button>
          </div>
        </Accordion>

        {/* wallet */}
        {user && (
          <Accordion icon={CreditCard} title="Nol Wallet" hint="View balance and top up">
            <WalletCard
              wallet={wallet}
              loadingWallet={loadingWallet}
              recharging={recharging}
              walletError={walletError}
              setWalletError={setWalletError}
              recharge={recharge}
            />
          </Accordion>
        )}

        {/* display */}
        <Accordion icon={Monitor} title="Display" hint="Theme and appearance">
          <div className="flex items-center justify-between py-4 border-b border-[var(--border)]">
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)] m-0">Dark Mode</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">Switch between light and dark theme</p>
            </div>
            <button
              className="relative w-[42px] h-[22px] rounded-full border-none cursor-pointer shrink-0 transition-colors duration-200"
              style={{ background: theme === 'dark' ? 'var(--teal)' : 'var(--border)' }}
              onClick={toggleTheme}
            >
              <div
                className="absolute top-[3px] w-4 h-4 bg-white rounded-full transition-transform duration-200"
                style={{ left: 3, transform: theme === 'dark' ? 'translateX(20px)' : 'translateX(0)' }}
              />
            </button>
          </div>
        </Accordion>

        {/*  privacy */}
        <Accordion icon={Shield} title="Privacy" hint="Manage your data">
          <div className="flex items-center justify-between py-4 border-b border-[var(--border)]">
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)] m-0">Clear Saved Routes</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">Remove all your saved journeys</p>
            </div>
            <button
              className="flex items-center gap-1.5 px-4 py-2 border border-[var(--error)] rounded-lg bg-transparent cursor-pointer font-['DM_Sans'] text-xs font-semibold text-[var(--error)] transition-all duration-200 hover:bg-[rgba(255,77,109,0.08)] whitespace-nowrap shrink-0"
              onClick={() => setConfirm({ type: 'clearRoutes' })}
            >
              <Trash2 size={13} /> Clear All
            </button>
          </div>
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)] m-0">Delete Account</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">Permanently remove your account and data</p>
            </div>
            <button
              className="flex items-center gap-1.5 px-4 py-2 border border-[var(--error)] rounded-lg bg-transparent cursor-pointer font-['DM_Sans'] text-xs font-semibold text-[var(--error)] transition-all duration-200 hover:bg-[rgba(255,77,109,0.08)] whitespace-nowrap shrink-0"
              onClick={() => setConfirm({ type: 'deleteAccount' })}
            >
              <Trash2 size={13} /> Delete
            </button>
          </div>
        </Accordion>

        {/*  logout */}
        <Accordion icon={LogOut} title="Log Out" hint="Sign out of your account">
          <div className="flex items-center justify-between py-4">
            <div>
              <p className="text-sm font-semibold text-[var(--text-primary)] m-0">Log Out</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">You can log back in at any time</p>
            </div>
            <button
              className="flex items-center gap-1.5 px-4 py-2 border border-[var(--error)] rounded-lg bg-transparent cursor-pointer font-['DM_Sans'] text-xs font-bold text-[var(--error)] transition-all duration-200 hover:bg-[rgba(255,77,109,0.08)] whitespace-nowrap shrink-0"
              onClick={onLogout}
            >
              <LogOut size={13} /> Log Out
            </button>
          </div>
        </Accordion>

      </div>

      {/*  confirm modal */}
      {confirm && (
        <ConfirmModal
          title={confirm.type === 'clearRoutes' ? 'Clear Saved Routes?' : 'Delete Account?'}
          message={
            confirm.type === 'clearRoutes'
              ? 'This will permanently remove all your saved routes. This action cannot be undone.'
              : 'This will permanently delete your account and all associated data. Enter your password to confirm.'
          }
          requirePassword={confirm.type === 'deleteAccount'}
          onConfirm={handleConfirm}
          onCancel={() => setConfirm(null)}
        />
      )}
    </div>
  )
}

export default Settings