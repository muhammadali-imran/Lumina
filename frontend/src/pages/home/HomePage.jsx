import { products } from '@/data/products'
import HeroSection from './components/HeroSection'
import BrandPromise from './components/BrandPromise'
import RitualTimeline from './components/RitualTimeline'
import BestSellers from './components/BestSellers'
import Testimonials from './components/Testimonials'
import IngredientsSpotlight from './components/IngredientsSpotlight'
import CTASection from './components/CTASection'

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