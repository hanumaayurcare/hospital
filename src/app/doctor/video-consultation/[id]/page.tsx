import { Button } from '@/components/ui/button'
import { Card, CardContent,CardHeader } from '@/components/ui/card'
import { Video, Mic,  PhoneOff, Settings, Users, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function MeetingRoomPage() {
  return (
    <div className="h-screen bg-zinc-900 text-white flex flex-col overflow-hidden">
      {/* Top Header */}
      <header className="p-6 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center font-bold">H</div>
          <div>
            <h1 className="text-lg font-bold">Video Consultation</h1>
            <p className="text-xs text-zinc-400">Dr. Hanumaan Singh & Arjun Sharma</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 text-red-400 text-xs font-bold animate-pulse">
            <div className="h-2 w-2 rounded-full bg-red-500" />
            REC 12:45
          </div>
          <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10"><Settings className="h-5 w-5" /></Button>
        </div>
      </header>

      {/* Main Grid */}
      <main className="flex-grow p-6 grid grid-cols-1 lg:grid-cols-4 gap-6 overflow-hidden">
        {/* Main Video Area */}
        <div className="lg:col-span-3 relative h-full rounded-[2rem] overflow-hidden bg-zinc-800 shadow-2xl">
           {/* Doctor View Placeholder */}
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="h-32 w-32 rounded-full border-4 border-primary border-t-transparent animate-spin" />
             <p className="absolute mt-48 text-zinc-400 font-medium">Waiting for Dr. Hanumaan Singh...</p>
           </div>
           
           {/* Self View (Small Overlay) */}
           <div className="absolute bottom-6 right-6 w-64 aspect-video rounded-2xl overflow-hidden bg-zinc-700 border-2 border-white/20 shadow-2xl">
             <div className="h-full w-full bg-zinc-900 flex items-center justify-center">
               <span className="text-4xl font-bold opacity-20">YOU</span>
             </div>
             <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/50 text-[10px] font-bold">Arjun (You)</div>
           </div>

           {/* Name Overlay */}
           <div className="absolute bottom-6 left-6 px-4 py-2 rounded-xl bg-black/40 backdrop-blur-md text-sm font-bold border border-white/10">
             Dr. Hanumaan Singh
           </div>
        </div>

        {/* Sidebar (Chat/Info) */}
        <Card className="hidden lg:flex flex-col border-none bg-zinc-800 shadow-xl rounded-[2rem] overflow-hidden">
          <CardHeader className="p-6 border-b border-white/5 bg-zinc-800/50">
             <div className="flex gap-4">
               <Button variant="ghost" className="flex-grow rounded-xl bg-white/5 border border-white/10 font-bold">Chat</Button>
               <Button variant="ghost" className="flex-grow rounded-xl font-bold">Notes</Button>
             </div>
          </CardHeader>
          <CardContent className="flex-grow p-6 flex items-center justify-center text-zinc-500 italic text-sm text-center">
             No messages yet. Chat is available during the session.
          </CardContent>
          <div className="p-6 bg-zinc-900/50 space-y-4">
             <div className="flex items-center gap-3">
               <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs font-bold">H</div>
               <div className="text-xs">
                 <p className="font-bold">Hanuma Assistant</p>
                 <p className="text-zinc-400">Please keep your prescriptions ready.</p>
               </div>
             </div>
          </div>
        </Card>
      </main>

      {/* Control Bar */}
      <footer className="p-8 flex items-center justify-center gap-6">
        <Button variant="outline" size="icon" className="h-14 w-14 rounded-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:text-white">
          <Mic className="h-6 w-6" />
        </Button>
        <Button variant="outline" size="icon" className="h-14 w-14 rounded-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:text-white">
          <Video className="h-6 w-6" />
        </Button>
        <Link href="/dashboard">
          <Button size="icon" className="h-16 w-16 rounded-[2rem] bg-red-500 hover:bg-red-600 shadow-xl shadow-red-500/20">
            <PhoneOff className="h-8 w-8 text-white" />
          </Button>
        </Link>
        <Button variant="outline" size="icon" className="h-14 w-14 rounded-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:text-white">
          <Users className="h-6 w-6" />
        </Button>
        <Button variant="outline" size="icon" className="h-14 w-14 rounded-full bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:text-white">
          <MessageSquare className="h-6 w-6" />
        </Button>
      </footer>
    </div>
  )
}
