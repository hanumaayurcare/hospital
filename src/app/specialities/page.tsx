import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Activity, ShieldCheck, HeartPulse } from 'lucide-react'
import Link from 'next/link'

const specialities = [
  {
    name: 'Spine & Joint Care',
    description: 'Specialized treatments for disc prolapse, spondylosis, arthritis, and other musculoskeletal disorders.',
    icon: Activity,
    slug: 'spine-joint-care',
    doctors: 5,
  },
  {
    name: 'Neuro Care',
    description: 'Holistic management of neurological conditions like paralysis, migraine, and cognitive disorders.',
    icon: ShieldCheck,
    slug: 'neuro-care',
    doctors: 4,
  },
  {
    name: 'Gastro & Liver Care',
    description: 'Addressing digestive issues, fatty liver, and metabolic disorders through deep cleansing.',
    icon: HeartPulse,
    slug: 'gastro-liver-care',
    doctors: 3,
  },
  {
    name: 'Skin & Allergy Care',
    description: 'Expert care for chronic psoriasis, eczema, and recurring allergies using internal and external therapies.',
    icon: ShieldCheck,
    slug: 'skin-care',
    doctors: 3,
  },
  {
    name: 'Gyno & Fertility Care',
    description: 'Personalized programs for Hormonal imbalance, PCOS, and Ayurvedic prenatal & postnatal care.',
    icon: HeartPulse,
    slug: 'gyno-care',
    doctors: 4,
  },
  {
    name: 'Lifestyle Disorders',
    description: 'Management of diabetes, hypertension, and obesity through sustainable lifestyle modifications.',
    icon: Activity,
    slug: 'lifestyle-disorders',
    doctors: 6,
  },
]

export default function SpecialitiesPage() {
  return (
    <div className="py-24 bg-muted/30 min-h-screen">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Medical Specialities</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Leading-edge Ayurvedic clinical departments providing specialized care for complex health challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialities.map((spec) => (
            <Card key={spec.name} className="group hover:border-primary transition-all duration-300 shadow-none border-2">
              <CardHeader className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <spec.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors">{spec.name}</CardTitle>
                <CardDescription className="text-base leading-relaxed mb-6">
                  {spec.description}
                </CardDescription>
                <div className="pt-4 border-t flex justify-between items-center text-sm font-medium text-muted-foreground">
                  <span>{spec.doctors} Specialist Doctors</span>
                  <Link href={`/specialities/${spec.slug}`} className="flex items-center gap-1 text-primary hover:gap-2 transition-all">
                    Consult <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
