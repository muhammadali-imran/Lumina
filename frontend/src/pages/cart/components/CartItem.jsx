'use client'

export default function CartItem({ item }) {
  return (
    <div className="flex gap-4 items-center border-b border-border pb-6">
      <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-heading font-semibold">{item.name}</h3>
        <p className="text-sm text-muted-foreground">{item.size || item.variant}</p>
        <p className="text-sm font-medium text-primary">${item.price.toFixed(2)}</p>
      </div>
      {/* Quantity and remove can be added here */}
    </div>
  )
}