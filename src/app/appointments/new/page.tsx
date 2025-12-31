import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Video, MapPin, Sparkles, Stethoscope, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function NewAppointmentPage() {
  return (
    <div className="py-24 bg-muted/30 min-h-screen">
      <div className="container max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Book an Appointment</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose your preferred consultation method to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Video Consultation */}
          <Card className="group hover:border-primary transition-all duration-300 border-2 border-transparent shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-primary/5 p-10 text-center">
              <div className="h-20 w-20 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                <Video className="h-10 w-10" />
              </div>
              <CardTitle className="text-3xl font-bold">Video Consultation</CardTitle>
              <CardDescription className="text-lg mt-2">
                Consult with our senior doctors from the comfort of your home.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-10 space-y-8">
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Secure Google Meet integration
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Digital prescription via email
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  Ideal for follow-ups and initial advice
                </li>
              </ul>
              <Link href="/appointments/booking?type=video" className="block">
                <Button size="lg" className="w-full h-16 rounded-2xl font-bold text-xl">
                  Book Video Call <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* In-Person Visit */}
          <Card className="group hover:border-accent transition-all duration-300 border-2 border-transparent shadow-xl rounded-3xl overflow-hidden">
            <CardHeader className="bg-accent/5 p-10 text-center">
              <div className="h-20 w-20 rounded-2xl bg-accent text-white flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform">
                <MapPin className="h-10 w-10" />
              </div>
              <CardTitle className="text-3xl font-bold">In-Person Visit</CardTitle>
              <CardDescription className="text-lg mt-2">
                Traditional clinical consultation at one of our specialized branches.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-10 space-y-8">
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  Physical examination and Nadi Pariksha
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  Immediate therapist consultation
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  Ideal for chronic conditions and Panchakarma
                </li>
              </ul>
              <Link href="/appointments/booking?type=opd" className="block">
                <Button size="lg" variant="secondary" className="w-full h-16 rounded-2xl font-bold text-xl">
                  Book Clinic Visit <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
           <Link href="/services/panchakarma" className="inline-flex items-center gap-4 p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all">
             <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
               <Sparkles className="h-6 w-6" />
             </div>
             <div className="text-left">
               <p className="font-bold text-lg">Looking for Panchakarma Detox?</p>
               <p className="text-sm text-muted-foreground">In-patient programs require a detailed initial consultation.</p>
             </div>
             <ArrowRight className="ml-4 h-5 w-5 text-muted-foreground" />
           </Link>
        </div>
      </div>
    </div>
  )
}
