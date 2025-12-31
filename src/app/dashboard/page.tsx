import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Calendar, FileText, Clock, ArrowRight, Video, Bed, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function PatientDashboard() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Welcome, Arjun!</h1>
          <p className="text-lg text-muted-foreground font-medium">Your Ayurvedic health journey at a glance.</p>
        </div>
        <Link href="/appointments/new">
          <Button size="lg" className="rounded-full px-8 font-bold shadow-lg shadow-primary/20 h-12">
            New Appointment
          </Button>
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Upcoming', value: '1', icon: Calendar, color: 'text-primary', bg: 'bg-primary/5' },
          { label: 'Prescriptions', value: '3', icon: FileText, color: 'text-accent', bg: 'bg-accent/10' },
          { label: 'Active Treatments', value: '1', icon: Clock, color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'IPD Status', value: 'Discharged', icon: Bed, color: 'text-muted-foreground', bg: 'bg-muted' },
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
        {/* Upcoming Appointments */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-foreground">Upcoming Appointments</h2>
            <Link href="/appointments" className="text-sm text-primary font-bold hover:underline">View All</Link>
          </div>
          
          <Card className="border-none shadow-sm overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="flex flex-col divide-y divide-border/50">
                {[
                  { doctor: 'Dr. Hanumaan Singh', type: 'Video Consultation', date: 'Jan 05, 2026', time: '10:30 AM', status: 'Confirmed', isVideo: true, location: 'Online' },
                ].map((apt, i) => (
                  <div key={i} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-muted/10 transition-colors">
                    <div className="flex gap-4">
                      <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-xl shrink-0 shadow-sm border border-primary/5">
                        {apt.doctor[4]}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-lg text-foreground leading-none">{apt.doctor}</h4>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground font-medium">
                          <div className="flex items-center gap-1.5">
                            {apt.isVideo ? <Video className="h-4 w-4 text-primary" /> : <Calendar className="h-4 w-4" />}
                            <span>{apt.type}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" />
                            <span>{apt.date} • {apt.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-primary/10 text-primary border-none font-bold uppercase tracking-widest text-[10px] py-1 px-3">
                        {apt.status}
                      </Badge>
                      {apt.isVideo ? (
                        <Button className="rounded-full bg-primary hover:bg-primary/90 font-bold px-6 shadow-md shadow-primary/10">Join Call</Button>
                      ) : (
                        <Button variant="outline" className="rounded-full font-bold px-6 border-2">Manage</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between pt-4">
            <h2 className="text-2xl font-extrabold text-foreground">Active Treatments</h2>
          </div>
          <Card className="border-none shadow-xl p-8 bg-primary text-white relative overflow-hidden rounded-3xl group">
            <div className="relative z-10 space-y-6">
              <div className="space-y-1">
                <Badge variant="secondary" className="bg-white/20 text-white border-none font-bold mb-2">Ongoing</Badge>
                <h3 className="text-3xl font-black">Panchakarma Detox</h3>
                <p className="text-primary-foreground/90 font-medium">Branch: Hanuma Ayurcare, Bangalore Central</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-bold">
                  <span>Progress: Day 6 of 14</span>
                  <span>45%</span>
                </div>
                <div className="w-full bg-white/20 h-4 rounded-full overflow-hidden border border-white/10 shadow-inner">
                  <div className="bg-white h-full w-[45%] rounded-full shadow-sm" />
                </div>
              </div>
              <Button variant="secondary" className="w-full rounded-full font-bold h-12 text-primary shadow-lg ring-offset-primary">View Therapy Schedule</Button>
            </div>
            <ActivityIcon className="absolute bottom-[-40px] right-[-40px] h-64 w-64 text-white opacity-[0.07] group-hover:scale-110 transition-transform duration-500" />
          </Card>
        </div>

        {/* Right Sidebar Section */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-foreground">My Records</h2>
              <Link href="/prescriptions" className="text-sm text-primary font-bold hover:underline">Manage</Link>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Follow-up Prescription', date: 'Dec 15, 2025', doctor: 'Dr. Amrita Devi', type: 'Prescription' },
                { title: 'Initial Consultation', date: 'Dec 01, 2025', doctor: 'Dr. Hanumaan Singh', type: 'Report' },
                { title: 'Blood Work Report', date: 'Nov 28, 2025', doctor: 'External Lab', type: 'Lab' },
              ].map((record, i) => (
                <Card key={i} className="border-none shadow-sm hover:translate-x-1 transition-transform cursor-pointer bg-white">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="font-extrabold text-sm leading-tight text-foreground truncate">{record.title}</h4>
                      <p className="text-xs text-muted-foreground font-bold mt-1 uppercase tracking-tighter opacity-80">{record.date} • {record.doctor}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-accent text-white border-none p-8 relative overflow-hidden rounded-3xl shadow-xl shadow-accent/20">
             <div className="relative z-10 space-y-4">
              <div className="h-12 w-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black">Need Medicines?</h3>
              <p className="text-sm text-accent-foreground font-medium">Order authentic Ayurvedic formulations from the official Hanuma Ayurcare Shop.</p>
              <Button variant="secondary" className="w-full rounded-full font-extrabold h-12 text-accent shadow-lg">Visit AyurShop</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

function ActivityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
