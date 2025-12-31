import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, Plus, Filter, Users, Sparkles, UserCheck, ShieldCheck, Mail, Phone, Edit, Trash2 } from 'lucide-react'
import Link from 'next/link'

export default function AdminStaffPage() {
  const staff = [
    { id: 1, name: 'Ravi Kumar', role: 'Senior Therapist', dept: 'Panchakarma', shift: 'Morning', status: 'Available' },
    { id: 2, name: 'Anjali Menon', role: 'Lead Nurse', dept: 'IPD', shift: 'Night', status: 'Available' },
    { id: 3, name: 'Mani Iyer', role: 'Assistant Therapist', dept: 'Panchakarma', shift: 'Morning', status: 'In Session' },
    { id: 4, name: 'Deepa Rao', role: 'Junior Therapist', dept: 'Wellness', shift: 'Rotate', status: 'Available' },
  ]

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Staff & Therapist Directory</h1>
            <p className="text-lg text-muted-foreground font-medium">Manage clinical support staff and Panchakarma therapists.</p>
          </div>
          <Button size="lg" className="rounded-full px-8 font-bold shadow-lg shadow-accent/20 bg-accent hover:bg-accent/90 flex gap-2">
            <Plus className="h-5 w-5" /> Add New Staff
          </Button>
        </div>

        {/* Quick Filters */}
        <div className="flex flex-wrap gap-4">
           {[
             { label: 'All Staff', count: 12, icon: Users, active: true },
             { label: 'Therapists', count: 8, icon: Sparkles, active: false },
             { label: 'Nurses', count: 4, icon: UserCheck, active: false },
             { label: 'Admin Support', count: 3, icon: ShieldCheck, active: false },
           ].map((cat) => (
             <Button key={cat.label} variant={cat.active ? 'secondary' : 'outline'} className={`rounded-xl h-14 px-6 font-bold shadow-sm ${cat.active ? 'bg-primary text-white' : 'bg-white border-none'}`}>
                <cat.icon className="h-5 w-5 mr-3" /> {cat.label} <span className="ml-3 opacity-60 text-xs">{cat.count}</span>
             </Button>
           ))}
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {staff.map((s) => (
             <Card key={s.id} className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white hover:translate-y-[-4px] transition-all group">
                <CardContent className="p-8 text-center space-y-6">
                   <div className="relative inline-block">
                      <div className="h-24 w-24 rounded-[2rem] bg-muted flex items-center justify-center text-3xl font-bold text-accent shadow-inner">
                         {s.name[0]}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-4 border-white ${s.status === 'Available' ? 'bg-green-500' : 'bg-orange-600 animate-pulse'}`} />
                   </div>
                   
                   <div className="space-y-1">
                      <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{s.name}</h4>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{s.role}</p>
                   </div>

                   <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-muted rounded-full text-xs font-bold text-muted-foreground italic">{s.dept}</span>
                      <span className="px-3 py-1 bg-muted rounded-full text-xs font-bold text-muted-foreground italic">{s.shift}</span>
                   </div>

                   <div className="pt-6 border-t flex justify-center gap-4">
                      <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/10 hover:text-primary"><Edit className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="rounded-xl hover:bg-red-50 hover:text-red-500"><Trash2 className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" className="rounded-xl hover:bg-blue-50 hover:text-blue-500"><Mail className="h-4 w-4" /></Button>
                   </div>
                </CardContent>
             </Card>
           ))}
        </div>
      </div>
    </div>
  )
}
