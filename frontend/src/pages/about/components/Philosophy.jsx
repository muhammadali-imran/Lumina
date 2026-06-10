'use client'

const philosophies = [
  {
    title: 'Science First',
    description:
      'Every ingredient is backed by dermatological research. We don’t just follow trends—we lead them.',
  },
  {
    title: 'Luxury Experience',
    description:
      'Skincare is a ritual. From packaging to application, every touch point should feel indulgent.',
  },
  {
    title: 'Sustainable Beauty',
    description:
      'Cruelty-free, eco-conscious sourcing. Beauty that makes you feel good inside and out.',
  },
]

export default function Philosophy() {
  return (
    <section className="mb-20 bg-background p-12 rounded-lg border border-border">
      <h2 className="text-heading text-4xl font-bold text-center mb-12">Our Philosophy</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {philosophies.map((item, i) => (
          <div key={i} className="text-center">
            <h3 className="text-heading text-2xl font-bold mb-3 text-primary">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}