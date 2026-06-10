const promises = [
  {
    title: 'Pure Science',
    description:
      'Formulated with the latest dermatological research and premium ingredients.',
  },
  {
    title: 'Luxury Crafted',
    description:
      'Each product is a masterpiece, combining efficacy with an indulgent sensory experience.',
  },
  {
    title: 'Visible Results',
    description:
      'Experience transformation in skin texture, radiance, and resilience within weeks.',
  },
]

export default function BrandPromise() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-heading text-5xl font-bold text-center mb-16">Why Lumina</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {promises.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-heading text-2xl font-bold mb-4 text-primary">{item.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}