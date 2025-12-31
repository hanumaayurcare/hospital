import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ShoppingBag, Star, ArrowRight, ShieldCheck, Truck } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const products = [
  { name: 'Dhanwantharam Thailam', price: '₹350', rating: 4.8, image: '/hospital_hero_image.png', category: 'Therapeutic Oil' },
  { name: 'Chyavanaprasham (Premium)', price: '₹650', rating: 4.9, image: '/hospital_hero_image.png', category: 'Wellness' },
  { name: 'Triphala Tablets', price: '₹220', rating: 4.7, image: '/hospital_hero_image.png', category: 'Supplements' },
  { name: 'Brahmi Ghritam', price: '₹480', rating: 4.9, image: '/hospital_hero_image.png', category: 'Memory & Brain' },
]

export default function ShopPage() {
  return (
    <div className="py-24 bg-background">
      <div className="container">
        {/* Shop Hero */}
        <section className="bg-primary rounded-[3rem] p-12 lg:p-24 text-white relative overflow-hidden mb-24">
           <div className="relative z-10 max-w-2xl space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Pure Healing, <br/><span className="text-accent">Delivered.</span></h1>
              <p className="text-xl opacity-90 leading-relaxed font-medium">
                Authentic Ayurvedic medicines and wellness products prepared using traditional 
                methods and clinically tested for purity.
              </p>
              <Button size="lg" variant="secondary" className="rounded-full px-12 h-16 text-xl font-bold italic shadow-2xl">Browse Catalog</Button>
           </div>
           {/* Visual deco */}
           <div className="absolute top-0 right-0 p-24 opacity-10">
              <ShoppingBag className="h-96 w-96 rotate-12" />
           </div>
        </section>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
           {[
             { title: '100% Authentic', desc: 'Crafted following classical Ayurvedic texts.', icon: ShieldCheck },
             { title: 'Clinically Tested', desc: 'Batch tested for heavy metals and purity.', icon: Star },
             { title: 'Fast Delivery', desc: 'Pan-India shipping within 3-5 business days.', icon: Truck },
           ].map((b, i) => (
             <div key={i} className="flex gap-6 items-start">
                <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center text-primary shrink-0">
                   <b.icon className="h-7 w-7" />
                </div>
                <div>
                   <h4 className="text-xl font-bold mb-2">{b.title}</h4>
                   <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
             </div>
           ))}
        </div>

        {/* Product Grid */}
        <div className="flex items-center justify-between mb-12">
           <h2 className="text-4xl font-bold tracking-tight">Featured Products</h2>
           <Link href="#" className="font-bold text-primary flex gap-2 items-center hover:gap-3 transition-all">
              All Products <ArrowRight className="h-5 w-5" />
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {products.map((p, i) => (
             <Card key={i} className="group border-none shadow-none hover:shadow-xl transition-all duration-500 rounded-[2rem] overflow-hidden">
                <div className="relative aspect-square overflow-hidden bg-muted">
                   <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <CardContent className="p-8 space-y-4">
                   <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{p.category}</span>
                      <div className="flex items-center gap-1 text-xs font-bold text-accent">
                         <Star className="h-3 w-3 fill-accent" /> {p.rating}
                      </div>
                   </div>
                   <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{p.name}</h3>
                   <div className="flex items-center justify-between pt-4">
                      <p className="text-2xl font-bold">{p.price}</p>
                      <Button size="icon" className="rounded-xl h-12 w-12"><ShoppingBag className="h-5 w-5" /></Button>
                   </div>
                </CardContent>
             </Card>
           ))}
        </div>
      </div>
    </div>
  )
}
