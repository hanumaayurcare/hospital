import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sparkles, Activity, Calendar, Clock, ChevronRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function PanchakarmaSessionsPage() {
  const sessions = [
    { id: 1, therapy: 'Abhyangam & Pizhichil', date: 'Dec 25 - Jan 08', progress: 45, status: 'Ongoing', supervisor: 'Dr. Hanumaan Singh' },
    { id: 2, therapy: 'Udvarthanam (Weight Care)', date: 'Oct 10 - Oct 24', progress: 100, status: 'Completed', supervisor: 'Dr. Amrita Devi' },
  ]

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Panchakarma Therapies</h1>
            <p className="text-lg text-muted-foreground">Track your intensive Ayurvedic treatment progress.</p>
          </div>
          <Link href="/services/panchakarma">
            <Button variant="outline" size="lg" className="rounded-full px-8 font-bold border-2">
              Learn About Panchakarma
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8">
           {sessions.map((s) => (
             <Card key={s.id} className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white hover:scale-[1.01] transition-transform duration-500">
                <CardContent className="p-0">
                   <div className="flex flex-col lg:flex-row">
                      {/* Left: Status & Therapy Icon */}
                      <div className={`p-10 lg:w-72 flex flex-col items-center justify-center text-center ${s.status === 'Ongoing' ? 'bg-primary text-white' : 'bg-muted/50 text-muted-foreground'}`}>
                         <div className={`h-20 w-20 rounded-3xl flex items-center justify-center mb-6 shadow-2xl ${s.status === 'Ongoing' ? 'bg-white/20' : 'bg-white'}`}>
                            {s.status === 'Completed' ? <CheckCircle2 className="h-10 w-10 text-green-500" /> : <Sparkles className="h-10 w-10" />}
                         </div>
                         <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-2">{s.status}</h3>
                         <p className="text-sm font-bold opacity-80">{s.date}</p>
                      </div>

                      {/* Right: Info & Progress */}
                      <div className="p-10 flex-grow space-y-8">
                         <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                            <div className="space-y-2">
                               <h2 className="text-3xl font-bold">{s.therapy}</h2>
                               <p className="text-muted-foreground font-medium">Supervised by <span className="text-primary font-bold">{s.supervisor}</span></p>
                            </div>
                            <Link href={`/panchakarma-sessions/${s.id}`}>
                              <Button className="rounded-full font-bold px-8">View Records</Button>
                            </Link>
                         </div>

                         <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm font-bold">
                               <span className="flex items-center gap-2"><Activity className="h-4 w-4" /> Treatment Progress</span>
                               <span>{s.progress}%</span>
                            </div>
                            <div className="w-full bg-muted h-3 rounded-full overflow-hidden">
                               <div className={`h-full ${s.status === 'Ongoing' ? 'bg-primary' : 'bg-green-500'} transition-all duration-1000`} style={{ width: `${s.progress}%` }} />
                            </div>
                            <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                               <span>Start: Therapy Day 1</span>
                               <span>Target: Day 14</span>
                            </div>
                         </div>
                         
                         <div className="pt-6 border-t flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 text-xs font-bold px-4 py-2 bg-muted rounded-xl">
                               <Clock className="h-4 w-4 text-primary" /> 08:30 AM Daily
                            </div>
                            <div className="flex items-center gap-2 text-xs font-bold px-4 py-2 bg-muted rounded-xl">
                               <Calendar className="h-4 w-4 text-primary" /> 14 Days Course
                            </div>
                         </div>
                      </div>
                   </div>
                </CardContent>
             </Card>
           ))}
        </div>

        <section className="bg-accent text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden mt-12">
           <div className="relative z-10 max-w-2xl space-y-6">
              <h2 className="text-3xl font-bold">Recommended Diet Plan</h2>
              <p className="text-lg opacity-80 leading-relaxed font-medium line-relaxed">
                 During your Panchakarma therapy, following the Pathya (dietary rules) is crucial 
                 for effective detoxification. Please strictly follow the Satvik diet provided 
                 by our hospital kitchen.
              </p>
              <Button variant="secondary" className="rounded-full font-bold px-8 h-12 uppercase tracking-widest text-xs">View Diet Chart</Button>
           </div>
           <Activity className="absolute bottom-[-30px] right-[-30px] h-64 w-64 opacity-5 rotate-12" />
        </section>
      </div>
    </div>
  )
}
