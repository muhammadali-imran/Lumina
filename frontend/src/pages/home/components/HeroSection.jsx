'use client'

import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function HeroSection() {
  const heroRef = useRef(null)

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelector('h1'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2 }
      )
      gsap.fromTo(
        heroRef.current.querySelector('p'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4 }
      )
      gsap.fromTo(
        heroRef.current.querySelector('.cta-button'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6 }
      )
    }

  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="/products/hero-luxury.png"
              alt="Luxury skincare"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 text-center text-white px-6 max-w-3xl">
            <h1 className="text-heading text-6xl md:text-7xl font-bold mb-6 text-balance">
              Radiance Begins Here
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
              Luxury skincare engineered for luminous, timeless beauty. Discover the power of science meets elegance.
            </p>
            <Link
              to="/shop"
              className="cta-button inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold rounded text-lg hover:opacity-90 transition"
            >
              Explore Collection
            </Link>
          </div>
        </section>
  )
}
