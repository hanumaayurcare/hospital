import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Stethoscope, Sparkles, Bed, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const highlights = [
  {
    title: 'OPD Consultation',
    description: 'Expert consultations for acute and chronic conditions, available both in-person and via secure video calls.',
    icon: Stethoscope,
    link: '/services/opd',
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    title: 'Panchakarma',
    description: 'Authentic five-fold detoxification therapies tailored to your body constitution (Prakriti).',
    icon: Sparkles,
    link: '/services/panchakarma',
    color: 'bg-primary/10 text-primary',
  },
  {
    title: 'IPD Admission',
    description: 'Specialized inpatient care with premium facilities, monitoring, and intensive Ayurvedic treatment plans.',
    icon: Bed,
    link: '/services/ipd',
    color: 'bg-accent/10 text-accent',
  },
]

export function Highlights() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">Our Centers of Excellence</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide a comprehensive range of Ayurvedic healthcare services, from preventative wellness 
            to complex therapeutic interventions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <Card key={item.title} className="group hover:shadow-2xl transition-all duration-300 border-none bg-muted/50 overflow-hidden">
              <CardHeader className="p-8">
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">{item.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  {item.description}
                </CardDescription>
                <Link href={item.link} className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
