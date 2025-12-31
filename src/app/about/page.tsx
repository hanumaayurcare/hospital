import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Award, Users, Sprout } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-24 bg-muted/50 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-5xl font-bold tracking-tight text-foreground">Our Legacy of Healing</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hanuma Ayurcare was founded with a vision to preserve the purity of Ayurvedic traditions 
              while meeting the clinical standards of modern healthcare.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 grayscale">
          <Image src="/hospital_hero_image.png" alt="Hospital background" fill className="object-cover" />
        </div>
      </section>

      {/* History & Philosophy */}
      <section className="py-24 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="/doctor-1.png" 
              alt="Founding Physician" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-primary">Philosophy & Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Hanuma Ayurcare, we believe that health is a harmonious balance between the body, 
                mind, and environment. Our approach is rooted in the "Pancha Mahabhuta" theory and 
                focuses on addressing the root cause of ailments rather than just the symptoms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Authenticity', desc: 'Strict adherence to classical texts.' },
                { title: 'Innovation', desc: 'Modern diagnostic integration.' },
                { title: 'Compassion', desc: 'Patient-centric therapeutic care.' },
                { title: 'Purity', desc: 'Sustainably sourced herbal medicines.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlights */}
      <section className="py-24 bg-primary text-white">
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Years of Excellence', value: '25+', icon: Award },
            { label: 'Expert Doctors', value: '30+', icon: Users },
            { label: 'Patient Recoveries', value: '50k+', icon: CheckCircle2 },
            { label: 'Herbal Medicines', value: '200+', icon: Sprout },
          ].map((stat) => (
            <div key={stat.label} className="space-y-4">
              <stat.icon className="h-10 w-10 mx-auto text-secondary-foreground" />
              <div className="text-4xl font-bold">{stat.value}</div>
              <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-background">
        <div className="container">
          <Card className="bg-muted border-none p-12 overflow-hidden relative">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-bold mb-6">Ready to begin your journey to wellness?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Consult with our senior physicians today and get a personalized treatment plan 
                tailored to your unique body constitution.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="rounded-full px-8 font-bold">Book an Appointment</Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 font-bold">Contact Support</Button>
              </div>
            </div>
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Users className="w-64 h-64" />
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
