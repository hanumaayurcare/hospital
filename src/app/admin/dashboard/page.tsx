import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TrendingUp, Users, Calendar, Wallet, ArrowRight, Bed, AlertCircle, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Analytics Overview</h1>
            <p className="text-lg text-muted-foreground">Real-time hospital operations and performance data.</p>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" size="lg" className="rounded-full px-8 font-bold border-2">Download Report</Button>
             <Link href="/admin/ipd">
               <Button size="lg" className="rounded-full px-8 font-bold shadow-lg shadow-primary/20 bg-accent text-white hover:bg-accent/90">Manage IPD</Button>
             </Link>
          </div>
        </div>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Total Revenue', value: '₹4.8L', trend: '+12%', icon: Wallet, color: 'text-green-600', bg: 'bg-green-50' },
            { label: 'New Patients', value: '24', trend: '+5%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Appointments', value: '156', trend: '+18%', icon: Calendar, color: 'text-primary', bg: 'bg-primary/10' },
            { label: 'Active IPDs', value: '18', trend: '80% Occ.', icon: Bed, color: 'text-accent', bg: 'bg-accent/10' },
          ].map((stat) => (
            <Card key={stat.label} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className={`h-12 w-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">{stat.trend}</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Operations */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
               <h2 className="text-2xl font-bold">In-Patient Status</h2>
               <Link href="/admin/ipd" className="text-sm text-primary font-bold hover:underline">Manage Beds</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {[
                 { room: 'Room 201', patient: 'Rajesh Kumar', status: 'Ongoing', procedure: 'Panchakarma (Basti)', progress: 65 },
                 { room: 'Room 305', patient: 'Sneha Reddy', status: 'Admitting', procedure: 'Cervical Care', progress: 10 },
               ].map((ipd, i) => (
                 <Card key={i} className="border-none shadow-sm p-8 rounded-[2rem] space-y-6">
                    <div className="flex justify-between items-start">
                       <div>
                          <h4 className="text-xl font-bold">{ipd.room}</h4>
                          <p className="text-sm text-muted-foreground">{ipd.patient}</p>
                       </div>
                       <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${ipd.status === 'Ongoing' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                          {ipd.status}
                       </span>
                    </div>
                    <div className="space-y-3">
                       <p className="text-sm font-bold flex gap-2 items-center"><Sparkles className="h-4 w-4 text-primary" /> {ipd.procedure}</p>
                       <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                          <div className={`h-full ${ipd.status === 'Ongoing' ? 'bg-primary' : 'bg-blue-500'} transition-all`} style={{ width: `${ipd.progress}%` }} />
                       </div>
                       <p className="text-xs text-right text-muted-foreground font-medium">{ipd.progress}% Treatment Course Completed</p>
                    </div>
                 </Card>
               ))}
            </div>

            <div className="space-y-6 pt-4">
               <h2 className="text-2xl font-bold">Staff On Duty</h2>
               <Card className="border-none shadow-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="divide-y">
                       {[
                         { name: 'Dr. Hanumaan Singh', role: 'Chief Physician', status: 'Consulting', branch: 'Kochi' },
                         { name: 'Dr. Rahul Varma', role: 'Panchakarma Head', status: 'Surgery', branch: 'Bangalore' },
                         { name: 'Nurse Anjali', role: 'IPD Lead', status: 'Available', branch: 'Kochi' },
                       ].map((staff, i) => (
                         <div key={i} className="p-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                            <div className="flex items-center gap-4">
                               <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary">{staff.name[0]}</div>
                               <div>
                                  <h4 className="text-sm font-bold">{staff.name}</h4>
                                  <p className="text-xs text-muted-foreground">{staff.role} • {staff.branch}</p>
                               </div>
                            </div>
                            <span className="text-xs font-bold text-muted-foreground italic">{staff.status}</span>
                         </div>
                       ))}
                    </div>
                  </CardContent>
               </Card>
            </div>
          </div>

          {/* Alerts & Notifications */}
          <div className="space-y-8">
             <h2 className="text-2xl font-bold">Critical Alerts</h2>
             <div className="space-y-4">
                {[
                  { msg: 'Oxygen supply low in Block B', type: 'critical' },
                  { msg: 'Dr. Amrita is on emergency leave', type: 'warning' },
                  { msg: '3 Panchakarma slots overbooked tomorrow', type: 'warning' },
                ].map((alert, i) => (
                  <div key={i} className={`p-4 rounded-2xl border flex gap-4 ${alert.type === 'critical' ? 'bg-red-50 border-red-100 text-red-700' : 'bg-orange-50 border-orange-100 text-orange-700'}`}>
                     <AlertCircle className="h-5 w-5 shrink-0" />
                     <p className="text-sm font-bold leading-tight">{alert.msg}</p>
                  </div>
                ))}
             </div>

             <Card className="border-none shadow-xl bg-gradient-to-br from-primary to-primary-foreground p-8 rounded-[2rem] text-white space-y-6">
                <h3 className="text-xl font-bold">Weekly Performance</h3>
                <div className="flex items-end gap-3 h-32">
                   {[40, 70, 50, 90, 60, 80, 75].map((h, i) => (
                     <div key={i} className="flex-grow bg-white/20 rounded-t-lg transition-all hover:bg-white/40" style={{ height: `${h}%` }} />
                   ))}
                </div>
                <div className="flex justify-between items-center text-xs font-bold opacity-80 uppercase tracking-widest">
                   <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
                </div>
                <div className="pt-4 border-t border-white/20">
                   <p className="text-2xl font-bold">₹12.4L</p>
                   <p className="text-xs text-primary-foreground/80 font-bold">Total revenue this week</p>
                </div>
             </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
