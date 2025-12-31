import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export function TopBar() {
  return (
    <div className="bg-zinc-900 text-white/70 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] border-b border-white/5">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="mailto:info@hanumaayurcare.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="h-3.5 w-3.5" />
            <span>info@hanumaayurcare.com</span>
          </Link>
          <Link href="tel:+911234567890" className="flex items-center gap-2 hover:text-primary transition-colors border-l border-white/10 pl-6">
            <Phone className="h-3.5 w-3.5" />
            <span>+91 12345 67890</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-6 hidden sm:flex">
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-primary" />
            <span>OPD: 08:00 AM - 08:00 PM</span>
          </div>
          <div className="flex items-center gap-2 border-l border-white/10 pl-6">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>Kochi • Bangalore • Hyderabad</span>
          </div>
        </div>
      </div>
    </div>
  )
}
