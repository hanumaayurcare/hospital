import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, FileText, History, Activity, AlertCircle, Search } from 'lucide-react'
import Link from 'next/link'

export default async function DoctorPatientViewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container max-w-6xl space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/doctor/dashboard" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            <ChevronLeft className="h-5 w-5" /> Back to Patient List
          </Link>
          <div className="flex gap-3">
             <Button variant="outline" className="rounded-xl font-bold border-2">Print Full Record</Button>
             <Link href={`/doctor/consultation/${id}`}>
               <Button className="rounded-xl font-bold shadow-lg shadow-primary/20 px-8">New Consultation</Button>
             </Link>
          </div>
        </div>

        {/* Patient Hero Header */}
        <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden bg-white">
          <CardContent className="p-10 flex flex-col md:flex-row items-center gap-10">
             <div className="h-32 w-32 rounded-full bg-primary text-white flex items-center justify-center text-5xl font-bold shadow-2xl">A</div>
             <div className="flex-grow space-y-4 text-center md:text-left">
                <div className="space-y-1">
                   <h1 className="text-5xl font-bold tracking-tight">Arjun Sharma</h1>
                   <p className="text-xl text-muted-foreground font-medium italic">ID: PA-9921 • 34 Years • Male</p>
                </div>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                   <span className="px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-widest">Hypertension</span>
                   <span className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest">Spine Issues</span>
                   <span className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest">Detox Ongoing</span>
                </div>
             </div>
             <div className="grid grid-cols-2 gap-4 border-l pl-10 hidden lg:grid">
                <div className="text-center">
                   <p className="text-xs font-bold text-muted-foreground uppercase opacity-60">Visits</p>
                   <p className="text-3xl font-bold">12</p>
                </div>
                <div className="text-center">
                   <p className="text-xs font-bold text-muted-foreground uppercase opacity-60">Treated</p>
                   <p className="text-3xl font-bold">1.5y</p>
                </div>
             </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {/* Records & History */}
           <div className="lg:col-span-2 space-y-12">
              <section className="space-y-6">
                 <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold flex items-center gap-2"><History className="h-6 w-6 text-primary" /> Past Consultations</h2>
                    <div className="relative w-64">
                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                       <input className="w-full h-10 rounded-xl bg-white border border-muted pl-10 pr-4 text-sm outline-none" placeholder="Search case notes..." />
                    </div>
                 </div>

                 <div className="space-y-4">
                    {[
                      { date: 'Dec 15, 2025', type: 'Video', diag: 'Cervical Spondylosis (Moderate)', dr: 'Self' },
                      { date: 'Nov 02, 2025', type: 'OPD', diag: 'Amavata (Rheumatoid)', dr: 'Dr. Amrita Devi' },
                      { date: 'Aug 24, 2025', type: 'IPD', diag: 'Panchakarma (Detox)', dr: 'Self' },
                    ].map((visit, i) => (
                      <Card key={i} className="border-none shadow-sm hover:translate-x-1 transition-transform cursor-pointer overflow-hidden group">
                         <CardContent className="p-0">
                            <div className="flex items-center">
                               <div className="w-2 bg-primary self-stretch opacity-0 group-hover:opacity-100 transition-opacity" />
                               <div className="p-6 flex flex-grow items-center justify-between">
                                  <div className="space-y-1">
                                     <p className="text-sm font-bold text-primary italic uppercase tracking-widest">{visit.date}</p>
                                     <h4 className="text-xl font-bold">{visit.diag}</h4>
                                     <p className="text-xs text-muted-foreground font-medium">Consulted by {visit.dr} • {visit.type} session</p>
                                  </div>
                                  <ChevronRight className="h-6 w-6 text-muted-foreground" />
                               </div>
                            </div>
                         </CardContent>
                      </Card>
                    ))}
                 </div>
              </section>

              <section className="space-y-6">
                 <h2 className="text-2xl font-bold flex items-center gap-2"><FileText className="h-6 w-6 text-primary" /> Lab & External Reports</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: 'Blood Work (Lipo)', date: 'Dec 01, 2025', provider: 'Metropolis Lab' },
                      { title: 'MRI Cervical Spine', date: 'Oct 20, 2025', provider: 'Hitech Scan' },
                    ].map((rep, i) => (
                      <Card key={i} className="border-none shadow-sm p-6 bg-white flex items-center gap-4 group">
                         <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            <FileText className="h-5 w-5" />
                         </div>
                         <div className="flex-grow">
                            <h4 className="font-bold text-sm leading-tight">{rep.title}</h4>
                            <p className="text-[10px] text-muted-foreground font-bold">{rep.date} • {rep.provider}</p>
                         </div>
                         <Button variant="ghost" size="sm" className="font-bold text-primary uppercase text-[10px]">View PDF</Button>
                      </Card>
                    ))}
                 </div>
              </section>
           </div>

           {/* Vitals Sidebar */}
           <div className="space-y-8">
              <h2 className="text-2xl font-bold">Latest Vitals</h2>
              <Card className="border-none shadow-2xl bg-gradient-to-br from-primary to-primary-foreground p-8 rounded-[2.5rem] text-white space-y-8 h-fit">
                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Weight (kg)</p>
                       <p className="text-4xl font-bold">78.5</p>
                       <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded">-1.2 BMI</span>
                    </div>
                    <div className="space-y-1">
                       <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest">BP (mmHg)</p>
                       <p className="text-4xl font-bold">124/82</p>
                       <span className="text-[10px] bg-green-500/40 px-2 py-0.5 rounded">Healthy</span>
                    </div>
                 </div>
                 
                 <div className="space-y-4 pt-8 border-t border-white/20">
                    <h3 className="text-lg font-bold flex items-center gap-2"><Activity className="h-5 w-5" /> Recent Trends</h3>
                    <div className="space-y-4">
                       {[
                         { label: 'Pulse Rate', value: '72 bpm', trend: 'Stable' },
                        { label: 'Temperature', value: '98.4 F', trend: 'Normal' },
                       ].map((v, i) => (
                         <div key={i} className="flex justify-between items-center text-sm font-bold">
                            <span className="opacity-80 font-medium italic">{v.label}</span>
                            <div className="text-right">
                               <p>{v.value}</p>
                               <p className="text-[10px] opacity-60 uppercase">{v.trend}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 
                 <Button variant="secondary" className="w-full h-14 rounded-2xl font-bold shadow-xl">Update Vitals</Button>
              </Card>

              <Card className="border-none shadow-sm p-8 rounded-[2.5rem] bg-orange-50 space-y-4">
                 <h3 className="text-xl font-bold flex items-center gap-2"><AlertCircle className="h-5 w-5 text-orange-500" /> Medical Alerts</h3>
                 <ul className="text-xs text-orange-800 space-y-3 font-bold italic leading-relaxed">
                    <li>• Chronic Cervical Spondylosis (Greeva Stambha)</li>
                    <li>• History of Acid Reflux (Amlapitta)</li>
                    <li>• Last Pizhichil treatment: Aug 2025</li>
                 </ul>
              </Card>
           </div>
        </div>
      </div>
    </div>
  )
}
