import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, Filter, Calendar, Video, MapPin, Clock, MoreVertical, ChevronRight, Activity } from 'lucide-react'
import Link from 'next/link'

export default function AdminAppointmentsPage() {
  const allAppointments = [
    { id: 101, patient: 'Arjun Sharma', doctor: 'Dr. Hanumaan Singh', type: 'Video', date: 'Jan 05, 2026', time: '10:30 AM', status: 'Confirmed' },
    { id: 102, patient: 'Sneha Reddy', doctor: 'Dr. Amrita Devi', type: 'OPD', date: 'Jan 05, 2026', time: '11:00 AM', status: 'In Queue' },
    { id: 103, patient: 'Rajesh Kumar', doctor: 'Dr. Rahul Varma', type: 'OPD', date: 'Jan 05, 2026', time: '11:30 AM', status: 'Scheduled' },
    { id: 104, patient: 'Priya Menon', doctor: 'Dr. Hanumaan Singh', type: 'Video', date: 'Jan 05, 2026', time: '02:00 PM', status: 'Scheduled' },
  ]

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Global Appointment Queue</h1>
            <p className="text-lg text-muted-foreground font-medium">Coordinate visits and video calls across all hospital branches.</p>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" className="rounded-full px-8 font-bold border-2">Export CSV</Button>
             <Link href="/appointments/new">
                <Button className="rounded-full px-8 font-bold shadow-lg shadow-primary/20">Create Appointment</Button>
             </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {[
             { label: 'Total Today', val: '48', color: 'bg-primary', icon: Calendar },
             { label: 'Video Calls', val: '12', color: 'bg-blue-600', icon: Video },
             { label: 'Wait Time (Avg)', val: '18m', color: 'bg-orange-600', icon: Clock },
           ].map((s) => (
             <Card key={s.label} className={`${s.color} text-white border-none shadow-xl rounded-[2rem]`}>
                <CardContent className="p-8 flex justify-between items-center">
                   <div className="space-y-1">
                      <p className="text-xs font-bold uppercase tracking-widest opacity-80">{s.label}</p>
                      <h3 className="text-4xl font-bold">{s.val}</h3>
                   </div>
                   <s.icon className="h-12 w-12 opacity-20" />
                </CardContent>
             </Card>
           ))}
        </div>

        {/* Management Table */}
        <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white">
           <CardHeader className="p-8 border-b bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                 <h2 className="text-xl font-bold italic">January 05, 2026</h2>
                 <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Live Updates Enabled</span>
              </div>
              <div className="flex gap-4">
                 <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input className="w-full h-10 rounded-xl bg-muted/50 pl-10 pr-4 text-xs font-medium outline-none" placeholder="Search by patient/doctor..." />
                 </div>
                 <Button variant="ghost" size="icon" className="rounded-xl bg-muted/50"><Filter className="h-4 w-4" /></Button>
              </div>
           </CardHeader>
           <CardContent className="p-0">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-muted/10 text-[10px] font-bold text-muted-foreground uppercase tracking-widest border-b">
                       <tr>
                          <th className="p-8">ID</th>
                          <th className="p-8">Patient Name</th>
                          <th className="p-8">Assigned Specialist</th>
                          <th className="p-8">Time & Type</th>
                          <th className="p-8">Queue Status</th>
                          <th className="p-8 text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-muted/30">
                       {allAppointments.map((apt) => (
                         <tr key={apt.id} className="hover:bg-muted/5 transition-colors group">
                            <td className="p-8 font-bold text-primary italic text-sm">#{apt.id}</td>
                            <td className="p-8 font-bold">{apt.patient}</td>
                            <td className="p-8 font-medium italic text-muted-foreground">{apt.doctor}</td>
                            <td className="p-8">
                               <div className="flex items-center gap-2 font-bold text-xs">
                                  {apt.type === 'Video' ? <Video className="h-4 w-4 text-blue-500" /> : <MapPin className="h-4 w-4 text-primary" />}
                                  {apt.time} • {apt.type}
                               </div>
                            </td>
                            <td className="p-8">
                               <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                                 apt.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 
                                 apt.status === 'In Queue' ? 'bg-orange-100 text-orange-700 underline decoration-2 underline-offset-4' : 
                                 'bg-blue-100 text-blue-700'
                               }`}>
                                  {apt.status}
                               </span>
                            </td>
                            <td className="p-8 text-right">
                               <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                                  <MoreVertical className="h-5 w-5" />
                               </Button>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </CardContent>
        </Card>
      </div>
    </div>
  )
}
