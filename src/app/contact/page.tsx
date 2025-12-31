import { Card } from '@/components/ui/card'
import { Mail, Phone, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/forms/ContactForm'

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
            <ContactForm />
          </Card>
        </div>
      </div>
    </div>
  )
}
