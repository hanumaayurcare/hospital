import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <Image
        src="/hospital_hero_image.png"
        alt="Hanuma Ayurcare Hospital"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      <div className="container relative flex h-full items-center justify-start">
        <div className="max-w-2xl space-y-6">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Authentic Ayurvedic Healing
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl leading-[1.1]">
            Experience the Science of <span className="text-primary italic">Well-being</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Combining millennium-old wisdom with modern clinical precision. 
            Hanuma Ayurcare provides personalized treatments for holistic recovery and rejuvenation.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/appointments/new">
              <Button size="lg" className="rounded-full px-8 text-lg font-bold shadow-xl shadow-primary/20">
                Book Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg font-bold bg-background/50 backdrop-blur-sm">
                Explore Treatments
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-8 pt-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">25k+</span>
              <span className="text-sm text-muted-foreground font-medium">Happy Patients</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">15+</span>
              <span className="text-sm text-muted-foreground font-medium">Specialities</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-primary">10+</span>
              <span className="text-sm text-muted-foreground font-medium">Locations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
