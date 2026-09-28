import { NavLink } from 'react-router-dom'
import {
  BookOpen,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  School,
  Settings,
  Users,
} from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import type { UserRole } from '@/types'

interface NavItem {
  to: string
  label: string
  icon: React.ReactNode
  roles: UserRole[]
}

const navItems: NavItem[] = [
  {
    to: '/dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboard className="h-5 w-5" />,
    roles: ['student', 'teacher', 'parent', 'admin'],
  },
  {
    to: '/courses',
    label: 'Courses',
    icon: <BookOpen className="h-5 w-5" />,
    roles: ['student', 'teacher', 'admin'],
  },
  {
    to: '/my-learning',
    label: 'My Learning',
    icon: <GraduationCap className="h-5 w-5" />,
    roles: ['student'],
  },
  {
    to: '/classes',
    label: 'Classes',
    icon: <Users className="h-5 w-5" />,
    roles: ['teacher', 'admin'],
  },
  {
    to: '/curriculum',
    label: 'Curriculum',
    icon: <FileText className="h-5 w-5" />,
    roles: ['admin'],
  },
  {
    to: '/schools',
    label: 'Schools',
    icon: <School className="h-5 w-5" />,
    roles: ['admin'],
  },
  {
    to: '/settings',
    label: 'Settings',
    icon: <Settings className="h-5 w-5" />,
    roles: ['student', 'teacher', 'parent', 'admin'],
  },
]

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const { profile, signOut } = useAuth()
  const role = profile?.role ?? 'student'
  const visibleItems = navItems.filter((item) => item.roles.includes(role))

  return (
    <>
      {open && <div className="fixed inset-0 z-40 bg-slate-950/25" onClick={onClose} />}

      <aside
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-[340px] border-l border-slate-200 bg-white shadow-2xl transition-transform duration-200 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-200 px-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">User dashboard</p>
            <h2 className="mt-1 text-lg font-bold text-slate-900">{profile?.full_name || 'Learner'}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 p-2 text-slate-500 hover:bg-slate-100"
            aria-label="Close dashboard"
          >
            ✕
          </button>
        </div>

        <div className="px-5 py-5">
          <div className="rounded-2xl bg-[#EEF9FF] p-4">
            <p className="text-sm text-slate-500">Role</p>
            <div className="mt-2 flex items-center gap-2">
              <span className="inline-flex rounded-full bg-white px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0E2F9A]">
                {role}
              </span>
            </div>
          </div>

          <nav className="mt-6 space-y-1">
            {visibleItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`
                }
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                  {item.icon}
                </span>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Mosuoe</p>
                <p className="text-xs text-slate-500">Your digital teacher</p>
              </div>
            </div>
            <button type="button" className="btn-primary mt-4 w-full">
              Ask Mosuoe
            </button>
          </div>

          <button
            type="button"
            onClick={() => signOut()}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </aside>
    </>
  )
}
