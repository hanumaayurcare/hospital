import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const doctors = [
  {
    name: 'Dr. Hanumaan Singh',
    role: 'Senior Physician (Neuro & Spine)',
    image: '/doctor-1.png',
    bio: 'Over 25 years of experience in treating complex neurological and spinal conditions through integrative Ayurveda.',
  },
  {
    name: 'Dr. Amrita Devi',
    role: 'Specialist (Gyno & Skin)',
    image: '/doctor-2.png',
    bio: 'Renowned for her holistic approach to women’s health and chronic skin disorders using authentic Kerala Ayurveda.',
  },
  {
    name: 'Dr. Rahul Varma',
    role: 'Panchakarma Expert',
    image: '/doctor-3.png',
    bio: 'Dedicated to the science of detoxification and rejuvenation, overseeing intensive Panchakarma protocols.',
  },
]

export function FeaturedDoctors() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">Meet Our Expert Physicians</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our team of highly qualified doctors brings decades of clinical experience and 
            deep-rooted knowledge of classical Ayurvedic texts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {doctors.map((doctor) => (
            <div key={doctor.name} className="group text-center">
              <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-8 border-muted group-hover:border-primary/20 transition-all duration-500">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">{doctor.name}</h3>
              <p className="text-primary font-semibold mb-4">{doctor.role}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {doctor.bio}
              </p>
              <Link href={`/about/team`}>
                <Button variant="link" className="text-primary font-bold p-0 h-auto">
                  View Profile
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
