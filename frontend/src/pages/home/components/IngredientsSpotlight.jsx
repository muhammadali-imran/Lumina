const ingredients = [
  {
    name: '24k Gold',
    description:
      'Activates cellular renewal and increases radiance. A luxury touch to your routine.',
    color: 'bg-yellow-50 border-primary',
  },
  {
    name: 'Hyaluronic Acid',
    description:
      'Holds 1000x its weight in water. Maximum hydration and plump, dewy skin.',
    color: 'bg-blue-50 border-secondary',
  },
  {
    name: 'Rose Extract',
    description:
      'Antioxidant-rich and soothing. Creates a calming, luxurious sensory experience.',
    color: 'bg-rose-50 border-secondary',
  },
  {
    name: 'Pearl Powder',
    description:
      'Brightens and smooths. The secret to an instant luminous glow.',
    color: 'bg-amber-50 border-primary',
  },
]

export default function IngredientsSpotlight() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-heading text-5xl font-bold text-center mb-16">Ingredient Pearls</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 ${ingredient.color}`}>
              <h3 className="text-heading text-lg font-bold mb-2">{ingredient.name}</h3>
              <p className="text-sm text-muted-foreground">{ingredient.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}