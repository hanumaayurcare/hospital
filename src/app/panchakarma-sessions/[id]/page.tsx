import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, Sparkles, Activity, FileText, UserCheck, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default async function PanchakarmaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container max-w-5xl space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/panchakarma-sessions" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            <ChevronLeft className="h-5 w-5" /> Back to My Therapies
          </Link>
          <Button variant="outline" className="rounded-full font-bold"><FileText className="h-4 w-4 mr-2" /> Download Log</Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Tracker */}
          <div className="lg:col-span-2 space-y-8">
             <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-white">
                <CardHeader className="bg-primary text-white p-10">
                   <div className="flex justify-between items-start">
                      <div className="space-y-4">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Ongoing Treatment Program</span>
                        <CardTitle className="text-4xl font-bold">Abhyangam & Pizhichil</CardTitle>
                      </div>
                      <div className="h-16 w-16 rounded-2xl bg-white/20 flex items-center justify-center">
                         <Sparkles className="h-8 w-8" />
                      </div>
                   </div>
                </CardHeader>
                <CardContent className="p-10 space-y-12">
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="space-y-1 border-l-4 border-primary pl-4">
                         <p className="text-xs font-bold text-muted-foreground uppercase">Day</p>
                         <p className="text-2xl font-bold text-primary">06 / 14</p>
                      </div>
                      <div className="space-y-1 border-l-4 border-primary pl-4">
                         <p className="text-xs font-bold text-muted-foreground uppercase">Status</p>
                         <p className="text-2xl font-bold text-primary italic">Active</p>
                      </div>
                      <div className="space-y-1 border-l-4 border-primary pl-4">
                         <p className="text-xs font-bold text-muted-foreground uppercase">Next Session</p>
                         <p className="text-2xl font-bold text-primary">08:30 AM</p>
                      </div>
                   </div>

                   <div className="space-y-6">
                      <h3 className="text-xl font-bold flex items-center gap-2"><Activity className="h-5 w-5 text-primary" /> Daily Progress Log</h3>
                      <div className="space-y-4">
                         {[
                           { day: 6, note: 'Sweating improved. Patient reports reduced stiffness in lower back.', color: 'border-primary bg-primary/5' },
                           { day: 5, note: 'Second day of oil pouring. Sleep quality improved significantly.', color: 'border-muted bg-muted/20' },
                           { day: 4, note: 'Initial detoxification response noted. Mild fatigue present.', color: 'border-muted bg-muted/20' },
                         ].map((log) => (
                           <div key={log.day} className={`p-6 rounded-2xl border-l-8 ${log.color} shadow-sm`}>
                              <div className="flex justify-between items-center mb-2">
                                 <h4 className="font-bold text-sm">Day {log.day} Session</h4>
                                 <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest italic">Jan 01, 2026</span>
                              </div>
                              <p className="text-muted-foreground text-sm font-medium line-relaxed italic">&quot;{log.note}&quot;</p>
                           </div>
                         ))}
                      </div>
                   </div>
                </CardContent>
             </Card>
          </div>

          {/* Therapy Sidebar */}
          <div className="space-y-8">
             <Card className="border-none shadow-xl p-8 rounded-[2.5rem] bg-accent text-white space-y-8">
                <div className="space-y-4">
                   <h3 className="text-xl font-bold">Support Team</h3>
                   <div className="space-y-4">
                      <div className="flex items-center gap-4">
                         <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold">H</div>
                         <div>
                            <p className="text-sm font-bold leading-tight">Dr. Hanumaan Singh</p>
                            <p className="text-xs opacity-80 uppercase tracking-widest font-bold">Supervising Doctor</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-4">
                         <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center font-bold">R</div>
                         <div>
                            <p className="text-sm font-bold leading-tight">Nurse Ravi</p>
                            <p className="text-xs opacity-80 uppercase tracking-widest font-bold">Primary Therapist</p>
                         </div>
                      </div>
                   </div>
                </div>
                
                <div className="pt-8 border-t border-white/20 space-y-4">
                   <h3 className="text-xl font-bold">Precautions</h3>
                   <ul className="text-sm opacity-80 space-y-3 font-medium italic leading-relaxed">
                      <li>• Avoid direct exposure to cold air or rain.</li>
                      <li>• Strictly follow the liquid diet prescribed.</li>
                      <li>• Do not skip the internal medicated ghee if assigned.</li>
                   </ul>
                </div>
                
                <Button variant="secondary" className="w-full h-14 rounded-2xl font-bold uppercase tracking-widest text-xs">Help / Support</Button>
             </Card>

             <Card className="border-none shadow-sm p-8 rounded-[2.5rem] bg-white space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2"><AlertCircle className="h-5 w-5 text-orange-500" /> Payment Info</h3>
                <div className="space-y-2">
                   <div className="flex justify-between font-medium">
                      <span className="text-muted-foreground">Total Package</span>
                      <span className="font-bold">₹24,500</span>
                   </div>
                   <div className="flex justify-between font-medium">
                      <span className="text-muted-foreground">Paid (Advance)</span>
                      <span className="font-bold text-green-600">₹10,000</span>
                   </div>
                   <div className="pt-4 border-t flex justify-between items-center">
                      <span className="text-sm font-bold uppercase tracking-widest">Due</span>
                      <span className="text-2xl font-bold text-primary">₹14,500</span>
                   </div>
                </div>
                <Button className="w-full h-12 rounded-xl font-bold">Make Payment</Button>
             </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
