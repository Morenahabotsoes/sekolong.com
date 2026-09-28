import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { SekolongLogo } from '@/components/logo/SekolongLogo'

interface NavbarProps {
  onMenuClick?: () => void
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const { user } = useAuth()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-[#02070d] shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="Sekolong home">
          <SekolongLogo className="max-w-[320px]" />
        </Link>

        {user && (
          <button
            onClick={onMenuClick}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
            aria-label="Open dashboard menu"
            title="Open dashboard menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}
      </div>
    </header>
  )
}
