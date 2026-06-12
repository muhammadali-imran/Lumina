

import CartItem from './CartItem'

export default function CartItems({ items }) {
  if (!items || items.length === 0) {
    return <p className="text-muted-foreground text-center py-12">No items in your cart.</p>
  }

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  )
}