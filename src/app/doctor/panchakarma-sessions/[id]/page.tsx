import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Activity, Sparkles, User, Calendar, CheckCircle2, AlertCircle, MessageSquare, ClipboardList } from 'lucide-react'

export default function DoctorPanchakarmaTrackingPage({ params }: { params: { id: string } }) {
  const steps = [
    { day: 'Day 1', therapy: 'Abhyanga', status: 'Completed', therapist: 'Ravi Kumar', feedback: 'Patient felt relaxed, Pulse stable.' },
    { day: 'Day 2', therapy: 'Abhyanga + Elakizhi', status: 'Completed', therapist: 'Ravi Kumar', feedback: 'Increased mobility in shoulder.' },
    { day: 'Day 3', therapy: 'Shiredhara', status: 'In Progress', therapist: 'Mani Iyer', feedback: 'N/A' },
    { day: 'Day 4', therapy: 'Vasti', status: 'Scheduled', therapist: 'TBD', feedback: 'N/A' },
  ]

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
           <div className="space-y-1">
              <h1 className="text-4xl font-bold tracking-tight">Therapy Tracking</h1>
              <p className="text-lg text-muted-foreground font-medium italic">Monitoring Panchakarma Course Plan #PK-{params.id}</p>
           </div>
           <Button className="rounded-full px-10 font-bold shadow-lg shadow-primary/20 flex gap-2">
              <Sparkles className="h-4 w-4" /> Add clinical Note
           </Button>
        </div>

        {/* Patient & Progress Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <Card className="lg:col-span-2 border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden">
              <CardContent className="p-10 flex flex-col md:flex-row items-center gap-12">
                 <div className="h-32 w-32 rounded-[2.5rem] bg-primary/10 flex items-center justify-center text-primary text-4xl font-bold shadow-inner">
                    AS
                 </div>
                 <div className="flex-grow space-y-6 w-full text-center md:text-left">
                    <div className="space-y-1">
                       <h3 className="text-3xl font-bold italic">Arjun Sharma</h3>
                       <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Ongoing: Detoxification Course (Vamana-Virechana)</p>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-primary">
                          <span>Overall Progress</span>
                          <span>65%</span>
                       </div>
                       <Progress value={65} className="h-3 rounded-full bg-muted shadow-inner" />
                    </div>
                 </div>
              </CardContent>
           </Card>

           <Card className="border-none shadow-xl rounded-[2.5rem] bg-zinc-900 text-white overflow-hidden p-8 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-4">
                 <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold opacity-60 uppercase">Duration</p>
                    <p className="font-bold">14 Days Plan</p>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <div className="h-12 w-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                    <User className="h-6 w-6 text-blue-400" />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold opacity-60 uppercase">Assigned Hub</p>
                    <p className="font-bold">Panchakarma Wing - A</p>
                 </div>
              </div>
           </Card>
        </div>

        {/* Daily Logs */}
        <div className="space-y-6">
           <h2 className="text-2xl font-bold italic px-4 flex items-center gap-3">
              <ClipboardList className="h-6 w-6 text-primary" /> Daily Therapy Logs
           </h2>
           <div className="grid grid-cols-1 gap-4">
              {steps.map((s, i) => (
                <Card key={i} className="border-none shadow-lg rounded-[2rem] bg-white overflow-hidden hover:bg-muted/5 transition-colors">
                   <CardContent className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
                      <div className="flex items-center gap-8">
                         <div className={`h-14 w-14 rounded-2xl flex items-center justify-center font-bold italic text-lg shadow-sm ${
                           s.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                           s.status === 'In Progress' ? 'bg-orange-100 text-orange-700' : 'bg-muted text-muted-foreground'
                         }`}>
                            {i + 1}
                         </div>
                         <div className="space-y-1">
                            <h4 className="text-lg font-bold group-hover:text-primary transition-colors">{s.therapy}</h4>
                            <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                               <span className="flex items-center gap-2"><User className="h-3 w-3" /> {s.therapist}</span>
                               <span className="w-1.5 h-1.5 rounded-full bg-muted" />
                               <span className="flex items-center gap-2">
                                  {s.status === 'Completed' ? <CheckCircle2 className="h-3 w-3 text-green-600" /> : <AlertCircle className="h-3 w-3 text-orange-600" />}
                                  {s.status}
                               </span>
                            </div>
                         </div>
                      </div>
                      
                      <div className="flex-grow max-w-md bg-muted/30 p-4 rounded-xl">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase mb-1">Therapist Feedback</p>
                         <p className="text-xs italic font-medium opacity-80">{s.feedback}</p>
                      </div>

                      <div className="flex gap-2">
                         <Button variant="outline" size="icon" className="rounded-xl hover:bg-primary/10 hover:text-primary border-none bg-muted/50"><MessageSquare className="h-4 w-4" /></Button>
                         <Button variant="ghost" className="font-bold text-xs text-primary underline underline-offset-4">View Session Data</Button>
                      </div>
                   </CardContent>
                </Card>
              ))}
           </div>
        </div>
      </div>
    </div>
  )
}
