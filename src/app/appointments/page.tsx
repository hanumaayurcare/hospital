import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Video, MapPin, Clock, Search, Filter, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function PatientAppointmentsPage() {
  const appointments = [
    { id: 1, doctor: 'Dr. Hanumaan Singh', type: 'Video Consultation', date: 'Jan 05, 2026', time: '10:30 AM', status: 'Confirmed', isVideo: true },
    { id: 2, doctor: 'Dr. Amrita Devi', type: 'Clinical Visit (OPD)', date: 'Dec 28, 2025', time: '04:00 PM', status: 'Completed', isVideo: false },
    { id: 3, doctor: 'Dr. Rahul Varma', type: 'Panchakarma Review', date: 'Dec 20, 2025', time: '09:00 AM', status: 'Completed', isVideo: false },
  ]

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">My Appointments</h1>
            <p className="text-lg text-muted-foreground">Manage your past and upcoming consultations.</p>
          </div>
          <Link href="/appointments/new">
            <Button size="lg" className="rounded-full px-8 font-bold shadow-lg shadow-primary/20">
              Book New Appointment
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
           <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input 
                className="w-full h-12 rounded-xl bg-white pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary/20 border-none shadow-sm" 
                placeholder="Search by doctor or type..."
              />
           </div>
           <Button variant="outline" className="h-12 rounded-xl bg-white border-none shadow-sm font-bold flex gap-2">
              <Filter className="h-5 w-5" /> Filter by Status
           </Button>
        </div>

        {/* Appointment Grid */}
        <div className="grid grid-cols-1 gap-6">
           {appointments.map((apt) => (
             <Card key={apt.id} className="border-none shadow-sm hover:shadow-md transition-all group overflow-hidden">
                <CardContent className="p-0">
                   <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x">
                      {/* Date & Time */}
                      <div className="p-8 md:w-64 bg-muted/30 flex flex-col justify-center items-center text-center">
                         <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{apt.date.split(',')[1]}</span>
                         <h3 className="text-3xl font-bold mb-1">{apt.date.split(' ')[1].replace(',', '')}</h3>
                         <p className="font-bold text-muted-foreground">{apt.time}</p>
                      </div>

                      {/* Info */}
                      <div className="p-8 flex-grow space-y-4">
                         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                               <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{apt.doctor}</h4>
                               <p className="text-muted-foreground font-medium flex items-center gap-2 mt-1">
                                  {apt.isVideo ? <Video className="h-4 w-4 text-blue-500" /> : <MapPin className="h-4 w-4 text-primary" />}
                                  {apt.type}
                               </p>
                            </div>
                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest self-start md:self-center ${
                               apt.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'
                            }`}>
                               {apt.status}
                            </span>
                         </div>
                      </div>

                      {/* Actions */}
                      <div className="p-8 md:w-64 flex flex-col justify-center gap-4">
                         {apt.status === 'Confirmed' ? (
                            apt.isVideo ? (
                               <Link href={`/video-consultation/${apt.id}`} className="w-full">
                                 <Button className="w-full rounded-xl font-bold h-12 bg-blue-600 hover:bg-blue-700">Join Video Room</Button>
                               </Link>
                            ) : (
                               <Button variant="outline" className="w-full rounded-xl font-bold h-12">View Location</Button>
                            )
                         ) : (
                            <Button variant="outline" className="w-full rounded-xl font-bold h-12">Rebook Appointment</Button>
                         )}
                         <Button variant="ghost" className="w-full rounded-xl font-bold text-xs uppercase tracking-widest flex gap-2">
                            Details <ChevronRight className="h-4 w-4" />
                         </Button>
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
