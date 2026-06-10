'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const rituals = [
  {
    step: '01',
    title: 'Cleanse',
    description:
      'Prepare your skin with a gentle cleanse to remove impurities and prepare for treatment.',
  },
  {
    step: '02',
    title: 'Treat',
    description:
      'Apply serums and essences to target specific concerns with concentrated ingredients.',
  },
  {
    step: '03',
    title: 'Nourish',
    description:
      'Lock in moisture and nourishment with our luxurious creams and oils.',
  },
]

export default function RitualTimeline() {
  const timelineRef = useRef(null)

  useEffect(() => {
    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item')
      timelineItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }
  }, [])

  return (
    <section ref={timelineRef} className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-heading text-5xl font-bold text-center mb-16">Your Daily Ritual</h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary" />
          <div className="space-y-12 md:space-y-16">
            {rituals.map((ritual, index) => (
              <div
                key={index}
                className={`timeline-item flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                  }`}
                >
                  <div className="text-primary text-heading text-4xl font-bold mb-2">
                    {ritual.step}
                  </div>
                  <h3 className="text-heading text-2xl font-bold mb-4">{ritual.title}</h3>
                  <p className="text-lg text-muted-foreground">{ritual.description}</p>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full ring-8 ring-background" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}