

const milestones = [
  {
    year: '2019',
    title: 'The Idea',
    description:
      'Our founder begins research into luxury skincare formulations, combining science with elegance.',
  },
  {
    year: '2020',
    title: 'Development',
    description:
      'Two years of R&D with leading dermatologists and chemists to perfect our signature formulas.',
  },
  {
    year: '2022',
    title: 'Launch',
    description:
      'Lumina officially launches with our Core Collection—Gold Radiance, Rose Silk, and Pearl Luminescence.',
  },
  {
    year: '2023',
    title: 'Growth',
    description:
      'Expand to 6 products, reach 50,000+ satisfied customers worldwide, and win multiple beauty awards.',
  },
  {
    year: '2024',
    title: 'Today',
    description:
      'Lumina continues to innovate while maintaining our commitment to luxury, science, and sustainability.',
  },
]

export default function Timeline() {
  return (
    <section className="mb-20">
      <h2 className="text-heading text-4xl font-bold text-center mb-12">Our Journey</h2>
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line (hidden on mobile) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary" />

        <div className="space-y-12">
          {milestones.map((item, i) => (
            <div
              key={i}
              className={`flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Text block */}
              <div
                className={`flex-1 ${
                  i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'
                }`}
              >
                <div className="text-primary text-heading text-3xl font-bold mb-2">
                  {item.year}
                </div>
                <h3 className="text-heading text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>

              {/* Dot (hidden on mobile) */}
              <div className="hidden md:flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full ring-8 ring-background" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}