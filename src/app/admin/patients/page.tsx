import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, Filter, User, Calendar, Activity, ChevronRight, FileText, Phone, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function AdminPatientsPage() {
  const patients = [
    { id: 'PA-9921', name: 'Arjun Sharma', age: 34, gender: 'Male', contact: '+91 98765 43210', visits: 12, lastVisit: 'Dec 15, 2025', status: 'In Treatment' },
    { id: 'PA-9922', name: 'Sneha Reddy', age: 28, gender: 'Female', contact: '+91 98765 43211', visits: 3, lastVisit: 'Dec 28, 2025', status: 'Stable' },
    { id: 'PA-9923', name: 'Rajesh Kumar', age: 45, gender: 'Male', contact: '+91 98765 43212', visits: 1, lastVisit: 'Jan 02, 2026', status: 'New' },
  ]

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
           <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Patient Directory</h1>
              <p className="text-lg text-muted-foreground font-medium">Search and manage medical records for all registered patients.</p>
           </div>
           <Button variant="outline" size="lg" className="rounded-full px-8 font-bold border-2">Import Patient Data</Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-[2rem] shadow-sm">
           <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input 
                className="w-full h-14 rounded-2xl bg-muted/30 pl-12 pr-6 text-sm font-bold outline-none border-none placeholder:italic" 
                placeholder="Search by ID, Name, or Mobile..."
              />
           </div>
           <div className="flex gap-4">
              <Button variant="outline" className="h-14 rounded-2xl bg-white border-2 font-bold px-8 flex gap-2"><Filter className="h-5 w-5" /> All Status</Button>
              <Button className="h-14 rounded-2xl px-10 font-bold shadow-lg shadow-primary/20">Search Database</Button>
           </div>
        </div>

        {/* Patient Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {patients.map((p) => (
             <Card key={p.id} className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white hover:translate-y-[-8px] transition-all duration-500 group">
                <CardContent className="p-0">
                   <div className="bg-primary p-8 text-white relative overflow-hidden">
                      <div className="relative z-10 flex justify-between items-start">
                         <div className="h-16 w-16 rounded-[1.5rem] bg-white text-primary flex items-center justify-center text-3xl font-bold shadow-lg shadow-black/10 transition-transform group-hover:scale-110">
                            {p.name[0]}
                         </div>
                         <span className="text-[10px] font-bold uppercase tracking-[0.2em] bg-white/20 px-3 py-1 rounded-full">{p.id}</span>
                      </div>
                      <div className="mt-8 relative z-10">
                         <h3 className="text-2xl font-bold italic">{p.name}</h3>
                         <p className="text-xs opacity-70 font-bold uppercase tracking-widest mt-1">{p.gender}, {p.age} Years</p>
                      </div>
                      <Activity className="absolute bottom-[-30px] right-[-30px] h-48 w-48 opacity-10 rotate-12" />
                   </div>
                   
                   <div className="p-8 space-y-6">
                      <div className="space-y-4">
                         <div className="flex justify-between items-center text-xs font-bold text-muted-foreground">
                            <span className="flex items-center gap-2"><Phone className="h-3 w-3" /> Contact</span>
                            <span className="text-foreground">{p.contact}</span>
                         </div>
                         <div className="flex justify-between items-center text-xs font-bold text-muted-foreground">
                            <span className="flex items-center gap-2"><Calendar className="h-3 w-3" /> Last Visit</span>
                            <span className="text-foreground italic">{p.lastVisit}</span>
                         </div>
                         <div className="flex justify-between items-center text-xs font-bold text-muted-foreground">
                            <span className="flex items-center gap-2"><FileText className="h-3 w-3" /> Total Visits</span>
                            <span className="px-3 py-0.5 rounded-full bg-primary/10 text-primary">{p.visits}</span>
                         </div>
                      </div>

                      <div className="pt-6 border-t flex gap-4">
                         <Link href={`/doctor/patient/${p.id}`} className="flex-grow">
                            <Button className="w-full h-12 rounded-xl font-bold shadow-md flex gap-2">Record <ArrowUpRight className="h-4 w-4" /></Button>
                         </Link>
                         <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl text-primary border-primary/20 hover:bg-primary/5">
                            <Activity className="h-5 w-5" />
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
