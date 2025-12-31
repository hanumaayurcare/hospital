import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Settings, Shield, Bell, User, Globe, ChevronRight, Save, Lock, Mail } from 'lucide-react'

export default function AdminSettingsPage() {
  const sections = [
    { title: 'General Hospital Info', icon: Globe, desc: 'Name, address, contact, and global branding.' },
    { title: 'Security & RBAC', icon: Shield, desc: 'Manage user roles, permissions, and 2FA.' },
    { title: 'Notification System', icon: Bell, desc: 'Configure SMS, Email, and WhatsApp alerts.' },
    { title: 'API & Integrations', icon: Settings, desc: 'Connect Supabase, Video APIs, and external tools.' },
  ]

  return (
    <div className="py-12 bg-muted/20 min-h-screen">
      <div className="container max-w-5xl space-y-12">
        <div className="space-y-4">
           <h1 className="text-4xl font-bold tracking-tight">System Settings</h1>
           <p className="text-lg text-muted-foreground font-medium">Global configuration for the Hanuma Hospital Platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {/* Sidebar */}
           <div className="space-y-6">
              <div className="bg-white p-4 rounded-[2rem] shadow-sm space-y-2">
                 {['Profile', 'Organization', 'Security', 'Billing', 'Integrations'].map((item) => (
                   <Button key={item} variant="ghost" className="w-full justify-start rounded-xl font-bold text-sm h-12 hover:bg-primary/5 hover:text-primary">
                      {item === 'Profile' && <User className="h-4 w-4 mr-3" />}
                      {item === 'Security' && <Lock className="h-4 w-4 mr-3" />}
                      {item}
                   </Button>
                 ))}
              </div>
              
              <Card className="bg-primary text-white border-none shadow-xl rounded-[2rem] overflow-hidden p-8">
                 <h4 className="font-bold text-lg italic mb-2">Need Support?</h4>
                 <p className="text-xs opacity-70 mb-6 leading-relaxed">Dedicated technical assistance for hospital administrators and IT staff.</p>
                 <Button className="w-full bg-white text-primary font-bold rounded-xl hover:bg-white/90">Contact IT Team</Button>
              </Card>
           </div>

           {/* Content */}
           <div className="md:col-span-2 space-y-8">
              {sections.map((sec) => (
                <Card key={sec.title} className="border-none shadow-xl rounded-[2.5rem] bg-white group hover:bg-muted/5 transition-colors cursor-pointer overflow-hidden">
                   <CardContent className="p-8 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                         <div className="h-14 w-14 rounded-[1.2rem] bg-muted/50 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                            <sec.icon className="h-7 w-7" />
                         </div>
                         <div className="space-y-1">
                            <h3 className="text-xl font-bold italic group-hover:text-primary transition-colors">{sec.title}</h3>
                            <p className="text-xs font-bold text-muted-foreground">{sec.desc}</p>
                         </div>
                      </div>
                      <ChevronRight className="h-6 w-6 text-muted-foreground" />
                   </CardContent>
                </Card>
              ))}

              <div className="pt-12 flex justify-end gap-4">
                 <Button variant="ghost" className="rounded-xl font-bold px-8">Discard Changes</Button>
                 <Button className="rounded-xl font-bold px-12 h-14 shadow-lg shadow-primary/20 flex gap-2"><Save className="h-5 w-5" /> Save Configuration</Button>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
