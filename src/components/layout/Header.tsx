import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Menu, User } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Specialities', href: '/specialities' },
  { label: 'Diseases', href: '/diseases' },
  { label: 'Locations', href: '/locations' },
  { label: 'Blog', href: '/blog' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary tracking-tight">
              HANUMA <span className="text-accent">AYURCARE</span>
            </span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          <Link href="/appointments/new">
            <Button className="rounded-full px-6 font-semibold shadow-lg shadow-primary/20">
              Book Appointment
            </Button>
          </Link>

          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}
