import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, FileText, Clock, ArrowRight, Video, Bed } from 'lucide-react'
import Link from 'next/link'

export default function PatientDashboard() {
  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Welcome, Arjun!</h1>
            <p className="text-lg text-muted-foreground">Here is a summary of your health journey.</p>
          </div>
          <Link href="/appointments/new">
            <Button size="lg" className="rounded-full px-8 font-bold shadow-lg shadow-primary/20">
              New Appointment
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Upcoming', value: '1', icon: Calendar, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Prescriptions', value: '3', icon: FileText, color: 'text-primary', bg: 'bg-primary/10' },
            { label: 'Active Treatments', value: '1', icon: Clock, color: 'text-accent', bg: 'bg-accent/10' },
            { label: 'IPD Status', value: 'Discharged', icon: Bed, color: 'text-muted-foreground', bg: 'bg-muted' },
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
          {/* Upcoming Appointments */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Upcoming Appointments</h2>
              <Link href="/appointments" className="text-sm text-primary font-bold hover:underline">View All</Link>
            </div>
            
            <Card className="border-none shadow-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col divide-y">
                  {[
                    { doctor: 'Dr. Hanumaan Singh', type: 'Video Consultation', date: 'Jan 05, 2026', time: '10:30 AM', status: 'Confirmed', isVideo: true },
                  ].map((apt, i) => (
                    <div key={i} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-muted/30 transition-colors">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center font-bold text-primary shrink-0">
                          {apt.doctor[4]}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{apt.doctor}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            {apt.isVideo ? <Video className="h-4 w-4 text-blue-500" /> : <Calendar className="h-4 w-4" />}
                            <span>{apt.type} • {apt.date} at {apt.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">
                          {apt.status}
                        </span>
                        {apt.isVideo ? (
                          <Button className="rounded-full bg-blue-600 hover:bg-blue-700 font-bold px-6">Join Meet</Button>
                        ) : (
                          <Button variant="outline" className="rounded-full font-bold px-6">Reschedule</Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-between pt-8">
              <h2 className="text-2xl font-bold">Active Treatments</h2>
            </div>
            <Card className="border-none shadow-sm p-8 bg-primary text-white relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Panchakarma Detox</h3>
                  <p className="text-primary-foreground/80">Started on Dec 25, 2025 • 14 Day Program</p>
                </div>
                <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
                  <div className="bg-secondary-foreground h-full w-[45%]" />
                </div>
                <div className="flex justify-between text-sm font-bold">
                  <span>Day 6 of 14</span>
                  <span>45% Completed</span>
                </div>
                <Button variant="secondary" className="w-full rounded-full font-bold">View Therapy Schedule</Button>
              </div>
              <Activity className="absolute bottom-[-20px] right-[-20px] h-48 w-48 text-white opacity-5" />
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Records</h2>
              <Link href="/prescriptions" className="text-sm text-primary font-bold hover:underline font-bold">Manage</Link>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Follow-up Prescription', date: 'Dec 15, 2025', doctor: 'Dr. Amrita Devi' },
                { title: 'Initial Consultation', date: 'Dec 01, 2025', doctor: 'Dr. Hanumaan Singh' },
                { title: 'Blood Work Report', date: 'Nov 28, 2025', doctor: 'External Lab' },
              ].map((record, i) => (
                <Card key={i} className="border-none shadow-sm hover:translate-x-1 transition-transform cursor-pointer">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground shrink-0">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-sm leading-tight">{record.title}</h4>
                      <p className="text-xs text-muted-foreground">{record.date} • {record.doctor}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-accent text-white border-none p-8 relative overflow-hidden">
               <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-bold">Need Medicines?</h3>
                <p className="text-sm text-accent-foreground">Order your prescribed medicines from our official Ayurcare Shop.</p>
                <Button variant="secondary" className="w-full rounded-full font-bold">Go to Shop</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function Activity({ className }: any) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}
