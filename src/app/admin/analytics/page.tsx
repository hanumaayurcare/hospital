import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TrendingUp, Users, Calendar, Download, MapPin, Activity, Sparkles } from 'lucide-react'

export default function AdminAnalyticsPage() {
  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
           <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Performance Analytics</h1>
              <p className="text-lg text-muted-foreground font-medium">Hospital metrics, revenue growth, and patient satisfaction data.</p>
           </div>
           <Button className="rounded-full px-8 font-bold shadow-lg shadow-primary/20 flex gap-2 border-2 border-primary/20" variant="outline">
              <Download className="h-5 w-5" /> Export Report
           </Button>
        </div>

        {/* Global Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           {[
             { label: 'Total Revenue', val: '₹4.2M', trend: '+12%', icon: TrendingUp },
             { label: 'Total Patients', val: '1,280', trend: '+5%', icon: Users },
             { label: 'Appointments', val: '450', trend: '+8%', icon: Calendar },
             { label: 'Success Rate', val: '94%', trend: '+2%', icon: Sparkles },
           ].map((s) => (
             <Card key={s.label} className="border-none shadow-xl rounded-[2rem] bg-white overflow-hidden">
                <CardContent className="p-8">
                   <div className="flex justify-between items-start">
                      <div className="space-y-1">
                         <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
                         <h3 className="text-3xl font-bold">{s.val}</h3>
                         <span className="text-xs font-bold text-green-600 flex items-center gap-1">{s.trend} <Activity className="h-3 w-3" /></span>
                      </div>
                      <div className="h-12 w-12 rounded-2xl bg-muted/50 flex items-center justify-center text-primary">
                         <s.icon className="h-6 w-6" />
                      </div>
                   </div>
                </CardContent>
             </Card>
           ))}
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <Card className="lg:col-span-2 border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden">
              <CardHeader className="p-10 border-b flex flex-row items-center justify-between">
                 <div className="space-y-1">
                    <CardTitle className="text-2xl font-bold italic">Revenue & Growth</CardTitle>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Monthly Performance 2025-26</p>
                 </div>
                 <div className="flex gap-2">
                    <Button variant="secondary" size="sm" className="rounded-lg h-9 font-bold px-4">Daily</Button>
                    <Button variant="ghost" size="sm" className="rounded-lg h-9 font-bold px-4">Monthly</Button>
                 </div>
              </CardHeader>
              <CardContent className="p-10">
                 <div className="h-[300px] w-full bg-muted/20 rounded-3xl border-2 border-dashed flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 flex items-end justify-around p-8">
                       {[60, 45, 80, 55, 90, 70, 85].map((h, i) => (
                         <div key={i} className="w-12 bg-primary/20 rounded-t-xl transition-all duration-1000 group-hover:bg-primary/40" style={{ height: `${h}%` }}>
                            <div className="h-full w-full bg-primary rounded-t-xl" style={{ height: '40%' }} />
                         </div>
                       ))}
                    </div>
                    <p className="text-xs font-bold text-muted-foreground italic z-10 bg-white/80 px-4 py-2 rounded-full shadow-sm">Revenue Visualization Placeholder</p>
                 </div>
              </CardContent>
           </Card>

           <Card className="border-none shadow-xl rounded-[2.5rem] bg-zinc-900 text-white overflow-hidden">
              <CardHeader className="p-10">
                 <CardTitle className="text-2xl font-bold italic">By Branch</CardTitle>
                 <p className="text-xs font-bold opacity-60 uppercase tracking-widest">Revenue Distribution</p>
              </CardHeader>
              <CardContent className="p-10 pt-0 space-y-8">
                 {[
                   { name: 'Kochi (Main)', val: 65, color: 'bg-primary' },
                   { name: 'Bangalore', val: 25, color: 'bg-blue-500' },
                   { name: 'Hyderabad', val: 10, color: 'bg-orange-500' },
                 ].map((b) => (
                   <div key={b.name} className="space-y-3">
                      <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                         <span>{b.name}</span>
                         <span className="opacity-60">{b.val}%</span>
                      </div>
                      <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                         <div className={`h-full ${b.color} transition-all duration-1000`} style={{ width: `${b.val}%` }} />
                      </div>
                   </div>
                 ))}
                 
                 <div className="pt-8 border-t border-white/10 space-y-4">
                    <div className="bg-white/5 p-6 rounded-2xl flex items-center gap-4">
                       <MapPin className="h-8 w-8 text-primary" />
                       <div>
                          <p className="text-xs font-bold opacity-60 uppercase">Top Performer</p>
                          <h4 className="text-lg font-bold italic">Kochi Branch</h4>
                       </div>
                    </div>
                 </div>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  )
}
