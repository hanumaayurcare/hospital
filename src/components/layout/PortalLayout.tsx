import * as React from 'react'
import { createClient } from '@/lib/supabase/server'
import { AppSidebar } from './AppSidebar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, UserCircle } from 'lucide-react'

interface PortalLayoutProps {
  children: React.ReactNode
}

export async function PortalLayout({ children }: PortalLayoutProps) {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  let role = 'patient'
  let fullName = 'User'
  
  if (user) {
    const { data: membership } = await supabase
      .from('context_memberships')
      .select('role')
      .eq('user_id', user.id)
      .eq('context_type', 'global')
      .single()
      
    const { data: profile } = await supabase
      .from('profiles')
      .select('full_name')
      .eq('id', user.id)
      .single()
      
    role = membership?.role || 'patient'
    fullName = profile?.full_name || user.email?.split('@')[0] || 'User'
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col sticky top-0 h-screen shrink-0 border-r border-border">
        <AppSidebar role={role} userName={fullName} />
      </aside>

      <div className="flex-grow flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="lg:hidden sticky top-0 z-40 flex items-center justify-between h-16 px-4 border-b bg-sidebar text-sidebar-foreground shadow-sm">
          <div className="flex items-center gap-2">
             <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-sidebar-accent">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 border-none bg-sidebar w-64">
                <AppSidebar role={role} userName={fullName} />
              </SheetContent>
            </Sheet>
            <span className="font-bold tracking-tight text-sidebar-primary">HANUMA</span>
          </div>
          
          <Button variant="ghost" size="icon" className="hover:bg-sidebar-accent">
            <UserCircle className="h-6 w-6" />
          </Button>
        </header>

        {/* Dynamic Content Area */}
        <main className="flex-grow p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
