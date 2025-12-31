import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar as CalendarIcon, Clock, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function BookingPage() {
  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container max-w-6xl">
        <div className="mb-12">
          <Link href="/appointments/new" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            <ChevronLeft className="h-5 w-5" /> Change Consultation Type
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Selection & Calendar */}
          <div className="lg:col-span-2 space-y-12">
            <section className="space-y-6">
              <h2 className="text-3xl font-bold">1. Select Specialist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: 'Dr. Hanumaan Singh', role: 'Senior Physician', image: '/doctor-1.png' },
                  { name: 'Dr. Amrita Devi', role: 'Specialist Gyno', image: '/doctor-2.png' },
                ].map((doctor) => (
                  <Card key={doctor.name} className="border-2 hover:border-primary cursor-pointer transition-all group overflow-hidden">
                    <CardContent className="p-6 flex items-center gap-6">
                      <div className="h-20 w-20 rounded-full overflow-hidden shrink-0">
                        <Image src={doctor.image} alt={doctor.name} width={80} height={80} className="object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{doctor.name}</h4>
                        <p className="text-muted-foreground">{doctor.role}</p>
                      </div>
                      <div className="h-6 w-6 rounded-full border-2 border-primary/20 flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-3xl font-bold">2. Select Date & Time</h2>
              <Card className="p-8 border-none shadow-sm rounded-3xl">
                <div className="flex flex-col md:flex-row gap-12">
                  {/* Mock Calendar */}
                  <div className="flex-grow space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold">January 2026</h4>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon"><ChevronLeft className="h-5 w-5" /></Button>
                        <Button variant="ghost" size="icon"><ChevronRight className="h-5 w-5" /></Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-muted-foreground mb-4">
                      <span>MO</span><span>TU</span><span>WE</span><span>TH</span><span>FR</span><span>SA</span><span>SU</span>
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {[...Array(31)].map((_, i) => (
                        <Button key={i} variant="ghost" className={`h-12 w-full rounded-xl ${i === 4 ? 'bg-primary text-white hover:bg-primary' : ''}`}>
                          {i + 1}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Slots */}
                  <div className="w-full md:w-64 space-y-6">
                    <h4 className="text-lg font-bold">Available Slots</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM', '03:00 PM', '04:00 PM'].map((slot) => (
                        <Button key={slot} variant="outline" className={`rounded-xl h-12 font-bold ${slot === '10:30 AM' ? 'border-primary text-primary' : ''}`}>
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </section>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <h2 className="text-3xl font-bold">3. Booking Summary</h2>
              <Card className="border-none shadow-xl bg-white rounded-3xl overflow-hidden">
                <div className="bg-primary p-8 text-white">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center font-bold text-2xl">
                      H
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">Dr. Hanumaan Singh</h4>
                      <p className="text-primary-foreground/80">Senior Physician</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-muted-foreground">
                      <div className="flex items-center gap-2"><CalendarIcon className="h-4 w-4" /> Date</div>
                      <span className="text-foreground font-bold italic">January 05, 2026</span>
                    </div>
                    <div className="flex justify-between items-center text-muted-foreground">
                      <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Time</div>
                      <span className="text-foreground font-bold italic">10:30 AM</span>
                    </div>
                    <div className="flex justify-between items-center text-muted-foreground">
                      <div className="flex items-center gap-2"><User className="h-4 w-4" /> Consultant</div>
                      <span className="text-foreground font-bold italic">Video Call</span>
                    </div>
                  </div>

                  <div className="pt-8 border-t space-y-4">
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span>Total Amount</span>
                      <span className="text-primary">₹500.00</span>
                    </div>
                    <p className="text-xs text-muted-foreground text-center">Includes GST and platform convenience fee.</p>
                  </div>

                  <Button size="lg" className="w-full h-16 rounded-2xl font-bold text-xl shadow-lg shadow-primary/20">
                    Confirm & Pay
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
