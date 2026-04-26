import { Bus, Settings, LogIn, UserPlus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import type { User } from '../lib/types'

interface NavbarProps {
  onSignUpClick: () => void
  onLoginClick:  () => void
  user:          User | null
}

const Navbar = ({ onSignUpClick, onLoginClick, user }: NavbarProps) => {
  const navigate = useNavigate()

  return (
    <nav className="w-full h-[52px] bg-[#0a1628] border-b border-white/10 flex items-center justify-between px-6 shrink-0 z-[100]">
      
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-[#0a1628] shadow-[0_2px_8px_rgba(240,165,0,0.35)]">
          <Bus size={18} />
        </div>
        <span className="font-bold text-[15px] text-white tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
          Smart Bus Planner
        </span>
        <div className="bg-yellow-400/10 border border-yellow-400/25 text-yellow-300 text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
          Dubai RTA
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {user && (
          <button
            onClick={() => navigate('/settings')}
            className="flex items-center gap-1.5 bg-transparent border border-white/10 text-white/60 px-3 py-1.5 rounded-lg text-[13px] font-medium hover:bg-white/6 hover:text-white hover:border-white/20 transition-all"
          >
            <Settings size={15} />
            <span>Settings</span>
          </button>
        )}

        <div className="w-px h-5 bg-white/10 mx-0.5" />

        {user ? (
          <span className="text-white text-[13px]">
            Hey, <strong className="text-yellow-400">{user.name}</strong>
          </span>
        ) : (
          <>
            <button
              onClick={onLoginClick}
              className="flex items-center gap-1.5 bg-transparent border border-white/15 text-white px-3.5 py-1.5 rounded-lg text-[13px] font-medium hover:bg-white/8 hover:border-white/25 transition-all"
            >
              <LogIn size={15} />
              <span>Login</span>
            </button>

            <button
              onClick={onSignUpClick}
              className="flex items-center gap-1.5 bg-yellow-400 text-[#0a1628] px-3.5 py-1.5 rounded-lg text-[13px] font-bold hover:bg-yellow-300 hover:-translate-y-px hover:shadow-[0_4px_12px_rgba(240,165,0,0.35)] transition-all"
            >
              <UserPlus size={15} />
              <span>Sign up</span>
            </button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar