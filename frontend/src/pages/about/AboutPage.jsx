'use client'

import FounderStory from '@/pages/about/components/FounderStory'
import Philosophy from '@/pages/about/components/Philosophy'
import Timeline from '@/pages/about/components/Timeline'
import Values from '@/pages/about/components/Values'
import Team from '@/pages/about/components/Team'

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-6">
          {/* Page Header */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h1 className="text-heading text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Born from a passion for luxury and a commitment to science, Lumina represents the
              intersection of elegance and efficacy in skincare.
            </p>
          </div>

          {/* Sections */}
          <FounderStory />
          <Philosophy />
          <Timeline />
          <Values />
          <Team />
        </div>
      </main>
  )
}