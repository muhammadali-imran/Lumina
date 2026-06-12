

const values = [
  {
    title: 'Transparency',
    icon: '💎',
    description:
      'Full ingredient disclosure, honest results, and genuine customer testimonials.',
  },
  {
    title: 'Innovation',
    icon: '🧪',
    description:
      'Continuous research and development to stay at the forefront of skincare science.',
  },
  {
    title: 'Quality',
    icon: '✨',
    description:
      'Premium ingredients, meticulous formulation, and rigorous quality testing.',
  },
  {
    title: 'Inclusivity',
    icon: '🌍',
    description:
      'Products designed for all skin types and tones. Beauty is universal.',
  },
]

export default function Values() {
  return (
    <section className="mb-20">
      <h2 className="text-heading text-4xl font-bold text-center mb-12">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, i) => (
          <div key={i} className="p-8 bg-background rounded-lg border border-border">
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="text-heading text-xl font-bold mb-3">{value.title}</h3>
            <p className="text-muted-foreground">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}