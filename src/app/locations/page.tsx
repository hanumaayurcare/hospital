import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Clock, Mail } from 'lucide-react'
import Link from 'next/link'

const branches = [
  {
    name: 'Kochi Branch (Main)',
    address: '123 Healing Path, Wellness Nagar, Kochi, Kerala - 682001',
    phone: '+91 484 123 4567',
    email: 'kochi@hanumaayurcare.com',
    timings: 'Mon - Sun: 8:00 AM - 8:00 PM',
    mapLink: 'https://maps.google.com',
  },
  {
    name: 'Bangalore Branch',
    address: '45 Lotus Tower, Indiranagar, Bangalore, Karnataka - 560038',
    phone: '+91 80 987 6543',
    email: 'blr@hanumaayurcare.com',
    timings: 'Mon - Sat: 9:00 AM - 7:00 PM',
    mapLink: 'https://maps.google.com',
  },
  {
    name: 'Hyderabad Branch',
    address: '88 Jubilee Hills, Road No. 36, Hyderabad, Telangana - 500033',
    phone: '+91 40 112 2334',
    email: 'hyd@hanumaayurcare.com',
    timings: 'Mon - Sat: 9:00 AM - 6:00 PM',
    mapLink: 'https://maps.google.com',
  },
]

export default function LocationsPage() {
  return (
    <div className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Our Locations</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Hanuma Ayurcare is expanding across major cities to bring authentic Ayurvedic 
            healing closer to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <Card key={branch.name} className="flex flex-col h-full border-2 hover:border-primary transition-all duration-300">
              <CardHeader className="bg-muted/30 p-8">
                <CardTitle className="text-2xl">{branch.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6 flex-grow">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{branch.address}</span>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{branch.phone}</span>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{branch.email}</span>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{branch.timings}</span>
                  </div>
                </div>
                
                <div className="pt-8 mt-auto space-y-3">
                  <Link href="/appointments/new" className="block">
                    <Button className="w-full rounded-full font-bold">Book at this Location</Button>
                  </Link>
                  <a href={branch.mapLink} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full rounded-full font-bold">Get Directions</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
