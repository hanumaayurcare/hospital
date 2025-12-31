import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight">Get in Touch</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about our treatments or need assistance with booking? 
                Our team is here to help you.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Call Us</h4>
                  <p className="text-muted-foreground font-medium">+91 12345 67890</p>
                  <p className="text-sm text-muted-foreground">Mon - Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Email Us</h4>
                  <p className="text-muted-foreground font-medium">contact@hanumaayurcare.com</p>
                  <p className="text-sm text-muted-foreground">We usually respond within 24 hours.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Headquarters</h4>
                  <p className="text-muted-foreground font-medium">123 Healing Path, Kochi, Kerala</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-none shadow-2xl bg-muted/30 p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Full Name</label>
                  <Input className="h-12 rounded-xl" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Email Address</label>
                  <Input className="h-12 rounded-xl" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Subject</label>
                <Input className="h-12 rounded-xl" placeholder="Query about Panchakarma" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Message</label>
                <Textarea className="min-h-[150px] rounded-xl" placeholder="How can we help you?" />
              </div>
              <Button size="lg" className="w-full rounded-xl font-bold h-14">
                <Send className="mr-2 h-5 w-5" /> Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  )
}
