import { Quote } from 'lucide-react'

const testimonials = [
  {
    content: "The treatment I received for my chronic back pain was life-changing. The doctors and therapists at Hanuma Ayurcare are truly dedicated.",
    author: "Rajesh Kumar",
    treatment: "Spine Care (Panchakarma)",
  },
  {
    content: "I've tried many medicines for my skin allergy, but only the Ayurvedic protocol here showed lasting results. Highly recommended!",
    author: "Sneha Reddy",
    treatment: "Skin Care",
  },
  {
    content: "A serene environment and excellent medical care. The staff makes you feel at home while you undergo intensive healing.",
    author: "Arjun Sharma",
    treatment: "Stress Management",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-24 opacity-10">
        <Quote className="w-64 h-64" />
      </div>
      <div className="container relative">
        <h2 className="text-4xl font-bold tracking-tight mb-16 text-center">What Our Patients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="space-y-6">
              <Quote className="h-8 w-8 text-secondary-foreground" />
              <p className="text-xl leading-relaxed italic">&quot;{t.content}&quot;</p>
              <div>
                <p className="font-bold text-lg">{t.author}</p>
                <p className="text-primary-foreground/70 text-sm font-medium">{t.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
