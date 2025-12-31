import { Card, CardContent } from '@/components/ui/card'
import { Quote, Star, PlayCircle } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    content: "The treatment I received for my chronic back pain was life-changing. The doctors and therapists at Hanuma Ayurcare are truly dedicated.",
    author: "Rajesh Kumar",
    treatment: "Spine Care (Panchakarma)",
    category: "Spine",
    verified: true,
  },
  {
    content: "I've tried many medicines for my skin allergy, but only the Ayurvedic protocol here showed lasting results. Highly recommended!",
    author: "Sneha Reddy",
    treatment: "Skin Care",
    category: "Skin",
    verified: true,
  },
  {
    content: "A serene environment and excellent medical care. The staff makes you feel at home while you undergo intensive healing.",
    author: "Arjun Sharma",
    treatment: "Stress Management",
    category: "Mental Health",
    verified: true,
  },
  {
    content: "Excellent management of my diabetic condition through diet and herbal medicines. My glucose levels are finally under control.",
    author: "Priya Menon",
    treatment: "Lifestyle Disorder Management",
    category: "Lifestyle",
    verified: true,
  },
  {
    content: "Hanuma Ayurcare's postpartum care was a blessing. The traditional massages and supplements helped me recover so quickly.",
    author: "Lakshmi Rao",
    treatment: "Postnatal Care",
    category: "Gyno",
    verified: true,
  },
  {
    content: "The holistic detox program cleared my mind and body. I feel 10 years younger and much more energetic.",
    author: "Suresh Gupta",
    treatment: "Rejuvenation Program",
    category: "Wellness",
    verified: true,
    isVideo: true,
  },
]

export default function TestimonialsPage() {
  return (
    <div className="py-24 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-foreground">Recovery Stories</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real stories of transformation and healing from patients who regained their health 
            through Hanuma Ayurcare's authentic Ayurvedic care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-background border-none shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              {t.isVideo && (
                <div className="absolute top-4 right-4 text-primary">
                  <PlayCircle className="h-6 w-6" />
                </div>
              )}
              <CardContent className="p-10 space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20 absolute top-8 left-8" />
                <p className="text-lg leading-relaxed text-muted-foreground italic relative z-10">
                  &quot;{t.content}&quot;
                </p>
                <div className="pt-6 border-t flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                    {t.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{t.author}</h4>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest">{t.treatment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
