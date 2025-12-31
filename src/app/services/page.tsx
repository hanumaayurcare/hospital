import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Clock, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: 'Panchakarma Detox',
    description: 'A comprehensive 7-21 day detoxification program to eliminate deep-seated toxins and restore balance.',
    duration: '7 - 21 Days',
    price: 'Starting from ₹25,000',
    slug: 'panchakarma',
    category: 'Therapeutic',
  },
  {
    title: 'Rejuvenation (Rasayana)',
    description: 'Therapies focused on strengthening the immune system and revitalizing body tissues for longevity.',
    duration: '3 - 7 Days',
    price: 'Starting from ₹15,000',
    slug: 'rejuvenation',
    category: 'Wellness',
  },
  {
    title: 'Stress Management',
    description: 'Personalized programs including Shirodhara and yoga to combat modern lifestyle stress and anxiety.',
    duration: '5 - 10 Days',
    price: 'Starting from ₹12,000',
    slug: 'stress-management',
    category: 'Lifestyle',
  },
  {
    title: 'Weight Management',
    description: 'Udvarthanam (herbal powder massage) and customized diet plans for natural weight loss.',
    duration: '14 - 28 Days',
    price: 'Starting from ₹35,000',
    slug: 'weight-management',
    category: 'Therapeutic',
  },
  {
    title: 'Pain Management',
    description: 'Specialized treatments for arthritis, spondylosis, and sports injuries using Kizhi and Basti.',
    duration: '7 - 14 Days',
    price: 'Starting from ₹20,000',
    slug: 'pain-management',
    category: 'Therapeutic',
  },
  {
    title: 'Skin & Beauty Care',
    description: 'Herbal facials and therapies for chronic skin conditions like psoriasis and eczema.',
    duration: '5 - 10 Days',
    price: 'Starting from ₹10,000',
    slug: 'skin-care',
    category: 'Wellness',
  },
]

export default function ServicesPage() {
  return (
    <div className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Our Healing Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We offer a wide spectrum of traditional Ayurvedic treatments combined with modern clinical monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-2xl transition-all duration-300 border-muted">
              <CardHeader className="space-y-4">
                <div className="flex justify-between items-start">
                   <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                    {service.category}
                  </span>
                  <Star className="h-5 w-5 text-accent" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                <CardDescription className="text-base line-clamp-2 italic">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Duration: {service.duration}</span>
                  </div>
                  <div className="font-bold text-foreground">
                    {service.price}
                  </div>
                </div>
                <Link href={`/services/${service.slug}`} className="block">
                  <Button className="w-full rounded-full font-bold group-hover:gap-4 transition-all">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
