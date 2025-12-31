import { Button } from '@/components/ui/button'
import { Stethoscope, Activity, Users, Star, ShieldCheck, Heart, Sparkles, Wind } from 'lucide-react'
import Link from 'next/link'

export default function SpecialityDetailPage({ params }: { params: { slug: string } }) {
  const specName = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <div className="flex flex-col">
      {/* Dynamic Header */}
      <section className="pt-32 pb-24 bg-muted/30">
        <div className="container">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 space-y-8">
                 <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                    <ShieldCheck className="h-4 w-4" /> Board Certified Speciality
                 </div>
                 <h1 className="text-5xl md:text-7xl font-bold tracking-tight italic">{specName} Care</h1>
                 <p className="text-xl text-muted-foreground leading-relaxed italic">
                    Comprehensive Ayurvedic management for {specName.toLowerCase()} related issues, 
                    prioritizing long-term wellness through personalized dietary and lifestyle interventions.
                 </p>
                 <div className="flex flex-wrap gap-4 pt-4">
                    <Link href="/appointments/booking">
                       <Button size="lg" className="rounded-full px-10 h-16 font-bold text-lg shadow-xl shadow-primary/20">
                          Book Consultation
                       </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="rounded-full px-10 h-16 font-bold text-lg border-2">
                       View Case Studies
                    </Button>
                 </div>
              </div>
              <div className="lg:w-1/2 relative group">
                 <div className="absolute inset-0 bg-primary/20 rounded-[4rem] group-hover:rotate-3 transition-transform duration-700" />
                 <div className="relative h-[500px] w-full bg-white rounded-[4rem] border-2 border-primary/10 overflow-hidden shadow-2xl p-12">
                    <Activity className="absolute top-10 right-10 h-24 w-24 text-primary/5 -rotate-12" />
                    <div className="h-full flex flex-col justify-end space-y-6">
                       <div className="h-20 w-20 rounded-3xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/30">
                          <Stethoscope className="h-10 w-10" />
                       </div>
                       <h3 className="text-3xl font-bold italic">Clinical Excellence in {specName}</h3>
                       <div className="flex items-center gap-4 text-sm font-bold text-muted-foreground uppercase tracking-widest">
                          <Users className="h-5 w-5 text-primary" /> 10,000+ Recoveries
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
                          <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" /> 4.9 Rating
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Specialty Focus Sections */}
      <section className="py-24 bg-white">
         <div className="container space-y-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { title: 'Diagnosis (Nidana)', desc: 'Precise identification of the deep-seated cause using Pulse Diagnosis (Nadi Pariksha) and Prakriti analysis.', icon: Activity },
                 { title: 'Treatment (Chikitsa)', desc: 'Holistic approach involving internal medication, external therapies, and specialized diet plans.', icon: Heart },
                 { title: 'Rejuvenation (Rasayana)', desc: 'Post-treatment protocols to strengthen the immune system and prevent recurrence of the ailment.', icon: Sparkles },
               ].map((step, idx) => (
                 <div key={idx} className="space-y-6 group">
                    <div className="h-14 w-14 rounded-2xl bg-muted/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                       <step.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-bold italic">{step.title}</h3>
                    <p className="text-muted-foreground font-medium leading-relaxed italic">{step.desc}</p>
                 </div>
               ))}
            </div>

            <div className="bg-zinc-900 rounded-[4rem] p-16 text-white overflow-hidden relative">
               <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                     <h2 className="text-4xl font-bold italic">Expert Doctors in {specName}</h2>
                     <p className="text-lg opacity-70 leading-relaxed italic">
                        Our specialists have over 20+ years of experience in treating complex chronic 
                        conditions using evidenced-based Ayurvedic medicine.
                     </p>
                     <Button className="h-14 rounded-xl px-12 bg-white text-primary font-bold hover:bg-white/90">
                        View All Doctors
                     </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                     {[1, 2].map(i => (
                       <div key={i} className="bg-white/5 rounded-3xl p-8 space-y-4 border border-white/10 hover:bg-white/10 transition-colors">
                          <div className="h-16 w-16 rounded-2xl bg-primary/20" />
                          <h4 className="font-bold italic">Dr. Senior Consultant</h4>
                          <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">BAMS, MD (Ayurveda)</p>
                       </div>
                     ))}
                  </div>
               </div>
               <Wind className="absolute top-[-50px] left-[-50px] h-64 w-64 opacity-5 rotate-45" />
            </div>
         </div>
      </section>
    </div>
  )
}
