import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Search, Filter, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const diseases = [
  { name: 'Spondylosis', category: 'Spine', slug: 'spondylosis', summary: 'Degenerative changes in the spine that can lead to pain and stiffness.' },
  { name: 'Psoriasis', category: 'Skin', slug: 'psoriasis', summary: 'Chronic skin condition causing red, itchy scaly patches.' },
  { name: 'Fatty Liver', category: 'Gastro', slug: 'fatty-liver', summary: 'Accumulation of fat in liver cells, often reversible with Ayurveda.' },
  { name: 'Migraine', category: 'Neuro', slug: 'migraine', summary: 'Severe recurring headaches often accompanied by nausea and sensitivity.' },
  { name: 'PCOS', category: 'Gyno', slug: 'pcos', summary: 'Hormonal disorder common among women of reproductive age.' },
  { name: 'Type 2 Diabetes', category: 'Lifestyle', slug: 'diabetes', summary: 'Chronic condition that affects the way the body processes blood sugar.' },
  { name: 'Rheumatoid Arthritis', category: 'Joints', slug: 'rheumatoid-arthritis', summary: 'Autoimmune disorder that primarily affects joints.' },
  { name: 'Anxiety & Stress', category: 'Mental Health', slug: 'anxiety-stress', summary: 'Managing mental well-being through holistic Ayurvedic protocols.' },
]

export default function DiseasesPage() {
  return (
    <div className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Health Conditions we Treat</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive guides on common health conditions, their Ayurvedic explanations, 
            and our specialized treatment approaches.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input className="pl-12 h-14 rounded-2xl border-2 focus:border-primary transition-all" placeholder="Search conditions (e.g. Migraine, Psoriasis)..." />
          </div>
          <Button variant="outline" className="h-14 rounded-2xl px-8 border-2 font-bold flex gap-2">
            <Filter className="h-5 w-5" /> Filter by Category
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {diseases.map((d) => (
            <Link key={d.slug} href={`/diseases/${d.slug}`}>
              <Card className="h-full group hover:border-primary transition-all duration-300 border-2 shadow-none cursor-pointer">
                <CardHeader>
                  <span className="text-xs font-bold text-primary mb-2 uppercase tracking-widest">{d.category}</span>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{d.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="line-clamp-3 text-base">
                    {d.summary}
                  </CardDescription>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                    Read Guide <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function Button({ children, variant, className, ...props }: any) {
  const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
  const variants: any = {
    outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
    default: "bg-primary text-primary-foreground shadow hover:bg-primary/90"
  }
  return (
    <button className={`${base} ${variants[variant || 'default']} ${className}`} {...props}>
      {children}
    </button>
  )
}
