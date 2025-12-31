import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sparkles, Users, Clock, Calendar, CheckCircle2, ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import Link from 'next/link'

export default function PanchakarmaTrackingPage() {
  const sessions = [
    { time: '08:00 AM', patient: 'Arjun Sharma', therapy: 'Abhyangam & Pizhichil', therapist: 'Ravi & Mani', room: 'T-01', status: 'Ongoing' },
    { time: '09:30 AM', patient: 'Sneha Reddy', therapy: 'Shirodhara', therapist: 'Deepa', room: 'T-04', status: 'Scheduled' },
    { time: '11:00 AM', patient: 'Rajesh Kumar', therapy: 'Urovasti', therapist: 'Santhosh', room: 'T-02', status: 'Scheduled' },
    { time: '02:00 PM', patient: 'Priya Menon', therapy: 'Nasyam', therapist: 'Meera', room: 'T-05', status: 'Completed' },
  ]

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight flex items-center gap-3">
              <Sparkles className="h-10 w-10 text-primary" /> Panchakarma Schedule
            </h1>
            <p className="text-lg text-muted-foreground font-medium">Coordinate intensive therapies and therapist assignments.</p>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" className="rounded-full px-8 font-bold border-2">Print Therapy Cards</Button>
             <Button className="rounded-full px-8 font-bold shadow-lg shadow-primary/20 flex gap-2"><Plus className="h-5 w-5" /> New Session</Button>
          </div>
        </div>

        {/* Date Selector */}
        <Card className="p-6 border-none shadow-sm rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full"><ChevronLeft className="h-6 w-6" /></Button>
              <div className="text-center">
                 <h4 className="text-xl font-bold">Tuesday, Jan 06, 2026</h4>
                 <p className="text-xs text-primary font-bold uppercase tracking-[0.2em]">Today</p>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full"><ChevronRight className="h-6 w-6" /></Button>
           </div>
           
           <div className="flex gap-8 text-center border-l pl-8">
              <div>
                 <p className="text-2xl font-bold text-primary">12</p>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase">Total Sessions</p>
              </div>
              <div>
                 <p className="text-2xl font-bold text-accent">4</p>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase">Therapists On Duty</p>
              </div>
              <div>
                 <p className="text-2xl font-bold text-green-600">85%</p>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase">Efficiency</p>
              </div>
           </div>
        </Card>

        {/* Schedule Table */}
        <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white">
           <CardContent className="p-0">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-muted/30 text-xs font-bold text-muted-foreground uppercase tracking-widest border-b">
                       <tr>
                          <th className="p-8">Time Slot</th>
                          <th className="p-8">Patient & Therapy</th>
                          <th className="p-8">Assignment</th>
                          <th className="p-8">Status</th>
                          <th className="p-8 text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-muted/50">
                       {sessions.map((s, i) => (
                         <tr key={i} className="hover:bg-muted/10 transition-colors">
                            <td className="p-8">
                               <div className="flex items-center gap-3 font-bold text-lg">
                                  <Clock className="h-5 w-5 text-primary" />
                                  {s.time}
                               </div>
                            </td>
                            <td className="p-8">
                               <div className="space-y-1">
                                  <h4 className="font-bold text-lg">{s.patient}</h4>
                                  <p className="text-sm text-primary font-bold italic flex items-center gap-1">
                                     <Sparkles className="h-3 w-3" /> {s.therapy}
                                  </p>
                               </div>
                            </td>
                            <td className="p-8">
                               <div className="space-y-1">
                                  <div className="flex items-center gap-2 text-sm font-bold">
                                     <Users className="h-4 w-4 text-muted-foreground" /> {s.therapist}
                                  </div>
                                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Room: {s.room}</p>
                               </div>
                            </td>
                            <td className="p-8">
                               <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                                 s.status === 'Ongoing' ? 'bg-orange-100 text-orange-700 animate-pulse' : 
                                 s.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                                 'bg-blue-100 text-blue-700'
                               }`}>
                                  {s.status}
                               </span>
                            </td>
                            <td className="p-8 text-right">
                               <Button variant="ghost" className="rounded-full h-12 w-12 p-0 hover:bg-primary/10 hover:text-primary">
                                  <ChevronRight className="h-6 w-6" />
                               </Button>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </CardContent>
        </Card>
        
        {/* Therapist Allocation Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
           <section className="md:col-span-2 space-y-6">
              <h3 className="text-2xl font-bold">Equipment & Medicine Prep</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                   { item: 'Medicated Oil (Dhanwantharam)', qty: '12 Liters', status: 'Ready' },
                   { item: 'Shirodhara Pot Setup', qty: '4 Sets', status: 'In Use' },
                   { item: 'Herbal Bolus (Kizhi)', qty: '24 Bundles', status: 'Prepping' },
                 ].map((inv, i) => (
                   <div key={i} className="p-6 rounded-3xl bg-white border-2 border-muted flex justify-between items-center shadow-sm">
                      <div>
                         <p className="text-sm font-bold">{inv.item}</p>
                         <p className="text-xs text-muted-foreground">{inv.qty}</p>
                      </div>
                      <span className="text-[10px] font-bold uppercase text-primary">{inv.status}</span>
                   </div>
                 ))}
              </div>
           </section>
           
           <Card className="bg-accent text-white p-8 rounded-[2.5rem] border-none shadow-2xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                 <h3 className="text-xl font-bold">Need Help?</h3>
                 <p className="text-sm opacity-80">Check therapist load or request emergency maintenance for therapy equipment.</p>
                 <Button variant="secondary" className="w-full h-14 rounded-2xl font-bold">Request Support</Button>
              </div>
              <CheckCircle2 className="absolute bottom-[-40px] right-[-40px] h-64 w-64 opacity-5 rotate-12" />
           </Card>
        </div>
      </div>
    </div>
  )
}
