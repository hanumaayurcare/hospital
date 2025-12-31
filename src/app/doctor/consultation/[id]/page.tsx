import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Plus, Trash2, Save, FileText, Activity, Heart, Sparkles, Send } from 'lucide-react'

export default function DoctorConsultationPage({ params }: { params: { id: string } }) {
  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
           <div className="space-y-1">
              <h1 className="text-4xl font-bold tracking-tight">Active Consultation</h1>
              <p className="text-lg text-muted-foreground font-medium italic">Patient: Arjun Sharma | ID: #{params.id}</p>
           </div>
           <div className="flex gap-4">
              <Button variant="outline" className="rounded-full px-8 font-bold bg-white">Save Draft</Button>
              <Button className="rounded-full px-10 font-bold shadow-lg shadow-primary/20 flex gap-2">
                 <Send className="h-4 w-4" /> Finalize Prescription
              </Button>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Clinical Recording Area */}
           <div className="lg:col-span-2 space-y-8">
              <Card className="border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden">
                 <CardHeader className="p-8 border-b bg-muted/10">
                    <CardTitle className="text-xl font-bold italic flex items-center gap-3">
                       <Activity className="h-6 w-6 text-primary" /> Diagnosis & Findings
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Chief Complaint</label>
                          <Input className="rounded-xl h-12 border-muted/50 focus:ring-primary/20" placeholder="e.g. Chronic back pain" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Pulse (Nadi)</label>
                          <Input className="rounded-xl h-12 border-muted/50 focus:ring-primary/20" placeholder="e.g. Vata-Pitta dominant" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Clinical Observation</label>
                       <Textarea className="rounded-2xl min-h-[150px] border-muted/50 focus:ring-primary/20 p-6" placeholder="Detailed analysis of symptoms and imbalances..." />
                    </div>
                 </CardContent>
              </Card>

              <Card className="border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden">
                 <CardHeader className="p-8 border-b bg-muted/10 flex flex-row items-center justify-between">
                    <CardTitle className="text-xl font-bold italic flex items-center gap-3">
                       <Heart className="h-6 w-6 text-red-500" /> Medication Plan
                    </CardTitle>
                    <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5 flex gap-2">
                       <Plus className="h-4 w-4" /> Add Medicine
                    </Button>
                 </CardHeader>
                 <CardContent className="p-0">
                    <div className="overflow-x-auto">
                       <table className="w-full text-left">
                          <thead className="bg-muted/5 text-[10px] font-bold text-muted-foreground uppercase tracking-widest border-b">
                             <tr>
                                <th className="p-8">Medicine Name</th>
                                <th className="p-8">Dosage</th>
                                <th className="p-8">Frequency</th>
                                <th className="p-8">Duration</th>
                                <th className="p-8 text-right">Action</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-muted/30">
                             <tr>
                                <td className="p-8"><Input className="border-none shadow-none font-bold" placeholder="Dhanwantharam Thailam" /></td>
                                <td className="p-8"><Input className="border-none shadow-none text-sm" placeholder="10ml" /></td>
                                <td className="p-8"><Input className="border-none shadow-none text-sm" placeholder="Twice a day" /></td>
                                <td className="p-8"><Input className="border-none shadow-none text-sm" placeholder="14 Days" /></td>
                                <td className="p-8 text-right"><Button variant="ghost" size="icon" className="text-muted-foreground hover:text-red-500"><Trash2 className="h-4 w-4" /></Button></td>
                             </tr>
                          </tbody>
                       </table>
                    </div>
                 </CardContent>
              </Card>

              <Card className="border-none shadow-xl rounded-[2.5rem] bg-zinc-900 text-white overflow-hidden">
                 <CardHeader className="p-8">
                    <CardTitle className="text-xl font-bold italic flex items-center gap-3">
                       <Sparkles className="h-6 w-6 text-primary" /> Panchakarma Advice
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="p-10 space-y-6">
                    <div className="flex flex-wrap gap-3">
                       {['Abhyanga', 'Shiredhara', 'Kizhi', 'Vasti'].map(t => (
                         <Button key={t} variant="outline" className="rounded-full border-white/20 hover:bg-white/10 italic">{t}</Button>
                       ))}
                    </div>
                    <Textarea className="bg-white/5 border-white/10 rounded-2xl min-h-[100px] p-6 text-sm placeholder:italic" placeholder="Specific instructions for the therapist..." />
                 </CardContent>
              </Card>
           </div>

           {/* Medical History Sidebar */}
           <div className="space-y-8">
              <Card className="border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden sticky top-32">
                 <CardHeader className="p-8 bg-primary text-white">
                    <CardTitle className="text-lg font-bold italic">Patient vitals</CardTitle>
                 </CardHeader>
                 <CardContent className="p-8 space-y-8">
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-4 bg-muted/30 rounded-[1.5rem] space-y-1">
                          <p className="text-[10px] font-bold text-muted-foreground uppercase">BP</p>
                          <p className="text-lg font-bold">120/80</p>
                       </div>
                       <div className="p-4 bg-muted/30 rounded-[1.5rem] space-y-1">
                          <p className="text-[10px] font-bold text-muted-foreground uppercase">Weight</p>
                          <p className="text-lg font-bold">72 kg</p>
                       </div>
                    </div>
                    
                    <div className="space-y-4">
                       <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground border-b pb-2">Last 3 Observations</h4>
                       {[
                         { date: 'Dec 15', text: 'Slight improvement in digestion.' },
                         { date: 'Dec 01', text: 'Recommended ginger tea morning.' },
                         { date: 'Nov 14', text: 'Joint stiffness reported.' },
                       ].map((obs, i) => (
                         <div key={i} className="flex gap-4 text-xs">
                            <span className="font-bold text-primary shrink-0">{obs.date}</span>
                            <p className="text-muted-foreground italic font-medium">{obs.text}</p>
                         </div>
                       ))}
                    </div>

                    <Button variant="outline" className="w-full rounded-xl font-bold border-2 flex gap-2">
                       <FileText className="h-4 w-4" /> Full History
                    </Button>
                 </CardContent>
              </Card>
           </div>
        </div>
      </div>
    </div>
  )
}
