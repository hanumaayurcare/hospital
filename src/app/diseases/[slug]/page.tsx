import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Activity, ShieldCheck, Heart, Sparkles, ChevronRight, Info, AlertTriangle, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function DiseaseDetailPage({ params }: { params: { slug: string } }) {
  const diseaseName = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <div className="flex flex-col bg-muted/20 min-h-screen">
      {/* Header */}
      <section className="bg-white pt-32 pb-20 border-b">
         <div className="container">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
               <div className="space-y-4 max-w-2xl">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                     <Info className="h-4 w-4" /> Patient Education Resource
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold tracking-tight italic">{diseaseName} Management</h1>
                  <p className="text-xl text-muted-foreground font-medium italic">
                     Understanding and treating {diseaseName.toLowerCase()} through the principles of root-cause healing.
                  </p>
               </div>
               <Link href="/appointments/booking">
                  <Button className="rounded-full px-12 h-16 font-bold text-lg shadow-2xl shadow-primary/20">
                     Start Treatment Plan
                  </Button>
               </Link>
            </div>
         </div>
      </section>

      {/* Disease Info Grid */}
      <section className="py-24 container">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
               <Card className="border-none shadow-xl rounded-[3rem] overflow-hidden bg-white">
                  <CardContent className="p-12 space-y-8">
                     <div className="space-y-4">
                        <h2 className="text-3xl font-bold italic flex items-center gap-3"><AlertTriangle className="h-7 w-7 text-orange-500" /> What is {diseaseName}?</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed italic">
                           In Ayurveda, {diseaseName.toLowerCase()} is often linked to an imbalance in the Agni (digestive fire) 
                           and accumulation of Ama (toxins). This condition affects the body's natural rhythm and requires 
                           a systematic approach to restore balance.
                        </p>
                     </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t">
                        <div className="space-y-4">
                           <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Common Symptoms</h4>
                           <ul className="space-y-3">
                              {['Persistent Fatigue', 'Digestive Heaviness', 'Joint Stiffness', 'Mental Fog'].map(s => (
                                <li key={s} className="flex items-center gap-3 text-sm font-medium italic opacity-80"><Activity className="h-4 w-4 text-muted-foreground" /> {s}</li>
                              ))}
                           </ul>
                        </div>
                        <div className="space-y-4">
                           <h4 className="font-bold text-sm uppercase tracking-widest text-primary">Ayurvedic Perspective</h4>
                           <p className="text-sm italic opacity-80 font-medium">Primarily a result of Vata-Pitta imbalance causing metabolic disruption in the deep tissue layers (Dhatus).</p>
                        </div>
                     </div>
                  </CardContent>
               </Card>

               <div className="space-y-8">
                  <h2 className="text-3xl font-bold italic px-4">Our Treatment Approach</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {[
                       { title: 'Shodhana (Detox)', desc: 'Panchakarma therapies to remove deep-seated toxins.', color: 'bg-primary' },
                       { title: 'Shamana (Balance)', desc: 'Herbal medications to pacify the aggravated Doshas.', color: 'bg-accent' },
                       { title: 'Ahara (Diet)', desc: 'Specifically tailored nutritional plans for your Prakriti.', color: 'bg-amber-600' },
                       { title: 'Vihara (Lifestyle)', desc: 'Yogic practices and routines to maintain health.', color: 'bg-zinc-800' },
                     ].map((step, idx) => (
                       <Card key={idx} className="border-none shadow-lg rounded-[2rem] bg-white hover:bg-muted/5 transition-colors overflow-hidden">
                          <CardContent className="p-8 flex items-center gap-6">
                             <div className={`h-12 w-12 rounded-2xl ${step.color} flex-shrink-0`} />
                             <div className="space-y-1">
                                <h4 className="font-bold italic text-lg">{step.title}</h4>
                                <p className="text-xs font-bold text-muted-foreground">{step.desc}</p>
                             </div>
                          </CardContent>
                       </Card>
                     ))}
                  </div>
               </div>
            </div>

            {/* Sticky Treatment Summary */}
            <div className="space-y-8">
               <Card className="border-none shadow-2xl rounded-[3rem] bg-zinc-900 text-white overflow-hidden sticky top-32">
                  <CardContent className="p-10 space-y-8">
                     <h3 className="text-2xl font-bold italic">Healing Timeline</h3>
                     <div className="space-y-6">
                        <div className="flex gap-6 items-start">
                           <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">1</div>
                           <p className="text-sm font-medium italic opacity-70">Initial consultation & Dosha analysis (Day 1)</p>
                        </div>
                        <div className="flex gap-6 items-start">
                           <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">2</div>
                           <p className="text-sm font-medium italic opacity-70">Intensive therapy & Detoxification (Weeks 1-3)</p>
                        </div>
                        <div className="flex gap-6 items-start">
                           <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold shrink-0 mt-1">3</div>
                           <p className="text-sm font-medium italic opacity-70">Rejuvenation & Maintenance (Months 1-3)</p>
                        </div>
                     </div>
                     <Button className="w-full h-14 rounded-2xl bg-white text-primary font-bold hover:bg-white/90">
                        View Detailed Protocol
                     </Button>
                  </CardContent>
               </Card>
            </div>
         </div>
      </section>
    </div>
  )
}
