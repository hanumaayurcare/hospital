'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  FileText, 
  Activity, 
  Bed, 
  Settings, 
  PieChart, 
  ChevronRight, 
  ShieldCheck,
  Stethoscope,
  BookOpen,
  LogOut
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible'
import { logout } from '@/app/auth/actions'

type NavItem = {
  title: string
  href: string
  icon: React.ElementType
  roles: string[]
  items?: { title: string; href: string }[]
}

const navItems: NavItem[] = [
  // --- Global / Patient ---
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    roles: ['patient', 'doctor', 'staff', 'admin', 'super_admin']
  },
  {
    title: 'Appointments',
    href: '/appointments',
    icon: Calendar,
    roles: ['patient', 'doctor', 'staff', 'admin', 'super_admin'],
    items: [
      { title: 'My Schedule', href: '/appointments' },
      { title: 'Book New', href: '/appointments/new' }
    ]
  },
  {
    title: 'Medical Records',
    href: '/prescriptions',
    icon: FileText,
    roles: ['patient', 'doctor', 'staff', 'admin', 'super_admin']
  },
  {
    title: 'Panchakarma',
    href: '/panchakarma-sessions',
    icon: Activity,
    roles: ['patient', 'doctor', 'staff', 'admin', 'super_admin']
  },

  // --- Doctor ---
  {
    title: 'Dr. Portal',
    href: '/doctor/dashboard',
    icon: Stethoscope,
    roles: ['doctor', 'admin', 'super_admin'],
    items: [
      { title: 'Patients Queue', href: '/doctor/appointments' },
      { title: 'Therapies Tracking', href: '/doctor/panchakarma-sessions' },
    ]
  },

  // --- Admin & Staff ---
  {
    title: 'User Management',
    href: '/admin/doctors',
    icon: Users,
    roles: ['admin', 'staff', 'super_admin'],
    items: [
      { title: 'Doctors', href: '/admin/doctors' },
      { title: 'Patients', href: '/admin/patients' },
      { title: 'Staff', href: '/admin/staff' },
    ]
  },
  {
    title: 'Resources',
    href: '/admin/rooms',
    icon: Bed,
    roles: ['admin', 'staff', 'super_admin'],
    items: [
      { title: 'Rooms & Beds', href: '/admin/rooms' },
      { title: 'Global Panchakarma', href: '/admin/panchakarma' },
    ]
  },
  {
    title: 'CMS',
    href: '/admin/content',
    icon: BookOpen,
    roles: ['admin', 'super_admin'],
    items: [
      { title: 'Branches', href: '/admin/locations' },
      { title: 'Blog Posts', href: '/admin/content' },
    ]
  },
  {
    title: 'Analytics',
    href: '/admin/analytics',
    icon: PieChart,
    roles: ['admin', 'super_admin']
  },
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: Settings,
    roles: ['admin', 'super_admin']
  },
]

interface AppSidebarProps {
  role: string | null
  userName?: string
}

export function AppSidebar({ role, userName }: AppSidebarProps) {
  const pathname = usePathname()
  const [openSubMenus, setOpenSubMenus] = React.useState<string[]>([])

  const toggleSubMenu = (title: string) => {
    setOpenSubMenus(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title) 
        : [...prev, title]
    )
  }

  const filteredItems = navItems.filter(item => 
    !item.roles || (role && item.roles.includes(role))
  )

  return (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground w-64 border-r border-sidebar-border shadow-xl overflow-y-auto">
      {/* Brand Header */}
      <div className="px-6 py-8">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 bg-sidebar-primary/20 rounded-lg flex items-center justify-center group-hover:bg-sidebar-primary/30 transition-colors">
            <ShieldCheck className="h-5 w-5 text-sidebar-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight uppercase leading-none">Hanuma <span className="text-sidebar-primary text-xs block font-bold">Ayurcare</span></span>
        </Link>
      </div>

      {/* User Info */}
      <div className="px-6 py-4 mb-4 border-y border-sidebar-border bg-sidebar-accent/50">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-sidebar-primary flex items-center justify-center font-bold text-sidebar-primary-foreground shadow-sm">
            {userName ? userName[0].toUpperCase() : 'U'}
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate leading-none mb-1">{userName || 'User'}</p>
            <p className="text-[10px] uppercase font-bold text-sidebar-primary tracking-tighter opacity-90">{role?.replace('_', ' ') || 'Patient'}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-grow px-3 space-y-1 pb-10">
        {filteredItems.map((item) => {
          const isActive = pathname === item.href
          const hasItems = item.items && item.items.length > 0
          const isSubOpen = openSubMenus.includes(item.title)

          if (hasItems) {
            return (
              <Collapsible
                key={item.title}
                open={isSubOpen}
                onOpenChange={() => toggleSubMenu(item.title)}
                className="w-full"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-between px-3 py-6 rounded-xl text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/80",
                      isActive && "text-sidebar-foreground bg-sidebar-accent"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 shrink-0" />
                      <span className="font-bold text-sm">{item.title}</span>
                    </div>
                    <ChevronRight className={cn(
                      "h-4 w-4 transition-transform duration-200 text-sidebar-foreground/40",
                      isSubOpen && "rotate-90"
                    )} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 my-1">
                  {item.items?.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className={cn(
                        "flex items-center gap-3 pl-11 pr-3 py-2 text-xs font-bold rounded-xl text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors",
                        pathname === subItem.href && "text-sidebar-primary bg-sidebar-accent/50"
                      )}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            )
          }

          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent font-bold text-sm transition-all",
                isActive && "text-sidebar-foreground bg-sidebar-accent shadow-sm"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span>{item.title}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="mt-auto p-4 border-t border-sidebar-border">
        <form action={logout}>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-sidebar-foreground/60 hover:text-destructive hover:bg-destructive/10 gap-3 px-3 font-bold"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Button>
        </form>
      </div>
    </div>
  )
}
