import { HeroSection } from '@/components/home/HeroSection'
import { Highlights } from '@/components/home/Highlights'
import { Specialities } from '@/components/home/Specialities'
import { FeaturedDoctors } from '@/components/home/FeaturedDoctors'
import { Testimonials } from '@/components/home/Testimonials'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <Highlights />
      <Specialities />
      <FeaturedDoctors />
      <Testimonials />
    </div>
  );
}
