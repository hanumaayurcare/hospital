import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Users, Calendar, Wallet, Bed, AlertCircle, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Analytics Overview</h1>
          <p className="text-lg text-muted-foreground font-medium">Real-time hospital operations and performance data.</p>
        </div>
        <div className="flex gap-4">
           <Button variant="outline" size="lg" className="rounded-full px-8 font-bold border-2 h-12">Download Report</Button>
           <Link href="/admin/ipd">
             <Button size="lg" className="rounded-full px-8 font-bold shadow-lg shadow-accent/20 bg-accent text-white hover:bg-accent/90 h-12">Manage IPD</Button>
           </Link>
        </div>
      </div>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: '₹4.8L', trend: '+12%', icon: Wallet, color: 'text-primary', bg: 'bg-primary/5' },
          { label: 'New Patients', value: '24', trend: '+5%', icon: Users, color: 'text-accent', bg: 'bg-accent/10' },
          { label: 'Appointments', value: '156', trend: '+18%', icon: Calendar, color: 'text-primary', bg: 'bg-primary/10' },
          { label: 'Active IPDs', value: '18', trend: '80% Occ.', icon: Bed, color: 'text-secondary-foreground', bg: 'bg-secondary' },
        ].map((stat) => (
          <Card key={stat.label} className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`h-12 w-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <Badge variant="secondary" className="bg-primary/5 text-primary border-none font-bold text-[10px]">
                  {stat.trend}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-bold uppercase tracking-wider text-[10px]">{stat.label}</p>
                <p className="text-3xl font-black text-foreground">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Operations */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
             <h2 className="text-2xl font-extrabold text-foreground">In-Patient Status</h2>
             <Link href="/admin/ipd" className="text-sm text-primary font-bold hover:underline">Manage Beds</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {[
               { room: 'Room 201', patient: 'Rajesh Kumar', status: 'Ongoing', procedure: 'Panchakarma (Basti)', progress: 65 },
               { room: 'Room 305', patient: 'Sneha Reddy', status: 'Admitting', procedure: 'Cervical Care', progress: 10 },
             ].map((ipd, i) => (
               <Card key={i} className="border-none shadow-sm p-8 rounded-[2rem] space-y-6 bg-white hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                     <div>
                        <h4 className="text-xl font-extrabold text-foreground">{ipd.room}</h4>
                        <p className="text-sm text-muted-foreground font-medium">{ipd.patient}</p>
                     </div>
                     <Badge className={ipd.status === 'Ongoing' ? 'bg-primary/10 text-primary border-none' : 'bg-accent/10 text-accent border-none'}>
                        {ipd.status}
                     </Badge>
                  </div>
                  <div className="space-y-3">
                     <p className="text-sm font-bold flex gap-2 items-center text-foreground"><Sparkles className="h-4 w-4 text-primary" /> {ipd.procedure}</p>
                     <div className="w-full bg-muted h-2.5 rounded-full overflow-hidden shadow-inner">
                        <div className={`h-full ${ipd.status === 'Ongoing' ? 'bg-primary' : 'bg-accent'} transition-all shadow-sm`} style={{ width: `${ipd.progress}%` }} />
                     </div>
                     <p className="text-[10px] text-right text-muted-foreground font-bold uppercase tracking-tighter">{ipd.progress}% Treatment Course Completed</p>
                  </div>
               </Card>
             ))}
          </div>

          <div className="space-y-6 pt-4">
             <div className="flex items-center justify-between">
                <h2 className="text-2xl font-extrabold text-foreground">Staff On Duty</h2>
                <Link href="/admin/staff" className="text-sm text-primary font-bold hover:underline">View Schedule</Link>
             </div>
             <Card className="border-none shadow-sm overflow-hidden bg-white">
                <CardContent className="p-0">
                  <div className="divide-y divide-border/50">
                     {[
                       { name: 'Dr. Hanumaan Singh', role: 'Chief Physician', status: 'Consulting', branch: 'Kochi Branch' },
                       { name: 'Dr. Rahul Varma', role: 'Panchakarma Head', status: 'In Procedure', branch: 'Bangalore Branch' },
                       { name: 'Nurse Anjali', role: 'IPD Lead', status: 'Available', branch: 'Kochi Branch' },
                     ].map((staff, i) => (
                       <div key={i} className="p-5 flex items-center justify-between hover:bg-muted/10 transition-colors">
                          <div className="flex items-center gap-4">
                             <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary shadow-sm border border-primary/5">{staff.name[0]}</div>
                             <div className="min-w-0">
                                <h4 className="text-sm font-extrabold text-foreground truncate">{staff.name}</h4>
                                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tighter opacity-80">{staff.role} • {staff.branch}</p>
                             </div>
                          </div>
                          <Badge variant="outline" className="text-[10px] font-bold text-muted-foreground bg-muted/20 border-border/50 uppercase">
                            {staff.status}
                          </Badge>
                       </div>
                     ))}
                  </div>
                </CardContent>
             </Card>
          </div>
        </div>

        {/* Alerts & Notifications */}
        <div className="space-y-8">
           <h2 className="text-2xl font-extrabold text-foreground">Critical Alerts</h2>
           <div className="space-y-4">
              {[
                { msg: 'Oxygen supply low in Block B', type: 'critical' },
                { msg: 'Dr. Amrita is on emergency leave', type: 'warning' },
                { msg: '3 Panchakarma slots overbooked tomorrow', type: 'warning' },
              ].map((alert, i) => (
                <div key={i} className={`p-4 rounded-2xl border flex gap-4 ${alert.type === 'critical' ? 'bg-destructive/5 border-destructive/10 text-destructive' : 'bg-orange-50 border-orange-100 text-orange-700'}`}>
                   <AlertCircle className="h-5 w-5 shrink-0" />
                   <p className="text-sm font-bold leading-tight">{alert.msg}</p>
                </div>
              ))}
           </div>

           <Card className="border-none shadow-xl bg-gradient-to-br from-primary to-primary-foreground p-8 rounded-[2rem] text-white space-y-6 overflow-hidden relative group">
              <div className="relative z-10">
                <h3 className="text-xl font-black">Weekly Performance</h3>
                <div className="flex items-end gap-3 h-32 mt-6">
                   {[40, 70, 50, 90, 60, 80, 75].map((h, i) => (
                     <div key={i} className="flex-grow bg-white/20 rounded-t-lg transition-all group-hover:bg-white/40 shadow-sm" style={{ height: `${h}%` }} />
                   ))}
                </div>
                <div className="flex justify-between items-center text-[10px] font-black opacity-80 uppercase tracking-[0.2em] mt-4">
                   <span>Mon</span><span>Wed</span><span>Fri</span><span>Sun</span>
                </div>
                <div className="pt-6 mt-6 border-t border-white/20">
                   <p className="text-2xl font-black tracking-tight text-white mb-1">₹12.4L</p>
                   <p className="text-[10px] text-white/70 font-black uppercase tracking-widest leading-none">Total revenue this week</p>
                </div>
              </div>
              <TrendingUp className="absolute top-[-20px] right-[-20px] h-48 w-48 text-white opacity-[0.05] group-hover:scale-110 transition-transform duration-500" />
           </Card>
        </div>
      </div>
    </div>
  )
}
