import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bed, User, ArrowLeft, Plus, Filter, Info, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function RoomManagementPage() {
  const wards = [
    { name: 'Wellness Bloom (W-1)', rooms: [201, 202, 203, 204], type: 'Deluxe' },
    { name: 'Ayur Heritage (W-2)', rooms: [101, 102, 103, 104, 105], type: 'Premium' },
    { name: 'General Healing (G-1)', rooms: [301, 302, 303, 304, 305, 306], type: 'Semi-Private' },
  ]

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <Link href="/admin/dashboard" className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all">
               <ArrowLeft className="h-4 w-4" /> Back to Dashboard
            </Link>
            <h1 className="text-4xl font-bold tracking-tight">IPD & Bed Management</h1>
          </div>
          <div className="flex gap-4">
             <Button variant="outline" className="rounded-full px-6 font-bold flex gap-2"><Filter className="h-4 w-4" /> Filter Wards</Button>
             <Button className="rounded-full px-8 font-bold shadow-lg shadow-primary/20 flex gap-2"><Plus className="h-4 w-4" /> Allocate New Room</Button>
          </div>
        </div>

        {/* Ward Sections */}
        <div className="space-y-12">
           {wards.map((ward) => (
             <section key={ward.name} className="space-y-6">
                <div className="flex items-center justify-between border-b pb-4">
                   <div className="flex items-center gap-4">
                      <h2 className="text-2xl font-bold">{ward.name}</h2>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">{ward.type}</span>
                   </div>
                   <p className="text-sm text-muted-foreground font-medium">1 Bed Available</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                   {ward.rooms.map((roomNum) => {
                     const isOccupied = roomNum % 2 === 1 // Mock logic
                     return (
                       <Card key={roomNum} className={`border-2 transition-all duration-300 rounded-[2rem] shadow-none overflow-hidden ${isOccupied ? 'border-muted bg-white' : 'border-primary/20 bg-primary/5 hover:border-primary'}`}>
                          <CardContent className="p-6 space-y-6">
                             <div className="flex justify-between items-start">
                                <div className="h-10 w-10 rounded-2xl bg-muted flex items-center justify-center font-bold text-sm">
                                   {roomNum}
                                </div>
                                <Bed className={`h-5 w-5 ${isOccupied ? 'text-muted-foreground' : 'text-primary'}`} />
                             </div>
                             
                             {isOccupied ? (
                               <div className="space-y-4">
                                  <div>
                                     <p className="text-xs font-bold text-muted-foreground uppercase">Patient</p>
                                     <p className="font-bold text-sm truncate">Rajesh Kumar</p>
                                  </div>
                                  <div className="flex justify-between items-center text-[10px] font-bold text-muted-foreground uppercase">
                                     <span>Day 4/14</span>
                                     <Info className="h-3 w-3" />
                                  </div>
                                  <Button variant="ghost" className="w-full h-10 rounded-xl bg-muted/50 text-[10px] font-bold uppercase">Patient Details</Button>
                               </div>
                             ) : (
                               <div className="space-y-4 flex flex-col items-center justify-center py-4">
                                  <p className="text-xs font-bold text-primary uppercase tracking-widest">Available</p>
                                  <Button className="rounded-xl font-bold h-10 w-full text-[10px] uppercase">Allocate</Button>
                               </div>
                             )}
                          </CardContent>
                       </Card>
                     )
                   })}
                </div>
             </section>
           ))}
        </div>
      </div>
    </div>
  )
}
