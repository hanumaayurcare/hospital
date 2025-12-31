import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, Printer, Share2, Download, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default async function PrescriptionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container max-w-4xl space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/prescriptions" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            <ChevronLeft className="h-5 w-5" /> Back to Records
          </Link>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="rounded-xl font-bold"><Printer className="h-4 w-4 mr-2" /> Print</Button>
            <Button variant="outline" size="sm" className="rounded-xl font-bold"><Download className="h-4 w-4 mr-2" /> Download PDF</Button>
          </div>
        </div>

        {/* Digital Prescription Card */}
        <Card className="border-none shadow-2xl rounded-[2rem] overflow-hidden bg-white">
          <CardHeader className="bg-primary text-white p-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="text-secondary-foreground font-bold tracking-[0.2em] uppercase text-sm">Official Medical Record</div>
              <CardTitle className="text-5xl font-bold">Hanuma <span className="opacity-60">Ayurcare</span></CardTitle>
              <div className="space-y-1 opacity-80 text-sm font-medium">
                <p>NABH Accredited Ayurvedic Hospital</p>
                <p>123 Healing Path, Wellness Nagar, Kochi, Kerala</p>
              </div>
            </div>
            <div className="text-right space-y-2">
              <div className="text-2xl font-bold italic">{id}</div>
              <p className="text-sm opacity-80 font-bold">Date: Dec 15, 2025</p>
            </div>
          </CardHeader>

          <CardContent className="p-12 space-y-12">
            {/* Patient & Doctor Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b pb-12">
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Patient Details</h4>
                <div className="space-y-1">
                  <p className="text-xl font-bold">Arjun Sharma</p>
                  <p className="text-muted-foreground">ID: PA-9921 • Age: 34 • Gender: Male</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Consulting Physician</h4>
                <div className="space-y-1">
                  <p className="text-xl font-bold text-primary">Dr. Hanumaan Singh</p>
                  <p className="text-muted-foreground">BAMS, MD (Ayurveda) • Senior Physician</p>
                </div>
              </div>
            </div>

            {/* Diagnosis */}
            <div className="space-y-4 bg-muted/30 p-8 rounded-3xl">
              <h4 className="text-lg font-bold flex items-center gap-2"><AlertCircle className="h-5 w-5 text-primary" /> Clinical Impression & Diagnosis</h4>
              <p className="text-xl italic line-relaxed">&quot;Cervical Spondylosis with Vata-Kapha imbalance. Noted stiffness in the cervical region with radiating pain to the right arm.&quot;</p>
            </div>

            {/* Medicines Table */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold border-b pb-4">Prescribed Medicines</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead className="text-xs font-bold text-muted-foreground uppercase border-b">
                    <tr>
                      <th className="py-4">Medicine Name</th>
                      <th className="py-4 text-center">Dosage</th>
                      <th className="py-4 text-center">Timing</th>
                      <th className="py-4 text-right">Duration</th>
                    </tr>
                   </thead>
                   <tbody className="divide-y">
                    {[
                      { name: 'Dhanwantharam Kashayam', volume: '15ml', timing: 'Before Food', duration: '30 Days' },
                      { name: 'Ksheerabala 101 Capsules', volume: '1 Cap', timing: 'After Food (BM)', duration: '15 Days' },
                      { name: 'Sahacharadi Tailam (Ext.)', volume: 'Apply locally', timing: 'Morning', duration: 'Local App' },
                    ].map((m, i) => (
                      <tr key={i} className="text-lg">
                        <td className="py-6 font-bold">{m.name}</td>
                        <td className="py-6 text-center text-muted-foreground">{m.volume}</td>
                        <td className="py-6 text-center italic">{m.timing}</td>
                        <td className="py-6 text-right font-medium">{m.duration}</td>
                      </tr>
                    ))}
                   </tbody>
                </table>
              </div>
            </div>

            {/* General Advice */}
            <div className="space-y-4">
               <h4 className="text-xl font-bold border-b pb-4">Lifestyle & Dietary Advice</h4>
               <ul className="space-y-2 text-muted-foreground text-lg">
                 <li>• Avoid cold and heavy foods (Sheetala & Guru Ahara).</li>
                 <li>• Daily application of warm Sahacharadi Tailam to the neck area.</li>
                 <li>• Gentle neck exercises as demonstrated in the clinic.</li>
                 <li>• Maintain proper posture while using electronic devices.</li>
               </ul>
            </div>
          </CardContent>

          <div className="bg-muted/30 p-12 text-center">
            <p className="text-sm text-muted-foreground italic">&quot;This is a computer-generated digital prescription and does not require a physical signature.&quot;</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
