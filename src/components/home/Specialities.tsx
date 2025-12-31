import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const specialities = [
  { name: 'Spine Care', icon: '/icons/spine.svg', slug: 'spine-care' },
  { name: 'Neuro Care', icon: '/icons/neuro.svg', slug: 'neuro-care' },
  { name: 'Joint Care', icon: '/icons/joint.svg', slug: 'joint-care' },
  { name: 'Skin Care', icon: '/icons/skin.svg', slug: 'skin-care' },
  { name: 'Gastro & Liver', icon: '/icons/gastro.svg', slug: 'gastro-liver' },
  { name: 'Gyno Care', icon: '/icons/gyno-care', slug: 'gyno-care' },
  { name: 'Cancer Support', icon: '/icons/cancer.svg', slug: 'cancer-support' },
  { name: 'Autoimmune', icon: '/icons/autoimmune.svg', slug: 'autoimmune' },
]

export function Specialities() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">Specialized Ayurvedic Treatments</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our departments are led by senior physicians specializing in treating complex systemic 
              and lifestyle disorders through personalized Ayurvedic protocols.
            </p>
          </div>
          <Link href="/specialities">
            <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white font-bold px-8">
              View All Specialities
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialities.map((spec) => (
            <Link 
              key={spec.name} 
              href={`/specialities/${spec.slug}`}
              className="group relative flex flex-col items-center justify-center p-8 bg-background border rounded-3xl hover:border-primary transition-all duration-300"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-muted rounded-2xl group-hover:bg-primary/10 transition-colors">
                {/* Fallback to initials if icon is missing */}
                <span className="text-2xl font-bold text-primary">{spec.name[0]}</span>
              </div>
              <h3 className="text-lg font-bold text-center mb-2 group-hover:text-primary transition-colors">{spec.name}</h3>
              <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'default'
}

function Button({ children, variant, className, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  const variants = {
    outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90"
  }
  return (
    <button className={`${base} ${variants[variant || 'default']} ${className}`} {...props}>
      {children}
    </button>
  )
}
