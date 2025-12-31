import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Search, Filter, User, Activity, MoreVertical, Eye, Edit } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AdminPatientsPage() {
  const patients = [
    { id: 'PA-9921', name: 'Arjun Sharma', age: 34, gender: 'Male', contact: '+91 98765 43210', visits: 12, lastVisit: 'Dec 15, 2025', status: 'In Treatment' },
    { id: 'PA-9922', name: 'Sneha Reddy', age: 28, gender: 'Female', contact: '+91 98765 43211', visits: 3, lastVisit: 'Dec 28, 2025', status: 'Stable' },
    { id: 'PA-9923', name: 'Rajesh Kumar', age: 45, gender: 'Male', contact: '+91 98765 43212', visits: 1, lastVisit: 'Jan 02, 2026', status: 'New' },
    { id: 'PA-9924', name: 'Priya Menon', age: 29, gender: 'Female', contact: '+91 98765 43213', visits: 5, lastVisit: 'Jan 01, 2026', status: 'In Treatment' },
    { id: 'PA-9925', name: 'Suresh Gupta', age: 52, gender: 'Male', contact: '+91 98765 43214', visits: 8, lastVisit: 'Dec-20, 2025', status: 'Stable' },
  ]

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
         <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground">Patient Directory</h1>
            <p className="text-lg text-muted-foreground font-medium">Manage clinical records for {patients.length} registered patients.</p>
         </div>
         <div className="flex gap-4">
            <Button variant="outline" size="lg" className="rounded-full px-8 font-bold border-2 h-12">Export CSV</Button>
            <Button size="lg" className="rounded-full px-8 font-bold shadow-lg shadow-primary/20 h-12">Add New Patient</Button>
         </div>
      </div>

      {/* Filters Hub */}
      <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-border/40 flex flex-col lg:flex-row gap-6">
         <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input 
              className="w-full h-14 rounded-2xl bg-muted/30 pl-12 pr-6 text-sm font-bold outline-none border-none placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/20 transition-all" 
              placeholder="Search by Name, ID, or Mobile number..."
            />
         </div>
         <div className="flex gap-4">
            <Button variant="outline" className="h-14 rounded-2xl bg-white border-2 font-bold px-8 flex gap-2"><Filter className="h-5 w-5" /> All Status</Button>
            <Button className="h-14 rounded-2xl px-10 font-bold shadow-lg shadow-primary/20">Search Database</Button>
         </div>
      </div>

      {/* Patient Table */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-border/40 overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/30">
            <TableRow className="hover:bg-transparent border-border/50">
              <TableHead className="w-[120px] font-black text-[10px] uppercase tracking-widest py-6 pl-8">Patient ID</TableHead>
              <TableHead className="font-black text-[10px] uppercase tracking-widest py-6">Patient Name</TableHead>
              <TableHead className="font-black text-[10px] uppercase tracking-widest py-6">Age/Gender</TableHead>
              <TableHead className="font-black text-[10px] uppercase tracking-widest py-6">Contact Info</TableHead>
              <TableHead className="font-black text-[10px] uppercase tracking-widest py-6">Last Visit</TableHead>
              <TableHead className="font-black text-[10px] uppercase tracking-widest py-6">Medical Status</TableHead>
              <TableHead className="text-right font-black text-[10px] uppercase tracking-widest py-6 pr-8">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {patients.map((p) => (
              <TableRow key={p.id} className="hover:bg-primary/5 transition-colors border-border/50 group">
                <TableCell className="font-bold text-muted-foreground pl-8">{p.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center font-black text-primary text-xs shadow-sm border border-primary/5">
                      {p.name[0]}
                    </div>
                    <span className="font-extrabold text-foreground group-hover:text-primary transition-colors">{p.name}</span>
                  </div>
                </TableCell>
                <TableCell className="font-bold text-muted-foreground uppercase text-[10px]">{p.age}Y • {p.gender}</TableCell>
                <TableCell className="font-medium text-foreground">{p.contact}</TableCell>
                <TableCell className="font-bold text-muted-foreground italic text-xs">{p.lastVisit}</TableCell>
                <TableCell>
                  <Badge className={
                    p.status === 'In Treatment' ? 'bg-primary/10 text-primary border-none font-bold' :
                    p.status === 'Stable' ? 'bg-accent/10 text-accent border-none font-bold' :
                    'bg-orange-100 text-orange-700 border-none font-bold'
                  }>
                    {p.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right pr-8">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg group-hover:bg-white transition-colors">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-xl border-border/50 shadow-xl p-2 min-w-[160px]">
                      <DropdownMenuLabel className="text-[10px] font-black uppercase tracking-widest text-muted-foreground p-2">Operations</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="rounded-lg p-2 font-bold flex gap-2 cursor-pointer focus:bg-primary/5 focus:text-primary">
                        <Eye className="h-4 w-4" /> View Records
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-lg p-2 font-bold flex gap-2 cursor-pointer focus:bg-primary/5 focus:text-primary">
                        <Edit className="h-4 w-4" /> Edit Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem className="rounded-lg p-2 font-bold flex gap-2 cursor-pointer text-destructive focus:bg-destructive/5 focus:text-destructive">
                        <Activity className="h-4 w-4" /> Treatment Log
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {patients.length === 0 && (
          <div className="p-20 text-center space-y-4">
             <User className="h-12 w-12 text-muted/30 mx-auto" />
             <p className="text-muted-foreground font-bold">No patients found matching your search.</p>
          </div>
        )}
      </div>

      {/* Pagination Placeholder */}
      <div className="flex items-center justify-between px-2">
         <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60 italic">Showing 1 to {patients.length} of {patients.length} patients</p>
         <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled className="rounded-xl font-bold h-9">Prev</Button>
            <Button variant="outline" size="sm" className="rounded-xl font-bold h-9 bg-primary/5 border-primary/20 text-primary">1</Button>
            <Button variant="outline" size="sm" className="rounded-xl font-bold h-9">Next</Button>
         </div>
      </div>
    </div>
  )
}
