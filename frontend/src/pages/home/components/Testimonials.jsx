const testimonials = [
  {
    text: "Lumina transformed my skin in just 4 weeks. The Gold Radiance Serum is my holy grail. I've never felt my skin look so radiant.",
    author: 'Sarah M.',
  },
  {
    text: "The Rose Silk Cream is absolute luxury. It's like giving my skin a spa treatment every night. Worth every penny.",
    author: 'Jessica K.',
  },
  {
    text: 'Finally found a skincare brand that delivers on its promises. Science-backed, beautifully packaged, and truly effective.',
    author: 'Amanda R.',
  },
  {
    text: 'The Pearl Mask is my weekly ritual now. My skin has never been smoother and more luminous. Highly recommend!',
    author: 'Rachel T.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-heading text-5xl font-bold text-center mb-16">Loved by Thousands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-background p-8 rounded-lg border border-border">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-lg text-muted-foreground mb-4 italic">"{item.text}"</p>
              <p className="font-semibold text-foreground">{item.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}