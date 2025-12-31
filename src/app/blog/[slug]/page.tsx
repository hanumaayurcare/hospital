import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, ChevronLeft, ArrowRight, Bookmark } from 'lucide-react'
import Link from 'next/link'

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blogTitle = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <div className="flex flex-col bg-white">
      {/* Header / Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end">
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80')] bg-cover bg-center" />
         
         <div className="container relative z-20 pb-20 space-y-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
               <ChevronLeft className="h-4 w-4" /> Back to Blog
            </Link>
            <div className="space-y-4 max-w-4xl">
               <h1 className="text-5xl md:text-7xl font-bold text-white italic leading-tight">{blogTitle}</h1>
               <div className="flex flex-wrap gap-6 items-center text-white/80 text-sm font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-2"><User className="h-4 w-4" /> By Dr. Hanumaan Singh</span>
                  <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> Jan 02, 2026</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 8 Min Read</span>
               </div>
            </div>
         </div>
      </section>

      {/* Article Content */}
      <section className="py-24">
         <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Social Floating Sidebar */}
            <div className="lg:col-span-1 hidden lg:block">
               <div className="sticky top-32 space-y-6 flex flex-col items-center">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest vertical-text">Share</span>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-600"><Facebook className="h-5 w-5" /></Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-400"><Twitter className="h-5 w-5" /></Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-700"><Linkedin className="h-5 w-5" /></Button>
                  <div className="h-12 w-[1px] bg-muted" />
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary"><Bookmark className="h-5 w-5" /></Button>
               </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
               <div className="prose prose-stone lg:prose-xl max-w-none text-zinc-600 font-medium italic leading-relaxed">
                  <p className="lead text-2xl text-zinc-900 not-italic font-bold">Ayurveda is not just a treatment; it is a way of life that harmonizes the mind, body, and soul.</p>
                  <p>In this detailed exploration, we delve into the ancient wisdom of {blogTitle.toLowerCase()} and how it remains relevant in our modern, fast-paced world.</p>
                  
                  <h3 className="not-italic text-zinc-900 border-l-4 border-primary pl-6">The Essence of Ancient Healing</h3>
                  <p>The journey towards total wellness begins with understanding your unique Prakriti (constitution). Every individual is a unique combination of the three Doshas—Vata, Pitta, and Kapha.</p>
                  
                  <blockquote className="border-primary/20 bg-primary/5 p-12 rounded-[2.5rem] italic text-primary font-bold">
                     "Health is a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity."
                  </blockquote>

                  <p>As we move forward, we will look at practical tips, dietary adjustments, and mindfulness practices that can be integrated into your daily routine to enhance your vitality and longevity.</p>
               </div>

               {/* Tags */}
               <div className="flex flex-wrap gap-3 pt-12 border-t">
                  {['Ayurveda', 'Wellness', 'Detox', 'Healing', 'Lifestyle'].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-muted/50 rounded-full text-xs font-bold text-muted-foreground uppercase tracking-widest hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">#{tag}</span>
                  ))}
               </div>
            </div>

            {/* Sidebar Widgets */}
            <div className="lg:col-span-3 space-y-12">
               <Card className="border-none shadow-xl rounded-[2.5rem] bg-muted/30 overflow-hidden">
                  <CardContent className="p-10 space-y-6">
                     <h4 className="text-xl font-bold italic">Newsletter</h4>
                     <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest leading-relaxed">Receive Ayurvedic wisdom directly in your inbox.</p>
                     <input className="w-full h-12 rounded-xl bg-white border-none px-4 text-xs font-bold outline-none" placeholder="Enter email address" />
                     <Button className="w-full h-12 rounded-xl font-bold shadow-lg shadow-primary/20">Subscribe</Button>
                  </CardContent>
               </Card>

               <div className="space-y-6">
                  <h4 className="text-xl font-bold italic px-2">Related Articles</h4>
                  <div className="space-y-4">
                     {[1, 2, 3].map(i => (
                       <div key={i} className="group cursor-pointer">
                          <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Health Tips</p>
                          <h5 className="font-bold italic group-hover:text-primary transition-colors mt-1">Transformative Power of Daily Yoga</h5>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}
