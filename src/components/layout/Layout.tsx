import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { useAuth } from '@/contexts/AuthContext'

export function Layout() {
  const { user } = useAuth()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F5F7FB] text-slate-900">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      {user && <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />}

      <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  )
}
