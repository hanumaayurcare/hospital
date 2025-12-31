import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, Plus, Filter,MapPin, Stethoscope, Mail, Phone, Edit, Trash2 } from 'lucide-react'

export default function AdminDoctorsPage() {
  const doctors = [
    { id: 1, name: 'Dr. Hanumaan Singh', role: 'Senior Physician', branch: 'Kochi (Main)', email: 'hanumaan@hanuma.com', phone: '+91 98765 43210', status: 'Active' },
    { id: 2, name: 'Dr. Amrita Devi', role: 'Gynocology Specialist', branch: 'Bangalore', email: 'amrita@hanuma.com', phone: '+91 98765 43211', status: 'Active' },
    { id: 3, name: 'Dr. Rahul Varma', role: 'Panchakarma Head', branch: 'Kochi (Main)', email: 'rahul@hanuma.com', phone: '+91 98765 43212', status: 'On Leave' },
  ]

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">Doctor Management</h1>
            <p className="text-lg text-muted-foreground font-medium">Add, manage, and assign hospital specialists.</p>
          </div>
          <Button size="lg" className="rounded-full px-8 font-bold shadow-lg shadow-primary/20 flex gap-2">
            <Plus className="h-5 w-5" /> Add New Doctor
          </Button>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4">
           <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input 
                className="w-full h-12 rounded-xl bg-white pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-primary/20 border-none shadow-sm" 
                placeholder="Search by name, specialty, or branch..."
              />
           </div>
           <Button variant="outline" className="h-12 rounded-xl bg-white border-none shadow-sm font-bold flex gap-2">
              <Filter className="h-5 w-5" /> Filter by Branch
           </Button>
        </div>

        {/* Doctor List */}
        <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white">
           <CardContent className="p-0">
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead className="bg-muted/30 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] border-b p-0">
                       <tr>
                          <th className="p-8">Doctor Details</th>
                          <th className="p-8">Contact Information</th>
                          <th className="p-8">Assignment</th>
                          <th className="p-8">Status</th>
                          <th className="p-8 text-right">Actions</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-muted/50">
                       {doctors.map((dr) => (
                         <tr key={dr.id} className="hover:bg-muted/10 transition-colors group">
                            <td className="p-8">
                               <div className="flex items-center gap-4">
                                  <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl">
                                     {dr.name[4]}
                                  </div>
                                  <div>
                                     <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{dr.name}</h4>
                                     <p className="text-xs text-muted-foreground font-bold flex items-center gap-1 italic">
                                        <Stethoscope className="h-3 w-3" /> {dr.role}
                                     </p>
                                  </div>
                               </div>
                            </td>
                            <td className="p-8">
                               <div className="space-y-1">
                                  <p className="text-sm font-bold flex items-center gap-2 text-muted-foreground"><Mail className="h-3 w-3" /> {dr.email}</p>
                                  <p className="text-sm font-bold flex items-center gap-2 text-muted-foreground"><Phone className="h-3 w-3" /> {dr.phone}</p>
                               </div>
                            </td>
                            <td className="p-8">
                               <div className="flex items-center gap-2 text-sm font-bold text-primary italic">
                                  <MapPin className="h-4 w-4" /> {dr.branch}
                               </div>
                            </td>
                            <td className="p-8">
                               <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                                 dr.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-50 text-red-500'
                               }`}>
                                  {dr.status}
                               </span>
                            </td>
                            <td className="p-8 text-right">
                               <div className="flex justify-end gap-2">
                                  <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/10 hover:text-primary"><Edit className="h-4 w-4" /></Button>
                                  <Button variant="ghost" size="icon" className="rounded-xl hover:bg-red-50 hover:text-red-500"><Trash2 className="h-4 w-4" /></Button>
                               </div>
                            </td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </CardContent>
        </Card>
      </div>
    </div>
  )
}
