import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Clock, Sparkles, Leaf, Droplets } from 'lucide-react'
import Link from 'next/link'

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const serviceName = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/90 z-10" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        
        <div className="container relative z-20 text-center text-white space-y-8">
           <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest">
              <Sparkles className="h-4 w-4 text-primary-foreground" /> Panchakarma Excellence
           </div>
           <h1 className="text-5xl md:text-7xl font-bold italic tracking-tight">{serviceName}</h1>
           <p className="max-w-2xl mx-auto text-xl opacity-90 leading-relaxed font-medium">
             A traditional Ayurvedic detoxification and rejuvenation therapy designed to restore 
             balance and vitality through ancient healing techniques.
           </p>
           <div className="pt-8">
              <Link href="/appointments/booking">
                 <Button className="bg-white text-primary hover:bg-white/90 h-16 px-12 rounded-full font-bold text-lg shadow-2xl shadow-black/20">
                    Book This Therapy
                 </Button>
              </Link>
           </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
         <div className="container grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
               <div className="space-y-6">
                  <h2 className="text-3xl font-bold italic border-l-4 border-primary pl-6">Understanding the Therapy</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                     {serviceName} is a comprehensive healing process that focuses on deep tissue cleansing. 
                     In Ayurveda, this therapy is considered the ultimate path to purification. It doesn't just treat 
                     the symptoms but goes to the root cause of the imbalance (Dosha).
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                     Our expert therapists use medicated oils and specific pressure points to stimulate the body's 
                     natural detoxification pathways, ensuring a serene and transformative experience.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="border-none shadow-xl rounded-[2.5rem] bg-muted/30 overflow-hidden">
                     <CardContent className="p-10 space-y-6">
                        <h4 className="text-xl font-bold italic flex items-center gap-3"><Leaf className="h-6 w-6 text-primary" /> Key Benefits</h4>
                        <ul className="space-y-4">
                           {['Deep Detoxification', 'Reduces Stress & Anxiety', 'Improved Circulation', 'Enhanced Immunity', 'Restores Hormonal Balance'].map((benefit) => (
                             <li key={benefit} className="flex items-center gap-3 text-sm font-bold text-muted-foreground italic">
                                <CheckCircle2 className="h-4 w-4 text-primary" /> {benefit}
                             </li>
                           ))}
                        </ul>
                     </CardContent>
                  </Card>
                  <div className="bg-primary/5 rounded-[2.5rem] p-10 flex flex-col justify-center space-y-6">
                     <h4 className="text-xl font-bold italic">Therapy Details</h4>
                     <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm font-bold">
                           <span className="text-muted-foreground flex items-center gap-2"><Clock className="h-4 w-4" /> Duration</span>
                           <span className="text-primary italic">60 - 90 Minutes</span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-bold border-t pt-4">
                           <span className="text-muted-foreground flex items-center gap-2"><Sparkles className="h-4 w-4" /> Intensity</span>
                           <span className="text-primary italic">Gentle to Moderate</span>
                        </div>
                        <div className="flex justify-between items-center text-sm font-bold border-t pt-4">
                           <span className="text-muted-foreground flex items-center gap-2"><Droplets className="h-4 w-4" /> Oil Type</span>
                           <span className="text-primary italic">Medicated Herbal Oil</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-6">
                  <h2 className="text-3xl font-bold italic">Why Choose Hanuma?</h2>
                  <div className="prose prose-stone max-w-none text-muted-foreground italic font-medium">
                     <p>At Hanuma Ayurcare, we maintain the highest standards of traditional practice combined 
                     with modern clinical safety. Our therapists are trained in heritage techniques passed 
                     down through generations of Keralite practitioners.</p>
                  </div>
               </div>
            </div>

            {/* Sidebar Sticky */}
            <div className="space-y-8">
               <Card className="border-none shadow-2xl rounded-[3rem] bg-zinc-900 text-white overflow-hidden sticky top-32">
                  <CardContent className="p-10 space-y-8">
                     <h3 className="text-2xl font-bold italic">Need Help Choosing?</h3>
                     <p className="text-xs opacity-60 font-bold uppercase tracking-widest leading-relaxed">
                        Consult with our Ayurvedic doctors to determine the best treatment plan for your specific body type.
                     </p>
                     <div className="space-y-4">
                        <Button className="w-full h-14 rounded-2xl bg-white text-primary font-bold hover:bg-white/90">
                           Talk to a Doctor
                        </Button>
                        <Button variant="outline" className="w-full h-14 rounded-2xl border-white/20 text-white font-bold hover:bg-white/10">
                           Call Us Now
                        </Button>
                     </div>
                     <div className="pt-8 border-t border-white/10 text-center">
                        <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.2em]">Contact Information</p>
                        <p className="mt-2 text-sm font-bold">+91 98765 43210</p>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>
      </section>
    </div>
  )
}
