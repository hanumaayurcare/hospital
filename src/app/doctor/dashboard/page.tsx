import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Users, Calendar, Video, ArrowRight, UserCheck, AlertCircle, Search } from 'lucide-react'
import Link from 'next/link'

export default function DoctorDashboard() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Namaste, Dr. Hanumaan Singh</h1>
          <p className="text-lg text-muted-foreground font-medium">You have 8 consultations scheduled for today.</p>
        </div>
        <div className="flex gap-4">
           <Button variant="outline" size="lg" className="rounded-full px-8 font-bold border-2 h-12">Print Schedule</Button>
           <Button size="lg" className="rounded-full px-8 font-bold shadow-lg shadow-primary/20 h-12">Go to OPD Room</Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Today\'s Total', value: '8', icon: Calendar, color: 'text-primary', bg: 'bg-primary/5' },
          { label: 'Completed', value: '3', icon: UserCheck, color: 'text-accent', bg: 'bg-accent/10' },
          { label: 'Video Calls', value: '2', icon: Video, color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Therapies', value: '3', icon: AlertCircle, color: 'text-secondary-foreground', bg: 'bg-secondary' },
        ].map((stat) => (
          <Card key={stat.label} className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex items-center gap-4">
              <div className={`h-12 w-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider text-[10px]">{stat.label}</p>
                <p className="text-2xl font-black text-foreground">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Appointment Queue */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-foreground">Appointment Queue</h2>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold uppercase tracking-widest text-[10px] py-1 px-3">
              Morning Slots
            </Badge>
          </div>
          
          <Card className="border-none shadow-sm overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="flex flex-col divide-y divide-border/50">
                {[
                  { patient: 'Arjun Sharma', type: 'Video Call', time: '10:30 AM', status: 'In Queue', isVideo: true, notes: 'Follow-up / Cervical Spondylosis' },
                  { patient: 'Sneha Reddy', type: 'OPD Visit', time: '11:00 AM', status: 'Waiting', isVideo: false, notes: 'New Case / Hyperacidity' },
                  { patient: 'Rajesh Kumar', type: 'OPD Visit', time: '11:30 AM', status: 'Waiting', isVideo: false, notes: 'Review / Spine Injury' },
                ].map((apt, i) => (
                  <div key={i} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-muted/10 transition-colors">
                    <div className="flex gap-4">
                      <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl shrink-0 border border-primary/5 shadow-sm">
                        {apt.patient[0]}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-extrabold text-lg text-foreground">{apt.patient}</h4>
                          {apt.isVideo && <Badge className="bg-primary/10 text-primary border-none text-[9px] font-black tracking-widest">VIDEO</Badge>}
                        </div>
                        <p className="text-sm text-muted-foreground font-medium"><strong className="text-foreground">{apt.time}</strong> • {apt.notes}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className={apt.status === 'In Queue' ? 'bg-orange-100 text-orange-700 border-none font-bold' : 'bg-primary/10 text-primary border-none font-bold'}>
                        {apt.status}
                      </Badge>
                      <Link href={`/doctor/consultation/${i}`}>
                        <Button className="rounded-full shadow-lg shadow-primary/10 font-bold px-8 h-10">Start Call</Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Patient Search & Recent */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-foreground">Patient Search</h2>
            <Card className="border-none shadow-xl bg-primary text-white p-8 rounded-3xl space-y-4 relative overflow-hidden group">
               <div className="relative z-10 space-y-4">
                 <p className="text-sm text-primary-foreground font-medium opacity-90">Access historical Ayurvedic records instantly.</p>
                 <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input 
                      className="w-full h-12 rounded-2xl border-none bg-white text-foreground pl-10 pr-4 text-sm font-bold shadow-inner focus:ring-2 focus:ring-accent outline-none" 
                      placeholder="Name or Mobile..."
                    />
                 </div>
                 <Button variant="secondary" className="w-full rounded-2xl font-black h-12 uppercase tracking-widest text-[10px] text-primary shadow-lg ring-offset-primary">Deep Search</Button>
               </div>
               <Users className="absolute bottom-[-30px] right-[-30px] h-48 w-48 text-white opacity-[0.05] group-hover:scale-110 transition-transform duration-500" />
            </Card>
          </div>

          <div className="space-y-6 pt-4">
            <h2 className="text-2xl font-extrabold text-foreground">Recent Visits</h2>
            <div className="space-y-4">
              {[
                { name: 'Priya Menon', date: 'Yesterday', diagnosis: 'Migraine' },
                { name: 'Suresh Gupta', date: '2 days ago', diagnosis: 'Wellness' },
                { name: 'Lakshmi Rao', date: '3 days ago', diagnosis: 'Postnatal' },
              ].map((visit, i) => (
                <Card key={i} className="border-none shadow-sm hover:translate-x-1 transition-transform cursor-pointer bg-white group">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent font-black shrink-0 shadow-sm border border-accent/5">
                      {visit.name[0]}
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="font-extrabold text-sm leading-tight text-foreground truncate group-hover:text-primary transition-colors">{visit.name}</h4>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter opacity-80 mt-1">{visit.date} • {visit.diagnosis}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardContent>
                </Card>
              ))}
            </div>
            <Link href="/doctor/patients" className="block text-center text-sm font-bold text-primary hover:underline mt-4">Browse All Patients</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
