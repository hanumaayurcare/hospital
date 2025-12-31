'use client'

import { usePathname } from 'next/navigation'
import { Header } from './Header'
import { Footer } from './Footer'
import { TopBar } from './TopBar'

export function PublicLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Define paths where we want to hide the public header/footer
  const isPortalPath = pathname.startsWith('/admin') || 
                       pathname.startsWith('/doctor') || 
                       pathname.startsWith('/dashboard') ||
                       pathname.startsWith('/appointments') ||
                       pathname.startsWith('/prescriptions') ||
                       pathname.startsWith('/panchakarma-sessions') ||
                       pathname.startsWith('/video-consultation')

  if (isPortalPath) {
    return <>{children}</>
  }

  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  )
}
