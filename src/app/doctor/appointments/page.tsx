import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, User, Filter, ChevronLeft, ChevronRight, Video, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function DoctorAppointmentsPage() {
  const schedule = [
    { id: 1, patient: 'Arjun Sharma', time: '10:30 AM', type: 'Video', status: 'Confirmed', isVideo: true },
    { id: 2, patient: 'Sneha Reddy', time: '11:00 AM', type: 'OPD', status: 'In Queue', isVideo: false },
    { id: 3, patient: 'Rajesh Kumar', time: '11:30 AM', type: 'OPD', status: 'Waiting', isVideo: false },
    { id: 4, patient: 'Priya Menon', time: '02:00 PM', type: 'Video', status: 'Confirmed', isVideo: true },
  ]

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-primary">Schedule & Appointments</h1>
            <p className="text-lg text-muted-foreground font-medium">Manage your clinical sessions and consultation queue.</p>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" className="rounded-full px-8 font-bold border-2">Set Availability</Button>
             <Button className="rounded-full px-8 font-bold shadow-lg shadow-primary/20">View Weekly Calendar</Button>
          </div>
        </div>

        {/* Date Selector */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-[2rem] shadow-sm">
           <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full"><ChevronLeft className="h-6 w-6" /></Button>
              <div className="text-center">
                 <h4 className="text-xl font-bold">Tuesday, Jan 06, 2026</h4>
                 <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Clinical Day</p>
              </div>
              <Button variant="ghost" size="icon" className="rounded-full"><ChevronRight className="h-6 w-6" /></Button>
           </div>
           <div className="flex gap-4">
              <span className="px-4 py-2 rounded-xl bg-primary/10 text-primary font-bold text-sm">8 Total</span>
              <span className="px-4 py-2 rounded-xl bg-orange-100 text-orange-700 font-bold text-sm">3 Pending</span>
              <span className="px-4 py-2 rounded-xl bg-green-100 text-green-700 font-bold text-sm">5 Ready</span>
           </div>
        </div>

        {/* Schedule List */}
        <div className="grid grid-cols-1 gap-6">
           {schedule.map((item) => (
             <Card key={item.id} className="border-none shadow-sm hover:shadow-md transition-all group overflow-hidden">
                <CardContent className="p-0">
                   <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x">
                      <div className="p-8 md:w-48 bg-muted/30 flex flex-col justify-center items-center text-center">
                         <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-2">
                           <Clock className="h-5 w-5" />
                         </div>
                         <p className="text-2xl font-bold">{item.time}</p>
                      </div>

                      <div className="p-8 flex-grow space-y-4">
                         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-center gap-6">
                               <div className="h-14 w-14 rounded-full bg-muted flex items-center justify-center font-bold text-2xl text-primary">
                                  {item.patient[0]}
                               </div>
                               <div>
                                  <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{item.patient}</h4>
                                  <p className="text-muted-foreground font-medium flex items-center gap-2 mt-1">
                                     {item.isVideo ? <Video className="h-4 w-4 text-blue-500" /> : <MapPin className="h-4 w-4 text-primary" />}
                                     {item.type} Consultation
                                  </p>
                               </div>
                            </div>
                            <div className="flex flex-col items-end gap-2">
                               <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                                 item.status === 'In Queue' ? 'bg-orange-100 text-orange-700 underline decoration-2 underline-offset-4' : 
                                 item.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 
                                 'bg-muted text-muted-foreground'
                               }`}>
                                  {item.status}
                               </span>
                            </div>
                         </div>
                      </div>

                      <div className="p-8 md:w-64 flex items-center justify-center gap-4">
                         <Link href={`/doctor/consultation/${item.id}`} className="flex-grow">
                            <Button className={`w-full rounded-xl font-bold h-12 shadow-lg ${item.isVideo ? 'bg-blue-600 hover:bg-blue-700' : 'bg-primary shadow-primary/20'}`}>
                               {item.isVideo ? 'Join Meet' : 'Start OPD'}
                            </Button>
                         </Link>
                         <Link href={`/doctor/patient/${item.id}`}>
                            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl bg-muted/50 hover:bg-primary/10 text-primary">
                               <User className="h-5 w-5" />
                            </Button>
                         </Link>
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
