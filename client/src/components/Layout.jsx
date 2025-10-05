import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './Navbar'

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const navigation = [
    { name: 'Dashboard', path: '/', icon: '📊' },
    { name: 'Documents', path: '/documents', icon: '📄' },
    { name: 'Clients', path: '/clients', icon: '👥' },
    { name: 'Calendar', path: '/calendar', icon: '📅' },
    { name: 'Research', path: '/research', icon: '🔍' },
    { name: 'Billing', path: '/billing', icon: '💰' },
    { name: 'Workflow', path: '/workflow', icon: '⚡' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navbar />

      <div className="flex pt-14">
        {/* Sidebar */}
        <aside
          className={`fixed left-0 top-14 h-[calc(100vh-3.5rem)] bg-white shadow-lg transition-all duration-300 ${
            isSidebarOpen ? 'w-64' : 'w-16'
          }`}
        >
          <nav className="p-2 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <span className="text-xl mr-3">{item.icon}</span>
                {isSidebarOpen && <span>{item.name}</span>}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? 'ml-64' : 'ml-16'
          } p-6`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
