import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              HANUMA <span className="text-secondary-foreground">AYURCARE</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Experience the ancient wisdom of Ayurveda combined with modern clinical excellence. 
              Dedicated to holistic healing and well-being.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Our Services', href: '/services' },
                { label: 'Specialities', href: '/specialities' },
                { label: 'Common Diseases', href: '/diseases' },
                { label: 'Hospital Locations', href: '/locations' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              {[
                { label: 'Book Appointment', href: '/appointments/new' },
                { label: 'Patient Portal', href: '/dashboard' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  123 Healing Path, Wellness Nagar, <br />
                  Kerala, India - 682001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">contact@hanumaayurcare.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Hanuma Ayurcare Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
