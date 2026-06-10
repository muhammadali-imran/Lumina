'use client'

import { products } from '@/lib/products'
import HeroSection from '@/pages/home/components/HeroSection'
import BrandPromise from '@/pages/home/components/BrandPromise'
import RitualTimeline from '@/pages/home/components/RitualTimeline'
import BestSellers from '@/pages/home/components/BestSellers'
import Testimonials from '@/pages/home/components/Testimonials'
import IngredientsSpotlight from '@/pages/home/components/IngredientsSpotlight'
import CTASection from '@/pages/home/components/CTASection'

export default function HomePage() {
  const bestsellers = products.slice(0, 3)

  return (
    <main className="pt-20">
        <HeroSection />
        <BrandPromise />
        <RitualTimeline />
        <BestSellers products={bestsellers} />
        <Testimonials />
        <IngredientsSpotlight />
        <CTASection />
      </main>
  )
}