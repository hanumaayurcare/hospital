import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Clock, Plus, Edit, ExternalLink, Globe, Sparkles } from 'lucide-react'

export default function AdminLocationsPage() {
  const branches = [
    { id: 1, name: 'Hanuma Kochi (Main)', address: '123 Healing Path, Kochi, Kerala', phone: '+91 98765 00001', timing: '08 AM - 08 PM', status: 'Main Center' },
    { id: 2, name: 'Hanuma Bangalore', address: '456 Wellness St, Bangalore, India', phone: '+91 98765 00002', timing: '09 AM - 07 PM', status: 'Active' },
    { id: 3, name: 'Hanuma Hyderabad', address: '789 Ayur Ave, Hyderabad, India', phone: '+91 98765 00003', timing: '10 AM - 06 PM', status: 'Opening Soon' },
  ]

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex items-center justify-between">
           <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight">Branch Management</h1>
              <p className="text-lg text-muted-foreground font-medium">Configure hospital locations, OPD timings, and branch specifics.</p>
           </div>
           <Button size="lg" className="rounded-full px-8 font-bold shadow-lg shadow-primary/20 flex gap-2">
              <Plus className="h-5 w-5" /> Add New Branch
           </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {branches.map((b) => (
             <Card key={b.id} className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white hover:scale-[1.02] transition-transform duration-500 group">
                <CardContent className="p-0">
                   <div className="flex flex-col sm:flex-row h-full">
                      {/* Left: Map/Visual Placeholder */}
                      <div className="sm:w-48 bg-muted group-hover:bg-primary/5 transition-colors flex items-center justify-center p-8">
                         <div className="h-24 w-24 rounded-[2rem] bg-white shadow-xl flex items-center justify-center">
                            <Globe className="h-10 w-10 text-primary animate-pulse" />
                         </div>
                      </div>
                      
                      {/* Right: Info */}
                      <div className="p-10 flex-grow space-y-6">
                         <div className="flex justify-between items-start">
                            <div className="space-y-1">
                               <h3 className="text-2xl font-bold group-hover:text-primary transition-colors italic">{b.name}</h3>
                               <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full ${b.status === 'Main Center' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'}`}>
                                  {b.status}
                               </span>
                            </div>
                            <Button variant="ghost" size="icon" className="rounded-xl"><Edit className="h-5 w-5" /></Button>
                         </div>

                         <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center gap-3 text-sm font-bold text-muted-foreground">
                               <MapPin className="h-4 w-4 text-primary" /> {b.address}
                            </div>
                            <div className="flex items-center gap-3 text-sm font-bold text-muted-foreground">
                               <Phone className="h-4 w-4 text-primary" /> {b.phone}
                            </div>
                            <div className="flex items-center gap-3 text-sm font-bold text-muted-foreground">
                               <Clock className="h-4 w-4 text-primary" /> {b.timing}
                            </div>
                         </div>

                         <div className="pt-6 border-t flex gap-4">
                            <Button className="flex-grow rounded-xl font-bold h-12 shadow-sm flex gap-2">Branch Portal <ExternalLink className="h-4 w-4" /></Button>
                            <Button variant="outline" className="rounded-xl font-bold h-12 border-2 px-6">OPD Rules</Button>
                         </div>
                      </div>
                   </div>
                </CardContent>
             </Card>
           ))}
        </div>

        <section className="bg-zinc-900 rounded-[3rem] p-12 text-white relative overflow-hidden mt-12">
            <div className="relative z-10 space-y-8 flex flex-col md:flex-row md:items-center justify-between gap-12">
               <div className="space-y-4 max-w-xl">
                  <h2 className="text-3xl font-bold italic flex items-center gap-3"><Sparkles className="h-8 w-8 text-primary" /> Global OPD Configuration</h2>
                  <p className="text-sm opacity-60 font-medium leading-relaxed">
                     Update slot intervals, holiday lists, and booking visibility for all branches 
                     simultaneously. Changes applied here will sync across the patient and doctor portals.
                  </p>
               </div>
               <Button variant="secondary" className="rounded-full font-bold px-12 h-16 text-xs uppercase tracking-widest shadow-2xl">Global Settings</Button>
            </div>
        </section>
      </div>
    </div>
  )
}
