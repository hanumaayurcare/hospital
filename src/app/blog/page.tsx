import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const posts = [
  {
    title: 'The Science of Panchakarma: How it Works',
    excerpt: 'Detailed insights into the five-fold purification process and its impact on modern lifestyle diseases.',
    author: 'Dr. Hanumaan Singh',
    date: 'Dec 28, 2025',
    slug: 'science-of-panchakarma',
    category: 'Ayurveda Science',
    image: '/hospital_hero_image.png',
  },
  {
    title: 'Ayurvedic Diet for Better Digestive Health',
    excerpt: 'Simple yet powerful dietary modifications according to your Dosha type to improve Agni.',
    author: 'Dr. Amrita Devi',
    date: 'Dec 20, 2025',
    slug: 'ayurvedic-diet-digestion',
    category: 'Lifestyle',
    image: '/doctor-1.png',
  },
  {
    title: 'Managing Stress through Shirodhara',
    excerpt: 'Understanding the therapeutic benefits of Shirodhara and its role in nervous system relaxation.',
    author: 'Dr. Rahul Varma',
    date: 'Dec 15, 2025',
    slug: 'managing-stress-shirodhara',
    category: 'Therapeutic',
    image: '/doctor-2.png',
  },
]

export default function BlogPage() {
  return (
    <div className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight">Ayurvedic Knowledge Hub</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Educational articles and lifestyle tips from our expert physicians to help you stay healthy naturally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <Card key={post.slug} className="group border-none shadow-none hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
              <div className="relative h-64 w-full rounded-3xl overflow-hidden mb-6">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-grow">
                <CardDescription className="text-base line-clamp-3 mb-6">
                  {post.excerpt}
                </CardDescription>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                  Read Article <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
