import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import SekolongLogo from '@/components/logo/SekolongLogo'

interface NavbarProps {
  onMenuClick?: () => void
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-[#F7FAFF]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[80px] max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <SekolongLogo className="scale-[0.9] sm:scale-100" />
        </Link>

        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open user dashboard"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0E2F9A]/15 bg-white text-[#0E2F9A] shadow-sm transition hover:bg-[#EAF8FF] hover:text-[#0E2F9A]"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>
    </header>
  )
}
