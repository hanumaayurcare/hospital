import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Download, Eye, Calendar, User } from 'lucide-react'
import Link from 'next/link'

const prescriptions = [
  {
    id: 'RX-2025-001',
    doctor: 'Dr. Hanumaan Singh',
    date: 'Dec 15, 2025',
    diagnosis: 'Cervical Spondylosis',
    status: 'Active',
  },
  {
    id: 'RX-2025-002',
    doctor: 'Dr. Amrita Devi',
    date: 'Dec 05, 2025',
    diagnosis: 'Digestive Weakness (Agni Mandya)',
    status: 'Completed',
  },
  {
    id: 'RX-2025-003',
    doctor: 'Dr. Rahul Varma',
    date: 'Nov 20, 2025',
    diagnosis: 'Stress & Anxiety',
    status: 'Completed',
  },
]

export default function PrescriptionsPage() {
  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container space-y-8">
        <div className="max-w-3xl space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Medical Records</h1>
          <p className="text-lg text-muted-foreground">Access your digital prescriptions and treatment history.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {prescriptions.map((px) => (
            <Card key={px.id} className="border-none shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x">
                  <div className="p-6 md:w-1/4 bg-muted/30 flex flex-col justify-center">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{px.id}</span>
                    <h3 className="text-xl font-bold">{px.date}</h3>
                    <span className={`inline-flex items-center mt-2 px-2.5 py-0.5 rounded-full text-xs font-bold ${px.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-muted text-muted-foreground'}`}>
                      {px.status}
                    </span>
                  </div>
                  <div className="p-6 flex-grow space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground font-bold uppercase">Prescribing Doctor</p>
                        <div className="flex items-center gap-2 font-bold">
                          <User className="h-4 w-4 text-primary" />
                          {px.doctor}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground font-bold uppercase">Clinical Diagnosis</p>
                        <div className="flex items-center gap-2 font-bold">
                          <FileText className="h-4 w-4 text-primary" />
                          {px.diagnosis}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:w-1/4 flex items-center justify-center gap-3">
                    <Link href={`/prescriptions/${px.id}`} className="flex-grow">
                      <Button variant="outline" className="w-full rounded-xl font-bold flex gap-2">
                        <Eye className="h-4 w-4" /> View
                      </Button>
                    </Link>
                    <Button variant="secondary" size="icon" className="rounded-xl shrink-0">
                      <Download className="h-4 w-4" />
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
