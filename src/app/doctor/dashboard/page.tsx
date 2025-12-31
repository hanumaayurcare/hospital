import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, Calendar, Video, Clock, ArrowRight, UserCheck, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function DoctorDashboard() {
  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-primary">Namaste, Dr. Hanumaan Singh</h1>
            <p className="text-lg text-muted-foreground">You have 8 consultations scheduled for today.</p>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" size="lg" className="rounded-full px-8 font-bold border-2">Print Schedule</Button>
             <Button size="lg" className="rounded-full px-8 font-bold shadow-lg shadow-primary/20">Go to OPD Room</Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Today\'s Total', value: '8', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Completed', value: '3', icon: UserCheck, color: 'text-green-600', bg: 'bg-green-50' },
            { label: 'Video Calls', value: '2', icon: Video, color: 'text-primary', bg: 'bg-primary/10' },
            { label: 'Panchakarma Reviews', value: '3', icon: AlertCircle, color: 'text-accent', bg: 'bg-accent/10' },
          ].map((stat) => (
            <Card key={stat.label} className="border-none shadow-sm">
              <CardContent className="p-6 flex items-center gap-4">
                <div className={`h-12 w-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Appointment Queue */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Appointment Queue</h2>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Morning Slots</span>
              </div>
            </div>
            
            <Card className="border-none shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col divide-y">
                  {[
                    { patient: 'Arjun Sharma', type: 'Video', time: '10:30 AM', status: 'In Queue', isVideo: true, notes: 'Follow-up for Cervical Spondylosis' },
                    { patient: 'Sneha Reddy', type: 'OPD', time: '11:00 AM', status: 'Waiting', isVideo: false, notes: 'Initial consultation - Hyperacidity' },
                    { patient: 'Rajesh Kumar', type: 'OPD', time: '11:30 AM', status: 'Waiting', isVideo: false, notes: 'Spine Review' },
                  ].map((apt, i) => (
                    <div key={i} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-muted/30 transition-colors">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center font-bold text-primary shrink-0 text-xl">
                          {apt.patient[0]}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-lg">{apt.patient}</h4>
                            {apt.isVideo && <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase">Video</span>}
                          </div>
                          <p className="text-sm text-muted"><strong>{apt.time}</strong> • {apt.notes}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${apt.status === 'In Queue' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'}`}>
                          {apt.status}
                        </span>
                        <Link href={`/doctor/consultation/${i}`}>
                          <Button className="rounded-full shadow-lg shadow-primary/20 font-bold px-8">Start Call</Button>
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
            <h2 className="text-2xl font-bold">Quick Search</h2>
            <Card className="border-none shadow-sm p-6 bg-primary text-white space-y-4">
               <p className="text-sm text-primary-foreground">Search patient records by name or mobile number.</p>
               <input 
                 className="w-full h-12 rounded-xl border-none bg-white text-foreground px-4 text-sm font-medium focus:ring-2 focus:ring-secondary-foreground outline-none" 
                 placeholder="Search Patient..."
               />
               <Button variant="secondary" className="w-full rounded-xl font-bold h-12 uppercase tracking-widest text-xs">Search Database</Button>
            </Card>

            <h2 className="text-2xl font-bold pt-4">Recent Visits</h2>
            <div className="space-y-4">
              {[
                { name: 'Priya Menon', date: 'Yesterday', diagnosis: 'Migraine' },
                { name: 'Suresh Gupta', date: '2 days ago', diagnosis: 'Wellness' },
                { name: 'Lakshmi Rao', date: '3 days ago', diagnosis: 'Postnatal' },
              ].map((visit, i) => (
                <Card key={i} className="border-none shadow-sm hover:translate-x-1 transition-transform cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center text-primary font-bold shrink-0">
                      {visit.name[0]}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-sm leading-tight">{visit.name}</h4>
                      <p className="text-xs text-muted-foreground">{visit.date} • {visit.diagnosis}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
